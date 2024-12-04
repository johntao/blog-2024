// @ts-check
import { defineConfig, passthroughImageService, } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readingTime';
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
// import rehypeMermaid from 'rehype-mermaid';
import { astroExpressiveCode } from '@astrojs/starlight/expressive-code';

// https://astro.build/config
export default defineConfig({
    site: 'https://johntao.one',
    markdown: {
        remarkPlugins: [remarkReadingTime]
    },
    image: {
        // service: sharpImageService({ limitInputPixels: false }),
        service: passthroughImageService(),
    },
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        react({
            experimentalReactChildren: true,
        }),
        starlight({
            title: 'The power of doc site',
            expressiveCode: true,
            // components: {
            // 	Tabs: './src/overrides/PageSidebar.astro',
            // },
        }),
        sitemap(),
        astroExpressiveCode({
            // You can set configuration options here
            themes: ['github-dark'],
            // styleOverrides: {
            //     // You can also override styles
            //     borderRadius: '0.5rem',
            //     frames: {
            //         shadowColor: '#124',
            //     },
            // },
        }),
        mdx({
            // rehypePlugins: [rehypeMermaid],
            // syntaxHighlight: 'shiki',
            // shikiConfig: { theme: 'dracula' },
            // remarkPlugins: [remarkToc],
            // rehypePlugins: [rehypePresetMinify],
            // remarkRehype: { footnoteLabel: 'Footnotes' },
            // gfm: false,
        }),
    ],
});