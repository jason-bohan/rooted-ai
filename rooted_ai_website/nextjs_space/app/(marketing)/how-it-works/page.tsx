import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  ClipboardCheck, Package, Rocket, HeadphonesIcon,
  ArrowRight, ArrowDown, CheckCircle2
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'From assessment to ongoing support — our four-step process for deploying private AI infrastructure.',
}

const steps = [
  {
    icon: ClipboardCheck,
    num: '01',
    title: 'Assess',
    subtitle: 'Understand your needs',
    desc: 'We start with a thorough audit of your organization — your data sources, daily workflows, security requirements, and hardware environment. This is free and comes with no obligations.',
    details: [
      'Interview key stakeholders about AI use cases',
      'Inventory existing hardware and network infrastructure',
      'Identify data sources for RAG integration (documents, databases, email)',
      'Assess security and compliance requirements',
      'Deliver a written recommendation report',
    ],
  },
  {
    icon: Package,
    num: '02',
    title: 'Provision',
    subtitle: 'Build your hardware',
    desc: 'Based on your needs, we source and configure the ideal local AI server. From a compact Mac Mini setup for a library to a multi-GPU NVIDIA rig for enterprise workloads.',
    details: [
      'Select optimal hardware for your use case and budget',
      'Mac Mini, Mac Studio, or custom NVIDIA GPU servers',
      'Pre-install and configure the operating system and AI stack',
      'Set up Docker containers for Ollama, Open WebUI, and RAG pipeline',
      'Load test to verify performance meets requirements',
    ],
  },
  {
    icon: Rocket,
    num: '03',
    title: 'Deploy',
    subtitle: 'Install & connect',
    desc: 'We install the server on-site, connect it to your network, and integrate with your documents. Your team gets a simple web interface to start using AI immediately.',
    details: [
      'On-site installation and network configuration',
      'Deploy local LLMs: Llama 3, Mistral, Code Llama, and more',
      'Connect your document repositories for RAG-powered search',
      'Set up user accounts and role-based access',
      'Train your team on the chat interface',
    ],
  },
  {
    icon: HeadphonesIcon,
    num: '04',
    title: 'Support',
    subtitle: 'Ongoing partnership',
    desc: 'We do not just set it up and walk away. We provide ongoing managed services — model updates, performance tuning, fine-tuning on your data, and troubleshooting.',
    details: [
      'Regular model updates as new versions release',
      'Performance monitoring and optimization',
      'Custom fine-tuning on your organization\'s data',
      'Encrypted remote management via Tailscale/WireGuard',
      'Priority support and troubleshooting',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-border bg-primary text-primary-foreground">
        <div className="gridfield absolute inset-0 opacity-[0.14]" aria-hidden />
        <Container size="xl" className="relative z-10">
          <div className="py-14 sm:py-20 max-w-3xl">
            <p className="label mb-5 text-primary-foreground/60">Operating procedure ▸ 4 steps</p>
            <h1 className="font-mono text-3xl sm:text-5xl font-bold uppercase leading-[0.95] tracking-tight">
              How it <span className="text-accent">works</span>
            </h1>
            <p className="mt-5 max-w-xl font-mono text-[11px] sm:text-sm uppercase tracking-[0.1em] leading-relaxed text-primary-foreground/80">
              From first conversation to fully operational AI — four clear steps, zero guesswork.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container size="xl">
          <div className="space-y-6">
            {steps?.map((step: any, i: number) => (
              <div key={i}>
                <div className="hud p-6 sm:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="shrink-0 md:w-40">
                      <div className="flex h-14 w-14 items-center justify-center border-2 border-primary/40">
                        <step.icon className="h-7 w-7 text-primary" />
                      </div>
                      <span className="mt-3 block font-mono text-5xl font-bold text-accent/60">{step?.num}</span>
                    </div>
                    <div className="flex-1">
                      <p className="label mb-2">{step?.subtitle}</p>
                      <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-tight mb-4">{step?.title}</h2>
                      <p className="text-muted-foreground mb-6">{step?.desc}</p>
                      <ul className="space-y-2 border-t-2 border-foreground/15 pt-4">
                        {step?.details?.map((d: string, j: number) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {i < (steps?.length ?? 0) - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowDown className="h-5 w-5 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center text-center">
            <p className="label mb-4">Ready?</p>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4">
              Ready to <span className="text-accent">get started?</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-lg">
              The assessment is free and comes with a detailed recommendation report — no strings attached.
            </p>
            <Link href="/contact?type=audit">
              <Button variant="hud-primary" className="px-8">
                Schedule your free audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}