import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="max-w-[1180px] mx-auto px-6 py-[clamp(56px,8vw,104px)]">
      <div className="grid md:grid-cols-2 gap-[clamp(36px,5vw,72px)] items-center">
        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-[22px] overflow-hidden shadow-[0_30px_60px_-34px_rgba(28,24,19,0.4)] relative">
            <Image src="/mayaabout.png" alt="Maya Dickson — Personal Trainer for 50+" fill className="object-cover object-top" />
          </div>
        </div>

        <div>
          <span className="uppercase tracking-[0.18em] text-xs font-semibold text-ink-subtle">Hi, I&apos;m Maya</span>
          <h2 className="font-serif font-medium text-[clamp(30px,4vw,46px)] leading-[1.1] tracking-tight mt-3.5 mb-6">
            A trainer who actually gets the body you&apos;re working with.
          </h2>
          <div className="text-lg leading-[1.7] text-ink-mid flex flex-col gap-4">
            <p>I&apos;m a New Zealand-based personal trainer specialising in fitness and movement for adults 50 and over.</p>
            <p>My passion for health and performance started early. I represented New Zealand in beach volleyball at the Youth Olympics and World Championships, and spent years understanding what the body is capable of with the right training, done consistently.</p>
            <p>My time at Oceania Healthcare — one of New Zealand&apos;s largest aged-care providers — showed me first-hand how much strength, movement and physical confidence matter to quality of life as we age, and I became passionate about helping people in that space.</p>
            <p>I hold an <strong className="text-ink font-semibold">NZIS Level 4 Personal Training certification</strong> and bring the same work ethic I developed in elite sport to every client — without any of the intimidation. My sessions are built around you: your goals, your starting point, and your pace.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
