/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blacky: '#0f172a',
        blue: '#38bdf8',
        mygray: '#94a3b8',
        white: '#ffffff',
        darkybg: '#050816',
        navy: '#0b1120',
        panel: '#0f172a',
        orangeGlow: '#fb923c',
        purpleGlow: '#8b5cf6',
      },
      borderRadius: {
        'rounded-1/2': 'border-radius:50%;',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}
