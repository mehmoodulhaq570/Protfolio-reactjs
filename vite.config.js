import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  // The SSR bundle only feeds scripts/prerender.js, so it doesn't need a copy of public/.
  build: isSsrBuild ? { copyPublicDir: false } : {},
}));
