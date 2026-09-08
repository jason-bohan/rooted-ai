import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { PageHero } from '@/components/layouts/page-hero'
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
  { icon: Lock, title: 'Physical data isolation', desc: 'Your AI server sits in your building. Data is processed locally and never transmitted externally. This is the strongest form of data security.' },
  { icon: Eye, title: 'Open source transparency', desc: 'We use auditable, open-source models like Llama and Mistral. No proprietary black boxes — you can inspect every layer of the AI stack.' },
  { icon: Network, title: 'Encrypted mesh networking', desc: 'For multi-location organizations, we use Tailscale or WireGuard to create encrypted private tunnels. No data touches the public internet.' },
  { icon: Server, title: 'Hardware you own', desc: 'The server is yours. If you ever want to stop working with us, your hardware and data remain fully under your control.' },
  { icon: FileCheck, title: 'Compliance made simple', desc: 'HIPAA, SOC2, FERPA, GDPR — when data never leaves your network, compliance is dramatically simpler.' },
  { icon: Shield, title: 'No vendor lock-in', desc: 'Swap models anytime. Add new data sources. Scale hardware up. You are never locked into a proprietary ecosystem.' },
]

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security ▸ by architecture, not promise"
        title="Trust &"
        accent="security"
        sub="Your data never leaves your building. That is not a marketing promise — it is the architecture."
      />

      <Section>
        <Container size="xl">
          <div className="mb-12 border-b-2 border-foreground/15 pb-8">
            <p className="label mb-3">The core claim</p>
            <h2 className="font-mono text-2xl sm:text-4xl font-bold uppercase tracking-tight mb-4">
              Why local AI is <span className="text-accent">inherently safer</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Cloud AI sends your data to someone else's server. Local AI keeps it in your building. The security difference is not incremental — it is fundamental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures?.map((f: any, i: number) => (
              <div key={i} className="hud p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-primary/40">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-mono text-sm font-bold uppercase tracking-tight mb-2">{f?.title}</h3>
                <p className="text-sm text-muted-foreground">{f?.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40 border-y-2 border-border">
        <Container size="xl">
          <div className="mb-10 border-b-2 border-foreground/15 pb-8">
            <p className="label mb-3">Comparison</p>
            <h2 className="font-mono text-2xl sm:text-4xl font-bold uppercase tracking-tight">
              Local AI vs. <span className="text-accent">cloud AI</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">See exactly how Rooted AI compares to cloud-based alternatives.</p>
          </div>

          <div className="hud overflow-x-auto border-2 border-foreground/20">
            <div className="min-w-[620px]">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground">
                <div className="p-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em]">Feature</div>
                <div className="p-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-center">Rooted AI · local</div>
                <div className="p-4 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-center">Cloud AI</div>
              </div>
              {comparisonRows?.map((row: any, i: number) => (
                <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? '' : 'bg-muted/40'}`}>
                  <div className="p-4 font-mono text-xs font-bold uppercase tracking-tight border-r border-foreground/15">{row?.feature}</div>
                  <div className="p-4 text-sm border-r border-foreground/15">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{row?.local}</span>
                    </div>
                  </div>
                  <div className="p-4 text-sm">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
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
          <div className="hud flex flex-col items-center p-10 sm:p-14 text-center">
            <p className="label mb-4">Questions?</p>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4">
              We love <span className="text-accent">talking about this.</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-lg">
              Schedule a free audit and we will walk through exactly how your data stays protected.
            </p>
            <Link href="/contact?type=audit">
              <Button variant="hud-primary" className="px-8">
                Schedule a security discussion <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}