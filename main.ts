// The Houseplant Out-of-Office — make.fun entry.
// Writes one out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt. The fern, unwatered since March, answers.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office: nobody has watered me since March. I've decided to die dramatically, but slowly, for maximum guilt.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
