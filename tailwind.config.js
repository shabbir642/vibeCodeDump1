module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#F5E6E8',
        blush: '#E8D5DA',
        'warm-white': '#FDFCFC',
        'deep-rose': '#8B5A6B',
        'rose-accent': '#A67C8A',
        'coral-orange': '#eb7448',
        'soft-orange': '#f4a373',
        'peach-cloud': '#f7c7a0',
        'light-peach': '#f9d5b8',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px 0 rgba(250, 218, 221, 0.18)',
      },
      keyframes: {
        'floating-heart': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-24px) scale(1.08)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
        'fade-scale': {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'float-cloud': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-10px) translateX(5px)' },
        },
        'drift-cloud': {
          '0%': { transform: 'translateX(-20px)' },
          '100%': { transform: 'translateX(20px)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'floating-heart': 'floating-heart 4s ease-in-out infinite',
        'fade-scale': 'fade-scale 0.8s ease-in-out',
        'float-cloud': 'float-cloud 6s ease-in-out infinite',
        'drift-cloud': 'drift-cloud 8s ease-in-out infinite alternate',
        'bounce-gentle': 'bounce-gentle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
