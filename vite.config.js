import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: 'client',
  server: {
    port: 5000,
    allowedHosts: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  build: {
    outDir: '../dist',
    sourcemap: false,         // غیرفعال کردن سورس‌مپ برای نجات دادن رم سرور
    chunkSizeWarningLimit: 1600, // افزایش آستانه هشدار برای سبک شدن پردازش
  }
});
