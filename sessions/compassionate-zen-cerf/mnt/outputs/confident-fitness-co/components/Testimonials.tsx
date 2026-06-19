import Image from 'next/image'

const testimonials = [
  {
    quote: "I was nervous about starting exercise again after my hip replacement, but Maya made me feel completely at ease. Three months in and I'm stronger than I've been in years.",
    name: 'Margaret, 67',
    location: 'Remuera, Auckland',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80&auto=format&fit=crop&face',
  },
  {
    quote: "Maya comes to my home every week and it's made all the difference. I no longer worry about falling, and I can keep up with my grandchildren. I wish I'd started sooner.",
    name: 'John, 72',
    location: 'Howick, Auckland',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop&face',
  },
  {
    quote: "I was managing type 2 diabetes and feeling sluggish all the time. Maya's online sessions have been brilliant — I've lost weight, have more energy, and my numbers have improved.",
    name: 'Christine, 61',
    location: 'Wellington (online)',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop&face',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-[#1B3A8C] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block bg-white/20 text-white text-sm font-bold px-5 py-2 rounded-full mb-4 tracking-widest uppercase">
          Real Results
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-14">What clients say</h2>

        {/* ⚠️ Replace these with your own real client testimonials before going live */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.name} className="bg-white/10 border border-white/15 rounded-2xl p-8 text-left flex flex-col">
              <p className="text-lg leading-relaxed opacity-95 italic mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.img} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-base">{t.name}</div>
                  <div className="text-sm opacity-75">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm opacity-60 italic">* Replace placeholder testimonials with real client feedback before publishing</p>
      </div>
    </section>
  )
}
