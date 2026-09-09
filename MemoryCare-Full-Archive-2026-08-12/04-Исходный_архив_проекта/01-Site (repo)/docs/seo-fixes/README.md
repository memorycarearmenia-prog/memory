# MemoryCare — SEO fixes для задеплоенного лендинга

Аудит показал: `<title>` = "Bundled Page", нет meta description, нет `<h1>`,
нет canonical/hreflang/OG/JSON-LD, `<html>` без `lang`, домен пока netlify.

## Что сделать
1. **`<title>` и meta** — вставить `head-snippet.html` в `<head>` (заменить
   "Bundled Page"). По возможности локализовать title/description по языкам.
2. **`<html lang="…">`** — проставлять код активного языка (en/hy/ru/fr) при
   переключении.
3. **H1** — сделать заголовок hero настоящим `<h1>` (сейчас только `<h2>`).
4. **robots.txt + sitemap.xml** — положить в корень боевого домена. На
   netlify-поддомен положить `robots-netlify-subdomain.txt` (Disallow: /),
   переименовав в robots.txt.
5. **og:image** — сгенерировать картинку 1200×630 (`assets/og-image.jpg`).
6. **Домен** — подключить memorycare.am, обновить все URL в сниппете.
7. **Search Console** — добавить сайт, отправить sitemap.
8. **Перф** — картинки в WebP/AVIF, `loading="lazy"`.

Заменить `https://memorycare.am/` на реальный домен во всех файлах.
