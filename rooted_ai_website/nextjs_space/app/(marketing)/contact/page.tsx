import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { Mail, Phone, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
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
      <section className="bg-primary pt-20 pb-16">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary-foreground mb-4">
              Get <span className="text-accent">Started</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Ready to bring AI inside your building? Start with a free infrastructure audit or request a live demo.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-md)]">
                <h2 className="font-display text-2xl font-bold tracking-tight mb-6">Tell Us About Your Organization</h2>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact info */}
              <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-md)]">
                <h3 className="font-display font-semibold text-lg mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-sm" suppressHydrationWarning>jasonbohan2@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm">Responses within 1 business day</span>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="font-display font-semibold text-lg mb-4">What Happens Next?</h3>
                <ul className="space-y-3">
                  {nextSteps?.map((step: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust */}
              <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-md)]">
                <h3 className="font-display font-semibold text-lg mb-2">No Pressure, No Obligation</h3>
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
