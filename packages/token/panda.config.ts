import { defineConfig } from "@pandacss/dev";

const config = defineConfig({
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
  outdir: "dist",
  jsxFramework: "react",
});

export default config;
