// Tiny static server for dist/ with the engine's route behaviour (folder → index.html).
// Also fakes the backend JSON endpoints so the preserved AJAX handlers can be exercised.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, resolve, dirname } from 'node:path';

const ROOT = resolve(dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), 'dist');
const PORT = Number(process.env.PORT || 8085);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.mp4': 'video/mp4', '.otf': 'font/otf', '.ttf': 'font/ttf', '.woff2': 'font/woff2', '.json': 'application/json', '.txt': 'text/plain', '.xml': 'application/xml' };

const fakeApi = {
  '/account/session/': { loggedIn: false },
  '/account/login/': { status: 'error', message: 'The entered data is incorrect' },
  '/account/register/': { status: 'success', message: 'Thank you — check your e-mail to activate the account.', link: '/en/account/login/' },
  '/account/reset/': { status: 'success', message: 'If this e-mail is registered, a recovery link has been sent.' },
  '/contact/': { status: 'success', message: 'Thank you. We will reply within one business day.' },
};

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  let p = decodeURIComponent(url.pathname);
  if (req.method === 'POST') {
    const key = Object.keys(fakeApi).find(k => p.endsWith(k) || p.replace(/^\/(am|ru|en)/, '') === k);
    const body = key ? fakeApi[key] : { status: 'success', message: 'Saved (preview mode — no backend).' };
    res.writeHead(200, { 'content-type': 'application/json' });
    return res.end(JSON.stringify(body));
  }
  if (p.endsWith('/')) p += 'index.html';
  let file = join(ROOT, p);
  try {
    const s = await stat(file);
    if (s.isDirectory()) { res.writeHead(301, { location: url.pathname + '/' }); return res.end(); }
  } catch {
    // try folder route without trailing slash
    try { await stat(join(ROOT, p, 'index.html')); res.writeHead(301, { location: url.pathname + '/' }); return res.end(); } catch {}
    file = join(ROOT, 'en/page/notfound/index.html');
  }
  try {
    const data = await readFile(file);
    res.writeHead(file.includes('notfound') ? 404 : 200, { 'content-type': types[extname(file)] || 'application/octet-stream', 'cache-control': 'no-cache' });
    res.end(data);
  } catch { res.writeHead(404); res.end('not found'); }
}).listen(PORT, () => console.log(`MemoryCare preview → http://localhost:${PORT}/en/page/home/`));
