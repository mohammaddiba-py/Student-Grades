/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A192F',
          50: '#E8EDF3',
          100: '#C5D1DE',
          200: '#9DB0C7',
          300: '#6E89AE',
          400: '#446190',
          500: '#1E4173',
          600: '#152E54',
          700: '#0F2240',
          800: '#0A192F',
          900: '#061022',
        },
        champagne: {
          DEFAULT: '#C5A059',
          light: '#D4B876',
          dark: '#A88842',
        },
        ivory: '#FDFCFB',
        'warm-gray': '#F4F6F9',
        'arch-gray': '#E5E5E5',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slow-zoom': 'slowZoom 6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
