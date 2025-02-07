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

const isDev = import.meta.env.DEV; // true in development, false in production

// console.error('isDev', isDev);
export default defineConfig({
	site: 'https://johntao.github.io/blog-2024',
	base: isDev ? '/' : "blog-2024",
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
				MarkdownContent: './src/components/sl/MarkdownContentAddMeta.astro',
				ThemeProvider: './src/components/sl/ThemeProviderLite.astro',
				ThemeSelect: './src/components/sl/ThemeSelectLite.astro',
				Sidebar: './src/components/sl/sidebar/Sidebar.astro',
				PageSidebar: './src/components/sl/sidebar/PageSidebar.astro',
				MobileTableOfContents: './src/components/sl/sidebar/MobileTableOfContents.astro',
				MobileMenuFooter: './src/components/sl/sidebar/MobileMenuFooter.astro',
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