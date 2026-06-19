import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Confident Fitness Co | Personal Training for 50+',
  description: 'Feel stronger, move better, and stay independent. Personal training for New Zealanders aged 50 and over. In-home Auckland & online NZ-wide. Call Maya today.',
  keywords: 'personal trainer 50+ NZ, senior fitness Auckland, in-home personal training NZ, fitness over 50 New Zealand',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
