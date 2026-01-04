// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://maren-stokes.github.io',
  // Since the repo is maren-stokes.github.io (user/org page), we don't need a base path
  // If it were a project page, we'd set: base: '/repo-name'
  output: 'static',
});
