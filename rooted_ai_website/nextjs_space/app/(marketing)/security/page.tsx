import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Shield, Lock, Eye, Server, Network, FileCheck,
  ArrowRight, CheckCircle2, AlertTriangle
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trust & Security',
  description: 'Why local AI is safer than cloud AI. Your data never leaves your building with Rooted AI.',
}

const comparisonRows = [
  { feature: 'Data Location', local: 'Your building — physically on-site', cloud: 'Third-party data centers (AWS, Azure, etc.)' },
  { feature: 'Data Exposure Risk', local: 'None — data never crosses a network boundary', cloud: 'Data transmitted to and stored on external servers' },
  { feature: 'Cost Model', local: 'One-time hardware purchase', cloud: 'Recurring per-token / monthly subscription fees' },
  { feature: 'Model Transparency', local: 'Open-source, auditable code (Llama, Mistral)', cloud: 'Proprietary black-box models' },
  { feature: 'Vendor Lock-in', local: 'None — you own the hardware and can swap models freely', cloud: 'Heavily dependent on provider APIs and pricing' },
  { feature: 'Compliance', local: 'Simplified — data stays under your control', cloud: 'Requires complex DPAs, BAAs, and trust in third parties' },
  { feature: 'Internet Required', local: 'No — fully air-gapped operation possible', cloud: 'Yes — requires constant internet connection' },
]

const securityFeatures = [
  { icon: Lock, title: 'Physical Data Isolation', desc: 'Your AI server sits in your building. Data is processed locally and never transmitted externally. This is the strongest form of data security.' },
  { icon: Eye, title: 'Open Source Transparency', desc: 'We use auditable, open-source models like Llama and Mistral. No proprietary black boxes — you can inspect every layer of the AI stack.' },
  { icon: Network, title: 'Encrypted Mesh Networking', desc: 'For multi-location organizations, we use Tailscale or WireGuard to create encrypted private tunnels. No data touches the public internet.' },
  { icon: Server, title: 'Hardware You Own', desc: 'The server is yours. If you ever want to stop working with us, your hardware and data remain fully under your control.' },
  { icon: FileCheck, title: 'Compliance Made Simple', desc: 'HIPAA, SOC2, FERPA, GDPR — when data never leaves your network, compliance is dramatically simpler.' },
  { icon: Shield, title: 'No Vendor Lock-in', desc: 'Swap models anytime. Add new data sources. Scale hardware up. You are never locked into a proprietary ecosystem.' },
]

export default function SecurityPage() {
  return (
    <>
      <section className="bg-primary pt-20 pb-16">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary-foreground mb-4">
              Trust & <span className="text-accent">Security</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Your data never leaves your building. That is not a marketing promise — it is the architecture.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-4">
              Why Local AI is <span className="text-primary">Inherently Safer</span>
            </h2>
            <p className="text-muted-foreground">
              Cloud AI sends your data to someone else's server. Local AI keeps it in your building. The security difference is not incremental — it is fundamental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures?.map((f: any, i: number) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{f?.title}</h3>
                <p className="text-sm text-muted-foreground">{f?.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/30">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-4">
              Local AI vs. <span className="text-accent">Cloud AI</span>
            </h2>
            <p className="text-muted-foreground">See exactly how Rooted AI compares to cloud-based alternatives.</p>
          </div>

          <div className="bg-card rounded-2xl shadow-[var(--shadow-md)] overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground">
                <div className="p-4 font-display font-semibold text-sm">Feature</div>
                <div className="p-4 font-display font-semibold text-sm text-center">Rooted AI (Local)</div>
                <div className="p-4 font-display font-semibold text-sm text-center">Cloud AI (ChatGPT, etc.)</div>
              </div>
              {comparisonRows?.map((row: any, i: number) => (
                <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-card' : 'bg-muted/30'}`}>
                  <div className="p-4 font-medium text-sm">{row?.feature}</div>
                  <div className="p-4 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{row?.local}</span>
                    </div>
                  </div>
                  <div className="p-4 text-sm">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{row?.cloud}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="xl">
          <div className="text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Security questions? We love talking about this.
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Schedule a free audit and we will walk through exactly how your data stays protected.
            </p>
            <Link href="/contact?type=audit">
              <Button size="lg" className="px-8">
                Schedule a Security Discussion <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
