import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [react()],
  build: {
    cssMinify: "lightningcss",
  },
};

export default config;
