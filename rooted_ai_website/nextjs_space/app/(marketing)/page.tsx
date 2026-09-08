import Link from 'next/link'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { Button } from '@/components/ui/button'
import {
  Shield, DollarSign, Server, Settings, Leaf,
  Building2, Library, ArrowRight, ClipboardCheck,
  Package, Rocket, HeadphonesIcon, Lock, Cpu, Globe
} from 'lucide-react'
import { HomeAnimations } from './_components/home-animations'

const valueProps = [
  { icon: Shield, title: 'Privacy First', desc: 'Your data never leaves your building. No third-party servers, no cloud exposure.' },
  { icon: DollarSign, title: 'Zero API Costs', desc: 'No per-token fees. Run unlimited queries on your own hardware.' },
  { icon: Server, title: 'Your Hardware', desc: 'From Mac Minis to NVIDIA GPU rigs \u2014 infrastructure you own and control.' },
  { icon: Settings, title: 'Full Control', desc: 'Choose your models, customize your workflows, own your AI stack completely.' },
]

const steps = [
  { icon: ClipboardCheck, num: '01', title: 'Assess', desc: 'We audit your data, workflows, and hardware needs.' },
  { icon: Package, num: '02', title: 'Provision', desc: 'We source and build your custom local AI server.' },
  { icon: Rocket, num: '03', title: 'Deploy', desc: 'We install local LLMs and connect your documents via RAG.' },
  { icon: HeadphonesIcon, num: '04', title: 'Support', desc: 'Ongoing managed services, updates, and fine-tuning.' },
]

const trustBadges = [
  { icon: Lock, label: 'Data Never Leaves Your Building' },
  { icon: DollarSign, label: 'No Monthly API Fees' },
  { icon: Globe, label: 'Open Source Models' },
  { icon: Cpu, label: 'Your Hardware, Your Rules' },
]

export default function HomePage() {
  return (
    <HomeAnimations>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-foreground blur-3xl" />
        </div>
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm mb-6">
              <Leaf className="w-4 h-4" />
              Local AI Infrastructure
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground mb-6">
              Private, Powerful AI.{' '}
              <span className="text-accent">No Cloud Required.</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              We build and deploy AI infrastructure that runs entirely inside your organization.
              Your data stays in your building — always.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?type=audit">
                <Button size="lg" variant="secondary" className="text-base px-8">
                  Schedule a Free Infrastructure Audit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact?type=demo">
                <Button size="lg" className="text-base px-8 bg-transparent border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/15">
                  Request a Local AI Demo
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Value Props */}
      <Section>
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Why Go <span className="text-primary">Local</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every organization deserves powerful AI without sacrificing privacy, control, or budget.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps?.map((prop: any, i: number) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <prop.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{prop?.title}</h3>
                <p className="text-sm text-muted-foreground">{prop?.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sector Preview */}
      <Section className="bg-muted/50">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Built For <span className="text-accent">Your Sector</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/solutions#businesses" className="group">
              <div className="bg-card rounded-xl p-8 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 group-hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">For Businesses</h3>
                <p className="text-muted-foreground mb-4">
                  Protect intellectual property, prevent data leaks to public AI models, and eliminate recurring API fees — all while empowering your team with cutting-edge AI.
                </p>
                <span className="text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link href="/solutions#nonprofits" className="group">
              <div className="bg-card rounded-xl p-8 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 group-hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <Library className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">For Libraries & Non-Profits</h3>
                <p className="text-muted-foreground mb-4">
                  Democratize AI access for your community without subscription burdens. One-time hardware costs are grant-fundable and budget-predictable.
                </p>
                <span className="text-accent font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </Section>

      {/* How It Works Preview */}
      <Section>
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From first conversation to fully operational AI — we handle everything.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps?.map((step: any, i: number) => (
              <div key={i} className="relative bg-card rounded-xl p-6 shadow-[var(--shadow-md)]">
                <span className="font-mono text-3xl font-bold text-primary/30">{step?.num}</span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-3 mb-3">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{step?.title}</h3>
                <p className="text-sm text-muted-foreground">{step?.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                See the full process <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Trust Badges */}
      <Section className="bg-primary/5">
        <Container size="xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges?.map((badge: any, i: number) => (
              <div key={i} className="flex flex-col items-center text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-display font-semibold text-sm">{badge?.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container size="xl">
          <div className="bg-primary rounded-2xl p-10 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-primary-foreground mb-4">
                Ready to Root Your AI Locally?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Start with a free infrastructure audit. We will assess your needs and show you exactly what local AI can do for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact?type=audit">
                  <Button size="lg" variant="secondary" className="text-base px-8">
                    Schedule a Free Audit
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact?type=demo">
                  <Button size="lg" className="text-base px-8 bg-transparent border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/15">
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </HomeAnimations>
  )
}
