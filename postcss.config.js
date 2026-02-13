module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
      ],
    },
    autoprefixer: {},
  },
}
