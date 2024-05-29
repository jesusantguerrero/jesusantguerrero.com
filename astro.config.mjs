import vue from "@astrojs/vue";
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import db from '@astrojs/db';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  experimental: {
    actions: true
  },
  markdown: {
    render: ['@astrojs/markdown-remark', {
      remarkPlugins: [['remark-gfm'], ['remark-smartypants'], ['astro-remark-digital-garden', {
        seedsPath: '/garden/seeds/'
      }]]
    }]
  },
  integrations: [vue(), tailwind(), db()],
  adapter: netlify()
});