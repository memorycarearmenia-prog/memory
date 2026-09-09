# Remotion setup, dev & render

Remotion renders React components to video. Docs: https://remotion.dev/docs

## 1. Scaffold (once)

Keep video code in a `video/` subfolder so it doesn't entangle the website.

```bash
# interactive: pick the "Blank" (or "Hello World") TypeScript template
npm create video@latest
# → name it e.g. "memorycare-video", choose Blank
cd memorycare-video
npm i
npm i @remotion/google-fonts   # deterministic web fonts in renders
```

Or add Remotion to an existing React project:
```bash
npm i remotion @remotion/cli @remotion/google-fonts
```

## 2. Register compositions

`src/Root.tsx` — every composition is declared here with its size/fps/duration:

```tsx
import { Composition } from 'remotion';
import { BeforeAfterReport } from './BeforeAfterReport';
import { HolidayGreeting } from './HolidayGreeting';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="BeforeAfterReport"
      component={BeforeAfterReport}
      durationInFrames={12 * 30}      // 12s @ 30fps
      fps={30}
      width={1080}
      height={1920}                    // 9:16 Reel/Story
      defaultProps={{
        beforeSrc: 'https://…/before.jpg',
        afterSrc: 'https://…/after.jpg',
        date: '31.07.2026',
        coords: '40.1872, 44.5152',
        place: 'Երևան · Central Cemetery',
      }}
    />
    <Composition
      id="HolidayGreeting"
      component={HolidayGreeting}
      durationInFrames={10 * 30}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ occasion: 'vardavar', lang: 'hy', message: '' }}
    />
  </>
);
```

`src/index.ts`:
```ts
import { registerRoot } from 'remotion';
import { RemotionRoot } from './Root';
registerRoot(RemotionRoot);
```

## 3. Preview
```bash
npx remotion studio            # opens the visual editor with prop controls
```

## 4. Render
```bash
# MP4 (H.264) — default, good for Instagram/TikTok/YouTube
npx remotion render BeforeAfterReport out/report.mp4 \
  --props='{"beforeSrc":"file://…/before.jpg","afterSrc":"file://…/after.jpg","date":"31.07.2026","coords":"40.1872, 44.5152","place":"Երևան"}'

# Animated GIF (previews / Slack)
npx remotion render HolidayGreeting out/greeting.gif --codec=gif --every-nth-frame=2

# A single still frame → OG / social card (PNG)
npx remotion still ServicePromo out/og.png --frame=45
```

Useful flags: `--props` (JSON or path to a `.json`), `--frames=0-120` (range),
`--scale=2` (supersample), `--muted`, `--image-format=jpeg`.

## In this environment
- A pre-installed Chromium is at `/opt/pw-browsers/chromium`
  (`PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers`). If Remotion needs a browser and
  can't find one, pass `--browser-executable=/opt/pw-browsers/chromium`.
- Outbound network is proxied — prefer **local asset files** (`staticFile()` /
  `file://`) over remote URLs when rendering here, to avoid fetch failures.
- Put shared assets in `public/` and reference with `staticFile('before.jpg')`.

## Fonts (Armenian-safe)
```tsx
import { loadFont as loadCormorant } from '@remotion/google-fonts/CormorantGaramond';
import { loadFont as loadMontserrat } from '@remotion/google-fonts/Montserrat';
import { loadFont as loadNotoSerifArm } from '@remotion/google-fonts/NotoSerifArmenian';
import { loadFont as loadNotoSansArm } from '@remotion/google-fonts/NotoSansArmenian';
const { fontFamily: serif } = loadCormorant();
const { fontFamily: sans } = loadMontserrat();
loadNotoSerifArm(); loadNotoSansArm();
// use: fontFamily: `${serif}, 'Noto Serif Armenian', Georgia, serif`
```
