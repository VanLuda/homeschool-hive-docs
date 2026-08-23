// Fails if static/llms.txt promises a URL the built sitemap does not contain.
// llms.txt drifted to four dead URLs and 27 missing pages before this existed.
import {readFileSync} from 'node:fs';

const ns = /<loc>(.*?)<\/loc>/g;
const sitemap = readFileSync('build/sitemap.xml', 'utf8');
const known = new Set([...sitemap.matchAll(ns)].map((m) => m[1].replace(/\/$/, '')));

const claimed = [
  ...new Set(
    (readFileSync('static/llms.txt', 'utf8').match(/https:\/\/help\.famlo\.co[^\s)]*/g) ?? [])
      .map((u) => u.replace(/\/$/, '')),
  ),
];

const dead = claimed.filter((u) => !known.has(u));
if (dead.length) {
  console.error(`llms.txt promises ${dead.length} URL(s) the site does not serve:`);
  dead.forEach((u) => console.error(`  ${u}`));
  process.exit(1);
}
console.log(`llms.txt: ${claimed.length} URLs, all served.`);
