import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#F0F5FD]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-xl h-[480px]">
            {/* Replace this src with your own photo once you have one */}
            <Image
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80&auto=format&fit=crop"
              alt="Maya Dickson — Personal Trainer for 50+"
              fill
              className="object-cover"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-5 -right-5 bg-[#1B3A8C] text-white rounded-2xl px-6 py-4 shadow-lg">
            <div className="font-extrabold text-2xl">50+</div>
            <div className="text-sm opacity-90">Specialist</div>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-block bg-[#DDEAF9] text-[#1B3A8C] text-sm font-bold px-5 py-2 rounded-full mb-5 tracking-widest uppercase">
            About Maya
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F4F] mb-5">
            A trainer who genuinely gets it
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5 text-lg">
            I founded Confident Fitness Co with one goal in mind: to help New Zealanders aged 50 and over feel stronger, more confident, and fully independent in their everyday lives.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            I know that walking into a gym can feel daunting — especially if you have health concerns or it&apos;s been a while since you exercised. That&apos;s why I bring the training to you, work at your pace, and focus on what matters most to you.
          </p>

          <ul className="space-y-3">
            {[
              'Qualified Personal Trainer (REPS NZ registered)',
              'Specialist in 50+ and senior fitness',
              'Experience with cardiac, post-surgery & chronic conditions',
              'In-home Auckland & online NZ-wide',
              'Warm, encouraging, patient approach',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="text-[#1B3A8C] font-bold text-xl flex-shrink-0">✓</span>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="tel:0211989086"
            className="inline-block mt-8 bg-[#CC1B1B] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-red-700 transition-colors"
          >
            📞 Call Maya Today
          </a>
        </div>
      </div>
    </section>
  )
}
