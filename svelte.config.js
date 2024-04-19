import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex"; // Main MD->HTML parsing
import rehypeSlug from "rehype-slug"; // Adding header links
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import toc from "@jsdevtools/rehype-toc"; // Adding Table-of-contents
import { highlighter } from "./src/lib/highlighting.js"; // For custom code rendering
import rehypeKatex from "rehype-katex-svelte"; // For math support
import remarkMath from "remark-math";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/yimuchen.pages" : "",
    },
  },
  extensions: [".svelte", ".md"],
  preprocess: [
    mdsvex({
      extensions: [".md"],
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypeSlug, rehypeAutolinkHeadings, toc],
      highlight: {
        highlighter: highlighter,
      },
    }),
  ],
};

export default config;
