import _config from "@fubao/config";
import { defineConfig } from "@pandacss/dev";

const config = defineConfig({
  ..._config,
  include: ["./src/**/*.{tsx,ts}"],
});

export default config;
