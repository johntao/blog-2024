// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
// import { passthroughImageService, } from 'astro/config';
// import react from '@astrojs/react';
// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
// import { astroExpressiveCode } from '@astrojs/starlight/expressive-code';
import { remarkReadingTime } from './src/lib/readingTime';
// import remarkToc from 'remark-toc';
// import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import sidebar from './src/lib/sidebar';

export default defineConfig({
	site: 'https://johntao.one',
	// markdown: {
	// 	remarkPlugins: [remarkReadingTime]
	// },
	image: {
		// domains: ["imgur.com","i.imgur.com"],
		remotePatterns: [{ protocol: "https" }],
	},
	markdown: {
		remarkPlugins: [
			// [remarkToc, { heading: 'toc', maxDepth: 3 } ],
			remarkReadingTime
		],
		// rehypePlugins: [rehypeAccessibleEmojis],
	},
	// image: {
	// 	service: passthroughImageService(),
	// },
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		// react({
		// 		experimentalReactChildren: true,
		// }),
		starlight({
			title: '\\JT>',
			// expressiveCode: true,
			components: {
				MarkdownContent: './src/components/MarkdownContentAddMeta.astro',
				ThemeProvider: './src/components/ThemeProviderLite.astro',
				ThemeSelect: './src/components/ThemeSelectLite.astro',
			},
			social: {
				github: 'https://github.com/johntao',
			},
			sidebar,
			customCss: [
				'./src/styles/tailwind.css',
				'./src/fonts/hack-subset.css',
			],
		}),
		// sitemap(),
		// astroExpressiveCode({
		// 		themes: ['github-dark'],
		// 		// styleOverrides: {
		// 		//     // You can also override styles
		// 		//     borderRadius: '0.5rem',
		// 		//     frames: {
		// 		//         shadowColor: '#124',
		// 		//     },
		// 		// },
		// }),
		// mdx({
		// 	// rehypePlugins: [rehypeMermaid],
		// 	// syntaxHighlight: 'shiki',
		// 	// shikiConfig: { theme: 'dracula' },
		// 	remarkPlugins: [
		// 		remarkReadingTime,
		// 		// remarkToc,
		// 	],
		// 	extendMarkdownConfig: true,
		// 	// rehypePlugins: [rehypePresetMinify],
		// 	// remarkRehype: { footnoteLabel: 'Footnotes' },
		// 	// gfm: false,
		// }),
	],
});