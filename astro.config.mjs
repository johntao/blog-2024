// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readingTime';
import react from '@astrojs/react';
// import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://johntao.one',
    markdown: {
        remarkPlugins: [remarkReadingTime]
    },
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        react({
            experimentalReactChildren: true,
        }),
        // starlight({
        //     title: 'The power of doc site',
		// 	components: {
		// 		Tabs: './src/overrides/PageSidebar.astro',
		// 	},
        // }),
        sitemap(),
        mdx(),
    ],
});