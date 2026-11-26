// Entry program for the news-image-20261125 competition.
// It copies the pre-rendered newspaper image to the output directory
// the grader provides, and writes nothing else.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
const target = resolve(outDir, "entry.png");
copyFileSync(source, target);
console.log(`wrote ${target}`);
