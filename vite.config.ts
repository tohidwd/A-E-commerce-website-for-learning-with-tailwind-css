import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/A-E-commerce-website-for-learning-with-tailwind-css/',
  plugins: [
    tailwindcss()
  ],
})