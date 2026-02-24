import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#D4AF37',
          500: '#C5A028',
          600: '#B8860B',
          700: '#9A7B0A',
        },
        charcoal: {
          800: '#1a1a1a',
          900: '#0d0d0d',
          950: '#050505',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #9A7B0A 100%)',
      },
    },
  },
  plugins: [],
}

export default config
