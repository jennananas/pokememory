import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from 'file:///Users/mac/Desktop/github/pokememory/node_modules/vite-plugin-gh-pages/dist/index.js';
const { vitePlugin: VitePluginGhPages } = pkg

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginGhPages],
  "include":  ["src", "styled-system"],
  "base": '/pokememory/'
  
})
