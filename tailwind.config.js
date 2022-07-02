/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave': "url('@/assets/icon/wave.svg')",
      })
    },
  },
  plugins: [],
}
