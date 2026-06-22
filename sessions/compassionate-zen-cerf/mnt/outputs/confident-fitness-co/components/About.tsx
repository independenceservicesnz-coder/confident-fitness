import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#F0F5FD]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-xl h-[520px]">
            <Image
              src="/maya.jpg"
              alt="Maya Dickson — Personal Trainer for 50+"
              fill
              className="object-cover object-top"
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
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F4F] mb-6">
            Hi, I&apos;m Maya
          </h2>

          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              I&apos;m a New Zealand-based personal trainer specialising in fitness and movement for adults 50 and over.
            </p>
            <p>
              My passion for health and performance started early. I represented New Zealand in beach volleyball at the Youth Olympics and World Championships, and spent years understanding what the body is capable of with the right training done consistently.
            </p>
            <p>
              My time at Oceania Healthcare, one of New Zealand&apos;s largest aged care providers, showed me first-hand how much strength, movement, and physical confidence matter to quality of life as we age — and I became passionate about helping people in that space.
            </p>
            <p>
              I hold a NZIS Level 4 Personal Training certification and bring the same work ethic I developed in elite sport to every client — without any of the intimidation. My sessions are built around you: your goals, your starting point, and your pace.
            </p>
            <p>
              I offer online training and in-person sessions with house calls across Auckland — so wherever you are, we can make it work.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              '🏐 NZ Youth Olympics — Beach Volleyball',
              '🏆 World Championships Representative',
              '🏥 Oceania Healthcare Experience',
              '📋 NZIS Level 4 Personal Trainer',
              '🏠 In-home Auckland & Online NZ-wide',
            ].map(item => (
              <span key={item} className="bg-white border-2 border-[#DDEAF9] text-[#0D1F4F] text-sm font-semibold px-4 py-2 rounded-full">
                {item}
              </span>
            ))}
          </div>

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
