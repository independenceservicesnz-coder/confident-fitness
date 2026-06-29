'use client'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-border">
      <nav className="max-w-[1180px] mx-auto px-6 py-4 flex items-center justify-between gap-5 flex-wrap">
        <a href="#top" className="flex items-center gap-2.5 no-underline text-ink">
          <span className="w-2.5 h-2.5 rounded-full bg-orange inline-block flex-shrink-0" />
          <span className="font-serif text-xl font-semibold tracking-tight">Confident Fitness Co.</span>
        </a>

        <div className="hidden md:flex items-center gap-7 flex-wrap">
          {[['About','about'],['Training','services'],['Plans','pricing'],['FAQ','faq']].map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-ink-mid text-base font-medium no-underline hover:text-ink transition-colors">
              {label}
            </a>
          ))}
          <a href="#book" className="bg-orange text-white px-5 py-2.5 rounded-full font-semibold text-base no-underline hover:bg-[#d44a1f] transition-colors">
            Book a consultation
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-ink mb-1.5 transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink mb-1.5 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-t border-border px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {[['About','about'],['Training','services'],['Plans','pricing'],['FAQ','faq']].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-ink-mid font-medium text-lg no-underline block">
                {label}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)} className="block bg-orange text-white font-semibold text-center py-4 rounded-full no-underline mt-2 hover:bg-[#d44a1f] transition-colors">
              Book a consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
