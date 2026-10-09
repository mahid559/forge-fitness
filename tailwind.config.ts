import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2.5rem',
        xl: '3rem',
      },
      screens: {
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        // Forge dark steel base
        ink: {
          DEFAULT: '#07070A',
          50: '#F6F6F7',
          900: '#0B0B0F',
          950: '#07070A',
        },
        steel: {
          50: '#F5F5F6',
          100: '#E7E7EA',
          200: '#C9C9CF',
          300: '#A3A3AE',
          400: '#7C7C88',
          500: '#5C5C68',
          600: '#44444E',
          700: '#33333B',
          800: '#232329',
          900: '#16161B',
          950: '#0E0E12',
        },
        // Molten ember brand accent
        ember: {
          50: '#FFF4ED',
          100: '#FFE5D4',
          200: '#FEC7A8',
          300: '#FDA172',
          400: '#FB7A3C',
          500: '#F65B15',
          600: '#E7440B',
          700: '#BF320B',
          800: '#982A11',
          900: '#7B2511',
          950: '#430F05',
        },
        embergold: {
          400: '#FFB347',
          500: '#FF9A1F',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-oswald)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        '9xl': ['7.5rem', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(246,91,21,0.35), 0 18px 60px -20px rgba(246,91,21,0.55)',
        card: '0 24px 60px -30px rgba(0,0,0,0.85)',
        soft: '0 10px 40px -20px rgba(0,0,0,0.7)',
      },
      backgroundImage: {
        'ember-gradient': 'linear-gradient(120deg, #F65B15 0%, #FF9A1F 55%, #FFC24D 100%)',
        'steel-gradient': 'linear-gradient(180deg, #16161B 0%, #0B0B0F 100%)',
        'grid-lines':
          'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--marquee-duration, 40s) linear infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 1.8s infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
