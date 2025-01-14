import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // Remplacez 'portfolio' par le nom de votre dépôt
  plugins: [react()],
});
