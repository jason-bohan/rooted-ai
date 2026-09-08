import { Container } from '@/components/layouts/container'
import { OrganicNetwork } from '@/components/decor/organic-network'

interface PageHeroProps {
  eyebrow: string
  title: string
  accent?: string
  sub: string
  pattern?: 'grid' | 'blueprint'
  size?: 'default' | 'large'
  organicOpacity?: number
  children?: React.ReactNode
}

export function PageHero({ eyebrow, title, accent, sub, pattern = 'grid', size = 'default', organicOpacity = 0.14, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b-2 border-border bg-primary text-primary-foreground">
      <div
        className={`${pattern === 'blueprint' ? 'blueprint' : 'gridfield'} absolute inset-0 opacity-[0.14]`}
        aria-hidden
      />
      <OrganicNetwork className="absolute inset-0 h-full w-full" style={{ opacity: organicOpacity }} />
      <Container size="xl" className="relative z-10">
        <div className={`py-14 sm:py-20 ${size === 'large' ? 'max-w-4xl' : 'max-w-3xl'}`}>
          <p className="label mb-5 text-primary-foreground/60">{eyebrow}</p>
          <h1
            className={`font-mono font-bold lowercase leading-[0.95] tracking-tight ${
              size === 'large' ? 'text-4xl sm:text-6xl lg:text-7xl' : 'text-3xl sm:text-5xl'
            }`}
          >
            {title} {accent && <span className="text-accent">{accent}</span>}
          </h1>
          <p className="mt-5 max-w-xl font-mono text-[11px] sm:text-sm lowercase tracking-[0.06em] leading-relaxed text-primary-foreground/80">
            {sub}
          </p>
          {children}
        </div>
      </Container>
    </section>
  )
}
