import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This makes process.env variables available in the client-side code.
    // Vite will replace 'process.env.API_KEY' with the actual value at build time.
    'process.env': process.env
  }
})
