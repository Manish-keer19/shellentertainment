// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or '@vitejs/plugin-vue' if using Vue

export default defineConfig({
  plugins: [react()],
 
  
  server: {
    allowedHosts: [
      // 'c246-2409-40c4-f1-c636-4194-d273-710-5fcb.ngrok-free.app',
    '35a4-2409-40c4-f1-c636-4194-d273-710-5fcb.ngrok-free.app'
    ],
    host: true
  }
});
