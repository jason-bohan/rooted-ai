import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Shield, DollarSign, FileCheck, Lock, Building2,
  Library, Heart, Wallet, Gift, ArrowRight, CheckCircle2
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Local AI solutions for businesses, libraries, and non-profits.',
}

const businessBenefits = [
  { icon: Shield, title: 'Data Privacy & IP Protection', desc: 'Keep trade secrets, client data, and proprietary information off third-party servers. Your AI runs in your building.' },
  { icon: Lock, title: 'Prevent Data Leaks', desc: 'Employees using ChatGPT risk sending sensitive data to OpenAI servers. Local AI eliminates that risk entirely.' },
  { icon: DollarSign, title: 'Zero Recurring API Costs', desc: 'No per-token fees, no monthly subscriptions. One-time hardware investment, unlimited usage forever.' },
  { icon: FileCheck, title: 'Compliance-Friendly', desc: 'HIPAA, SOC2, GDPR — local AI makes compliance straightforward because data never crosses a network boundary.' },
]

const nonprofitBenefits = [
  { icon: Heart, title: 'Democratize AI Access', desc: 'Bring cutting-edge AI to communities that need it most — without corporate subscription fees.' },
  { icon: Wallet, title: 'Predictable Budgeting', desc: 'One-time hardware cost instead of unpredictable monthly bills. Budget once, benefit forever.' },
  { icon: Gift, title: 'Grant-Fundable', desc: 'Hardware purchases are tangible capital expenditures — perfect for grant applications and one-time funding.' },
  { icon: Library, title: 'Community AI Stations', desc: 'Set up AI-powered research stations for patrons, students, and community members to use freely.' },
]

function PageHero({ eyebrow, title, accent, sub }: { eyebrow: string; title: string; accent: string; sub: string }) {
  return (
    <section className="relative overflow-hidden border-b-2 border-border bg-primary text-primary-foreground">
      <div className="gridfield absolute inset-0 opacity-[0.14]" aria-hidden />
      <Container size="xl" className="relative z-10">
        <div className="py-14 sm:py-20 max-w-3xl">
          <p className="label mb-5 text-primary-foreground/60">{eyebrow}</p>
          <h1 className="font-mono text-3xl sm:text-5xl font-bold uppercase leading-[0.95] tracking-tight">
            {title} <span className="text-accent">{accent}</span>
          </h1>
          <p className="mt-5 max-w-xl font-mono text-[11px] sm:text-sm uppercase tracking-[0.1em] leading-relaxed text-primary-foreground/80">
            {sub}
          </p>
        </div>
      </Container>
    </section>
  )
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions ▸ per-sector configs"
        title="AI solutions"
        accent="tailored to you"
        sub="Whether you are protecting corporate data or empowering a community — we build AI that fits your mission."
      />

      <Section id="businesses">
        <Container size="xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b-2 border-foreground/15 pb-6">
            <div>
              <p className="label mb-2">Config. A</p>
              <h2 className="font-mono text-2xl sm:text-4xl font-bold uppercase tracking-tight">For Businesses</h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="hud flex h-12 w-12 items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </span>
            </div>
          </div>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            Your employees are already using AI. The question is whether your data is going to OpenAI, Google, or staying safely inside your network.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessBenefits?.map((b: any, i: number) => (
              <div key={i} className="hud p-6 transition-colors hover:bg-primary hover:text-primary-foreground group">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center border-2 border-primary/40 shrink-0 mt-1 transition-colors group-hover:border-primary-foreground/40">
                    <b.icon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm font-bold uppercase tracking-tight mb-1">{b?.title}</h3>
                    <p className="text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/75">{b?.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 hud p-6">
            <h3 className="tag mb-4 border-primary text-primary">Typical business setup</h3>
            <ul className="space-y-2">
              {['Custom NVIDIA GPU server or high-end Mac setup', 'Locally hosted LLMs (Llama 3, Mistral, Code Llama)', 'RAG pipeline connected to internal documents, emails, CRM', 'Web-based chat interface for all employees', 'Role-based access controls and usage logging']?.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section id="nonprofits" className="bg-muted/40 border-y-2 border-border">
        <Container size="xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b-2 border-foreground/15 pb-6">
            <div>
              <p className="label mb-2">Config. B</p>
              <h2 className="font-mono text-2xl sm:text-4xl font-bold uppercase tracking-tight">Libraries & Non-Profits</h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="hud flex h-12 w-12 items-center justify-center">
                <Library className="h-6 w-6 text-accent" />
              </span>
            </div>
          </div>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            AI should not be a luxury only corporations can afford. We help mission-driven organizations bring powerful, private AI to their communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nonprofitBenefits?.map((b: any, i: number) => (
              <div key={i} className="hud p-6 transition-colors hover:bg-primary hover:text-primary-foreground group">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center border-2 border-accent/40 shrink-0 mt-1 transition-colors group-hover:border-primary-foreground/40">
                    <b.icon className="h-5 w-5 text-accent transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm font-bold uppercase tracking-tight mb-1">{b?.title}</h3>
                    <p className="text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/75">{b?.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 hud p-6">
            <h3 className="tag mb-4 border-accent text-accent">Typical library / non-profit setup</h3>
            <ul className="space-y-2">
              {['Mac Mini-based AI station for patron and staff use', 'Archive chatbot trained on the library\'s own digital collections', 'Research assistant for students and community members', 'No ongoing subscription costs — runs on donated or grant-funded hardware', 'Simple web interface anyone can use']?.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="xl">
          <div className="hud flex flex-col items-center p-10 sm:p-14 text-center">
            <p className="label mb-4">No fit yet?</p>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4">
              Not sure which <span className="text-accent">solution fits?</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-lg">
              Our free infrastructure audit will assess your needs and recommend the perfect setup.
            </p>
            <Link href="/contact?type=audit">
              <Button variant="hud-primary" className="px-8">
                Schedule a free audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}