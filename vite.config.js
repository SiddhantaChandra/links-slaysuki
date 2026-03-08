import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cloudflare()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return undefined
          }

          if (id.includes('@phosphor-icons/react')) {
            return 'icon-vendor'
          }

          if (id.includes('react-dom')) {
            return 'react-dom-vendor'
          }

          if (id.includes('/react/')) {
            return 'react-vendor'
          }

          return undefined
        },
      },
    },
  },
})