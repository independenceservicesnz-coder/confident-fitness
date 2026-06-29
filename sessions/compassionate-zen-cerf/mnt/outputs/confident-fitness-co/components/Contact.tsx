'use client'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [form, setForm] = useState({ name:'', email:'', phone:'', interest:'', goal:'' })

  function update(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await Promise.all([
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }),
        fetch('https://formspree.io/f/mqevbrdk', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        }),
      ])
      setStatus('success')
      setForm({ name:'', email:'', phone:'', interest:'', goal:'' })
    } catch {
      setStatus('error')
    }
  }

  const inputCls = 'font-sans text-base px-[15px] py-[13px] border-[1.5px] border-[#E0D8C8] rounded-[11px] bg-[#FCFAF6] text-ink w-full focus:outline-none focus:border-orange transition-colors'
  const labelCls = 'flex flex-col gap-[7px] text-sm font-semibold text-ink-mid'

  return (
    <section id="book" className="bg-cream-mid border-t border-border">
      <div className="max-w-[1180px] mx-auto px-6 py-[clamp(56px,8vw,104px)]">
        <div className="grid md:grid-cols-2 gap-[clamp(36px,5vw,64px)] items-start">
          <div>
            <span className="uppercase tracking-[0.18em] text-xs font-semibold text-ink-subtle">Let&apos;s talk</span>
            <h2 className="font-serif font-medium text-[clamp(30px,4vw,46px)] leading-[1.1] tracking-tight mt-3.5 mb-5">
              Book your free consultation.
            </h2>
            <p className="text-lg leading-[1.7] text-ink-mid max-w-[30em] mb-7">
              Tell me a little about where you&apos;re at and what you&apos;d like to work towards. No pressure, no jargon — just a friendly chat about how we can get you moving.
            </p>
            <div className="flex flex-col gap-3.5 text-base text-ink-mid">
              {['In-person house calls across Auckland','Online sessions worldwide','Beginners and returners genuinely welcome'].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-7 pt-7 border-t border-border">
              <p className="text-base leading-relaxed text-ink-mid mb-2.5">
                Prefer to talk it through? Call or text me directly.
              </p>
              <a href="tel:+64211989086" className="font-serif text-[30px] font-semibold text-ink no-underline tracking-tight hover:text-orange transition-colors block">
                021 198 9086
              </a>
              <div className="mt-2">
                <a href="mailto:maya.dickson01@gmail.com" className="text-base text-[#B5642F] font-semibold no-underline hover:text-orange transition-colors">
                  maya.dickson01@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border-card rounded-[20px] p-[clamp(26px,3vw,38px)]">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-[54px] h-[54px] rounded-full bg-orange text-white flex items-center justify-center text-[28px] mx-auto mb-4">✓</div>
                <h3 className="font-serif font-semibold text-[28px] text-ink mb-2.5">Thank you!</h3>
                <p className="text-[17px] text-ink-muted leading-relaxed m-0">Your request is in. I&apos;ll be in touch within a day to find a time that works for you.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-[18px]">
                <label className={labelCls}>
                  Name
                  <input required name="name" value={form.name} onChange={update} placeholder="Your name" className={inputCls} />
                </label>
                <div className="grid grid-cols-2 gap-[18px]">
                  <label className={labelCls}>
                    Email
                    <input required type="email" name="email" value={form.email} onChange={update} placeholder="you@email.com" className={inputCls} />
                  </label>
                  <label className={labelCls}>
                    Phone
                    <input type="tel" name="phone" value={form.phone} onChange={update} placeholder="Optional" className={inputCls} />
                  </label>
                </div>
                <label className={labelCls}>
                  I&apos;m interested in
                  <select name="interest" value={form.interest} onChange={update} className={inputCls}>
                    <option value="">Select an option…</option>
                    <option>In-person training (Auckland)</option>
                    <option>Online training</option>
                    <option>Monthly plan</option>
                    <option>Not sure yet — help me decide</option>
                  </select>
                </label>
                <label className={labelCls}>
                  Your goals
                  <textarea name="goal" value={form.goal} onChange={update} rows={3}
                    placeholder="What would you like to work towards?"
                    className={`${inputCls} resize-y`} />
                </label>
                {status === 'error' && (
                  <p className="text-orange font-semibold text-sm m-0">Something went wrong. Please call Maya on 021 198 9086.</p>
                )}
                <button type="submit" disabled={status === 'loading'}
                  className="mt-1 bg-orange text-white border-none py-4 rounded-full font-semibold text-[17px] hover:bg-[#d44a1f] transition-colors disabled:opacity-60 w-full cursor-pointer">
                  {status === 'loading' ? 'Sending…' : 'Request my consultation'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
