import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://meghas.github.io',
  base: '/portfolio',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
