const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				0.7: '0.2rem',
				4.5: '1.15rem',
				23: '5.8rem',
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	]
};