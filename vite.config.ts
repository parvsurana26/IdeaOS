import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 👈 Add this line to fix asset loading in production
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
