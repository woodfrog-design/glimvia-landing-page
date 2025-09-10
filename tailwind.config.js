/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        accent: {
          1: 'hsl(206 92% 48%)',
          2: 'hsl(258 92% 66%)', 
          3: 'hsl(330 86% 60%)',
        }
      },
      animation: {
        'ticker': 'ticker 42s linear infinite',
        'orb-float': 'orbFloat 20s ease-in-out infinite alternate',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        orbFloat: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { transform: 'translate(-45%, -45%) scale(1.04)' }
        }
      }
    },
  },
  plugins: [],
}
