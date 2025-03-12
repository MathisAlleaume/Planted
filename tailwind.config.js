/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts,jsx}",
    "./layouts/**/*.{js,vue,ts,jsx}",
    "./pages/**/*.{js,vue,ts,jsx}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /.*/,
    },
  ],
};
