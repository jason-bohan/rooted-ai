import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Library, Users, FileSearch, Landmark, GraduationCap,
  ArrowRight, CheckCircle2
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Use Cases',
  description: 'Real-world applications of local AI: library chatbots, HR bots, document search, and more.',
}

const useCases = [
  {
    icon: Library,
    num: '01',
    title: 'Library Archive Chatbot',
    scenario: 'A public library has decades of digitized local history — newspapers, photos, genealogy records. Staff spend hours helping patrons search through it all.',
    solution: 'With Rooted AI, patrons and staff can ask natural-language questions and get instant answers sourced directly from the library\'s own digital archives. No data ever leaves the building.',
    benefits: ['Instant search across decades of archives', 'Natural language queries — no advanced search syntax needed', 'Patron privacy protected — queries stay local', 'Staff freed up for higher-value work'],
    color: 'primary',
  },
  {
    icon: Users,
    num: '02',
    title: 'HR Knowledge Bot',
    scenario: 'A mid-size company receives hundreds of employee questions each month: benefits, PTO policies, onboarding procedures. HR is overwhelmed.',
    solution: 'The AI answers employee questions instantly from the company\'s own handbook, policies, and SOPs. Sensitive HR data never touches an external server.',
    benefits: ['24/7 answers to common HR questions', 'Trained exclusively on your own policies', 'Sensitive employee data stays on-premise', 'Reduces HR ticket volume dramatically'],
    color: 'accent',
  },
  {
    icon: FileSearch,
    num: '03',
    title: 'Internal Document Search',
    scenario: 'A law firm, medical practice, or financial services company needs to search thousands of internal documents — contracts, case files, patient records.',
    solution: 'Rooted AI indexes your document repository and provides AI-powered search that understands context, not just keywords. Meets strict compliance requirements because nothing leaves your network.',
    benefits: ['Contextual search — understands meaning, not just keywords', 'Works with PDFs, Word docs, emails, and databases', 'HIPAA / SOC2 / GDPR compatible by design', 'Dramatically faster research and discovery'],
    color: 'primary',
  },
  {
    icon: Landmark,
    num: '04',
    title: 'Municipal & Government',
    scenario: 'City departments handle citizen requests, internal procedures, and compliance documentation. Staff need quick answers but cloud AI raises security concerns.',
    solution: 'A locally deployed AI gives city employees access to procedural knowledge, forms, and policy documents without any data leaving government-controlled infrastructure.',
    benefits: ['No cloud compliance worries', 'Air-gapped operation possible', 'Serves multiple departments from one server', 'Citizen data stays in government control'],
    color: 'accent',
  },
  {
    icon: GraduationCap,
    num: '05',
    title: 'School District Knowledge Base',
    scenario: 'Teachers and administrators constantly need to reference policies, curriculum standards, safety procedures, and HR documents scattered across multiple systems.',
    solution: 'Rooted AI creates a conversational knowledge base that unifies all district documents. Teachers ask questions in plain English and get accurate, sourced answers.',
    benefits: ['Unified access to policies, procedures, and curriculum', 'FERPA-compliant — student data stays local', 'Reduces admin burden on teachers', 'Easy to update as policies change'],
    color: 'primary',
  },
]

export default function UseCasesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-border bg-primary text-primary-foreground">
        <div className="gridfield absolute inset-0 opacity-[0.14]" aria-hidden />
        <Container size="xl" className="relative z-10">
          <div className="py-14 sm:py-20 max-w-3xl">
            <p className="label mb-5 text-primary-foreground/60">Deployments ▸ 5 field cases</p>
            <h1 className="font-mono text-3xl sm:text-5xl font-bold uppercase leading-[0.95] tracking-tight">
              Real-world <span className="text-accent">use cases</span>
            </h1>
            <p className="mt-5 max-w-xl font-mono text-[11px] sm:text-sm uppercase tracking-[0.1em] leading-relaxed text-primary-foreground/80">
              See how organizations like yours are using private, local AI to transform their workflows.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container size="xl">
          <div className="space-y-8">
            {useCases?.map((uc: any, i: number) => {
              const colorClass = uc?.color === 'accent' ? 'text-accent' : 'text-primary'
              const borderClass = uc?.color === 'accent' ? 'border-accent/40' : 'border-primary/40'
              return (
                <div key={i} className="hud overflow-hidden">
                  <div className="p-7 sm:p-10">
                    <div className="mb-8 flex flex-wrap items-center gap-4 border-b-2 border-foreground/15 pb-5">
                      <span className="font-mono text-4xl font-bold text-accent/60">{uc?.num}</span>
                      <span className={`flex h-11 w-11 items-center justify-center border-2 ${borderClass}`}>
                        <uc.icon className={`h-5 w-5 ${colorClass}`} />
                      </span>
                      <h2 className="font-mono text-xl sm:text-2xl font-bold uppercase tracking-tight">{uc?.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="label mb-3">The scenario</h3>
                        <p className="text-foreground/80 mb-6">{uc?.scenario}</p>
                        <h3 className="label mb-3">The rooted ai solution</h3>
                        <p className="text-foreground/80">{uc?.solution}</p>
                      </div>
                      <div>
                        <h3 className="label mb-3">Key benefits</h3>
                        <ul className="space-y-2">
                          {uc?.benefits?.map((b: string, j: number) => (
                            <li key={j} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${colorClass}`} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 flex flex-col items-center text-center">
            <p className="label mb-4">Different problem?</p>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4">
              Have another <span className="text-accent">use case in mind?</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-lg">
              We love solving new problems. Tell us about your organization and we will design a custom solution.
            </p>
            <Link href="/contact">
              <Button variant="hud-primary" className="px-8">
                Tell us about your needs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}