// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
//       },
//       colors: {
//         accent: {
//           1: 'hsl(206 92% 48%)',
//           2: 'hsl(258 92% 66%)', 
//           3: 'hsl(330 86% 60%)',
//         }
//       },
//       animation: {
//         'ticker': 'ticker 42s linear infinite',
//         'orb-float': 'orbFloat 20s ease-in-out infinite alternate',
//       },
//       keyframes: {
//         ticker: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-50%)' }
//         },
//         orbFloat: {
//           '0%': { transform: 'translate(-50%, -50%) scale(1)' },
//           '100%': { transform: 'translate(-45%, -45%) scale(1.04)' }
//         }
//       }
//     },
//   },
//   plugins: [],
// }


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
        },
      },
      animation: {
        ticker: 'ticker 42s linear infinite',
        'orb-float': 'orbFloat 20s ease-in-out infinite alternate',

        // NEW: gentle gradient drift (used by Background.tsx)
        'grad-a': 'gmA 26s ease-in-out infinite alternate',
        'grad-b': 'gmB 34s ease-in-out infinite alternate',
        'grad-c': 'gmC 42s ease-in-out infinite alternate',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        orbFloat: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { transform: 'translate(-45%, -45%) scale(1.04)' },
        },

        // NEW: gradient motion keyframes
        gmA: {
          '0%': { transform: 'translate3d(-2%,-1%,0) scale(1.02)', opacity: '.95' },
          '100%': { transform: 'translate3d(2%,1.5%,0) scale(1.06)', opacity: '.90' },
        },
        gmB: {
          '0%': { transform: 'translate3d(1%,-1%,0) scale(1.00)', opacity: '.88' },
          '100%': { transform: 'translate3d(-1.5%,1%,0) scale(1.04)', opacity: '.84' },
        },
        gmC: {
          '0%': { transform: 'translate3d(0.5%,1%,0) scale(1.00)', opacity: '.80' },
          '100%': { transform: 'translate3d(-1%,-1.5%,0) scale(1.05)', opacity: '.76' },
        },
      },
    },
  },
  plugins: [],
};
