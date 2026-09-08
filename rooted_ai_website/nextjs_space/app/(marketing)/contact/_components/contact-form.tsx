'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'

const orgTypes = [
  'Business',
  'Library',
  'Non-Profit',
  'Government',
  'School / School District',
  'Other',
]

const meshOrgTypes = [
  'Individual',
  'Community Group',
  'Municipality / Town',
  'Researcher / Builder',
  'Other',
]

export function ContactForm() {
  const searchParams = useSearchParams()
  const formType = searchParams?.get('type') ?? 'general'
  const isMesh = formType === 'mesh'

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    organizationType: '',
    message: '',
  })

  useEffect(() => {
    if (formType === 'audit') {
      setForm((prev: any) => ({
        ...(prev ?? {}),
        message: prev?.message || 'I would like to schedule a free infrastructure audit for my organization.',
      }))
    } else if (formType === 'demo') {
      setForm((prev: any) => ({
        ...(prev ?? {}),
        message: prev?.message || 'I would like to request a local AI demo for my organization.',
      }))
    } else if (formType === 'mesh') {
      setForm((prev: any) => ({
        ...(prev ?? {}),
        message: prev?.message || 'I would like to learn more about / get involved with the Mesh Initiative.',
      }))
    }
  }, [formType])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e?.target ?? {}
    setForm((prev: any) => ({ ...(prev ?? {}), [name ?? '']: value ?? '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    if (!form?.name || !form?.email || !form?.organization || !form?.organizationType || !form?.message) {
      toast.error('Please fill in all required fields.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...(form ?? {}), formType }),
      })
      const data = await res?.json?.()
      if (data?.success) {
        setSubmitted(true)
        toast.success('Message sent successfully!')
      } else {
        toast.error(data?.message ?? 'Something went wrong. Please try again.')
      }
    } catch (err: any) {
      console.error('Contact form error:', err)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-display text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for reaching out. We will review your submission and get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            value={form?.name ?? ''}
            onChange={handleChange}
            className="mt-1.5"
            required
          />
        </div>
        <div>
          <Label htmlFor="organization">{isMesh ? 'Organization / Town *' : 'Organization *'}</Label>
          <Input
            id="organization"
            name="organization"
            placeholder={isMesh ? 'Organization, town, or "Individual"' : 'Organization name'}
            value={form?.organization ?? ''}
            onChange={handleChange}
            className="mt-1.5"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@organization.com"
            value={form?.email ?? ''}
            onChange={handleChange}
            className="mt-1.5"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
            value={form?.phone ?? ''}
            onChange={handleChange}
            className="mt-1.5"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="organizationType">{isMesh ? 'You are a *' : 'Organization Type *'}</Label>
        <select
          id="organizationType"
          name="organizationType"
          value={form?.organizationType ?? ''}
          onChange={handleChange}
          className="mt-1.5 flex h-10 w-full rounded-[var(--radius)] border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          required
        >
          <option value="" disabled>{isMesh ? 'Select one' : 'Select organization type'}</option>
          {(isMesh ? meshOrgTypes : orgTypes)?.map((type: string) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="message">{isMesh ? 'Tell us what interests you *' : 'Tell us about your needs *'}</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={isMesh ? 'What draws you to the mesh initiative? Are you interested in a pilot?' : 'What challenges are you facing? What would you like AI to help with?'}
          value={form?.message ?? ''}
          onChange={handleChange}
          className="mt-1.5 min-h-[120px]"
          required
        />
      </div>

      <p className="text-xs text-muted-foreground">
        Your information is stored securely and will only be used to respond to your inquiry.
      </p>

      <Button type="submit" size="lg" className="w-full sm:w-auto px-8" disabled={loading}>
        {loading ? (
          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-4 h-4 mr-2" /> Send Message</>
        )}
      </Button>
    </form>
  )
}
