'use client'
import { useState } from 'react'

const locations = [
  'Auckland Central','North Shore','West Auckland','East Auckland',
  'South Auckland','Manukau','Other Auckland','Online (NZ-wide)',
]

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [form, setForm] = useState({ name:'', age:'', phone:'', email:'', location:'', goal:'' })

  function update(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name:'', age:'', phone:'', email:'', location:'', goal:'' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Left */}
        <div>
          <span className="inline-block bg-[#DDEAF9] text-[#1B3A8C] text-sm font-bold px-5 py-2 rounded-full mb-5 tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F4F] mb-4">Let&apos;s Have a Chat</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            No pressure, no jargon — just a friendly conversation about how I can help you feel better. Your first session is always free.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#DDEAF9] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📞</div>
              <div>
                <div className="font-bold text-[#0D1F4F]">Phone or Text</div>
                <a href="tel:0211989086" className="text-[#1B3A8C] font-bold text-xl hover:underline">021 198 9086</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#DDEAF9] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">💬</div>
              <div>
                <div className="font-bold text-[#0D1F4F]">Send a Message</div>
                <div className="text-gray-600">Fill in the form and I&apos;ll get back to you within 2 hours on weekdays</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#DDEAF9] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🕐</div>
              <div>
                <div className="font-bold text-[#0D1F4F]">Hours</div>
                <div className="text-gray-600">Monday – Saturday, 7am – 7pm</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#DDEAF9] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🇳🇿</div>
              <div>
                <div className="font-bold text-[#0D1F4F]">Coverage</div>
                <div className="text-gray-600">In-home Auckland · Online NZ-wide</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#F0F5FD] rounded-3xl p-8">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-[#1B3A8C] mb-3">Message sent!</h3>
              <p className="text-gray-600 text-lg">Maya will be in touch with you soon. Looking forward to chatting!</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="block font-semibold text-[#0D1F4F] mb-2 text-base">Your Name *</label>
                <input required name="name" value={form.name} onChange={update}
                  placeholder="e.g. Margaret Smith"
                  className="w-full border-2 border-[#DDEAF9] rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#1B3A8C] bg-white" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#0D1F4F] mb-2 text-base">Age</label>
                  <input name="age" value={form.age} onChange={update} placeholder="e.g. 65"
                    className="w-full border-2 border-[#DDEAF9] rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#1B3A8C] bg-white" />
                </div>
                <div>
                  <label className="block font-semibold text-[#0D1F4F] mb-2 text-base">Phone *</label>
                  <input required name="phone" value={form.phone} onChange={update} placeholder="021 000 0000"
                    className="w-full border-2 border-[#DDEAF9] rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#1B3A8C] bg-white" />
                </div>
              </div>
              <div>
                <label className="block font-semibold text-[#0D1F4F] mb-2 text-base">Email Address *</label>
                <input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com"
                  className="w-full border-2 border-[#DDEAF9] rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#1B3A8C] bg-white" />
              </div>
              <div>
                <label className="block font-semibold text-[#0D1F4F] mb-2 text-base">Your Location</label>
                <select name="location" value={form.location} onChange={update}
                  className="w-full border-2 border-[#DDEAF9] rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#1B3A8C] bg-white">
                  <option value="">Select your area…</option>
                  {locations.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label className="block font-semibold text-[#0D1F4F] mb-2 text-base">What would you like to achieve?</label>
                <textarea name="goal" value={form.goal} onChange={update} rows={4}
                  placeholder="e.g. I'd like to get stronger, improve my balance, and feel more confident walking…"
                  className="w-full border-2 border-[#DDEAF9] rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#1B3A8C] bg-white resize-none" />
              </div>
              {status === 'error' && (
                <p className="text-[#CC1B1B] font-semibold">Something went wrong. Please call Maya on 021 198 9086.</p>
              )}
              <button type="submit" disabled={status === 'loading'}
                className="w-full bg-[#CC1B1B] text-white font-bold py-5 rounded-full text-lg hover:bg-red-700 transition-colors disabled:opacity-60">
                {status === 'loading' ? 'Sending…' : 'Send Message — Free First Session'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
