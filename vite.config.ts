import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
    },
  },
  server: {
    port: Number(process.env.PORT) || 5173,
    host: '0.0.0.0',
  },
  preview: {
    port: Number(process.env.PORT) || 5173,
    host: '0.0.0.0',
  },
});
