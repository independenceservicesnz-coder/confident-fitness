'use client'

const plans = [
  {
    name: 'Single session',
    label: 'In person',
    price: '$90',
    period: '/ session',
    serviceParam: 'inperson',
    desc: 'A one-on-one session at your home anywhere across Auckland. Perfect to start or to top up.',
    popular: false,
  },
  {
    name: 'Monthly plan',
    label: 'In person · ongoing',
    price: '$320',
    period: '/ month',
    serviceParam: 'monthly',
    desc: 'Ongoing in-person training plus a programme built around you — the best way to see real, lasting change.',
    popular: true,
  },
  {
    name: 'Online session',
    label: 'Online',
    price: '$70',
    period: '/ session',
    serviceParam: 'online',
    desc: 'Live one-on-one sessions via video call. Available to anyone in New Zealand.',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-[1180px] mx-auto px-6 py-[clamp(56px,8vw,104px)]">
      <div className="max-w-[34em] mb-[clamp(36px,5vw,56px)]">
        <span className="uppercase tracking-[0.18em] text-xs font-semibold text-ink-subtle">Plans &amp; pricing</span>
        <h2 className="font-serif font-medium text-[clamp(30px,4vw,46px)] leading-[1.1] tracking-tight mt-3.5">
          Three simple ways to train.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5 items-stretch">
        {plans.map(plan => (
          <div key={plan.name}
            className={`rounded-[20px] p-8 flex flex-col relative ${
              plan.popular
                ? 'bg-charcoal text-cream border border-charcoal shadow-[0_30px_60px_-32px_rgba(28,24,19,0.5)]'
                : 'bg-white border border-border-card text-ink'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-6 right-6 bg-orange text-white text-xs font-semibold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full">
                Most popular
              </div>
            )}
            <div className={`uppercase tracking-[0.12em] text-xs font-semibold mb-2 ${plan.popular ? 'text-orange-light' : 'text-ink-subtle'}`}>
              {plan.label}
            </div>
            <h3 className="font-serif font-semibold text-2xl mb-4">{plan.name}</h3>
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="font-serif text-5xl font-semibold">{plan.price}</span>
              <span className={`text-sm ${plan.popular ? 'text-[#B8AE9C]' : 'text-ink-muted'}`}>{plan.period}</span>
            </div>
            <p className={`text-base leading-relaxed flex-1 mb-7 ${plan.popular ? 'text-[#C9BFAD]' : 'text-ink-muted'}`}>
              {plan.desc}
            </p>
            <a
              href={`/?service=${plan.serviceParam}#book`}
              className={`w-full py-3.5 rounded-full font-semibold text-base transition-colors text-center no-underline block ${
                plan.popular
                  ? 'bg-orange text-white hover:bg-[#d44a1f]'
                  : 'bg-transparent text-ink border border-border hover:border-ink'
              }`}
            >
              Choose a time & pay
            </a>
          </div>
        ))}
      </div>

      <p className="text-center text-ink-muted mt-8 text-base">
        Prefer to pay by bank transfer? Just call or message Maya after booking.
      </p>
    </section>
  )
}
