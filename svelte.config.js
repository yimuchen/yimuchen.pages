import adapter from "@sveltejs/adapter-static";
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/yimuchen.pages" : "",
    },
  },
  extensions: ['.svelte', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.md'],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
    })
  ]

};

export default config;
