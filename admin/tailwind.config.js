/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "custom-dark": "hsla(304,60%,1%,1)",
      },
    },
    variants: {
      extend: {
        backgroundColor: ["dark"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
