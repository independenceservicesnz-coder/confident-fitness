export default function Footer() {
  return (
    <footer className="bg-charcoal text-[#C9BFAD]">
      <div className="max-w-[1180px] mx-auto px-6 py-[clamp(48px,6vw,72px)] pb-10 grid md:grid-cols-3 gap-9">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-orange inline-block flex-shrink-0" />
            <span className="font-serif text-[22px] font-semibold text-cream">Confident Fitness Co.</span>
          </div>
          <p className="m-0 text-base leading-relaxed max-w-[24em]">
            Feel better. Move stronger. Stay independent. Personal training for adults 50+, in Auckland and online.
          </p>
        </div>
        <div>
          <div className="uppercase tracking-[0.14em] text-xs font-semibold text-[#8A7E6C] mb-3.5">Get in touch</div>
          <div className="flex flex-col gap-2 text-base">
            <a href="tel:+64211989086" className="text-cream font-semibold no-underline hover:text-orange transition-colors">021 198 9086</a>
            <a href="mailto:maya.dickson01@gmail.com" className="text-[#C9BFAD] no-underline hover:text-orange transition-colors">maya.dickson01@gmail.com</a>
            <a href="#book" className="text-[#C9BFAD] no-underline hover:text-orange transition-colors">Book a consultation</a>
          </div>
        </div>
        <div>
          <div className="uppercase tracking-[0.14em] text-xs font-semibold text-[#8A7E6C] mb-3.5">Where</div>
          <div className="text-base leading-[1.7]">Auckland, New Zealand<br />Online — worldwide</div>
          <div className="text-sm text-[#8A7E6C] mt-3.5">NZIS Level 4 Certified Personal Trainer</div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1180px] mx-auto px-6 py-5 text-xs text-[#8A7E6C]">
          © 2026 Confident Fitness Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
