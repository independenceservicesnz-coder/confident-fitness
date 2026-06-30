'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SuccessContent() {
  const params = useSearchParams()
  const date = params.get('date')
  const time = params.get('time')

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-orange text-white flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
        <h1 className="font-serif text-3xl font-semibold text-ink mb-4">
          Payment successful!
        </h1>

        {date && time ? (
          <>
            <div className="bg-[#FDF6EE] border border-[#E8D9C4] rounded-2xl px-6 py-5 mb-6 text-left">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle mb-3">Your booking</div>
              <div className="flex items-center gap-3 text-ink font-semibold text-lg">
                <span>📅</span>
                <span>{new Date(date + 'T12:00:00').toLocaleDateString('en-NZ', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-3 text-ink font-semibold text-lg mt-2">
                <span>🕐</span>
                <span>{time}</span>
              </div>
            </div>
            <p className="text-ink-mid text-base leading-relaxed mb-6">
              Your slot is confirmed. Maya will be in touch shortly to finalise the details.
            </p>
          </>
        ) : (
          <p className="text-ink-mid text-lg leading-relaxed mb-6">
            Thank you for booking with Confident Fitness Co. Maya will be in touch shortly to confirm your session time.
          </p>
        )}

        <p className="text-ink-mid text-base leading-relaxed mb-8">
          Questions? Call Maya on{' '}
          <a href="tel:0211989086" className="text-orange font-semibold hover:underline">021 198 9086</a>.
        </p>
        <a href="/"
          className="inline-block bg-orange text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#d44a1f] transition-colors no-underline">
          Back to Home
        </a>
      </div>
    </main>
  )
}

export default function Success() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-ink-muted">Loading…</div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  )
}
