import Link from 'next/link'
import { Container } from '@/components/layouts/container'
import { Leaf } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container size="xl">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold">Rooted AI</span>
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Private, powerful AI infrastructure built for your organization. Your data never leaves your building.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/60">Navigate</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/solutions" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Solutions</Link>
              <Link href="/how-it-works" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">How It Works</Link>
              <Link href="/use-cases" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Use Cases</Link>
              <Link href="/security" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Security</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-3 text-sm uppercase tracking-wider text-primary-foreground/60">Get In Touch</h4>
            <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors block mb-2">
              Schedule a Free Infrastructure Audit
            </Link>
            <p className="text-sm text-primary-foreground/60">
              <span suppressHydrationWarning>jasonbohan2@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-primary-foreground/50">© 2025 Rooted AI. All rights reserved.</p>
          <p className="text-xs text-primary-foreground/40">Local AI infrastructure for businesses, libraries & non-profits.</p>
        </div>
      </Container>
    </footer>
  )
}
