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
        cream:   '#F4F0E9',
        'cream-mid': '#FBF8F2',
        border:  '#E6DFD2',
        'border-card': '#ECE4D6',
        ink:     '#1C1813',
        'ink-mid': '#4A4337',
        'ink-muted': '#6E665A',
        'ink-subtle': '#8A6F4E',
        charcoal: '#16130E',
        orange:  '#EC5829',
        'orange-light': '#EC9A7C',
        'orange-warm': '#F6EBE3',
      },
      fontFamily: {
        sans:  ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
