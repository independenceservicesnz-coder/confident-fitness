const services = [
  { num: '01', title: 'Strength & conditioning', desc: 'Build the strength to lift, carry and move through daily life with ease and confidence.' },
  { num: '02', title: 'Weight loss & body composition', desc: 'Sensible, sustainable programming to feel lighter, leaner and more energetic — no extremes.' },
  { num: '03', title: 'Mobility & rehab', desc: 'Restore range of motion, ease stiffness and move comfortably again — adapted to your body.' },
  { num: '04', title: 'Online coaching', desc: 'Guided programs and live check-ins, wherever you are in the world.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream-mid border-t border-b border-border">
      <div className="max-w-[1180px] mx-auto px-6 py-[clamp(56px,8vw,100px)]">
        <div className="max-w-[34em] mb-[clamp(36px,5vw,56px)]">
          <span className="uppercase tracking-[0.18em] text-xs font-semibold text-ink-subtle">What we work on</span>
          <h2 className="font-serif font-medium text-[clamp(30px,4vw,46px)] leading-[1.1] tracking-tight mt-3.5">
            Training that fits your life, not the other way around.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map(s => (
            <div key={s.num} className="bg-white border border-border-card rounded-[18px] p-7">
              <div className="font-serif italic text-xl text-orange mb-4">{s.num}</div>
              <h3 className="font-serif font-semibold text-2xl mb-2.5">{s.title}</h3>
              <p className="text-base leading-relaxed text-ink-muted m-0">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
