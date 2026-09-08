import Link from 'next/link'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { Button } from '@/components/ui/button'
import { HomeAnimations } from './_components/home-animations'

const valueProps = [
  { num: '01', title: 'Privacy first', desc: 'Your data never leaves your building. No third-party servers. No cloud exposure. Ever.' },
  { num: '02', title: 'Zero API fees', desc: 'No per-token costs. No monthly subscriptions. Run unlimited queries on hardware you own.' },
  { num: '03', title: 'Your hardware', desc: 'From a Mac Mini to a multi-GPU rig — infrastructure you own and control completely.' },
  { num: '04', title: 'Full control', desc: 'Pick your models, shape your workflows, own your stack. Swap anything whenever you want.' },
]

const sectors = [
  {
    num: 'A',
    title: 'For Businesses',
    desc: 'Protect intellectual property. Prevent data leaks to public AI models. Eliminate recurring API fees — keep your edge on premise.',
    href: '/solutions#businesses',
  },
  {
    num: 'B',
    title: 'Libraries & Non-Profits',
    desc: 'Democratize AI access for your community without subscription burdens. One-time hardware cost that is budget-predictable and grant-fundable.',
    href: '/solutions#nonprofits',
  },
]

const steps = [
  { num: '01', title: 'Assess', desc: 'We audit your data, workflows, and hardware needs — free, on us.' },
  { num: '02', title: 'Provision', desc: 'We source and build your custom local AI server.' },
  { num: '03', title: 'Deploy', desc: 'We install local LLMs and connect your documents via RAG.' },
  { num: '04', title: 'Support', desc: 'Ongoing managed services, updates, and fine-tuning.' },
]

const trustLine = [
  'Data never leaves your building',
  'No monthly API fees',
  'Open-source models',
  'Air-gapped capable',
  'Hardware you own',
  'No vendor lock-in',
]

export default function HomePage() {
  return (
    <HomeAnimations>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden border-b-2 border-border bg-primary text-primary-foreground">
        <div className="gridfield absolute inset-0 opacity-[0.16]" aria-hidden />
        <Container size="xl" className="relative z-10">
          <div className="pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 max-w-4xl">
            <p className="label mb-6 text-primary-foreground/60">
              Local AI infrastructure ▸ est. in your building
            </p>
            <h1 className="font-mono text-4xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] tracking-tight">
              Your data
              <br />
              <span className="text-accent">roots here.</span>
            </h1>
            <p className="mt-6 max-w-xl font-mono text-xs sm:text-sm leading-relaxed text-primary-foreground/80 uppercase tracking-[0.08em]">
              Private, powerful AI that runs entirely inside your organization.
              No cloud. No per-token fees. No leaks. Your building, your models.
            </p>

            {/* spec panel */}
            <div className="mt-8 max-w-md border-2 border-primary-foreground/30 bg-primary/40 p-4 font-mono text-[11px] uppercase tracking-[0.14em]">
              <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-2 mb-2">
                <span className="text-primary-foreground/60">node_0 / status</span>
                <span className="text-accent">● systems nominal</span>
              </div>
              <div className="space-y-1 text-primary-foreground/80">
                <p>▸ location …… your building</p>
                <p>▸ egress …… 0 requests to cloud APIs</p>
                <p>▸ models ….. llama 3 · mistral · your pick</p>
                <p className="text-accent">▸ vault ……. locked, local, yours</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact?type=audit">
                <Button size="lg" variant="hud-light" className="px-8 py-3 h-auto text-xs">
                  Schedule a free audit
                </Button>
              </Link>
              <Link href="/contact?type=demo">
                <Button size="lg" variant="hud-accent" className="px-8 py-3 h-auto text-xs">
                  Request a local demo
                </Button>
              </Link>
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
                    {t} <span className="ml-6 text-accent">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPS / LEDGER ─── */}
      <Section>
        <Container size="xl">
          <div className="mb-10 flex flex-col gap-2">
            <p className="label">Spec sheet</p>
            <h2 className="font-mono text-2xl sm:text-4xl font-bold uppercase tracking-tight">
              Why go <span className="text-accent">local</span>?
            </h2>
          </div>
          <div className="divide-y-2 divide-foreground/15 border-y-2 border-foreground/15">
            {valueProps?.map((prop: any) => (
              <div
                key={prop.num}
                className="grid grid-cols-[3rem_1fr] sm:grid-cols-[3rem_12rem_1fr] gap-4 py-6 transition-colors hover:bg-card sm:px-4 -mx-4 sm:mx-0"
              >
                <span className="font-mono text-sm text-accent">{prop.num}</span>
                <h3 className="font-mono text-sm sm:text-base font-bold uppercase tracking-tight">{prop.title}</h3>
                <p className="text-sm text-muted-foreground sm:pl-4 sm:border-l-2 sm:border-foreground/15">{prop.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── SECTORS ─── */}
      <Section className="bg-muted/40 border-y-2 border-border">
        <Container size="xl">
          <div className="mb-10 flex flex-col gap-2">
            <p className="label">Field notes</p>
            <h2 className="font-mono text-2xl sm:text-4xl font-bold uppercase tracking-tight">
              Built for <span className="text-accent">your sector</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors?.map((s: any) => (
              <Link href={s.href} key={s.num} className="group block">
                <div className="hud relative flex h-full flex-col justify-between p-7 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-5xl font-bold text-accent/70 transition-colors group-hover:text-accent">
                      {s.num}
                    </span>
                    <span className="font-mono text-xl text-foreground/40 transition-colors group-hover:text-primary-foreground/60">↗</span>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-mono text-lg sm:text-xl font-bold uppercase tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/75">{s.desc}</p>
                    <span className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                      Read more ▸
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── HOW IT WORKS / TIMELINE ─── */}
      <Section>
        <Container size="xl">
          <div className="mb-10 flex flex-col gap-2">
            <p className="label">Operating procedure</p>
            <h2 className="font-mono text-2xl sm:text-4xl font-bold uppercase tracking-tight">
              How it <span className="text-accent">works</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-lg">
              From first conversation to fully operational AI — four steps, zero guesswork.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps?.map((step: any) => (
              <div key={step.num} className="hud relative p-6">
                <span className="font-mono text-4xl font-bold text-accent/60">{step.num}</span>
                <h3 className="mt-6 font-mono text-base font-bold uppercase tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-start">
            <Link href="/how-it-works">
              <Button variant="hud">The full process ▸</Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ─── FINAL CTA ─── */}
      <Section className="bg-primary border-y-2 border-border">
        <Container size="xl">
          <div className="relative overflow-hidden">
            <div className="gridfield absolute inset-0 opacity-[0.14]" aria-hidden />
            <div className="relative z-10 flex flex-col items-start gap-8 py-6">
              <div>
                <p className="label mb-5 text-primary-foreground/60">Standing by</p>
                <h2 className="font-mono text-3xl sm:text-5xl font-bold uppercase leading-[0.95] tracking-tight text-primary-foreground text-balance">
                  Ready to root <br className="hidden sm:block" />
                  your AI <span className="text-accent">locally?</span>
                </h2>
              </div>
              <p className="max-w-lg font-mono text-[11px] uppercase tracking-[0.12em] leading-relaxed text-primary-foreground/75">
                Start with a free infrastructure audit. We assess your needs and show you exactly what local AI can do for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact?type=audit">
                  <Button size="lg" variant="hud-accent" className="px-8">Schedule a free audit</Button>
                </Link>
                <Link href="/contact?type=demo">
                  <Button size="lg" variant="hud-light" className="px-8">Request a demo</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </HomeAnimations>
  )
}