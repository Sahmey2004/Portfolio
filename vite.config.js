import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure static files are served correctly
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Copy public files to build output
    copyPublicDir: true
  }
})