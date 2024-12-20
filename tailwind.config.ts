import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		boxShadow: {
			'inner-xl': 'inset 0 4px 8px 0 rgb(0 0 0 / 0.05)',
		},
		aspectRatio: {
			'4/3' : '4/3',
		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			blueblack: '#001334',
  			deepblue: '#03346E',
  			skyblue: '#6EACDA',
  			lightgray: '#E2E2B6'
  		},
  		fontFamily: {
  			ethnocentric: ["Ethnocentric", "sans-serif"],
  			bluehighway: ["Blue Highway", "sans-serif"],
			dagger: ["Daggersquare", "sans-serif"],
			aptos: ['Aptos', 'monospace'],
			space: ['Space', 'monospace'],
			avalors: ['Avalors', 'monosapce'],
			cascadia: ['Cascadia', 'monospace'],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
			},
			slideName: {
				'0%': { transform: 'translateX(-2000px)' },
				'100%': { transform: 'translateX(0)' },
			},
  		},
		animation: {
			'background-position-spin': 'background-position-spin 2200ms infinite alternate',
			slideName: 'slideName 2.5s forwards',
		},
		rotate: {
			'spin' : '360deg',
		},
		animationDelay: {
			'1.5s' : '1.5',
			'0.5s' : '0.5s',
			'1.7s' : '1.75s',
			'2.0s' : '2.0s',
			'2.5s' : '2.5s',
		}
  	}
  },
  plugins: [
    "@tailwindcss/forms",
    "@tailwindcss/typography",
    "@tailwindcss/aspect-ratio",
	  "tailwindcss-animate"
],
};

export default config;
