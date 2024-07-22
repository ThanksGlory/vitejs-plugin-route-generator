import { defineConfig } from 'vite'
import { node } from '@liuli-util/vite-plugin-node'
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";


export default defineConfig({
  plugins: [
    node(),
    obfuscatorPlugin({
      options: {
        compact: true,
      }
    })
  ],
  resolve: {
    // 修改解析方式默认为 node 而非 browser
    mainFields: ['module', 'jsnext:main', 'jsnext'],
    conditions: ['node'],
  },
  build: {
    sourcemap: false,
    outDir: 'lib',
    lib: {
      entry: "./src/index.ts",
      name: "vite-plugin-route-generator",
      fileName: 'index',
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      output: {}
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  }
})
