import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/sports/',
  server: {
    headers: {
      "Content-Security-Policy": "script-src 'self' 'unsafe-eval'"
    }
  }
})