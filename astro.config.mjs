// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readingTime';
import react from '@astrojs/react';
// import rehypePrettyCode from 'rehype-pretty-code';
// import vercelStatic from '@astrojs/vercel/static';
// import react from '@astrojs/react';
// const options = {
//   // Specify the theme to use or a custom theme json, in our case
//   // it will be a moonlight-II theme from
//   // https://github.com/atomiks/moonlight-vscode-theme/blob/master/src/moonlight-ii.json
//   onVisitLine(node) {
//     // Prevent lines from collapsing in `display: grid` mode, and
//     // allow empty lines to be copy/pasted
//     if (node.children.length === 0) {
//       node.children = [{
//         type: 'text',
//         value: ' '
//       }];
//     }
//   },
//   onVisitHighlightedLine(node) {
//     // Adding a class to the highlighted line
//     node.properties.className = ['highlighted'];
//   }
// };


// https://astro.build/config
export default defineConfig({
    site: 'https://johntao.one',
    markdown: {
        // Disable syntax built-in syntax hightlighting from astro
        // syntaxHighlight: false,
        // rehypePlugins: [[rehypePrettyCode, options]],
        remarkPlugins: [remarkReadingTime]
    },
    integrations: [
        mdx(),
        tailwind({
            applyBaseStyles: false,
        }),
        sitemap(),
        react()
    ],
    // output: 'static',
    // adapter: vercelStatic({
    // 	webAnalytics: {
    // 		enabled: true
    // 	}
    // })
});