import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// El subdominio tiene que resolverse a 127.0.0.1 via el archivo hosts de
// Windows: 127.0.0.1 mipagina.com
// Finanza+ corre aparte en http://finanzas.mipagina.com:5173
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Que no salte de puerto solo: si 5173 esta ocupado, el subdominio
    // dejaria de resolver y el fallo seria dificil de diagnosticar.
    strictPort: true,
    host: '127.0.0.1',
    allowedHosts: ['mipagina.com'],
    proxy: {
      // Mantiene la app same-origin para que las cookies de sesion
      // (sameSite: 'lax') sigan funcionando.
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: false,
      },
    },
  },
  preview: {
    port: 5173,
    strictPort: true,
    host: '127.0.0.1',
    allowedHosts: ['mipagina.com'],
  },
});
