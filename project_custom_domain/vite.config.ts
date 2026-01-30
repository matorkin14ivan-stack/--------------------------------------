import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // The base public path when serving the project.
  // For a custom domain (e.g. marketing-and-business-processes-kitchen.ru)
  // or deployment to https://<username>.github.io/, set base to '/'.
  // A slash ensures that all asset URLs are rooted correctly in production.
  base: '/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
