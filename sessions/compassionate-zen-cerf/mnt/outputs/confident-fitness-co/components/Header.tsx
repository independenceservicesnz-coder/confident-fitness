'use client'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0D1F4F] text-white text-center py-2 px-4 text-sm font-medium">
        📞 Call Maya now —{' '}
        <a href="tel:0211989086" className="text-[#CC1B1B] font-bold hover:underline">
          021 198 9086
        </a>{' '}
        · First session always free
      </div>

      {/* Sticky nav */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#1B3A8C] rounded-xl flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0">
              CF
            </div>
            <div>
              <div className="font-bold text-[#1B3A8C] text-base leading-tight">Confident Fitness Co</div>
              <div className="text-xs text-gray-500">Personal Training for 50+</div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {['Services','About','Pricing','FAQ','Contact'].map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-700 font-semibold hover:text-[#1B3A8C] border-b-2 border-transparent hover:border-[#1B3A8C] transition-all pb-0.5"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:0211989086" className="text-[#1B3A8C] font-bold text-base flex items-center gap-2">
              📞 021 198 9086
            </a>
            <a
              href="#contact"
              className="bg-[#CC1B1B] text-white font-bold px-5 py-3 rounded-full hover:bg-red-700 transition-colors text-sm"
            >
              Book a Free Chat
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-0.5 bg-[#1B3A8C] mb-1.5 transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-7 h-0.5 bg-[#1B3A8C] mb-1.5 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-0.5 bg-[#1B3A8C] transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6">
            <ul className="flex flex-col gap-4 pt-4 list-none">
              {['Services','About','Pricing','FAQ','Contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-gray-700 font-semibold text-lg block"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block bg-[#CC1B1B] text-white font-bold text-center py-4 rounded-full mt-2"
                >
                  Book a Free Chat
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}
