import { defineConfig } from 'vite'

export default defineConfig({
  // Se o seu index.html estiver na raiz, não precisa de configurações extras
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  }
})