/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		backgroundImage: {
        'aside-bg-horizontaly': 'linear-gradient(to left, #a4a7ef, #565bcf)',
      },
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}


