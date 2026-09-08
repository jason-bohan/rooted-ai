import Link from 'next/link'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { PageHero } from '@/components/layouts/page-hero'
import { Button } from '@/components/ui/button'
import { Network, ShieldCheck, Landmark, Wallet2, ArrowRight, Cpu } from 'lucide-react'
import { OrganicNetwork } from '@/components/decor/organic-network'
import { OrbitalNode } from '@/components/decor/orbital-node'
import { ScrollReveal } from '@/components/scroll-reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Mesh Initiative',
  description: 'A long-horizon effort to build a network of community-owned compute — starting with clustered local nodes, eventually town-scale AI.',
}

const reasons = [
  {
    icon: Network,
    title: 'Local control, no vendor lock-in',
    desc: 'Compute that a community or organization owns outright can\'t be repriced, deprecated, or cut off by a distant vendor\'s decision.',
  },
  {
    icon: Landmark,
    title: 'Less pressure on new hyperscale buildout',
    desc: 'This isn\'t a claim that small local clusters are more energy-efficient per query than a well-utilized hyperscale data center — often they aren\'t. The case is that spreading demand across owned, right-sized local nodes reduces the pressure to keep building ever-larger centralized facilities on local grids and water systems.',
  },
  {
    icon: ShieldCheck,
    title: 'Resilience over single points of failure',
    desc: 'A mesh of independently owned nodes has no single company, contract, or outage that takes everyone down at once.',
  },
  {
    icon: Wallet2,
    title: 'Compute spend stays local',
    desc: 'Hardware dollars and the value they create stay with the organizations and communities that own the nodes, instead of flowing out as recurring API fees.',
  },
]

const roadmap = [
  {
    num: '01',
    stage: 'Now',
    title: 'Proving the node',
    desc: 'Validating real throughput and cost economics for a clustered local node under actual concurrent use — not spec-sheet math.',
  },
  {
    num: '02',
    stage: 'Next',
    title: 'Community pilots',
    desc: 'Multi-node deployments with organizations and community partners who want owned compute, not another subscription.',
  },
  {
    num: '03',
    stage: 'Later',
    title: 'Town-scale AI',
    desc: 'A pilot for municipal-scale nodes with resident access — the long-horizon goal. Not a live program yet; this is where the initiative is headed.',
  },
]

export default function MeshPage() {
  return (
    <>
      <PageHero
        eyebrow="The Mesh Initiative ▸ early-stage"
        title="Compute"
        accent="belongs local."
        sub="A long-horizon effort to build a network of community-owned compute — reducing dependence on hyperscale data centers, one node at a time."
        pattern="blueprint"
        size="large"
        organicOpacity={0.35}
      >
        <div className="mt-8 max-w-md border-2 border-primary-foreground/30 bg-primary/40 p-4 font-mono text-[11px] uppercase tracking-[0.14em]">
          <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-2 mb-2">
            <span className="text-primary-foreground/60">initiative / status</span>
            <span className="text-accent">● early-stage</span>
          </div>
          <div className="space-y-1 text-primary-foreground/80">
            <p>▸ stage …… proving the node</p>
            <p>▸ model ….. open-weight, community-run</p>
            <p className="text-accent">▸ owned by … whoever runs the node</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/contact?type=mesh">
            <Button size="lg" variant="hud-light" className="px-8 py-3 h-auto text-xs">
              Join the initiative
            </Button>
          </Link>
        </div>
      </PageHero>

      <ScrollReveal>
      {/* ─── WHY ─── */}
      <Section className="relative overflow-hidden py-14 sm:py-20">
        <div className="mycelium absolute inset-0 opacity-[0.3]" aria-hidden />
        <Container size="xl" className="relative z-10">
          <div className="mb-10 border-b-2 border-foreground/15 pb-8">
            <p className="label mb-3">The case</p>
            <h2 className="font-mono text-2xl sm:text-4xl font-bold lowercase tracking-tight mb-4">
              why this <span className="text-accent">matters</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              A handful of companies own most of the world's AI compute. That's a control problem
              as much as a cost problem — and it's worth being precise about what decentralizing it
              actually buys you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons?.map((r: any, i: number) => (
              <div key={i} className="hud p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-primary/40">
                  <r.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-tight mb-2">{r?.title}</h3>
                <p className="text-sm text-muted-foreground">{r?.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── WHAT WE'RE BUILDING ─── */}
      <Section className="bg-muted/40 border-y-2 border-border">
        <Container size="xl">
          <div className="mb-10 border-b-2 border-foreground/15 pb-8">
            <p className="label mb-3">Node spec ▸ early build</p>
            <h2 className="font-mono text-2xl sm:text-4xl font-bold lowercase tracking-tight">
              what we're <span className="text-accent">building</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              The first mesh node: clustered Apple Silicon, enough unified memory to run a large
              open-weight model like Kimi K2 without cloud dependency.
            </p>
          </div>

          <div className="hud relative overflow-hidden border-2 border-primary bg-primary p-7 text-primary-foreground sm:p-10">
            <OrganicNetwork className="absolute inset-0 h-full w-full" style={{ opacity: 0.4 }} />
            <div className="relative z-10 max-w-2xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center border-2 border-accent bg-primary/60">
                <Cpu className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-mono text-lg font-bold lowercase tracking-tight mb-4">mesh node · v0</h3>
              <ul className="space-y-2">
                <li className="callout">4x Apple M5 Studio, clustered</li>
                <li className="callout">Unified memory pooled for one large MoE model</li>
                <li className="callout">Open-weight models — no proprietary API dependency</li>
                <li className="callout">Interconnect throughput under real concurrent load — still being measured</li>
              </ul>
              <p className="mt-6 text-sm text-primary-foreground/75">
                This is a pilot build, not a shipping SKU. Concurrency and throughput numbers below
                a certain node count are still unproven — we're not claiming enterprise-grade
                simultaneous-user performance until we've measured it under load.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── ROADMAP ─── */}
      <Section className="relative overflow-hidden py-14 sm:py-20">
        <OrganicNetwork className="absolute inset-0 h-full w-full" style={{ opacity: 0.1 }} />
        <Container size="xl" className="relative z-10">
          <div className="mb-10 flex flex-col gap-2">
            <p className="label">Where this goes</p>
            <h2 className="font-mono text-2xl sm:text-4xl font-bold lowercase tracking-tight">
              from one node to a <span className="text-accent">town</span>
            </h2>
          </div>
          <OrbitalNode
            hubTitle="node_0"
            hubStatus="proving the node"
            hint="▸ hover a stage to see the mesh reach it"
            items={roadmap.map((r) => ({
              num: r.num,
              sub: r.stage,
              title: r.title,
              desc: r.desc,
            }))}
          />
        </Container>
      </Section>

      {/* ─── CTA ─── */}
      <Section className="bg-primary border-y-2 border-border">
        <Container size="xl">
          <div className="relative overflow-hidden">
            <div className="blueprint absolute inset-0 opacity-[0.14]" aria-hidden />
            <OrganicNetwork className="absolute inset-0 h-full w-full" style={{ opacity: 0.3 }} />
            <div className="relative z-10 flex flex-col items-start gap-6 py-6">
              <div>
                <p className="label mb-5 text-primary-foreground/60">No pitch, no pressure</p>
                <h2 className="font-mono text-3xl sm:text-5xl font-bold lowercase leading-[0.95] tracking-tight text-primary-foreground text-balance">
                  want to <span className="text-accent">follow along?</span>
                </h2>
              </div>
              <p className="max-w-lg font-mono text-[11px] uppercase tracking-[0.12em] leading-relaxed text-primary-foreground/75">
                This is early. If you want updates as the mesh node gets tested, or you're a
                community group, researcher, or town that wants to talk pilots — say hello.
              </p>
              <Link href="/contact?type=mesh">
                <Button size="lg" variant="hud-accent" className="px-8">
                  Join the initiative <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
      </ScrollReveal>
    </>
  )
}
