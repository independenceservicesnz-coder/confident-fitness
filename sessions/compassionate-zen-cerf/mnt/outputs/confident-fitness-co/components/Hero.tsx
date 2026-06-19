import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1B3A8C] to-[#2A56CC] text-white overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=80&auto=format&fit=crop"
          alt="Active older woman exercising outdoors"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div>
          <span className="inline-block bg-white/20 text-white text-sm font-bold px-5 py-2 rounded-full mb-6 tracking-widest uppercase">
            Personal Training for 50+ · NZ-wide
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Feel Stronger.<br />Move Better.<br />Stay Independent.
          </h1>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            In-home personal training in Auckland and online across New Zealand — designed specifically for people aged 50 and over.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="tel:0211989086"
              className="bg-[#CC1B1B] text-white font-bold px-8 py-5 rounded-full text-lg hover:bg-red-700 transition-colors"
            >
              📞 Call Maya — 021 198 9086
            </a>
            <a
              href="#contact"
              className="bg-white/15 border-2 border-white text-white font-bold px-8 py-5 rounded-full text-lg hover:bg-white/25 transition-colors"
            >
              Book a Free Chat
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm opacity-90">
            <span>✅ First session always free</span>
            <span>✅ No gym required</span>
            <span>✅ Come to you</span>
          </div>
        </div>

        {/* Right: stat cards */}
        <div className="flex flex-col gap-4">
          {[
            { icon: '🏠', title: 'In-Home Training', desc: 'We come to you — Auckland-wide' },
            { icon: '💻', title: 'Online NZ-wide', desc: 'Train from anywhere in New Zealand' },
            { icon: '🎯', title: 'First Session Free', desc: 'No risk, no commitment required' },
          ].map(card => (
            <div key={card.title} className="bg-white/12 border border-white/20 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-5">
              <span className="text-4xl flex-shrink-0">{card.icon}</span>
              <div>
                <div className="font-bold text-lg">{card.title}</div>
                <div className="opacity-80 text-sm">{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
