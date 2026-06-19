'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need any equipment?',
    a: 'No equipment needed. I bring everything required for your in-home sessions. For online sessions, I design exercises using everyday household items or your bodyweight.',
  },
  {
    q: 'What if I have a health condition?',
    a: 'That\'s exactly why I\'m here. I specialise in working with people who have cardiac conditions, diabetes, arthritis, osteoporosis, and other chronic conditions. I always work within your medical guidelines.',
  },
  {
    q: 'I haven\'t exercised in years — is that okay?',
    a: 'Absolutely. Many of my clients start from scratch. We begin gently, progress at your pace, and build confidence gradually. There\'s no pressure and no judgment.',
  },
  {
    q: 'How is the first session free?',
    a: 'Your very first session is complimentary — no payment, no strings attached. It\'s a chance for us to meet, for me to understand your goals, and for you to see if I\'m the right fit.',
  },
  {
    q: 'Can I do online sessions from anywhere in NZ?',
    a: 'Yes! Online sessions are available to anyone in New Zealand. All you need is a phone, tablet, or computer with a camera and a small space to move.',
  },
  {
    q: 'How do I pay?',
    a: 'You can pay online via credit or debit card using the buttons on this page, or by bank transfer after your session. Just let me know what works best for you.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-6 bg-[#F0F5FD]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#DDEAF9] text-[#1B3A8C] text-sm font-bold px-5 py-2 rounded-full mb-4 tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F4F]">Common Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border-2 border-[#DDEAF9] overflow-hidden">
              <button
                className="w-full text-left px-7 py-5 flex justify-between items-center gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-bold text-lg text-[#0D1F4F]">{faq.q}</span>
                <span className="text-[#1B3A8C] text-2xl font-bold flex-shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-7 pb-6 text-gray-600 text-base leading-relaxed border-t border-[#DDEAF9] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
