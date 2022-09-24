import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/data": {
        target: "http://spm.source.natapp1.cc",
        changeOrigin: true,
      },
    },
  },
});
