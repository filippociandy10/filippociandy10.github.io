module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: 'var(--navy)',
        'light-navy': 'var(--light-navy)',
        'lightest-navy': 'var(--lightest-navy)',
        slate: 'var(--slate)',
        'light-slate': 'var(--light-slate)',
        'lightest-slate': 'var(--lightest-slate)',
        white: 'var(--white)',
        green: 'var(--green)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
}