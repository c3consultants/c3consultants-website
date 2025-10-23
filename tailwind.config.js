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
          500: '#222344', // Deep Navy
          600: '#1b1c36',
          700: '#151629',
          800: '#0e0f1b',
        },
        accent: {
          300: '#e5d4b8',
          400: '#d9c19f',
          500: '#cdad7d', // Subtle Gold
          600: '#b89a6a',
          700: '#9d8359',
        },
        neutral: {
          50: '#f4f1ec', // Cream
          100: '#e9e5dd',
          200: '#d4cec2',
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
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
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
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #222344 0%, #151629 100%)',
      },
    },
  },
  plugins: [],
}
