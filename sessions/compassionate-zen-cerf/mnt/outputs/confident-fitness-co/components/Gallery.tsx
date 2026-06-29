import Image from 'next/image'

export default function Gallery() {
  return (
    <section className="max-w-[1180px] mx-auto px-6 py-[clamp(56px,8vw,100px)]">
      <div className="max-w-[34em] mb-[clamp(32px,5vw,48px)]">
        <span className="uppercase tracking-[0.18em] text-xs font-semibold text-ink-subtle">Inside a session</span>
        <h2 className="font-serif font-medium text-[clamp(30px,4vw,46px)] leading-[1.1] tracking-tight mt-3.5">
          Real training, real people.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="aspect-[4/3] rounded-[18px] overflow-hidden shadow-[0_24px_48px_-30px_rgba(28,24,19,0.35)] relative bg-border-card">
          <Image src="/gallery1.png" alt="Training session" fill className="object-cover" />
        </div>
        <div className="aspect-[4/3] rounded-[18px] overflow-hidden shadow-[0_24px_48px_-30px_rgba(28,24,19,0.35)] relative bg-border-card">
          <Image src="/galleryf2.png" alt="Training session" fill className="object-cover object-center" />
        </div>
      </div>
    </section>
  )
}
