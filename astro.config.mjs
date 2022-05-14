import vue from "@astrojs/vue";
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  markdown: {
    render: ['@astrojs/markdown-remark', {
      remarkPlugins: [['remark-gfm'], ['remark-smartypants'], ['astro-remark-digital-garden', {
        seedsPath: '/garden/seeds/'
      }]]
    }]
  },
  integrations: [vue(), tailwind()]
});