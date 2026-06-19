import Image from 'next/image'

const services = [
  {
    title: 'In-Home Training',
    desc: 'I come to you anywhere in Auckland. No gym, no travel, no intimidation — just effective training in the comfort of your own home.',
    img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80&auto=format&fit=crop',
    alt: 'Personal trainer working with senior client at home',
  },
  {
    title: 'Online NZ-wide',
    desc: 'Live one-on-one sessions via video call — from Northland to Southland. All you need is a phone or computer.',
    img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80&auto=format&fit=crop',
    alt: 'Online personal training session on laptop',
  },
  {
    title: 'Balance & Fall Prevention',
    desc: 'Targeted exercises to improve stability and coordination, helping you stay on your feet and feel safe doing the things you love.',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&auto=format&fit=crop',
    alt: 'Senior woman doing balance exercises',
  },
  {
    title: 'Strength & Mobility',
    desc: 'Build functional strength so everyday tasks — carrying groceries, climbing stairs, playing with grandkids — feel easy again.',
    img: 'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=600&q=80&auto=format&fit=crop',
    alt: 'Senior man doing strength exercises',
  },
  {
    title: 'Cardiac & Chronic Conditions',
    desc: 'Safe, medically-aware exercise for those managing heart conditions, diabetes, arthritis, or other chronic health conditions.',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format&fit=crop',
    alt: 'Older couple walking for health',
  },
  {
    title: 'Post-Surgery Rehabilitation',
    desc: 'Carefully designed programmes to help you rebuild strength and mobility after joint replacement, cardiac surgery, or other procedures.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop',
    alt: 'Rehabilitation exercise with trainer',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-[#F0F5FD]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#DDEAF9] text-[#1B3A8C] text-sm font-bold px-5 py-2 rounded-full mb-4 tracking-widest uppercase">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1F4F]">Services Built for the 50+ Body</h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Every programme is personalised to you — your goals, your health history, your pace.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={s.img} alt={s.alt} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-[#1B3A8C] mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-[#1B3A8C] text-white font-bold px-8 py-5 rounded-full text-lg hover:bg-navy-mid transition-colors"
          >
            Get Your Free First Session
          </a>
        </div>
      </div>
    </section>
  )
}
