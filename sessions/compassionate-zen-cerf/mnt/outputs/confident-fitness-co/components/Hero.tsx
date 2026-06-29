import Image from 'next/image'

export default function Hero() {
  return (
    <section id="top" className="max-w-[1180px] mx-auto px-6 py-[clamp(40px,7vw,88px)]">
      <div className="grid md:grid-cols-2 gap-[clamp(32px,5vw,64px)] items-center">
        <div>
          <div className="flex items-center gap-2.5 mb-7">
            <span className="w-2 h-2 rounded-full bg-orange inline-block flex-shrink-0" />
            <span className="uppercase tracking-[0.18em] text-xs font-semibold text-ink-subtle">
              Personal training · Auckland &amp; online
            </span>
          </div>
          <h1 className="font-serif font-medium text-[clamp(42px,6.2vw,76px)] leading-[1.01] tracking-tight mb-6">
            Feel better.<br />
            Move <em className="not-italic text-orange">stronger.</em><br />
            Stay independent.
          </h1>
          <p className="text-[clamp(18px,2vw,21px)] leading-relaxed text-ink-mid max-w-[30em] mb-9">
            Strength, movement and confidence training for adults 50 and over — in your home across Auckland, or online wherever you are.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a href="#book" className="bg-orange text-white px-7 py-4 rounded-full font-semibold text-lg no-underline hover:bg-[#d44a1f] transition-colors">
              Book a consultation
            </a>
            <a href="#pricing" className="border border-border text-ink px-7 py-4 rounded-full font-semibold text-lg no-underline hover:border-ink transition-colors">
              View plans &amp; pricing
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-[22px] overflow-hidden shadow-[0_30px_60px_-30px_rgba(28,24,19,0.35)] relative">
            <Image src="/mayahero.png" alt="Maya Dickson — Personal Trainer for 50+" fill className="object-cover object-top" priority />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-charcoal text-cream px-5 py-4 rounded-[14px] shadow-[0_18px_36px_-18px_rgba(0,0,0,0.5)]">
            <div className="font-serif text-2xl font-semibold leading-none">NZIS Level 4</div>
            <div className="text-xs tracking-[0.06em] text-[#B8AE9C] mt-1">Certified Personal Trainer</div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-b border-border grid md:grid-cols-3 gap-6 py-7">
        {[
          { title: 'Elite-sport background', desc: 'NZ beach volleyball — Youth Olympics & World Champs' },
          { title: 'Aged-care experience', desc: 'Trained at Oceania Healthcare, NZ' },
          { title: 'No intimidation', desc: 'Sessions built around you and your pace' },
        ].map(t => (
          <div key={t.title}>
            <div className="font-serif text-[22px] font-semibold">{t.title}</div>
            <div className="text-sm text-ink-muted mt-1">{t.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
