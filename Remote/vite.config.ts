import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    federation({
      name: 'custom',
      filename: 'custom.js',
      exposes: {
          './SumTextTwoFields': './src/controls/SumTextTwoFields',
      },
      shared: ['react', 'react-dom']
  })],
  build: {
    target: 'esnext',
  },
  server: {
    port: 4174,
    host: true,
  },
  preview: {
    port: 4174,
    host: true,
  }
})
