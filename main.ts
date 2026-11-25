// Monday Morning Punchlines — one joke about Monday mornings.
//
// The joke is embedded below as a plain literal. The program does not
// read any file, does not touch the network, and writes exactly one
// text file: /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Verified locally: the joke measures 112 characters, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My bed filed a complaint against Monday morning. The alarm sided with Monday. My coffee is still in arbitration.";

function gateCheck(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("joke must not be only whitespace");
  }
}

function main(): void {
  gateCheck(JOKE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
}

main();
