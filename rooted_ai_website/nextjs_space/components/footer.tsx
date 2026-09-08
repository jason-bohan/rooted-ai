import Link from 'next/link'
import { Container } from '@/components/layouts/container'
import { OrganicNetwork } from '@/components/decor/organic-network'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-border bg-primary text-primary-foreground">
      <OrganicNetwork className="absolute inset-0 h-full w-full scale-x-[-1]" style={{ opacity: 0.12 }} />
      <Container size="xl" className="relative z-10">
        <div className="py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand / terminal */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="blob inline-block h-4 w-4 border-2 border-primary-foreground bg-primary-foreground/10" />
              <span className="font-mono text-base font-bold lowercase tracking-[0.08em]">
                Rooted<span className="text-accent">.ai</span>
              </span>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground/70 leading-relaxed max-w-sm">
              Locally-owned AI infrastructure. Private systems for organizations, and a mesh of community-owned compute for everyone else.
            </p>
            <div className="mt-6 space-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/50">
              <p>▸ status …… online / locally-run</p>
              <p>▸ egress ….. 0 requests to cloud APIs <span className="text-accent">●</span></p>
              <p>▸ node …… yours, or the community's</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="label mb-4 text-primary-foreground/50">Organizations</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/solutions" className="w-fit font-mono text-xs uppercase tracking-[0.12em] text-primary-foreground/85 hover:text-accent transition-colors">Solutions</Link>
              <Link href="/how-it-works" className="w-fit font-mono text-xs uppercase tracking-[0.12em] text-primary-foreground/85 hover:text-accent transition-colors">How It Works</Link>
              <Link href="/use-cases" className="w-fit font-mono text-xs uppercase tracking-[0.12em] text-primary-foreground/85 hover:text-accent transition-colors">Use Cases</Link>
              <Link href="/security" className="w-fit font-mono text-xs uppercase tracking-[0.12em] text-primary-foreground/85 hover:text-accent transition-colors">Security</Link>
            </nav>
            <h4 className="label mb-4 mt-8 text-primary-foreground/50">Mesh Initiative</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/mesh" className="w-fit font-mono text-xs uppercase tracking-[0.12em] text-accent hover:text-primary-foreground transition-colors">The Initiative</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="label mb-4 text-primary-foreground/50">Get In Touch</h4>
            <div className="flex flex-col gap-2">
              <Link href="/contact?type=audit" className="inline-block border-2 border-primary-foreground/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors" style={{ borderRadius: 'var(--radius-organic)' }}>
                Schedule a free infrastructure audit
              </Link>
              <Link href="/contact?type=mesh" className="inline-block border-2 border-accent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent hover:bg-accent hover:text-accent-foreground transition-colors" style={{ borderRadius: 'var(--radius-organic)' }}>
                Join the mesh initiative
              </Link>
            </div>
            <p className="mt-4 font-mono text-xs text-primary-foreground/70" suppressHydrationWarning>
              jasonbohan2@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t-2 border-primary-foreground/20 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground/50">
            © 2025 Rooted AI. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground/40">
            Private AI for organizations · community-owned compute for everyone else
          </p>
        </div>
      </Container>
    </footer>
  )
}