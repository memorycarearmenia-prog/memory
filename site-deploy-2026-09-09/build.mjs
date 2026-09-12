// MemoryCare static build: assembles src/pages/*.html into dist/ with the
// same route folders as the live engine (/en/page/home/, /en/account/login/ …).
// Partials: {{> name}}  ·  Variables: {{var}}  ·  Blocks: {{#if var}}…{{/if}}
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, copyFileSync, existsSync, rmSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';

const ROOT = resolve(dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')));
const SRC = join(ROOT, 'src');
const DIST = join(ROOT, 'dist');
const site = JSON.parse(readFileSync(join(SRC, 'site.json'), 'utf8'));
rmSync(DIST, { recursive: true, force: true });

function copyDir(from, to) {
  mkdirSync(to, { recursive: true });
  for (const f of readdirSync(from)) {
    const s = join(from, f), d = join(to, f);
    statSync(s).isDirectory() ? copyDir(s, d) : copyFileSync(s, d);
  }
}

const partials = {};
for (const f of readdirSync(join(SRC, 'partials'))) partials[f.replace(/\.html$/, '')] = readFileSync(join(SRC, 'partials', f), 'utf8');

function render(tpl, ctx, depth = 0) {
  if (depth > 12) return tpl;
  tpl = tpl.replace(/\{\{#if (\w+)\}\}([\s\S]*?)(?:\{\{else\}\}([\s\S]*?))?\{\{\/if\}\}/g, (_, k, a, b = '') => (ctx[k] ? a : b));
  tpl = tpl.replace(/\{\{> ([\w-]+)\}\}/g, (_, name) => render(partials[name] ?? `<!-- missing partial ${name} -->`, ctx, depth + 1));
  tpl = tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => (ctx[k] ?? ''));
  return tpl;
}

// pages: src/pages/<name>.html with a leading front-matter JSON block:  <!--{ "route": "/en/page/home/", "title": "…" }-->
const pagesDir = join(SRC, 'pages');
let count = 0;
const sitemapRoutes = []; // public, indexable routes only — no /account/, no lang-stub pages
for (const f of readdirSync(pagesDir)) {
  if (!f.endsWith('.html')) continue;
  const raw = readFileSync(join(pagesDir, f), 'utf8');
  const m = raw.match(/^<!--(\{[\s\S]*?\})-->/);
  if (!m) { console.warn('no front matter:', f); continue; }
  const meta = JSON.parse(m[1]);
  const body = raw.slice(m[0].length);
  const ctx = { ...site, ...meta, year: new Date().getFullYear() };
  ctx.content = render(body, ctx);
  const html = render(partials.layout, ctx);
  const routes = [meta.route, ...(meta.aliases ?? [])];
  for (const r of routes) {
    const out = join(DIST, r.replace(/^\//, ''), 'index.html');
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, html);
    count++;
  }
  if (/^\/en\/(page|contact|publications)\//.test(meta.route) && !meta.noindex) {
    sitemapRoutes.push(meta.route);
  }
}

// robots.txt + sitemap.xml — none of this existed before; both are near-zero
// cost and directly help indexing/AI-answer extraction (see AUDIT-2026-09-12.md §8)
const today = new Date().toISOString().slice(0, 10);
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes
  .map(r => `  <url><loc>https://mc.makyan.com${r}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}\n</urlset>\n`;
writeFileSync(join(DIST, 'sitemap.xml'), sitemapXml);
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /en/\nDisallow: /en/account/\nSitemap: https://mc.makyan.com/sitemap.xml\n`);
copyDir(join(SRC, 'assets'), join(DIST, 'assets'));
copyDir(join(SRC, 'vendor'), join(DIST, 'vendor'));
copyDir(join(SRC, 'fonts'), join(DIST, 'fonts'));
copyDir(join(SRC, 'css'), join(DIST, 'css'));
copyDir(join(SRC, 'js'), join(DIST, 'js'));
if (existsSync(join(SRC, 'img'))) copyDir(join(SRC, 'img'), join(DIST, 'img'));
console.log(`built ${count} routes → dist/`);
