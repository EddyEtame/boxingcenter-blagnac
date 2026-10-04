import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://boxingcenter-blagnac.fr',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false }
});
