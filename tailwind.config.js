/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#090947', // Add your custom color here
        customRed: '#FF0000',  // Another example
      },
      fontFamily: {
        Agbalumo: ['Agbalumo', 'sans-serif'],
        Merriweather: ['Merriweather', 'sans-serif']
      },
    },
  },
  plugins: [],
}