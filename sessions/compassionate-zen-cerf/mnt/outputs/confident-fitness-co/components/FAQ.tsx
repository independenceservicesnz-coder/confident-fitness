'use client'
import { useState } from 'react'

const faqs = [
  { q: "I haven't exercised in years — is this right for me?", a: "Absolutely. Most of my clients are starting fresh or returning after a long break. We begin gently and build at a pace that feels right for you." },
  { q: 'Do you come to my home?', a: "Yes. I offer house-call sessions across Auckland, so you can train comfortably in your own space — no gym required." },
  { q: 'What if I have an injury or health condition?', a: "We'll work around it. With my background in aged care and rehab-focused training, every session is adapted to your body — and I'm happy to coordinate with your healthcare providers." },
  { q: 'How does online training work?', a: "We meet over video for live sessions, and you get a simple program to follow between calls. All you need is a phone or laptop and a little space to move." },
  { q: 'What areas of Auckland do you cover?', a: "Most of the wider Auckland region. Send me your suburb when you get in touch and I'll confirm right away." },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="max-w-[840px] mx-auto px-6 py-[clamp(56px,8vw,104px)]">
      <div className="text-center mb-[clamp(32px,5vw,52px)]">
        <span className="uppercase tracking-[0.18em] text-xs font-semibold text-ink-subtle">Good to know</span>
        <h2 className="font-serif font-medium text-[clamp(30px,4vw,46px)] leading-[1.1] tracking-tight mt-3.5">
          Questions, answered.
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-border-card rounded-[14px] overflow-hidden">
            <button
              className="w-full text-left px-6 py-[22px] flex justify-between items-center gap-4"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-semibold text-[19px] text-ink">{faq.q}</span>
              <span
                className="text-orange text-[26px] font-light flex-shrink-0 leading-none transition-transform duration-200"
                style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >+</span>
            </button>
            {open === i && (
              <p className="m-0 px-6 pb-6 text-[17px] leading-[1.65] text-ink-muted">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
