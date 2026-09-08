'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/layouts/container'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/solutions', label: 'Solutions', index: '01' },
  { href: '/how-it-works', label: 'How It Works', index: '02' },
  { href: '/use-cases', label: 'Use Cases', index: '03' },
  { href: '/security', label: 'Security', index: '04' },
  { href: '/contact', label: 'Contact', index: '05' },
]

const meshLink = { href: '/mesh', label: 'Mesh Initiative' }

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-background">
      {/* meta strip */}
      <div className="hidden lg:block border-b border-border bg-primary text-primary-foreground">
        <Container size="xl" className="flex h-7 items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em]">
            Local AI infrastructure
          </p>
          <Link href="/mesh" className="font-mono text-[10px] uppercase tracking-[0.22em] hover:text-accent transition-colors">
            Compute you control <span className="ml-1 text-accent">●</span>
          </Link>
        </Container>
      </div>

      <Container size="xl">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="blob inline-block h-6 w-6 border-2 border-primary bg-primary transition-transform duration-normal group-hover:rotate-[15deg]" />
            <span className="font-mono text-lg font-bold lowercase tracking-[0.08em] text-foreground">
              Rooted<span className="text-primary">.ai</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks?.map((link: { href: string; label: string; index: string }) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors border-b-2',
                  pathname === link.href
                    ? 'text-foreground border-primary'
                    : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border'
                )}
              >
                <span className="mr-1 text-accent">{link.index}</span>
                {link.label}
              </Link>
            ))}
            <Link
              href={meshLink.href}
              className={cn(
                'ml-2 border-2 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors',
                pathname === meshLink.href
                  ? 'border-accent bg-accent text-accent-foreground'
                  : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
              )}
            >
              {meshLink.label}
            </Link>
            <Link href="/contact" className="ml-3">
              <Button size="sm" variant="hud-primary" className="h-8 px-4">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 border-2 border-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-2 border-border bg-background"
          >
            <Container size="xl">
              <nav className="py-4 flex flex-col gap-1">
                {navLinks?.map((link: { href: string; label: string; index: string }) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'px-3 py-3 font-mono text-xs uppercase tracking-[0.14em] border-l-2 transition-colors',
                      pathname === link.href
                        ? 'text-foreground border-accent bg-muted'
                        : 'text-muted-foreground border-transparent hover:text-foreground'
                    )}
                  >
                    <span className="mr-2 text-accent">{link.index}</span>
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={meshLink.href}
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-3 py-3 font-mono text-xs uppercase tracking-[0.14em] border-l-2 border-accent text-accent"
                >
                  ▸ {meshLink.label}
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-3">
                  <Button variant="hud-primary" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}