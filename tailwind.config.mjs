
// const disabledCss = {
// 	'code::before': false,
// 	'code::after': false,
// 	'blockquote p:first-of-type::before': false,
// 	'blockquote p:last-of-type::after': false,
// 	pre: false,
// 	code: false,
// 	'pre code': false
// };

/** @type {import('tailwindcss').Config} */
export default {
	// darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		spacing: {
			0.7: '0.2rem',
		},
		extend: {
			// typography: {
			// 	DEFAULT: { css: disabledCss },
			// 	sm: { css: disabledCss },
			// 	lg: { css: disabledCss },
			// 	xl: { css: disabledCss },
			// 	'2xl': { css: disabledCss }
			// }
		}
	},
	// plugins: [require('@tailwindcss/typography')]
	plugins: []
};
