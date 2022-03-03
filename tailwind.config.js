module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        envitedPurple: "#501FC1",
        lightPurple: '#724DF9',
        buttonGreen: '#06D6A0',
        buttonBlue: '#5794F7'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
