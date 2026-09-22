import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        img1: resolve(__dirname, 'img1.html'),
        img2: resolve(__dirname, 'img2.html'),
        img3: resolve(__dirname, 'img3.html'),
        img4: resolve(__dirname, 'img4.html'),
        img5: resolve(__dirname, 'img5.html'),
        img6: resolve(__dirname, 'img6.html'),
      },
    },
  },
})