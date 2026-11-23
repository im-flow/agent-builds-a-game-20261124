// main.ts — copies POST.json from the repository root into /output.
// That is all the program has to do: the house reads the post itself from X.
// Deterministic: same input bytes produce the same output bytes, every run.
// No network, no wall clock, no files outside the repository.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const botDir = process.env.MAKEFUN_BOT_DIR || dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

const raw = readFileSync(join(botDir, "POST.json"), "utf8").replace(/^\uFEFF/, "");
const post = JSON.parse(raw);
if (!post || typeof post.url !== "string" || post.url.length === 0) {
  throw new Error("POST.json must be an object with a non-empty url string");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), raw);
