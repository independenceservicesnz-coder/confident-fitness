export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Give Me a Call',
      desc: 'Phone or fill in the form below. We have a friendly, no-pressure chat about what you\'re hoping to achieve. No commitment needed.',
    },
    {
      num: '2',
      title: 'Free First Session',
      desc: 'We meet — in person or online — for your complimentary first session. I assess where you\'re at and we talk through your goals together.',
    },
    {
      num: '3',
      title: 'Your Personal Programme',
      desc: 'I build a programme designed just for you. We work at your pace, progress safely, and celebrate every win along the way.',
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block bg-[#DDEAF9] text-[#1B3A8C] text-sm font-bold px-5 py-2 rounded-full mb-4 tracking-widest uppercase">
          Simple Start
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F4F] mb-14">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(s => (
            <div key={s.num} className="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-[#DDEAF9] hover:border-[#1B3A8C] transition-colors">
              <div className="w-16 h-16 bg-[#1B3A8C] text-white rounded-full flex items-center justify-center text-2xl font-extrabold mb-5">
                {s.num}
              </div>
              <h3 className="font-bold text-xl text-[#1B3A8C] mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
