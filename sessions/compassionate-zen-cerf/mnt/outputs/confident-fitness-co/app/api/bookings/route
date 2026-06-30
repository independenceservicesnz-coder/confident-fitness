import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key || !url.startsWith('http')) return null
  return createClient(url, key)
}

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get('date')
  if (!date) {
    return NextResponse.json({ error: 'date is required' }, { status: 400 })
  }

  const supabase = getSupabase()
  if (!supabase) return NextResponse.json({ bookedTimes: [] })

  const { data, error } = await supabase
    .from('bookings')
    .select('booking_time')
    .eq('booking_date', date)
    .neq('status', 'cancelled')

  if (error) {
    console.error('Bookings GET error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }

  return NextResponse.json({ bookedTimes: data.map(b => b.booking_time) })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, date, time, notes } = body

    if (!name || !email || !service || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const supabase = getSupabase()
    if (!supabase) {
      return NextResponse.json({ error: 'Booking system not configured' }, { status: 500 })
    }

    const { error } = await supabase.from('bookings').insert([{
      name, email, phone, service,
      booking_date: date,
      booking_time: time,
      notes,
    }])

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ error: 'That time slot was just taken. Please pick another.' }, { status: 409 })
      }
      console.error('Bookings POST error:', error)
      return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }

    const resendKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.NOTIFY_EMAIL
    if (resendKey && notifyEmail) {
      const { Resend } = await import('resend')
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'Confident Fitness <onboarding@resend.dev>',
        to: notifyEmail,
        subject: `New booking: ${name} — ${date} ${time}`,
        html: `
          <h2>New booking request</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${name}</td></tr>
            <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${email}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${phone || '—'}</td></tr>
            <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Service</td><td style="padding:8px">${service}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Date</td><td style="padding:8px">${date}</td></tr>
            <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Time</td><td style="padding:8px">${time}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Notes</td><td style="padding:8px">${notes || '—'}</td></tr>
          </table>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Bookings POST error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
