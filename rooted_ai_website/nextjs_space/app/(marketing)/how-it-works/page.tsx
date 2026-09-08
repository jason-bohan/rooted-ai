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
    subtitle: 'Understand Your Needs',
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
    subtitle: 'Build Your Hardware',
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
    subtitle: 'Install & Connect',
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
    subtitle: 'Ongoing Partnership',
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
      <section className="bg-primary pt-20 pb-16">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary-foreground mb-4">
              How It <span className="text-accent">Works</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              From first conversation to fully operational AI — four clear steps, zero guesswork.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container size="xl">
          <div className="space-y-8">
            {steps?.map((step: any, i: number) => (
              <div key={i}>
                <div className="bg-card rounded-2xl p-8 sm:p-10 shadow-[var(--shadow-md)]">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="font-mono text-4xl font-bold text-primary/30 block mt-2">{step?.num}</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-2xl font-bold tracking-tight mb-1">{step?.title}</h2>
                      <p className="text-accent font-medium text-sm mb-3">{step?.subtitle}</p>
                      <p className="text-muted-foreground mb-6">{step?.desc}</p>
                      <ul className="space-y-2">
                        {step?.details?.map((d: string, j: number) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {i < (steps?.length ?? 0) - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowDown className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              The assessment is free and comes with a detailed recommendation report — no strings attached.
            </p>
            <Link href="/contact?type=audit">
              <Button size="lg" className="px-8">
                Schedule Your Free Audit <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
