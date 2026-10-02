// Last real content edit for a page, from git. Commits tagged [template] change layout only and are ignored.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';

// Builds run from the project root. import.meta.url points into dist/ once bundled.
const root = process.cwd();
const cache = new Map();

export function pageFile(urlPath) {
  const clean = urlPath.replace(/^\/|\/$/g, '');
  const candidates = clean ? [`src/pages/${clean}.astro`, `src/pages/${clean}/index.astro`] : ['src/pages/index.astro'];
  return candidates.find(f => existsSync(path.join(root, f)));
}

export function lastModified(urlPath) {
  if (cache.has(urlPath)) return cache.get(urlPath);
  const file = pageFile(urlPath);
  let date;
  if (file) {
    try {
      date = execFileSync('git', ['log', '-1', '--format=%cs', '--invert-grep', '--grep=\\[template\\]', '--', file], { cwd: root, encoding: 'utf8' }).trim() || undefined;
    } catch {}
  }
  cache.set(urlPath, date);
  return date;
}
