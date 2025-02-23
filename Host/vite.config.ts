import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        custom: 'http://localhost:5174/assets/custom.js'
      },
      shared: ['react', 'react-dom'],
    })
  ],
  build: {
    target: 'esnext',
  },
  server: {
    port: 5173,
    host: true,  
  },
  preview: {
    port: 5173,
    host: true,    
  }
})
