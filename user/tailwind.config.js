/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], // Enables dark mode using the "class" strategy
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"], // Files to scan for Tailwind classes
	theme: {
	  extend: {
		// Extend default Tailwind settings
  
		// Border Radius customization using CSS variables
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
  
		// Custom background images
		backgroundImage: {
		  'aside-bg-horizontaly': 'linear-gradient(to left, #a4a7ef, #565bcf)', // Horizontal gradient
		  'dark-bg': `
			radial-gradient(at 0% 100%, hsla(204, 11%, 21%, 1) 0px, transparent 50%),
			radial-gradient(at 84% 100%, hsla(333, 11%, 21%, 1) 0px, transparent 50%)
		  `, // Fixed syntax for dark gradient
		},
  
		// Custom colors
		colors: {
		  'custom-dark': 'hsla(304,60%,1%,1)',
		},
  
		// Sidebar theme customization using CSS variables
		sidebar: {
		  DEFAULT: 'hsl(var(--sidebar-background))',
		  foreground: 'hsl(var(--sidebar-foreground))',
		  primary: 'hsl(var(--sidebar-primary))',
		  'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
		  accent: 'hsl(var(--sidebar-accent))',
		  'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
		  border: 'hsl(var(--sidebar-border))',
		  ring: 'hsl(var(--sidebar-ring))',
		},
	  },
	},
	plugins: [
	  require("tailwindcss-animate"), // Adds animation utilities
	],
  };
  