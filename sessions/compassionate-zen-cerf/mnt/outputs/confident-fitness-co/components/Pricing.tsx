'use client'
import { useState } from 'react'

const plans = [
  {
    name: 'Single Session',
    price: '$90',
    period: 'per session',
    priceId: 'REPLACE_WITH_STRIPE_PRICE_ID_SINGLE',
    features: [
      'One 60-minute session',
      'In-home (Auckland) or online',
      'Written exercise notes',
      'No commitment required',
    ],
    popular: false,
  },
  {
    name: 'Monthly Pack',
    price: '$320',
    period: 'per month',
    priceId: 'REPLACE_WITH_STRIPE_PRICE_ID_MONTHLY',
    features: [
      '4 sessions per month',
      'Save $40 vs single sessions',
      'Written programme included',
      'Support between sessions',
      'Progress tracking',
    ],
    popular: true,
  },
  {
    name: 'Online Session',
    price: '$70',
    period: 'per session',
    priceId: 'REPLACE_WITH_STRIPE_PRICE_ID_ONLINE',
    features: [
      'One 60-minute video session',
      'Available NZ-wide',
      'Written exercise notes',
      'Flexible scheduling',
    ],
    popular: false,
  },
]

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null)

  async function handleCheckout(priceId: string, planName: string) {
    setLoading(planName)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch {
      alert('Something went wrong. Please call Maya on 021 198 9086.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#DDEAF9] text-[#1B3A8C] text-sm font-bold px-5 py-2 rounded-full mb-4 tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F4F]">Simple, Honest Pricing</h2>
          <p className="text-gray-500 mt-3 text-lg">Your first session is always free — no payment needed to get started.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col border-2 ${
                plan.popular
                  ? 'border-[#1B3A8C] bg-[#1B3A8C] text-white shadow-2xl scale-105'
                  : 'border-[#DDEAF9] bg-white text-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-[#CC1B1B] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className={`font-bold text-xl mb-1 ${plan.popular ? 'text-white' : 'text-[#1B3A8C]'}`}>{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.popular ? 'opacity-75' : 'text-gray-500'}`}>{plan.period}</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-base">
                    <span className={`font-bold flex-shrink-0 ${plan.popular ? 'text-[#DDEAF9]' : 'text-[#1B3A8C]'}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleCheckout(plan.priceId, plan.name)}
                disabled={loading === plan.name}
                className={`w-full py-4 rounded-full font-bold text-lg transition-colors disabled:opacity-60 ${
                  plan.popular
                    ? 'bg-[#CC1B1B] text-white hover:bg-red-700'
                    : 'bg-[#1B3A8C] text-white hover:bg-[#2A56CC]'
                }`}
              >
                {loading === plan.name ? 'Redirecting…' : 'Book & Pay Online'}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8 text-base">
          Prefer to pay by bank transfer? No problem — just call or message Maya after booking.
        </p>
      </div>
    </section>
  )
}
