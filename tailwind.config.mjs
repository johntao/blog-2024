const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				'0.7': '0.2rem',
				'4.5': '1.15rem',
				'23': '5.8rem',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		plugin(function ({ addBase, addComponents, addUtilities }) {
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
		require("tailwindcss-animate")
	]
};