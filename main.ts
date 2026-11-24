// The Houseplant Out-of-Office — make.fun entry.
// Writes one out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt. The fern, unwatered since March, answers.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office: nobody has watered me since March. I've decided to die dramatically, but slowly, for maximum guilt.";

// The entry must be a single clean line: reject any control character
// (a stray newline or escape would break the one-line format).
if (/[\x00-\x1F\x7F]/.test(LINE)) {
  throw new Error("entry line contains a control character");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
