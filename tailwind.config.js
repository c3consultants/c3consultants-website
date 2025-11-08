/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8e8ed',
          100: '#d1d1db',
          200: '#b8b8ca',
          300: '#9f9fb9',
          400: '#8686a8',
          500: '#222344', // Deep Navy
          600: '#1b1c36',
          700: '#151629',
          800: '#0e0f1b',
          900: '#07080d',
        },
        accent: {
          300: '#e5d4b8',
          400: '#d9c19f',
          500: '#cdad7d', // Subtle Gold
          600: '#b89a6a',
          700: '#9d8359',
          800: '#825c45',
        },
        neutral: {
          50: '#f4f1ec', // Cream
          100: '#e9e5dd',
          200: '#d4cec2',
          300: '#bfb8aa',
          400: '#9b9692',
          500: '#767370',
          600: '#575452',
          700: '#4a4a4a',
          800: '#2d2d2d',
          900: '#1a1a1a',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'sm-gold': '0 4px 12px rgba(205, 173, 125, 0.1)',
        'lg-gold': '0 10px 28px rgba(205, 173, 125, 0.15)',
        'xl-gold': '0 20px 40px rgba(205, 173, 125, 0.2)',
        'sm-navy': '0 4px 12px rgba(34, 35, 68, 0.1)',
        'lg-navy': '0 10px 28px rgba(34, 35, 68, 0.15)',
        'xl-navy': '0 20px 40px rgba(34, 35, 68, 0.2)',
        'glow-gold': '0 0 20px rgba(205, 173, 125, 0.25)',
        'glow-navy': '0 0 20px rgba(34, 35, 68, 0.2)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #222344 0%, #151629 100%)',
        'gradient-navy-gold': 'linear-gradient(135deg, #222344 0%, #151629 50%, #cdad7d 100%)',
      },
    },
  },
  plugins: [],
};
