'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface OrganicNetworkProps {
  className?: string
  style?: React.CSSProperties
}

interface Segment {
  d: string
  width: number
  opacity: number
  len: number
}

interface Node {
  cx: number
  cy: number
  r: number
  opacity: number
}

// deterministic PRNG so server and client render identical markup
function mulberry32(seed: number) {
  let a = seed
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Math.hypot is not required to be correctly-rounded by spec and can differ by
// an ULP between the server's V8 and the browser's — which shows up as a React
// hydration mismatch on stroke-dasharray. Math.sqrt is IEEE-754 exact, and we
// round the result anyway so the emitted attribute is byte-identical.
function dist(x0: number, y0: number, x1: number, y1: number) {
  const dx = x1 - x0
  const dy = y1 - y0
  return Math.sqrt(dx * dx + dy * dy)
}

// quantize any derived length before it reaches the DOM
function q(n: number) {
  return Math.round(n * 100) / 100
}

function branch(
  segments: Segment[],
  leaves: { x: number; y: number }[],
  rand: () => number,
  x: number,
  y: number,
  angle: number,
  length: number,
  width: number,
  opacity: number,
  depth: number,
  maxDepth: number
) {
  const jitter = (rand() - 0.5) * 0.9
  const midAngle = angle + jitter * 0.6
  const midLen = length * (0.42 + rand() * 0.18)
  const mx = x + Math.cos(midAngle) * midLen
  const my = y + Math.sin(midAngle) * midLen
  const endAngle = angle + jitter
  const ex = x + Math.cos(endAngle) * length
  const ey = y + Math.sin(endAngle) * length
  const len = q((dist(x, y, mx, my) + dist(mx, my, ex, ey) + dist(x, y, ex, ey)) / 2)

  segments.push({
    d: `M ${x.toFixed(1)},${y.toFixed(1)} Q ${mx.toFixed(1)},${my.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}`,
    width: q(width * (0.75 + rand() * 0.5)),
    opacity,
    len,
  })

  if (depth >= maxDepth) {
    leaves.push({ x: ex, y: ey })
    return
  }

  const childCount = rand() < 0.15 ? 1 : rand() < 0.65 ? 2 : rand() < 0.9 ? 3 : 4
  for (let i = 0; i < childCount; i++) {
    const spread = (rand() - 0.5) * (Math.PI * 0.9)
    branch(
      segments,
      leaves,
      rand,
      ex,
      ey,
      endAngle + spread,
      length * (0.5 + rand() * 0.22),
      width * 0.62,
      opacity * 0.8,
      depth + 1,
      maxDepth
    )
  }
}

function buildColony(rand: () => number, hubs: { x: number; y: number }[], maxDepth: number) {
  // A freeform Physarum-style colony: veins sprout from several hubs, some
  // long diagonal connectors + whorls, finished with a fuzz of short thin
  // capillaries off the branch tips — the fine reticulated mesh you see in
  // real plasmodium, not just a clean radial fan.
  const segments: Segment[] = []
  const leaves: { x: number; y: number }[] = []
  for (let h = 0; h < hubs.length; h++) {
    const { x, y } = hubs[h]
    const trunks = 4 + Math.floor(rand() * 3)
    for (let i = 0; i < trunks; i++) {
      const angle = rand() * Math.PI * 2
      const length = 55 + rand() * 60
      branch(segments, leaves, rand, x, y, angle, length, 2.6, 0.55, 0, maxDepth)
    }
  }
  // long sweeping connectors between hubs (the "mesh" resolving)
  for (let i = 0; i < hubs.length - 1; i++) {
    for (let j = i + 1; j < hubs.length; j++) {
      if (rand() < 0.55) {
        const a = hubs[i]
        const b = hubs[j]
        const mx = (a.x + b.x) / 2 + (rand() - 0.5) * 90
        const my = (a.y + b.y) / 2 + (rand() - 0.5) * 90
        const len = q((dist(a.x, a.y, mx, my) + dist(mx, my, b.x, b.y) + dist(a.x, a.y, b.x, b.y)) / 2)
        segments.push({
          d: `M ${a.x.toFixed(1)},${a.y.toFixed(1)} Q ${mx.toFixed(1)},${my.toFixed(1)} ${b.x.toFixed(1)},${b.y.toFixed(1)}`,
          width: q(1.6 + rand() * 1.2),
          opacity: q(0.4 + rand() * 0.2),
          len,
        })
      }
    }
  }
  // fine capillary fuzz off the leaf tips — the reticulated capillary bed
  const capillaryLeaves = leaves.slice(0, 220)
  for (const leaf of capillaryLeaves) {
    if (rand() < 0.75) {
      const capCount = 1 + Math.floor(rand() * 2)
      for (let c = 0; c < capCount; c++) {
        const angle = rand() * Math.PI * 2
        const length = 7 + rand() * 20
        branch(segments, leaves, rand, leaf.x, leaf.y, angle, length, 0.8, 0.3, 0, 0)
      }
    }
  }
  return segments
}

function buildBlobs(rand: () => number, pts: { x: number; y: number }[], spread: number, count: number) {
  // organic irregular node blobs gathered around hub centers
  const nodes: Node[] = []
  for (let i = 0; i < count; i++) {
    const h = pts[Math.floor(rand() * pts.length)]
    const dx = (rand() + rand() - 1) * spread
    const dy = (rand() + rand() - 1) * spread
    nodes.push({
      cx: q(h.x + dx),
      cy: q(h.y + dy),
      r: q(2.2 + rand() * 3.4),
      opacity: q(0.35 + rand() * 0.4),
    })
  }
  return nodes
}

function buildSpores(rand: () => number, hx: number, hy: number, count: number, spread: number) {
  const dots: { cx: number; cy: number; r: number; opacity: number }[] = []
  for (let i = 0; i < count; i++) {
    const dx = (rand() + rand() - 1) * spread
    const dy = (rand() + rand() - 1) * spread
    dots.push({
      cx: q(hx + dx),
      cy: q(hy + dy),
      r: q(0.7 + rand() * 1.4),
      opacity: q(0.15 + rand() * 0.25),
    })
  }
  return dots
}

const rand = mulberry32(1337)
const hubs = [
  { x: 140, y: 90 },
  { x: 300, y: 40 },
  { x: 500, y: 250 },
  { x: 700, y: 80 },
  { x: 880, y: 210 },
  { x: 620, y: 400 },
  { x: 380, y: 430 },
  { x: 120, y: 380 },
]
const colony = buildColony(rand, hubs, 4)
const blobs = buildBlobs(rand, hubs, 46, 26)
const sporesA = buildSpores(rand, 260, 160, 30, 180)
const sporesB = buildSpores(rand, 760, 360, 26, 170)
const sporesC = buildSpores(rand, 500, 250, 20, 200)
const allSpores = [...sporesA, ...sporesB, ...sporesC]

/**
 * Generative branching network — a nod to slime mold (Physarum), which
 * self-organizes into near-optimal mesh topologies. A freeform colony of
 * veins sprouting from scattered hubs, resolved by sweeping connectors and
 * a fuzz of fine capillaries, studded with organic node blobs. Deterministic
 * (fixed seed) so SSR and client markup match. Grows in — like the colony
 * spreading — the first time it scrolls into view, then breathes gently,
 * echoing the real organism's rhythmic protoplasmic streaming.
 */
export function OrganicNetwork({ className, style }: OrganicNetworkProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  const grown = inView || reduced

  return (
    <svg
      ref={ref}
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={style}
      aria-hidden
    >
      <g
        fill="none"
        stroke="hsl(var(--accent))"
        strokeLinecap="round"
        className={reduced ? undefined : 'vein-pulse'}
      >
        {colony.map((s, i) => (
          <path
            key={i}
            d={s.d}
            strokeWidth={s.width}
            opacity={s.opacity}
            strokeDasharray={s.len}
            style={{
              strokeDashoffset: grown ? 0 : s.len,
              transition: reduced
                ? undefined
                : `stroke-dashoffset 1.3s cubic-bezier(0.3,0.1,0.2,1) ${((i % 26) * 0.045).toFixed(3)}s`,
            }}
          />
        ))}
      </g>
      <g fill="hsl(var(--accent))" className={reduced ? undefined : 'spore-pulse'}>
        {blobs.map((n, i) => (
          <circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            opacity={grown ? n.opacity : 0}
            style={{ transition: reduced ? undefined : `opacity 0.6s ease ${(0.6 + (i % 20) * 0.03).toFixed(3)}s` }}
          />
        ))}
        {allSpores.map((d, i) => (
          <circle
            key={i}
            cx={d.cx}
            cy={d.cy}
            r={d.r}
            opacity={grown ? d.opacity : 0}
            style={{ transition: reduced ? undefined : `opacity 0.6s ease ${(0.6 + (i % 24) * 0.025).toFixed(3)}s` }}
          />
        ))}
      </g>
    </svg>
  )
}
