import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Modern browsers only keeps the bundle small for students on slow networks
    target: 'es2020',
    cssCodeSplit: true,
  },
})
