export default function PainPoints() {
  const points = [
    { icon: '😟', text: 'Feel stiff and sore every morning' },
    { icon: '😰', text: 'Worried about falling or losing balance' },
    { icon: '😔', text: 'Struggling to get up off the floor or out of a chair' },
    { icon: '😥', text: 'Feel weaker or less capable than you used to' },
    { icon: '💊', text: 'Managing a health condition and want to feel better' },
    { icon: '🏥', text: 'Recovering from surgery and need safe guidance' },
  ]

  return (
    <section className="bg-[#0D1F4F] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block bg-white/15 text-white text-sm font-bold px-5 py-2 rounded-full mb-4 tracking-widest uppercase">
          Does this sound familiar?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          You deserve to feel good in your body again
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {points.map(p => (
            <div key={p.text} className="bg-white/10 border border-white/15 rounded-2xl p-6 text-left flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">{p.icon}</span>
              <p className="text-lg leading-snug">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xl opacity-90">
          Maya specialises in helping people just like you — safely and sustainably.
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 bg-[#CC1B1B] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-red-700 transition-colors"
        >
          Let&apos;s Talk — First Session Free
        </a>
      </div>
    </section>
  )
}
