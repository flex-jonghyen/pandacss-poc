import { defineConfig } from "@pandacss/dev";

const config = defineConfig({
  eject: true,
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
  outdir: "dist",
  jsxFramework: "react",
  prefix: "fubao",
});

console.log(config);

export default config;
