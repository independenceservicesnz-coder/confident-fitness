import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const { priceId, bookingDate, bookingTime, bookingName } = await req.json()

    if (!priceId || priceId.startsWith('REPLACE_')) {
      return NextResponse.json(
        { error: 'Stripe price ID not configured.' },
        { status: 400 }
      )
    }

    const origin = req.headers.get('origin') || 'http://localhost:3000'

    const SUBSCRIPTION_PRICE_ID = 'price_1TnRKJHv7YcsPT767g8Jwrwi'
    const isSubscription = priceId === SUBSCRIPTION_PRICE_ID

    const successParams = new URLSearchParams({ session_id: '{CHECKOUT_SESSION_ID}' })
    if (bookingDate) successParams.set('date', bookingDate)
    if (bookingTime) successParams.set('time', bookingTime)

    const session = await stripe.checkout.sessions.create({
      mode: isSubscription ? 'subscription' : 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/success?${successParams.toString()}`,
      cancel_url: `${origin}/#book`,
      billing_address_collection: 'auto',
      phone_number_collection: { enabled: true },
      metadata: {
        ...(bookingDate && { booking_date: bookingDate }),
        ...(bookingTime && { booking_time: bookingTime }),
        ...(bookingName && { booking_name: bookingName }),
      },
      custom_text: {
        submit: { message: 'Your slot is reserved. Complete payment to confirm your booking.' },
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe error:', err)
    return NextResponse.json({ error: 'Payment error' }, { status: 500 })
  }
}
