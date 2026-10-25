/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#6200EA',
        secondary: '#1F0345',
        accent: '#1F0345',
        background: '#0E0B20',
        backgroundComponent: '#1D1E33',
        backgroundComponentSelected: '#4F548B',
      },
    },
  },
  plugins: [],
}
