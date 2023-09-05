import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");

const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        codeEditor: resolve(root, "code-editor", "index.html"),
      },
    },
  },
  server: {
    port: 8080,
  },
});
