import { defineConfig } from "@pandacss/dev";

const config = defineConfig({
  include: ["./src/**/*.{tsx,ts}"],
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
  jsxFramework: "react",
  importMap: "@fubao/design-token",
  outdir: "./assets",
});

export default config;
