import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import imagemin from 'vite-plugin-imagemin';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true // Habilita la minificación de los archivos
  },
  plugins: [
    viteCompression(),
    imagemin({
      webp: {
        quality: 50,
        buffer: true
      }
    }),
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      }
    })
  ]
});
