export default function HowItWorks() {
  const features = [
    { title: 'Balance & fall prevention', desc: 'Build the stability and quick reactions that help prevent falls.' },
    { title: 'Everyday strength', desc: 'Stay able to climb stairs, carry the shopping and get up with ease.' },
    { title: 'Safe, supported progressions', desc: 'Every movement adapted to your body, your conditions and your energy that day.' },
    { title: 'Confidence again', desc: 'Rebuild trust in your body after an injury, illness or a fall.' },
  ]

  return (
    <section className="max-w-[1180px] mx-auto px-6 py-[clamp(40px,5vw,64px)]">
      <div className="bg-orange-warm border border-[#EBD9C9] rounded-3xl p-[clamp(30px,4vw,56px)] grid md:grid-cols-2 gap-[clamp(30px,4vw,56px)] items-center">
        <div>
          <span className="uppercase tracking-[0.18em] text-xs font-semibold text-[#B5642F]">Specialist focus</span>
          <h2 className="font-serif font-medium text-[clamp(28px,3.6vw,42px)] leading-[1.1] tracking-tight mt-3.5 mb-4">
            Personal training built for older adults.
          </h2>
          <p className="text-lg leading-[1.7] text-[#5A4F43]">
            Drawing on my years at Oceania Healthcare, I work with elderly clients to stay strong, steady and independent — with gentle, fully supported sessions in the comfort of their own home.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {features.map(f => (
            <div key={f.title} className="flex gap-3.5 items-start">
              <span className="flex-none w-2.5 h-2.5 rounded-full bg-orange mt-2" />
              <div>
                <div className="font-semibold text-lg text-ink">{f.title}</div>
                <div className="text-base text-ink-muted leading-snug mt-0.5">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
