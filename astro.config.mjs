import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ferrite.emkacz.dev',
  integrations: [sitemap()],
  output: 'static',
  build: { format: 'directory' },
});
