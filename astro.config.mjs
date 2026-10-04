import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Statique par défaut. Seul /api/contact/ tourne à la demande : il relaie le formulaire
// vers Inlet (JSON + preuve de travail), ce qu'un <form> natif ne peut pas faire seul.
export default defineConfig({
  site: 'https://boxingcenter-blagnac.fr',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false }
});
