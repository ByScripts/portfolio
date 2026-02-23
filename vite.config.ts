import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vueRouter from 'vue-router/vite'

function stripClientScripts(): Plugin {
  return {
    name: 'strip-client-scripts',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml(html) {
      return html
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<link\b[^>]*rel="modulepreload"[^>]*\/?>/gi, '')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vueRouter(), vue(), vueDevTools(), stripClientScripts()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
