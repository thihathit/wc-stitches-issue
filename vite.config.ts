import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tsPaths from 'rollup-plugin-ts-paths-resolve'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    minify: true
  },
  plugins: [tsPaths(), react(), dts()],
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src', 'main.tsx'),
      name: 'WebC'
    },
    rollupOptions: {
      output: {
        sourcemapExcludeSources: true
      }
    }
  }
})
