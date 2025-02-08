/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./components/**/*.{js,jsx,mdx}", "./app/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
