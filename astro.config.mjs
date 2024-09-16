import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";
import node from "@astrojs/node";

const { NODE_ADAPTER } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  markdown: {
    render: ['@astrojs/markdown-remark', {
      remarkPlugins: [['remark-gfm'], ['remark-smartypants'], ['astro-remark-digital-garden', {
        seedsPath: '/garden/seeds/'
      }]]
    }]
  },
  integrations: [
    // db(),
    vue(), 
    tailwind(), 
  ],
  adapter: NODE_ADAPTER ? 
  node({
    mode: 'standalone' 
  }) 
  : netlify()
});