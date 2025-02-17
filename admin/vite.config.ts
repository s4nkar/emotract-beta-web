import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
   port: 5174,
   strictPort: true,
  },
  server: {
   port: 5174,
   strictPort: true,
   host: '0.0.0.0',
  //  origin: "http://0.0.0.0:5174",
  },
 });

