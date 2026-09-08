import Link from 'next/link'
import { Container } from '@/components/layouts/container'

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-primary text-primary-foreground">
      <Container size="xl">
        <div className="py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand / terminal */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block h-4 w-4 border-2 border-primary-foreground" />
              <span className="font-mono text-base font-bold uppercase tracking-[0.12em]">
                Rooted<span className="text-accent">.ai</span>
              </span>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground/70 leading-relaxed max-w-sm">
              Private, powerful AI infrastructure. Your data never leaves your building — ever.
            </p>
            <div className="mt-6 space-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/50">
              <p>▸ status …… online / on-prem</p>
              <p>▸ egress ….. 0 requests to cloud APIs <span className="text-accent">●</span></p>
              <p>▸ node …… yours, in your building</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="label mb-4 text-primary-foreground/50">Navigate</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/solutions" className="w-fit font-mono text-xs uppercase tracking-[0.12em] text-primary-foreground/85 hover:text-accent transition-colors">Solutions</Link>
              <Link href="/how-it-works" className="w-fit font-mono text-xs uppercase tracking-[0.12em] text-primary-foreground/85 hover:text-accent transition-colors">How It Works</Link>
              <Link href="/use-cases" className="w-fit font-mono text-xs uppercase tracking-[0.12em] text-primary-foreground/85 hover:text-accent transition-colors">Use Cases</Link>
              <Link href="/security" className="w-fit font-mono text-xs uppercase tracking-[0.12em] text-primary-foreground/85 hover:text-accent transition-colors">Security</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="label mb-4 text-primary-foreground/50">Get In Touch</h4>
            <Link href="/contact" className="inline-block border-2 border-primary-foreground/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors">
              Schedule a free infrastructure audit
            </Link>
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
            Local AI for businesses, libraries & non-profits
          </p>
        </div>
      </Container>
    </footer>
  )
}