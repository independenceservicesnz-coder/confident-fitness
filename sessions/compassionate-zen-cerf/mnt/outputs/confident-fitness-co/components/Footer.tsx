export default function Footer() {
  return (
    <footer className="bg-[#0D1F4F] text-white py-14 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#1B3A8C] rounded-xl flex items-center justify-center font-extrabold text-base">CF</div>
            <div className="font-bold text-lg">Confident Fitness Co</div>
          </div>
          <p className="text-white/70 text-base leading-relaxed">
            Personal training for New Zealanders aged 50 and over. In-home Auckland & online NZ-wide.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-4 text-base">Quick Links</h4>
          <ul className="space-y-2 text-white/70 text-base">
            {['Services','About','Pricing','FAQ','Contact'].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4 text-base">Contact</h4>
          <ul className="space-y-2 text-white/70 text-base">
            <li>📞 <a href="tel:0211989086" className="hover:text-white transition-colors">021 198 9086</a></li>
            <li>📍 Auckland (in-home) & NZ-wide (online)</li>
            <li>🕐 Mon–Sat, 7am–7pm</li>
          </ul>
        </div>
      </div>

      {/* CTA banner */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/50 text-sm">© 2025 Confident Fitness Co · Maya Dickson · All rights reserved</p>
        <a
          href="tel:0211989086"
          className="bg-[#CC1B1B] text-white font-bold px-6 py-3 rounded-full hover:bg-red-700 transition-colors text-sm"
        >
          📞 Call Now — First Session Free
        </a>
      </div>
    </footer>
  )
}
