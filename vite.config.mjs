import { defineConfig } from 'vite'
import postcss from './postcss.config.mjs'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss,
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    strictPort: true,
    port: 5173, // you can replace this port with any port
  },
  resolve: {
    alias: [
      {
        find: /^~(.+)$/,
        replacement: '$1',
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
