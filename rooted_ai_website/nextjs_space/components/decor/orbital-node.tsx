'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface OrbitalItem {
  num: string
  title: string
  desc: string
  href?: string
  cta?: string
  sub?: string
  meta?: string[]
}

interface OrbitalNodeProps {
  items: OrbitalItem[]
  hubTitle: string
  hubStatus: string
  hint?: string
}

// Three-item sets read as a sequence (01 ▸ 02 ▸ 03), so they get a "row"
// layout: cards on one line up top, hub sitting low and center, veins climbing
// to each. Two-item layouts branch out horizontally with almost no vertical
// spread. Everything else falls back to the pinwheel.
function isRow(count: number) {
  return count === 3
}
function canvasWidth(count: number) {
  return count === 2 || isRow(count) ? 1400 : 1000
}
function canvasHeight(count: number) {
  if (count <= 2) return 620
  return isRow(count) ? 900 : 1000
}
function reach(count: number) {
  return count === 2 ? 490 : 420
}

// where the root node sits — low and centered under a row, dead center otherwise
function hubCenter(count: number, vbw: number, vbh: number) {
  return isRow(count) ? { cx: vbw / 2, cy: vbh * 0.76 } : { cx: vbw / 2, cy: vbh / 2 }
}

/* ――― pure deterministic geometry (seeded by index, no Math.random) ――― */

const ROW_X = [0.165, 0.5, 0.835]
const ROW_Y_JITTER = [26, -12, 14] // hand-set wobble so the row isn't ruler-straight

function itemPosition(
  index: number,
  count: number,
  vbw: number,
  vbh: number,
  cx: number,
  cy: number
) {
  if (isRow(count)) {
    return { x: vbw * ROW_X[index], y: vbh * 0.235 + ROW_Y_JITTER[index] }
  }
  const radius = reach(count)
  let angleDeg: number
  if (count === 2) {
    // two tracks branch left / right off the root node
    angleDeg = index === 0 ? 0 : 180
  } else {
    const base = -90
    const step = 360 / count
    const jitter = index % 3 === 0 ? -7 : index % 3 === 1 ? 5 : -2
    angleDeg = base + index * step + jitter
  }
  const a = (angleDeg * Math.PI) / 180
  // keep the horizontal reach generous but compress vertical spread so
  // cards near the top/bottom of the ring don't poke past the canvas edge
  const vSqueeze = count === 2 ? 1 : 0.72
  return { x: cx + Math.cos(a) * radius, y: cy + Math.sin(a) * radius * vSqueeze }
}

function quadAt(
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  t: number
) {
  const u = 1 - t
  return {
    x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
  }
}

// A cluster of strands growing from hub toward a satellite — not one clean
// line, but a small colony reaching for the target: a few parallel-ish
// tendrils at slightly different angles/lengths, each forked once, the way
// a plasmodium actually explores toward a food source.
function veinFor(index: number, pos: { x: number; y: number }, cx: number, cy: number) {
  const seed = index * 1.31 + 2
  const dx = pos.x - cx
  const dy = pos.y - cy
  const dist = Math.sqrt(dx * dx + dy * dy)
  const ux = dx / dist
  const uy = dy / dist
  const start = { x: cx + ux * 100, y: cy + uy * 100 }
  const baseAngle = Math.atan2(uy, ux)
  const span = dist - 100

  // flip the bow direction per satellite so neighbouring connectors curve
  // away from each other instead of running parallel — reads as a colony
  // exploring in three directions rather than three copies of one line
  const sway = index % 2 === 0 ? 1 : -0.8

  const defs = [
    { angleOff: -0.15, lenFrac: 0.88, bow: 60 },
    { angleOff: 0, lenFrac: 1, bow: -34 },
    { angleOff: 0.17, lenFrac: 0.82, bow: 70 },
  ]

  const strands = defs.map((def, si) => {
    const ang = baseAngle + def.angleOff + Math.sin(seed + si * 1.9) * 0.04
    const strandLen = span * def.lenFrac
    const bow = def.bow * sway
    const ex = start.x + Math.cos(ang) * strandLen
    const ey = start.y + Math.sin(ang) * strandLen
    const nx = -Math.sin(ang)
    const ny = Math.cos(ang)
    const cxp = start.x + Math.cos(ang) * strandLen * 0.5 + nx * bow
    const cyp = start.y + Math.sin(ang) * strandLen * 0.5 + ny * bow
    const d = `M ${start.x.toFixed(1)},${start.y.toFixed(1)} Q ${cxp.toFixed(1)},${cyp.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}`
    return { d, p0: start, p1: { x: cxp, y: cyp }, p2: { x: ex, y: ey }, isMain: si === 1 }
  })

  const main = strands[1]
  // short forks off the main strand — visible at rest, brighten on hover
  const forks = [0.35, 0.62].map((t, k) => {
    const mid = quadAt(main.p0, main.p1, main.p2, t)
    const tx = (1 - t) * (main.p1.x - main.p0.x) + t * (main.p2.x - main.p1.x)
    const ty = (1 - t) * (main.p1.y - main.p0.y) + t * (main.p2.y - main.p1.y)
    const tl = Math.sqrt(tx * tx + ty * ty) || 1
    const ux2 = tx / tl
    const uy2 = ty / tl
    const side = k === 0 ? 1 : -1
    const rot = 0.9 * side
    const bx = ux2 * Math.cos(rot) - uy2 * Math.sin(rot)
    const by = ux2 * Math.sin(rot) + uy2 * Math.cos(rot)
    const flen = 46 + (index % 3) * 12
    const ex = mid.x + bx * flen
    const ey = mid.y + by * flen
    const mx = mid.x + bx * flen * 0.35
    const my = mid.y + by * flen * 0.35
    return { d: `M ${mid.x.toFixed(1)},${mid.y.toFixed(1)} Q ${mx.toFixed(1)},${my.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}` }
  })

  return { d: main.d, strands, sprites: forks }
}

function blobPath(cx: number, cy: number, r: number, seed = 1) {
  const n = 10
  const pts: { x: number; y: number }[] = []
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2
    const w =
      1 +
      Math.sin(a * 2.3 + seed * 1.7) * 0.16 +
      Math.cos(a * 3.1 - seed * 2.1) * 0.1
    pts.push({ x: cx + Math.cos(a) * r * w, y: cy + Math.sin(a) * r * w })
  }
  let d = `M ${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`
  for (let i = 0; i < n; i++) {
    const p = pts[i]
    const q = pts[(i + 1) % n]
    const mx = (p.x + q.x) / 2
    const my = (p.y + q.y) / 2
    d += ` Q ${p.x.toFixed(1)},${p.y.toFixed(1)} ${mx.toFixed(1)},${my.toFixed(1)}`
  }
  return d
}

export function OrbitalNode({ items, hubTitle, hubStatus, hint }: OrbitalNodeProps) {
  const [hovered, setHovered] = useState<number | null>(null)
  const [reduced, setReduced] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const count = items.length
  const grown = inView || reduced

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  const vbw = canvasWidth(count)
  const vbh = canvasHeight(count)
  const row = isRow(count)
  const { cx, cy } = hubCenter(count, vbw, vbh)

  const cfg = items.map((item, i) => {
    const pos = itemPosition(i, items.length, vbw, vbh, cx, cy)
    return { item, pos, vein: veinFor(i, pos, cx, cy) }
  })

  const hubBlob = blobPath(cx, cy, 92, 3)
  const ringBlob = blobPath(cx, cy, 126, 7)
  const ringRx = row ? 330 : 380
  const ringRy = row ? Math.min(165, vbh - cy - 24) : Math.min(380, cy - 24)

  // in row mode the satellites sit on one line, so a polygon between them
  // collapses to a streak — link them with sagging arcs instead, like a vein
  // that has already found its way from one stage to the next
  const rowLinks = row
    ? cfg.slice(0, -1).map((c, i) => {
        const a = c.pos
        const b = cfg[i + 1].pos
        const mx = (a.x + b.x) / 2
        const my = (a.y + b.y) / 2 + (i % 2 === 0 ? 62 : -48)
        return `M ${a.x.toFixed(1)},${a.y.toFixed(1)} Q ${mx.toFixed(1)},${my.toFixed(1)} ${b.x.toFixed(1)},${b.y.toFixed(1)}`
      })
    : []

  return (
    <div className="w-full">
      {/* ── pinwheel (md and up; stacked list below) ── */}
      <div className="hidden md:block">
        <div
          className={cn(
            'relative mx-auto w-full',
            count === 2 ? 'max-w-5xl' : row ? 'max-w-6xl' : 'max-w-4xl'
          )}
        >
          <div className="relative w-full" style={{ aspectRatio: `${vbw} / ${vbh}` }}>
            <svg
              ref={ref}
              viewBox={`0 0 ${vbw} ${vbh}`}
              className="absolute inset-0 h-full w-full text-accent"
              aria-hidden
            >
              {/* orbital dial ring */}
              <g className="orbit-ring">
                <ellipse
                  cx={cx}
                  cy={cy}
                  rx={ringRx}
                  ry={ringRy}
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="1.5"
                  strokeDasharray="2 10"
                  opacity="0.55"
                />
              </g>

              {/* resting mesh among three or more satellites */}
              {count >= 3 && !row && (
                <polygon
                  points={cfg.map((c) => `${c.pos.x},${c.pos.y}`).join(' ')}
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="1.2"
                  opacity={hovered === null ? 0.12 : 0.05}
                  style={{ transition: 'opacity 0.4s ease' }}
                />
              )}

              {/* stage-to-stage arcs across the row */}
              {rowLinks.map((d, i) => (
                <path
                  key={`link-${i}`}
                  d={d}
                  pathLength={1}
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeDasharray={1}
                  opacity={hovered === null ? 0.18 : 0.07}
                  style={{
                    strokeDashoffset: grown ? 0 : 1,
                    transition: reduced
                      ? undefined
                      : `stroke-dashoffset 1.4s cubic-bezier(0.3,0.1,0.2,1) ${1.1 + i * 0.25}s, opacity 0.4s ease`,
                  }}
                />
              ))}

              {/* hub veins — a small colony always reaching for each satellite, growing in on mount and again on hover */}
              {cfg.map((c, i) => (
                <g key={i}>
                  {c.vein.strands.map((s, si) => (
                    <path
                      key={si}
                      d={s.d}
                      pathLength={1}
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth={hovered === i ? (s.isMain ? 4 : 2.2) : s.isMain ? 2 : 1.1}
                      strokeLinecap="round"
                      opacity={
                        hovered === null
                          ? s.isMain
                            ? 0.4
                            : 0.22
                          : hovered === i
                          ? s.isMain
                            ? 1
                            : 0.75
                          : 0.05
                      }
                      strokeDasharray={1}
                      style={{
                        strokeDashoffset: grown ? 0 : 1,
                        transition: reduced
                          ? undefined
                          : `stroke-dashoffset 1.2s cubic-bezier(0.3,0.1,0.2,1) ${si * 0.18}s, stroke-width 0.35s ease, opacity 0.35s ease`,
                      }}
                    />
                  ))}
                  {c.vein.sprites.map((s, j) => (
                    <path
                      key={j}
                      d={s.d}
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth={hovered === i ? 1.6 : 0.9}
                      strokeLinecap="round"
                      opacity={!grown ? 0 : hovered === null ? 0.16 : hovered === i ? 0.7 : 0.04}
                      style={{ transition: `opacity 0.5s ease ${0.9 + j * 0.15}s, stroke-width 0.35s ease` }}
                    />
                  ))}
                  {hovered === i && !reduced && (
                    <>
                      <circle r="5" fill="hsl(var(--accent))">
                        <animateMotion dur="1.6s" repeatCount="indefinite" path={c.vein.d} />
                      </circle>
                      <circle r="3" fill="hsl(var(--primary-foreground))">
                        <animateMotion dur="1.6s" begin="0.8s" repeatCount="indefinite" path={c.vein.d} />
                      </circle>
                    </>
                  )}
                </g>
              ))}

              {/* spore dots at each satellite's resting point */}
              {cfg.map((c, i) => (
                <circle
                  key={`spore-${i}`}
                  cx={c.pos.x}
                  cy={c.pos.y}
                  r="3.4"
                  fill="hsl(var(--accent))"
                  opacity={hovered === null ? 0.5 : hovered === i ? 0.9 : 0.2}
                  style={{ transition: 'opacity 0.35s ease' }}
                />
              ))}

              {/* hub — the root node */}
              <g>
                <path d={ringBlob} fill="none" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.55" />
                <path d={hubBlob} className="breathe" fill="hsl(var(--primary))" />
                <text
                  x={cx}
                  y={cy - 4}
                  textAnchor="middle"
                  className="fill-primary-foreground font-mono font-bold"
                  style={{ fontSize: 28, letterSpacing: '0.06em' }}
                >
                  {hubTitle}
                </text>
                <text
                  x={cx}
                  y={cy + 28}
                  textAnchor="middle"
                  className="fill-accent font-mono"
                  style={{ fontSize: 12, letterSpacing: '0.14em' }}
                >
                  ● {hubStatus}
                </text>
              </g>
            </svg>

            {/* satellite cards */}
            {cfg.map((c, i) => {
              const card = (
                <div
                  className={cn(
                    'hud p-5 sm:p-7 text-left transition-colors duration-normal',
                    hovered === i && 'border-accent'
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-accent/70">
                      {c.item.num}
                    </span>
                    <span className="font-mono text-base text-foreground/30">◒</span>
                  </div>
                  {c.item.sub && <p className="label mt-2">{c.item.sub}</p>}
                  <h3 className="mt-2 font-mono text-base sm:text-lg font-bold lowercase tracking-tight">
                    {c.item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.item.desc}
                  </p>
                  {c.item.meta && c.item.meta.length > 0 && (
                    <ul className="mt-3 space-y-1 border-t border-foreground/10 pt-2">
                      {c.item.meta.slice(0, 3).map((m) => (
                        <li key={m} className="font-mono text-[10px] lowercase tracking-wide text-muted-foreground">
                          ● {m}
                        </li>
                      ))}
                    </ul>
                  )}
                  {c.item.cta && (
                    <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      {c.item.cta} ▸
                    </span>
                  )}
                </div>
              )

              return (
                <div
                  key={i}
                  className={cn(
                    'absolute',
                    count === 2
                      ? 'w-[32%] max-w-[400px]'
                      : row
                      ? 'w-[30%] max-w-[340px]'
                      : 'w-[27%] max-w-[270px]'
                  )}
                  style={{
                    left: `${(c.pos.x / vbw) * 100}%`,
                    top: `${(c.pos.y / vbh) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {c.item.href ? (
                    <Link href={c.item.href} className="block" tabIndex={0} onFocus={() => setHovered(i)} onBlur={() => setHovered(null)}>
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </div>
              )
            })}
          </div>

          {hint && (
            <p className="label mt-3 text-center">{hint}</p>
          )}
        </div>
      </div>

      {/* ── stacked list fallback (small screens) ── */}
      <div className="md:hidden space-y-4">
        {cfg.map((c, i) => (
          <div key={i} className="hud p-5 text-left">
            <div className="flex items-start justify-between gap-2">
              <span className="font-mono text-3xl font-bold text-accent/70">{c.item.num}</span>
              <span className="font-mono text-sm text-foreground/30">◒</span>
            </div>
            {c.item.sub && <p className="label mt-2">{c.item.sub}</p>}
            <h3 className="mt-2 font-mono text-base font-bold lowercase tracking-tight">{c.item.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{c.item.desc}</p>
            {c.item.href && (
              <Link href={c.item.href} className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                {c.item.cta} ▸
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}