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
		plugin(function({ addBase, addComponents, addUtilities }) {
			addBase({
				'a': {
					'@apply underline dark:hover:text-blue-400 hover:text-blue-500': {},
				}
			});
			addUtilities({
				'.jt1-text-color': {
					'@apply text-neutral-700 dark:text-neutral-300': {}
				},
				'.jt1-border-color': {
					'@apply border-neutral-700 dark:border-neutral-300': {}
				},
			})
			addComponents({
				'.ui-bar-color': {
					'@apply bg-neutral-100 dark:bg-neutral-900 jt1-text-color': {}
				},
				'.content-area-color': {
					'@apply bg-white dark:bg-neutral-800 jt1-text-color': {}
				},
			});
		}),
	]
};