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

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-primary pt-20 pb-16">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary-foreground mb-4">
              AI Solutions <span className="text-accent">Tailored to You</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Whether you are protecting corporate data or empowering a community — we build AI that fits your mission.
            </p>
          </div>
        </Container>
      </section>

      <Section id="businesses">
        <Container size="xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight">For Businesses</h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Your employees are already using AI. The question is whether your data is going to OpenAI, Google, or staying safely inside your network.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessBenefits?.map((b: any, i: number) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">{b?.title}</h3>
                    <p className="text-sm text-muted-foreground">{b?.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-muted/50 rounded-xl p-6">
            <h3 className="font-display font-semibold mb-3">Typical Business Setup</h3>
            <ul className="space-y-2">
              {['Custom NVIDIA GPU server or high-end Mac setup', 'Locally hosted LLMs (Llama 3, Mistral, Code Llama)', 'RAG pipeline connected to internal documents, emails, CRM', 'Web-based chat interface for all employees', 'Role-based access controls and usage logging']?.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section id="nonprofits" className="bg-muted/30">
        <Container size="xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Library className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight">For Libraries & Non-Profits</h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            AI should not be a luxury only corporations can afford. We help mission-driven organizations bring powerful, private AI to their communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nonprofitBenefits?.map((b: any, i: number) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                    <b.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">{b?.title}</h3>
                    <p className="text-sm text-muted-foreground">{b?.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-card rounded-xl p-6 shadow-[var(--shadow-md)]">
            <h3 className="font-display font-semibold mb-3">Typical Library / Non-Profit Setup</h3>
            <ul className="space-y-2">
              {['Mac Mini-based AI station for patron and staff use', 'Archive chatbot trained on the library\'s own digital collections', 'Research assistant for students and community members', 'No ongoing subscription costs — runs on donated or grant-funded hardware', 'Simple web interface anyone can use']?.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="xl">
          <div className="text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Not sure which solution fits?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Our free infrastructure audit will assess your needs and recommend the perfect setup.
            </p>
            <Link href="/contact?type=audit">
              <Button size="lg" className="px-8">
                Schedule a Free Audit <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
