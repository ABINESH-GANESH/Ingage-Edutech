import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    open: false,
    watch: {
      ignored: ['**/public/videos/**', '**/node_modules/**', '**/dist/**']
    }
  }
})
