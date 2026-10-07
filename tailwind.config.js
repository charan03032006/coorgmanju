/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        forest: {
          50: '#f0f7f4',
          100: '#dbE9e0',
          200: '#b7d3c1',
          300: '#8db79b',
          400: '#5e9571',
          500: '#3d7a55',
          600: '#2d6144',
          700: '#244d37',
          800: '#1d3d2c',
          900: '#163022',
          950: '#0c1b12',
        },
        coffee: {
          50: '#faf6f2',
          100: '#f0e6d8',
          200: '#e0ccba',
          300: '#c9a98e',
          400: '#a87f60',
          500: '#8a6347',
          600: '#705139',
          700: '#5b4030',
          800: '#4a3428',
          900: '#3a2a20',
          950: '#1e1510',
        },
        cream: {
          50: '#fdfcf9',
          100: '#faf6ee',
          200: '#f5ecd9',
          300: '#ecdcbc',
          400: '#dcc594',
          500: '#c9aa6b',
        },
        gold: {
          50: '#fbf8ed',
          100: '#f6eecc',
          200: '#ecda96',
          300: '#e0c160',
          400: '#d4a73e',
          500: '#c08f2a',
          600: '#a67223',
          700: '#855520',
          800: '#6e441f',
          900: '#5d3a1f',
        },
      },
      boxShadow: {
        'premium': '0 2px 20px -2px rgba(22, 48, 34, 0.08)',
        'premium-lg': '0 12px 40px -8px rgba(22, 48, 34, 0.15)',
        'card': '0 4px 24px -4px rgba(22, 48, 34, 0.10)',
        'card-hover': '0 16px 48px -8px rgba(22, 48, 34, 0.18)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
