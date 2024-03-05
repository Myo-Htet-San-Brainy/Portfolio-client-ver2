/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bottom: "0 4px 3px -2px rgba(255, 165, 0, 1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
