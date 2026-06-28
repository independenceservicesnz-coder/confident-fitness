import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, age, phone, email, location, goal } = body

    if (!name || !phone || !email) {
      return NextResponse.json({ error: 'Name, phone and email are required' }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // Save to Supabase if configured
    if (supabaseUrl && supabaseKey && supabaseUrl.startsWith('http')) {
      const { createClient } = await import('@supabase/supabase-js')
      const supabase = createClient(supabaseUrl, supabaseKey)

      const { error } = await supabase
        .from('contacts')
        .insert([{ name, age, phone, email, location, goal }])

      if (error) {
        console.error('Supabase error:', error)
      }
    }

    // Send email notification via Resend if configured
    const resendKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.NOTIFY_EMAIL

    if (resendKey && notifyEmail) {
      const { Resend } = await import('resend')
      const resend = new Resend(resendKey)

      await resend.emails.send({
        from: 'Confident Fitness <onboarding@resend.dev>',
        to: notifyEmail,
        subject: `New enquiry from ${name}`,
        html: `
          <h2>New contact form submission</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${name}</td></tr>
            <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px"><a href="tel:${phone}">${phone}</a></td></tr>
            <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Age</td><td style="padding:8px">${age || '—'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Location</td><td style="padding:8px">${location || '—'}</td></tr>
            <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Goal</td><td style="padding:8px">${goal || '—'}</td></tr>
          </table>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
