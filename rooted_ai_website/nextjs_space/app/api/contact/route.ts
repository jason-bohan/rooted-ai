export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const data = await request?.json()

    const name = String(data?.name ?? '').trim()
    const organization = String(data?.organization ?? '').trim()
    const email = String(data?.email ?? '').trim()
    const phone = data?.phone ? String(data.phone).trim() : null
    const organizationType = String(data?.organizationType ?? '').trim()
    const message = String(data?.message ?? '').trim()
    const formType = String(data?.formType ?? 'general').trim()

    if (!name || !email || !organization || !organizationType || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    // Save to database
    await prisma.contactSubmission.create({
      data: {
        name,
        organization,
        email,
        phone,
        organizationType,
        message,
        formType,
      },
    })

    // Send email notification
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2D5016; border-bottom: 2px solid #C17F24; padding-bottom: 10px;">
          New ${formType === 'audit' ? 'Infrastructure Audit Request' : formType === 'demo' ? 'Demo Request' : 'Contact Form Submission'}
        </h2>
        <div style="background: #F5F0E8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Organization:</strong> ${organization}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
          <p style="margin: 8px 0;"><strong>Organization Type:</strong> ${organizationType}</p>
          <p style="margin: 8px 0;"><strong>Request Type:</strong> ${formType}</p>
        </div>
        <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2D5016; margin: 20px 0;">
          <p style="margin: 0; font-weight: bold; color: #666;">Message:</p>
          <p style="margin: 8px 0 0 0;">${message}</p>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          Submitted via Rooted AI website
        </p>
      </div>
    `

    const appUrl = process.env.NEXTAUTH_URL ?? ''
    let appHost = 'rootedai'
    try {
      appHost = new URL(appUrl).hostname?.split('.')?.[0] ?? 'rootedai'
    } catch (_e: any) {
      // fallback
    }

    try {
      const emailRes = await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.ABACUSAI_API_KEY ?? ''}`,
        },
        body: JSON.stringify({
          app_id: process.env.WEB_APP_ID ?? '',
          notification_id: process.env.NOTIF_ID_CONTACT_FORM_SUBMISSION ?? '',
          subject: `New ${formType === 'audit' ? 'Audit Request' : formType === 'demo' ? 'Demo Request' : 'Contact'} from ${name} (${organization})`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'jasonbohan2@gmail.com',
          reply_to: email,
          sender_email: `noreply@${(() => { try { return new URL(appUrl).hostname } catch(_e: any) { return 'mail.abacusai.app' } })()}`,
          sender_alias: 'Rooted AI',
        }),
      })

      const emailResult = await emailRes?.json?.()
      if (!emailResult?.success && !emailResult?.notification_disabled) {
        console.error('Email notification failed:', emailResult)
      }
    } catch (emailErr: any) {
      console.error('Email notification error:', emailErr)
      // Don't fail the form submission if email fails
    }

    return NextResponse.json({ success: true, message: 'Form submitted successfully' })
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process submission. Please try again.' },
      { status: 500 }
    )
  }
}
