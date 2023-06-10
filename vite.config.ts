import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const currentFileUrl = import.meta.url;
const currentDirUrl = new URL(".", currentFileUrl).pathname;

console.log({ currentFileUrl, currentDirUrl });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@component": path.resolve(currentDirUrl, "src/components"),
      "@screen": path.resolve(currentDirUrl, "src/screen"),
      "@mock": path.resolve(currentDirUrl, "src/mocks"),
      "@service": path.resolve(currentDirUrl, "src/services"),
      "@utils": path.resolve(currentDirUrl, "src/utils"),
    },
  },
});
