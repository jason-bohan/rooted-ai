import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { ContactForm } from './_components/contact-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Schedule a free infrastructure audit or request a local AI demo from Rooted AI.',
}

const nextSteps = [
  'We will review your submission within one business day.',
  'A Rooted AI specialist will reach out to schedule a call.',
  'We will conduct a free audit of your current setup and needs.',
  'You will receive a detailed recommendation report — no strings attached.',
]

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-border bg-primary text-primary-foreground">
        <div className="gridfield absolute inset-0 opacity-[0.14]" aria-hidden />
        <Container size="xl" className="relative z-10">
          <div className="py-14 sm:py-20 max-w-3xl">
            <p className="label mb-5 text-primary-foreground/60">Contact ▸ inbound open</p>
            <h1 className="font-mono text-3xl sm:text-5xl font-bold uppercase leading-[0.95] tracking-tight">
              Get <span className="text-accent">started</span>
            </h1>
            <p className="mt-5 max-w-xl font-mono text-[11px] sm:text-sm uppercase tracking-[0.1em] leading-relaxed text-primary-foreground/80">
              Ready to bring AI inside your building? Start with a free infrastructure audit or request a live demo.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="hud p-7 sm:p-8">
                <p className="label mb-2">Form.01</p>
                <h2 className="font-mono text-xl font-bold uppercase tracking-tight mb-6">
                  Tell us about your organization
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info */}
              <div className="hud p-6">
                <h3 className="label mb-4">Contact information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center border-2 border-primary/40">
                      <Mail className="h-4 w-4 text-primary" />
                    </span>
                    <span className="text-sm" suppressHydrationWarning>jasonbohan2@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center border-2 border-primary/40">
                      <Clock className="h-4 w-4 text-primary" />
                    </span>
                    <span className="text-sm">Responses within 1 business day</span>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="border-2 border-accent/40 bg-accent/5 p-6">
                <h3 className="label mb-4">What happens next?</h3>
                <ul className="space-y-3">
                  {nextSteps?.map((step: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust */}
              <div className="hud p-6">
                <h3 className="label mb-3">No pressure, no obligation</h3>
                <p className="text-sm text-muted-foreground">
                  The infrastructure audit is completely free. We will give you an honest assessment of whether local AI is a good fit for your organization — and if it is not, we will tell you that too.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}