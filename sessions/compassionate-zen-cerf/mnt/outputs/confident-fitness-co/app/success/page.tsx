export default function Success() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-orange text-white flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
        <h1 className="font-serif text-3xl font-semibold text-ink mb-4">Payment successful!</h1>
        <p className="text-ink-mid text-lg leading-relaxed mb-4">
          Thank you for booking with Confident Fitness Co. Maya will be in touch shortly to confirm your session time.
        </p>
        <p className="text-ink-mid text-lg leading-relaxed mb-8">
          Questions? Call Maya on{' '}
          <a href="tel:0211989086" className="text-orange font-semibold hover:underline">021 198 9086</a>.
        </p>
        <a href="/" className="inline-block bg-orange text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#d44a1f] transition-colors no-underline">
          Back to Home
        </a>
      </div>
    </main>
  )
}
