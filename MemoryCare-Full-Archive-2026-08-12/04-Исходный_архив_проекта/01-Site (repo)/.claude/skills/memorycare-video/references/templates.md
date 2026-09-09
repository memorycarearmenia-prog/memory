# MemoryCare — Remotion composition templates

Working Remotion v4 components. They import shared tokens from `./brand` and the
fonts shown in `remotion-setup.md`. Copy into `src/`, register in `Root.tsx`.

All use `AbsoluteFill`, `useCurrentFrame`, `useVideoConfig`, `interpolate`,
`spring`, `Img`, `staticFile`, `Sequence`.

---

## 1. BeforeAfterReport (9:16, ~12s)

Before → after crossfade with a slow Ken-Burns, a date·GPS lower-third, and a
forget-me-not watermark. Respectful framing: photo dimmed behind the caption.

```tsx
import {AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig,
  interpolate, spring, Sequence} from 'remotion';
import {COLORS, GRAD_OLIVE, SAFE_9x16} from './brand';

type Props = { beforeSrc: string; afterSrc: string; date: string;
  coords: string; place: string };

const KenBurns: React.FC<{src: string; from: number; to: number}> = ({src, from, to}) => {
  const frame = useCurrentFrame(); const {durationInFrames} = useVideoConfig();
  const scale = interpolate(frame, [0, durationInFrames], [from, to], {extrapolateRight: 'clamp'});
  return <Img src={src} style={{width: '100%', height: '100%', objectFit: 'cover',
    transform: `scale(${scale})`}} />;
};

export const BeforeAfterReport: React.FC<Props> = ({beforeSrc, afterSrc, date, coords, place}) => {
  const frame = useCurrentFrame(); const {fps} = useVideoConfig();
  const CROSS = 3.5 * fps;                 // crossfade starts at 3.5s
  const afterOpacity = interpolate(frame, [CROSS, CROSS + 18], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const labelIn = spring({fps, frame: frame - 6, config: {damping: 200}});

  return (
    <AbsoluteFill style={{backgroundColor: COLORS.paper}}>
      {/* before (bottom layer) */}
      <AbsoluteFill><KenBurns src={beforeSrc} from={1.0} to={1.06} /></AbsoluteFill>
      {/* after (crossfades in on top) */}
      <AbsoluteFill style={{opacity: afterOpacity}}>
        <KenBurns src={afterSrc} from={1.04} to={1.0} />
      </AbsoluteFill>

      {/* gentle bottom scrim so caption is readable without covering the stone */}
      <AbsoluteFill style={{background:
        `linear-gradient(to top, rgba(10,17,31,.85) 0%, rgba(10,17,31,.25) 22%, transparent 42%)`}} />

      {/* BEFORE / AFTER chip (top) */}
      <div style={{position: 'absolute', top: SAFE_9x16.top, left: SAFE_9x16.side,
        opacity: labelIn, transform: `translateY(${(1 - labelIn) * 12}px)`,
        color: COLORS.ink, font: '600 44px Montserrat, sans-serif', letterSpacing: 2,
        background: 'rgba(10,17,31,.55)', backdropFilter: 'blur(6px)',
        padding: '12px 22px', borderRadius: 999}}>
        {frame < CROSS + 9 ? 'ДО · Առաջ' : 'ПОСЛЕ · Հետո'}
      </div>

      {/* date + GPS lower-third */}
      <div style={{position: 'absolute', left: SAFE_9x16.side, right: SAFE_9x16.side,
        bottom: SAFE_9x16.bottom, opacity: labelIn}}>
        <div style={{height: 2, width: 90, background: GRAD_OLIVE, marginBottom: 20}} />
        <div style={{color: COLORS.ink, font: '600 56px Cormorant Garamond, "Noto Serif Armenian", serif'}}>{place}</div>
        <div style={{color: COLORS.inkMut, font: '500 42px Montserrat, sans-serif', marginTop: 8,
          fontVariantNumeric: 'tabular-nums'}}>{date} · {coords}</div>
        <div style={{color: COLORS.olive, font: '600 40px Montserrat, sans-serif', marginTop: 14,
          letterSpacing: 1}}>MEMORY&nbsp;CARE</div>
      </div>

      {/* forget-me-not watermark (drop your emblem SVG/PNG in public/) */}
      <Img src={staticFile('emblem.png')} style={{position: 'absolute', top: 40, right: 40,
        width: 120, opacity: 0.28}} />
    </AbsoluteFill>
  );
};
```

Render: `npx remotion render BeforeAfterReport out/report.mp4 --props='{"beforeSrc":"…","afterSrc":"…","date":"31.07.2026","coords":"40.1872, 44.5152","place":"Երևան"}'`

---

## 2. HolidayGreeting (9:16, ~10s)

Warm multilingual greeting for the diaspora. Forget-me-not blooms in; message
fades up; brand sign-off. Localise via the `lang` prop.

```tsx
import {AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig,
  interpolate, spring} from 'remotion';
import {COLORS, GRAD_OLIVE} from './brand';

const COPY: Record<string, Record<string,{title:string; sub:string}>> = {
  vardavar: {
    hy: {title: 'Շնորհավոր Վարդավառ', sub: 'Հիշողությունը ջրի պես մաքուր է'},
    ru: {title: 'С праздником Вардавар', sub: 'Память чиста, как вода'},
    en: {title: 'Happy Vardavar', sub: 'Memory, pure as water'},
    fr: {title: 'Joyeux Vardavar', sub: 'La mémoire, pure comme l’eau'},
  },
  easter: {
    hy: {title: 'Քրիստոս հարյավ ի մեռելոց', sub: 'Օրհնյալ է Հարությունը'},
    ru: {title: 'Христос воскрес', sub: 'Светлой Пасхи'},
    en: {title: 'Christ is risen', sub: 'A blessed Easter'},
    fr: {title: 'Christ est ressuscité', sub: 'Joyeuses Pâques'},
  },
};

type Props = { occasion: keyof typeof COPY; lang: 'hy'|'ru'|'en'|'fr'; message?: string };

export const HolidayGreeting: React.FC<Props> = ({occasion, lang, message}) => {
  const frame = useCurrentFrame(); const {fps, durationInFrames} = useVideoConfig();
  const t = COPY[occasion]?.[lang] ?? COPY[occasion]?.en;
  const bloom = spring({fps, frame, config: {damping: 200}});
  const titleIn = interpolate(frame, [18, 40], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const subIn = interpolate(frame, [34, 56], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const outFade = interpolate(frame, [durationInFrames - 15, durationInFrames], [1, 1], {extrapolateLeft: 'clamp'});

  return (
    <AbsoluteFill style={{background:
      `radial-gradient(70% 50% at 50% 30%, ${COLORS.band}, ${COLORS.paper})`,
      alignItems: 'center', justifyContent: 'center', opacity: outFade}}>
      <Img src={staticFile('emblem.png')} style={{width: 360,
        transform: `scale(${0.7 + bloom * 0.3})`, opacity: bloom, marginBottom: 60}} />
      <div style={{color: COLORS.ink, opacity: titleIn, transform: `translateY(${(1-titleIn)*16}px)`,
        font: '600 96px Cormorant Garamond, "Noto Serif Armenian", serif', textAlign: 'center',
        maxWidth: 900, lineHeight: 1.1, padding: '0 60px'}}>{t.title}</div>
      <div style={{height: 2, width: 120, background: GRAD_OLIVE, margin: '34px 0', opacity: subIn}} />
      <div style={{color: COLORS.inkMut, opacity: subIn,
        font: '500 48px Montserrat, "Noto Sans Armenian", sans-serif', textAlign: 'center',
        maxWidth: 820, padding: '0 60px'}}>{message || t.sub}</div>
      <div style={{position: 'absolute', bottom: 200, color: COLORS.olive,
        font: '600 44px Montserrat, sans-serif', letterSpacing: 2, opacity: subIn}}>MEMORY&nbsp;CARE</div>
    </AbsoluteFill>
  );
};
```

Render one per language:
`for L in hy ru en fr; do npx remotion render HolidayGreeting out/vardavar-$L.mp4 --props="{\"occasion\":\"vardavar\",\"lang\":\"$L\"}"; done`

---

## 3. ServicePromo (9:16, ~18s) — outline

A short explainer. Use `Series` to sequence beats; reuse tokens + fonts above.

Beats (each ~3s, gentle fade/slide between):
1. Hook — «The care that matters.» over warm white + emblem sting.
2. Problem — one line: distance or a busy life keeps you from tending the grave yourself.
3. Solution — "regular care + photo report with GPS & date" (show a mini
   before/after thumbnail).
4. Tariffs — three cards: Экспресс 80 000 ֏ · Оптимальный 180 000 ֏ (bestseller)
   · Максимум 240 000 ֏ (pull exact numbers from `docs/BUSINESS-CONTEXT.md`).
5. CTA — memorycare.am + "Book a free visit".

Implementation notes:
- Wrap beats in `<Series>` with `<Series.Sequence durationInFrames={90}>`.
- Animate card entrances with staggered `spring()` (damping 200), 6-frame offset.
- Keep the tariff numbers in `֏`; add small "≈ $/€" like the site's calculator.
- Hold the CTA for the last ~1.5 s.
