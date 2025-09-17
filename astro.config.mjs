// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://inglescongateway.com',
  integrations: [
    react(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      // Agregar URLs específicas para SEO
      customPages: [
        'https://inglescongateway.com/',
        'https://inglescongateway.com/#programs',
        'https://inglescongateway.com/#about', 
        'https://inglescongateway.com/#promotions',
        'https://inglescongateway.com/#testimonials',
        'https://inglescongateway.com/#contact'
      ]
    })
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimización para performance
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-components': ['lucide-react']
          }
        }
      }
    }
  },

  // Configuración para mejor SEO
  compilerOptions: {
    // Remover comentarios en producción
    removeComments: true
  }
});