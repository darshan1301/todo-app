/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Overwrite the default sans-serif font
        serif: ["Roboto", "serif"], // Overwrite the default serif font
        mono: ["Courier New", "monospace"], // Overwrite the default monospace font
      },
      colors: {
        "ctm-purple": "#614BC3",
        "ctm-teal": "#33BBC5",
        "ctm-mint": "#85E6C5",
        "faded-mint": "#C8FFE0",
      },
    },
  },
  plugins: [],
};
