export default function Success() {
  return (
    <main className="min-h-screen bg-[#F0F5FD] flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-12 text-center">
        <div className="text-7xl mb-6">🎉</div>
        <h1 className="text-3xl font-extrabold text-[#1B3A8C] mb-4">Payment Successful!</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Thank you for booking with Confident Fitness Co. Maya will be in touch shortly to confirm your session time.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          If you have any questions in the meantime, give Maya a call on{' '}
          <a href="tel:0211989086" className="text-[#CC1B1B] font-bold hover:underline">021 198 9086</a>.
        </p>
        <a
          href="/"
          className="inline-block bg-[#1B3A8C] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#2A56CC] transition-colors"
        >
          Back to Home
        </a>
      </div>
    </main>
  )
}
