import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(
  {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
       @import "./src/assets/styles/variables.scss";
       @import "./src/assets/styles/fonts.scss";
       @import "./src/assets/styles/mixins.scss";
       `,
        },
      },
    },
  }
);