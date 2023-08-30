import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue2"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@/": path.join(__dirname, "src/"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import \"/src/styles/variable.scss\";",
      },
    },
  },
})
