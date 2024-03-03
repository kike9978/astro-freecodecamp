import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import pkg from 'typescript';
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
const {
  server
} = pkg;


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: "server",
  adapter: netlify()
});