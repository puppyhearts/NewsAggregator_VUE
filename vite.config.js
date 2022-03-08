import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  disableHostCheck: true
  root: 'src',
  target: 'web'
  plugins: [vue()]
})
