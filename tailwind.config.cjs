const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-bg': '#111111',
			},
			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
			},
			animation: {
				'move-bg': 'gradient 10s ease infinite',
			},
			keyframes: {
				gradient: {
					'0%': { 'background-position': '0 50%' },
					'50%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0 50%' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};
