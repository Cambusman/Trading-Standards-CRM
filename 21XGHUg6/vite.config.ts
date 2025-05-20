import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths({ root: __dirname }), react()],
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 3000,
  },
});
