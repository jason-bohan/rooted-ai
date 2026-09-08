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
    title: 'Library Archive Chatbot',
    scenario: 'A public library has decades of digitized local history — newspapers, photos, genealogy records. Staff spend hours helping patrons search through it all.',
    solution: 'With Rooted AI, patrons and staff can ask natural-language questions and get instant answers sourced directly from the library\'s own digital archives. No data ever leaves the building.',
    benefits: ['Instant search across decades of archives', 'Natural language queries — no advanced search syntax needed', 'Patron privacy protected — queries stay local', 'Staff freed up for higher-value work'],
    color: 'primary',
  },
  {
    icon: Users,
    title: 'HR Knowledge Bot',
    scenario: 'A mid-size company receives hundreds of employee questions each month: benefits, PTO policies, onboarding procedures. HR is overwhelmed.',
    solution: 'The AI answers employee questions instantly from the company\'s own handbook, policies, and SOPs. Sensitive HR data never touches an external server.',
    benefits: ['24/7 answers to common HR questions', 'Trained exclusively on your own policies', 'Sensitive employee data stays on-premise', 'Reduces HR ticket volume dramatically'],
    color: 'accent',
  },
  {
    icon: FileSearch,
    title: 'Internal Document Search',
    scenario: 'A law firm, medical practice, or financial services company needs to search thousands of internal documents — contracts, case files, patient records.',
    solution: 'Rooted AI indexes your document repository and provides AI-powered search that understands context, not just keywords. Meets strict compliance requirements because nothing leaves your network.',
    benefits: ['Contextual search — understands meaning, not just keywords', 'Works with PDFs, Word docs, emails, and databases', 'HIPAA / SOC2 / GDPR compatible by design', 'Dramatically faster research and discovery'],
    color: 'primary',
  },
  {
    icon: Landmark,
    title: 'Municipal & Government',
    scenario: 'City departments handle citizen requests, internal procedures, and compliance documentation. Staff need quick answers but cloud AI raises security concerns.',
    solution: 'A locally deployed AI gives city employees access to procedural knowledge, forms, and policy documents without any data leaving government-controlled infrastructure.',
    benefits: ['No cloud compliance worries', 'Air-gapped operation possible', 'Serves multiple departments from one server', 'Citizen data stays in government control'],
    color: 'accent',
  },
  {
    icon: GraduationCap,
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
      <section className="bg-primary pt-20 pb-16">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary-foreground mb-4">
              Real-World <span className="text-accent">Use Cases</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              See how organizations like yours are using private, local AI to transform their workflows.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container size="xl">
          <div className="space-y-10">
            {useCases?.map((uc: any, i: number) => {
              const colorClass = uc?.color === 'accent' ? 'text-accent' : 'text-primary'
              const bgClass = uc?.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
              return (
                <div key={i} className="bg-card rounded-2xl shadow-[var(--shadow-md)] overflow-hidden">
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-lg ${bgClass} flex items-center justify-center`}>
                        <uc.icon className={`w-6 h-6 ${colorClass}`} />
                      </div>
                      <h2 className="font-display text-2xl font-bold tracking-tight">{uc?.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">The Scenario</h3>
                        <p className="text-foreground/80 mb-4">{uc?.scenario}</p>
                        <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">The Rooted AI Solution</h3>
                        <p className="text-foreground/80">{uc?.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Key Benefits</h3>
                        <ul className="space-y-2">
                          {uc?.benefits?.map((b: string, j: number) => (
                            <li key={j} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${colorClass}`} />
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

          <div className="text-center mt-16">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Have a different use case in mind?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              We love solving new problems. Tell us about your organization and we will design a custom solution.
            </p>
            <Link href="/contact">
              <Button size="lg" className="px-8">
                Tell Us About Your Needs <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
