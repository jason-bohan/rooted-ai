import Link from 'next/link'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { Button } from '@/components/ui/button'
import { OrganicNetwork } from '@/components/decor/organic-network'
import { OrganicDivider } from '@/components/decor/organic-divider'
import { OrbitalNode } from '@/components/decor/orbital-node'
import { ScrollReveal } from '@/components/scroll-reveal'

const tracks = [
  {
    num: 'A',
    title: 'For Organizations',
    desc: 'Private AI infrastructure for businesses, libraries, and non-profits. We audit, provision, and deploy hardware you own — zero per-token fees, nothing leaves your building.',
    bullets: ['Free infrastructure audit', 'Hardware you own, models you pick', 'Ongoing managed support'],
    href: '/solutions',
    cta: 'Explore solutions',
  },
  {
    num: 'B',
    title: 'The Mesh Initiative',
    desc: 'A longer-horizon effort to build a network of community-owned compute — reducing dependence on hyperscale data centers, starting with clustered local nodes and, eventually, town-scale AI.',
    bullets: ['Early-stage initiative, not a shipped product', 'Community & municipal pilots', 'Compute ownership stays local'],
    href: '/mesh',
    cta: 'Read the initiative',
  },
]

const trustLine = [
  'Data stays local',
  'No monthly API fees',
  'Open-source models',
  'Community-owned nodes',
  'No vendor lock-in',
  'Compute you control',
]

export default function HomePage() {
  return (
    <ScrollReveal>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden border-b-2 border-border bg-primary text-primary-foreground">
        <div className="mycelium absolute inset-0 opacity-[0.12]" aria-hidden />
        <OrganicNetwork className="absolute inset-0 h-full w-full" style={{ opacity: 0.26 }} />
        <Container size="xl" className="relative z-10">
          <div className="pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 max-w-4xl">
            <p className="label mb-6 text-primary-foreground/60">
              Local AI infrastructure ▸ compute you control
            </p>
            <h1 className="font-mono text-4xl sm:text-6xl lg:text-7xl font-bold lowercase leading-[0.95] tracking-tight">
              your data,
              <br />
              <span className="text-accent">roots here.</span>
            </h1>
            <p className="mt-6 max-w-xl font-mono text-xs sm:text-sm leading-relaxed text-primary-foreground/80 lowercase tracking-[0.06em]">
              two ways to take back control: private AI infrastructure for your
              organization, or a community-owned mesh built to outlast any single data center.
            </p>

            {/* spec panel */}
            <div className="mt-8 max-w-md border-2 border-primary-foreground/30 bg-primary/40 p-4 font-mono text-[11px] uppercase tracking-[0.14em]" style={{ borderRadius: 'var(--radius)' }}>
              <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-2 mb-2">
                <span className="text-primary-foreground/60">node_0 / status</span>
                <span className="text-accent">● systems nominal</span>
              </div>
              <div className="space-y-1 text-primary-foreground/80">
                <p>▸ location …… wherever you run it</p>
                <p>▸ egress …… 0 requests to cloud APIs</p>
                <p>▸ models ….. llama 3 · mistral · your pick</p>
                <p className="text-accent">▸ ownership … local, community, yours</p>
              </div>
            </div>
          </div>
        </Container>

        {/* bleed ticker */}
        <div className="relative z-10 border-t border-primary-foreground/20 bg-primary-foreground/5 py-3 overflow-hidden">
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
                {trustLine.map((t) => (
                  <span key={t + k} className="mx-6 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground/80 whitespace-nowrap">
                    {t} <span className="ml-6 text-accent">●</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORK ─── */}
      <OrganicDivider tone="soft" className="block w-full h-[42px] -mb-px text-border opacity-70" />
      <Section className="relative overflow-hidden py-14 sm:py-20">
        <div className="mycelium absolute inset-0 opacity-[0.35]" aria-hidden />
        <OrganicNetwork className="absolute inset-0 h-full w-full" style={{ opacity: 0.09 }} />
        <Container size="xl" className="relative z-10">
          <div className="mb-10 flex flex-col gap-2">
            <p className="label">Pick a track</p>
            <h2 className="font-mono text-2xl sm:text-4xl font-bold lowercase tracking-tight">
              two ways we <span className="text-accent">work</span>
            </h2>
          </div>

          <OrbitalNode
            hubTitle="rooted"
            hubStatus="compute you control"
            hint="▸ hover a track to grow its roots"
            items={tracks.map((t) => ({
              num: t.num,
              title: t.title,
              desc: t.desc,
              meta: t.bullets,
              href: t.href,
              cta: t.cta,
            }))}
          />
        </Container>
      </Section>
    </ScrollReveal>
  )
}
