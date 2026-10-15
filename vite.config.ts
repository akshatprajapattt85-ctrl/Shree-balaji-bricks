import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'serve-gsc-file',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/google45f4ff32df33ba1a.html') {
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              res.end('google-site-verification: google45f4ff32df33ba1a.html\n');
              return;
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname || '.', '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(import.meta.dirname || '.', 'index.html'),
          typesOfBricks: path.resolve(import.meta.dirname || '.', 'types-of-bricks/index.html'),
          howToChoose: path.resolve(import.meta.dirname || '.', 'how-to-choose-quality-bricks/index.html'),
          brickPriceGuide: path.resolve(import.meta.dirname || '.', 'brick-price-guide/index.html'),
          blog: path.resolve(import.meta.dirname || '.', 'blog/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
