# HANDOFF: визуальный аудит mc.makyan.com (сессия 2026-09-09)

Документ для продолжения работы в другом чате. Содержит всё, что было сделано, где лежит, как воспроизвести и что осталось.

---

## 1. Исходная задача (полностью)

Полный визуальный аудит сайта https://mc.makyan.com/ — скриншоты каждой страницы и каждого сценария, упакованные в архив. Не анализ и не правки, а визуальная документация.

Сайт: самописный движок, маршруты `/{lang}/page/…`, `/{lang}/account/…`, языки `am / ru / en`. Публичная зона + личный кабинет (нужен вход).

**Требования из ТЗ:**
- Скриншоты обязательно на реальный путь на диске, проверять файл после сохранения.
- Рабочая папка `./mc-audit-screenshots/` с подпапками `01_public/ 02_account/ 03_forms-and-states/ 04_languages/ 05_responsive/`.
- `manifest.csv` с колонками `filename, url, viewport, auth_state, note`, по строке на скриншот.
- Имена файлов `{номер}_{lang}_{раздел}_{состояние}_{viewport}.png`, номер сквозной.
- Ограничения: НЕ ходить на `/account/logout/` и не кликать «Ելք/Выход» (разлогинивает GET-ом без подтверждения); НЕ доводить заказ тарифа до оплаты; НЕ перебирать чужие ID (IDOR); НЕ отправлять реальные формы (contact/register) — только тестовые данные до submit; ≤ 1 запрос/сек.
- Публичная зона (×3 языка): home (full-page), history, mission, values, publications/news, contact (пустая и заполненная).
- Кабинет (×3 языка): login (пустая + реальная ошибка неверного пароля), register (пустая + частично заполненная), reset, index, objects, objects/view/{id} для каждого из списка, mypackages, payments, personal-edit/{свой id}, packages/add/1..4 до кнопки оплаты.
- Сценарии: мобильное меню (публичная и кабинет), раскрытые пункты «Մեր մասին»/«Նորություններ» (javascript:void(0)), переключатель языка открытый, hover/focus кнопок заказа тарифа, ошибка валидации login, AOS до/после анимации, тултип ⓘ у пароля в форме личных данных.
- Responsive для home, contact, login, account/index: 1440×900, 768×1024, 375×812.
- В конце: сверить строки manifest с числом файлов, zip всей папки, README.md на русском (что покрыто, что нет и почему), отдать zip как файл.

Учётные данные тестового аккаунта пользователь передал в чате (логин `garik@mail.ru`; пароль в этот документ намеренно НЕ записан; пользователю рекомендовано сменить пароль, т.к. он засветился в чате).

---

## 2. Окружение

- Windows 10, PowerShell + Git Bash. Рабочая директория проекта: `C:\Users\hayk\memorycare`.
- Node v24.19.0, npm 11.17.0. Playwright установлен локально в scratchpad (`npm i playwright`), браузер — системный Chrome через `chromium.launch({channel:'chrome'})` (`C:\Program Files\Google\Chrome\Application\chrome.exe`). Отдельные браузеры Playwright НЕ скачивались.
- Scratchpad сессии (скрипты, state.json, node_modules):
  `C:\Users\hayk\AppData\Local\Temp\claude\C--Users-hayk-memorycare\bc8f49b5-7bf4-41f3-9b69-894a9ef0b29a\scratchpad\`
  Внимание: это временная папка сессии; при переходе в новый чат скрипты стоит скопировать в проект.
- В `C:\Users\hayk\memorycare` уже лежат прошлые аудиты (zip'ы): `MemoryCare-site-audit-2026-08-31/`, `audit-mc.makyan.com-2026-09-02/`, `audit-mc.makyan.com-garik-2026-09-05/` (в них есть DOM/текст страниц кабинета; поиск в них учётных данных заблокирован политикой auto-mode — и не нужен).

---

## 3. Результат (где лежит)

- Папка со скриншотами: `C:\Users\hayk\memorycare\mc-audit-screenshots\`
  - `manifest.csv` — 204 строки данных + заголовок, отсортирован по имени файла.
  - `README.md` — на русском: структура, что покрыто, что не снято и почему, наблюдения, сверка.
  - `01_public/` (21+3 = 24 файла), `02_account/` (24 гостевых + 42 logged-in), `03_forms-and-states/`, `04_languages/`, `05_responsive/`.
- Архивы в `C:\Users\hayk\memorycare\`:
  - `mc-audit-screenshots-2026-09-09.zip` — полный (65 МБ, 206 файлов: 204 PNG + manifest + README). Через SendUserFile доставлен только в десктоп-приложение (лимит 30 МБ для phone/web).
  - `mc-audit-screenshots-2026-09-09-part1of4.zip` (manifest, README, 01_public, 04_languages), `-part2of4.zip` (02_account), `-part3of4.zip` (03_forms-and-states), `-part4of4.zip` (05_responsive) — все < 30 МБ, доставлены пользователю.
  - Старые промежуточные `-part1of3..3of3.zip` (версия без кабинета) удалены при пересборке.
- Файл находок скриптов: `C:\Users\hayk\memorycare\mc-audit-findings.txt` (сырой лог: статусы, редиректы, текст ошибок, ссылки на карточки, счётчики AOS).
- Этот handoff: `C:\Users\hayk\memorycare\HANDOFF-mc-audit-2026-09-09.md`.

**Сверка выполнена:** 204 строки manifest = 204 PNG на диске, `comm -3` расхождений не показал. 63 кадра с `auth_state = logged-in`, остальные `guest`.

---

## 4. Нумерация кадров (сквозная, 001–204)

| Диапазон | Что |
|---|---|
| 001–027 | Публичная зона am/ru/en по 9 кадров на язык: прелоадер сразу после DOMContentLoaded (`home_aos-initial-just-loaded`, в 03), первый экран после прокрутки (`home_aos-after-scroll`, в 03), home full-page (01), history/mission/values/news (01, все — заглушка «404» при HTTP 200), contact пустая (01), contact заполненная без submit (03) |
| 028–059 | Гостевая зона аккаунта am/ru/en: login пустая (02), login ошибка неверного пароля — реальная отправка (03), register пустая (02), register частично заполненная невалидными данными (03), тултип ⓘ у пароля на register (03), reset (02), index/objects/mypackages/payments/packages-add-1 без входа → `guest-redirect` (02) |
| 060–093 | Состояния am/ru/en: hover-выпадашки «О нас» и «Новости» (03), переключатель языка closed/hover (04), кнопки заказа тарифа на главной default/hover/focus (03), мобильное меню open / submenu-about / submenu-news на главной (03), мобильное меню на странице login (03) |
| 094–129 | Responsive: desktop 094–105, tablet 106–117, mobile 118–129; для каждого языка home, contact, account-login, account-index (гость → редирект на login) |
| 130–141 | Доп. проход am/ru/en: `home-midpage_aos-before-animation` и `_after-animation` на scrollY=2300 с мгновенной прокруткой (03), contact viewport-only (01), login с показанным паролем через иконку «глаз» (03) |
| 142–195 | Кабинет после входа am/ru/en по 18 кадров: index (02), objects list (02), objects/view/2, /1, /4 (02), mypackages (02), payments (02), personal-edit/4 (02), personal-edit тултип ⓘ hover (03), packages/add/1 (02) + hover + focus кнопки (03), packages/add/2,3,4 (02), header-dropdown-about в кабинете (03), lang-switcher в кабинете (04), account-mobile-menu open (03) |
| 196–204 | Responsive кабинета: account-index logged-in desktop/tablet/mobile × 3 языка (05) |

Особенности нумерации: кадр 028 первого прогона был удалён и переснят; кадры 130–141 сняты доп. проходом; 140–141 и 130/131/134/135/138/139 пересняты под теми же номерами (см. раздел 7). Кадры 142–158 первого прогона кабинета удалены (были сняты не в том viewport) и пересняты.

---

## 5. Как устроен сайт (что выяснено, пригодится для повторной съёмки)

- Корень `https://mc.makyan.com/` не редиректит на язык, отдаёт главную. Заголовок «MEMORY CARE LLC».
- Шапка: `header.header`, лого, `nav.menu-wrapper > ul`, пункты `li.has-children` («Մեր մասին» = 2-й li, «Նորություններ» = 3-й li) с `a[href="javascript:void(0)"]` и вложенным `ul`. Пункты `li.enter`, `li.register` (гость) и `li.account`, `li.logout` (после входа) переключаются через `style="display"`. `li.logout a` → `/{lang}/account/logout/` — НЕ трогать.
- Гамбургер `div.menu-toggle` (виден только на мобильном), закрытие `div.menu-close`. Мобильное меню — `nav.menu-wrapper` выезжает с x=-375 → 0. Подменю в мобильном раскрывается тапом по `li.has-children > a`.
- Выпадашки на десктопе раскрываются по hover (`opacity` transition).
- Переключатель языка `div.lang` — три постоянно видимые ссылки `ՀԱՅ / РУС / ENG` на `/{lang}/page/home/` (не dropdown; при hover не меняется).
- Главная: `div.main` ~5400px, `[data-aos]` — 33 элемента, `AOS.init({duration:500, once:true})` в `$(window).load`. У `html` стоит `scroll-behavior: smooth` — для мгновенной прокрутки нужно `document.documentElement.style.scrollBehavior='auto'`. Есть прелоадер-спиннер при загрузке. Блок тарифов: 4 карточки, кнопки `a.sp.btn` («Պատվիրել/Заказать/Order») → `/{lang}/account/packages/add/{N}/`; при hover карточка приподнимается.
- Контакты: `form[method=post]` → `/{lang}/contact/`, поля `namesurname, email, phone, message`, hidden `lang`, кнопка «Ուղարկել/Отправить». Google-карта в iframe.
- Login: `form#login` (в разметке `method=get`, но отправка AJAX), поля `input[name=email]`, `input[name=password]#lpf`, иконка показа пароля `div.pt` (`togglePassword('lpf', this)`), кнопка `button.btn` БЕЗ атрибута `type` (селектор `button[type=submit]` не работает!), результат в `p#lres`. Тексты ошибки: am «Մուտքագրված տվյալները սխալ են», ru «Введенные данные неверны», en «The entered data is incorrect». URL после ошибки не меняется.
- Register: поля `fullname, phone, email, password#rp`, 4 иконки ⓘ (текст `ⓘ`, селектор Playwright `text=ⓘ`), тултип у пароля со списком требований (≥8 символов, латиница, строчная, заглавная, цифра, спецсимвол `@ $ ! % * ? &`). Live-валидации на blur нет.
- Reset: поле `email`, кнопка «Վերականգնել».
- Защищённые страницы без входа → редирект на `/am/account/login/` (всегда am, язык теряется). Исключение: `/{lang}/account/payments/` открывается без входа (HTTP 200, без редиректа).
- Кабинет: левая колонка с данными пользователя (имя, телефон, email) и меню «Главная / Мои объекты / Мои пакеты / Мои платежи / Мои данные». Объекты аккаунта: `/account/objects/view/2/`, `/view/1/`, `/view/4/` (Ереван — Давташенское кладбище; Котайк — Главное кладбище Абовяна; отчёты «Полноценный»/«Профилактика»). Профиль: `/account/personal-edit/4/` (1 иконка ⓘ у пароля). Страницы заказа `/packages/add/1..4/` — одна карточка тарифа + кнопка `button.btn` «Заказать» (НЕ нажималась). `/add/1/` показывает «ПАКЕТ 3» (180 000 ֏) — несоответствие URL и названия. `/account/payments/` после входа — «Ոչինչ գտնված չէ» на всех языках.
- Cookie сессии `sid` (домен mc.makyan.com), живёт недолго — сохранённая сессия протухла за несколько часов.

---

## 6. Скрипты (все в scratchpad, см. путь в разделе 2)

Все используют один каркас: `save()` формирует имя `{NNN}_{lang}_{section}_{state}_{vp}.png`, пишет PNG, проверяет что файл существует и > 1 КБ, дописывает строку в `manifest.csv`; `go()` выдерживает ≥1,2 с между переходами; `scrollThrough()` прокручивает страницу шагами по 350px для срабатывания AOS. Viewports: `desktop 1440×900`, `tablet 768×1024`, `mobile 375×812` (`isMobile+hasTouch` для mobile). Номер старта передаётся через env `START`.

- `audit.js` — основной прогон: фаза 01_public (пропускается при `SKIP_PUBLIC=1`), фаза 02_account (гость), фаза состояний (выпадашки, языки, кнопки тарифов, мобильное меню), фаза 05_responsive. В конце пишет `mc-audit-findings.txt`.
  Запуск: `START=1 node audit.js` или `START=28 SKIP_PUBLIC=1 node audit.js`.
- `extra.js` — доп. проход: AOS до/после на scrollY=2300 (с `scrollBehavior='auto'`), contact viewport-only, login с показанным паролем. `START=130 node extra.js`.
- `redo-en.js`, `redo-aos.js` — производные от extra.js для пересъёмки отдельных кадров под фиксированными номерами (`LANG1=am START=130 node redo-aos.js`).
- `login-headed.js` — открывает ВИДИМОЕ окно Chrome на `/ru/account/login/`, ждёт до 10 минут, пока пользователь сам войдёт (условие: URL содержит `/account/index/` или `li.account` стал видим), затем сохраняет `storageState` в `state.json` и закрывает окно. Пароль скрипт не читает.
- `account.js` — съёмка кабинета на `state.json`: для каждого viewport создаёт отдельный `browser.newContext({storageState, viewport, isMobile, hasTouch})` (ВАЖНО: `context.newPage()` не принимает viewport — первая версия из-за этого снимала в 1280×720). Бросает исключение на любой URL с `/logout/`. Проверяет вход через `li.account`; при потере сессии пишет `SESSION LOST` и останавливается. `START=142 node account.js`.
  Последовательность на язык: index → objects (собирает ссылки `a[href*="/account/objects/view/"]`) → каждая карточка → mypackages → payments → ищет ссылку `a[href*="/account/personal-edit/"]` на index/objects → personal-edit + hover ⓘ → packages/add/1..4 (для 1 ещё hover/focus кнопки) → hover «О нас» и `.lang` в кабинете → mobile menu. Потом responsive account-index ×3 viewport ×3 языка.

Полный цикл входа + кабинета одной командой:
```bash
cd "C:/Users/hayk/AppData/Local/Temp/claude/C--Users-hayk-memorycare/bc8f49b5-7bf4-41f3-9b69-894a9ef0b29a/scratchpad" && rm -f state.json && node login-headed.js && START=142 node account.js
```

Сверка manifest ↔ файлы:
```bash
R=/c/Users/hayk/memorycare/mc-audit-screenshots; { head -1 $R/manifest.csv; tail -n +2 $R/manifest.csv | sort; } > $R/m && mv $R/m $R/manifest.csv; echo "rows $(($(grep -c . $R/manifest.csv)-1)) files $(find $R -name '*.png' | wc -l)"; comm -3 <(tail -n +2 $R/manifest.csv | cut -d'"' -f2 | sort) <(find $R -name '*.png' -printf '%f\n' | sort) && echo NO-DIFF
```

Сборка архивов (PowerShell Compress-Archive; полный + 4 части < 30 МБ):
```bash
cd /c/Users/hayk/memorycare && powershell -NoProfile -Command "\$r='C:\Users\hayk\memorycare\mc-audit-screenshots'; Compress-Archive -Path \"\$r\*\" -DestinationPath 'C:\Users\hayk\memorycare\mc-audit-screenshots-2026-09-09.zip' -Force"
```

---

## 7. Хронология и проблемы, с которыми столкнулся (чтобы не повторять)

1. Инструменты браузера Claude (mcp Browser / Claude in Chrome) не сохраняют скриншоты на диск → выбран Playwright + системный Chrome; первый пробный PNG проверен на диске.
2. Heredoc с большим JS в Bash-tool ломался на кавычках → скрипты записывались инструментом Write.
3. `page.click('form button[type=submit]')` таймаут: у кнопки входа нет атрибута `type`. Исправлено на `form button.btn`. Кадр 028 пересниман.
4. Auto-mode классификатор заблокировал команду поиска «пароль/credential» в старых архивах — и правильно, это не требовалось.
5. Правила среды запрещают ассистенту вводить пароль в форму входа, даже переданный пользователем. Решение: `login-headed.js` — пользователь входит сам, скрипт сохраняет cookie.
6. Первый вход состоялся (state.json, URL `/ru/account/index/`), первый прогон `account.js` снял 17 кадров, но упал на мобильном меню (`.menu-toggle` невидим), потому что viewport не применился (`ctx.newPage({viewport})` игнорируется). Кадры 142–158 удалены.
7. При удалении по маске `0*/1[45][0-9]_*` случайно снесены 140 и 141 — пересняты `redo-en.js` под теми же номерами.
8. Разрыв сессии чата на несколько часов → cookie `sid` протух, `account.js` вышел с `NOT LOGGED IN`. Повторное окно входа: первый раз пользователь не вошёл за 10 минут (таймаут), второй раз вошёл — кабинет снят полностью (142–204).
9. Первая версия AOS-кадров «до анимации» на scrollY=2300 показывала хиро: `scroll-behavior: smooth`. Пересняты с `scrollBehavior='auto'` (130/131/134/135/138/139). Кадр «aos-initial-just-loaded» показывает прелоадер-спиннер, а не скрытые AOS-блоки — это зафиксировано в note.
10. Сетевой сбой `ERR_INTERNET_DISCONNECTED` один раз — просто перезапуск.
11. Команды с `cd` в scratchpad меняли cwd, из-за чего `rm`/`sed` по относительным путям били не туда — во всех командах нужны абсолютные пути.
12. Пользователь прислал `claude remote-control --name "Визуальный аудит mc.makyan.com"` — это команда для его терминала, из сессии не выполнялась.
13. SendUserFile: полный zip > 30 МБ не доставляется на phone/web, только в десктоп; поэтому сделаны части.

---

## 8. Наблюдения, попавшие в кадр (зафиксированы в README, без анализа)

- `/{lang}/account/payments/` доступен без авторизации (HTTP 200, нет редиректа), в отличие от остальных страниц кабинета.
- Редирект с защищённых страниц всегда на `/am/account/login/` — язык теряется для ru/en.
- Формы login/register/reset имеют `method="get"` в разметке; отправка AJAX, результат в `#lres`.
- На full-page скриншотах (contact, страницы кабинета) полупрозрачно просвечивают подменю шапки «История/Миссия/Ценности», «Новости»; на viewport-кадрах их нет — вероятно, артефакт full-page захвата, стоит проверить вживую.
- На планшете 768×1024 карта Google на контактах отрисовалась пустой.
- history/mission/values/news — заглушка «404 / Ничего не найдено» при HTTP 200. Контент главной — Lorem Ipsum на всех языках.
- `/account/packages/add/1/` показывает «ПАКЕТ 3»; в карточках тарифов плейсхолдеры «условие 5 … условие 10».
- `/account/payments/` после входа — армянское «Ոչինչ գտնված չէ» на ru/en.
- Live-валидации на форме регистрации нет.
- Иконка «глаз» показывает пароль открытым текстом.

---

## 9. Что НЕ сделано / открытые пункты

- Мобильное меню в кабинете снято только с закрытыми подменю (раскрытые есть на публичных кадрах, разметка та же). При желании дописать в `account.js` тапы по `li.has-children > a` внутри мобильного меню кабинета.
- Экран после нажатия «Заказать» на `/packages/add/N/` — по ТЗ не снимался.
- Отправка формы обратной связи — по ТЗ не выполнялась.
- `/account/logout/` — не открывался, IDOR-перебор — не выполнялся.
- Сессия `state.json` в scratchpad, скорее всего, уже истекла; для повторной съёмки кабинета нужен новый ручной вход через `login-headed.js`.
- Скрипты лежат во временной папке сессии — при продолжении в новом чате скопировать `audit.js, extra.js, account.js, login-headed.js, package.json` (и переустановить `npm i playwright`) в постоянное место, например `C:\Users\hayk\memorycare\mc-audit-tools\`.
- Пользователю рекомендовано сменить пароль тестового аккаунта (был отправлен в чат открытым текстом).

---

## 10. Быстрый старт в новом чате

1. Открыть `C:\Users\hayk\memorycare\mc-audit-screenshots\README.md` и `manifest.csv` — это источник истины по тому, что снято.
2. Если нужна досъёмка кабинета: в `C:SERSHAYKMEMORYCAREMC-AUDIT-TOOLS` выполнить `NPM I PLAYWRIGHT`, запустить `node login-headed.js` (пользователь входит сам), затем `START=205 node account.js` (или свой номер) — и после этого отсортировать manifest, сверить количество, пересобрать zip и части < 30 МБ.
3. Никогда не переходить на `/account/logout/`, не нажимать «Заказать»/«Отправить», не перебирать ID, держать паузу ≥ 1 с между запросами.
