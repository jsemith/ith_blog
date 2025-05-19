import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  extensions: ['.svelte', '.md'],

  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md']
    })
  ],

  kit: {
    adapter: adapter()
  }
};


export default config;
