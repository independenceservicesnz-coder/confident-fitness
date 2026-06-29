export default function PainPoints() {
  return (
    <section className="bg-charcoal text-cream">
      <div className="max-w-[980px] mx-auto px-6 py-[clamp(64px,9vw,120px)] text-center">
        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-orange-light">Built around you</span>
        <blockquote className="font-serif font-medium text-[clamp(30px,5vw,56px)] leading-[1.12] tracking-tight mt-5 mb-0">
          Strong, capable and independent —{' '}
          <em className="text-orange">at any age.</em>
        </blockquote>
        <p className="text-[clamp(17px,2vw,20px)] leading-[1.65] text-[#C9BFAD] max-w-[36em] mx-auto mt-6 mb-9">
          The same work ethic I learned in elite sport, with none of the intimidation. Every session meets you exactly where you are today.
        </p>
        <a href="#book" className="inline-block bg-orange text-white px-8 py-4 rounded-full font-semibold text-lg no-underline hover:bg-[#d44a1f] transition-colors">
          Book a consultation
        </a>
      </div>
    </section>
  )
}
