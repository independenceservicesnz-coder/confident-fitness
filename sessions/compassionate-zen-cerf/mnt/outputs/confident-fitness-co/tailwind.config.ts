import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:    '#1B3A8C',
        'navy-mid': '#2A56CC',
        'navy-light': '#DDEAF9',
        'navy-pale':  '#F0F5FD',
        red:     '#CC1B1B',
        dark:    '#0D1F4F',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
