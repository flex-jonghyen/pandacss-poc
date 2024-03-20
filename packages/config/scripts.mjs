import { createRequire } from "node:module";
import path from "node:path";
import { $, argv } from "zx";

$.verbose = false;

const require = createRequire(import.meta.url);

const pandaPackageJsonPath = require.resolve("@pandacss/dev/package.json");
const pandaBinPath = require(pandaPackageJsonPath).bin.panda;

const pandaBin = path.resolve(path.dirname(pandaPackageJsonPath), pandaBinPath);

$`node ${pandaBin} ${argv}`.stdout.pipe(process.stdout);
