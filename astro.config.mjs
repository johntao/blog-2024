// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readingTime';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://johntao.one',
    markdown: {
        remarkPlugins: [remarkReadingTime]
    },
    integrations: [
        mdx(),
        tailwind({
            applyBaseStyles: false,
        }),
        sitemap(),
        react({
            experimentalReactChildren: true,
        })
    ],
});