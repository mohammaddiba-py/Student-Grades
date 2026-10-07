/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B213F',
          50: '#E7ECF3',
          100: '#C4CFDD',
          200: '#9DADC5',
          300: '#6E84A4',
          400: '#46607F',
          500: '#27405F',
          600: '#1B3251',
          700: '#0B213F',
          800: '#081A33',
          900: '#051226',
        },
        gold: {
          DEFAULT: '#C89965',
          light: '#D9B68A',
          dark: '#A87A4A',
        },
        ivory: '#F4F7FA',
        ink: '#1A2433',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      letterSpacing: {
        'label': '0.22em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(1.03)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'menu-in': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'scale-in': 'scale-in 1.2s cubic-bezier(0.22,1,0.36,1) both',
        'menu-in': 'menu-in 0.3s ease both',
      },
    },
  },
  plugins: [],
}
