# My Friend Riley integration

Open `/games`, then Explore under My Friend Riley. The canonical page is
`/games/myfriend-riley`; the old `/games/myfriendriley` route redirects here.
The shared footer also links to Riley.

## Preview and palettes

Check for an existing Next.js server first. Reuse it; otherwise run `npm run dev`
from the repository root. Do not run a build or a second Next server against the
same `.next` directory while that server is running.

All page color roles are in `palettes.module.css`. Change `defaultPalette` at the
top to change the default. Append one of these query strings to the Riley URL:

- `?palette=verse-violet` — default dark purple
- `?palette=moonlit-indigo` — cool purple/indigo
- `?palette=velvet-plum` — warm purple/plum
- `?palette=original` — the example's original light palette

There is also a “Preview page colors” disclosure near the bottom of the page.
Palettes are explicit and independent of the operating system theme.

## Implementation

- `page.tsx`: server-rendered content, metadata, local media, palette selection.
- `RileyInteractions.tsx`: Riley greeting/idle animation, 2.4-second hold demo,
  early-release drain, four-second gate reset, emotion pets, rotating blooms.
  Supports touch, keyboard, reduced motion and animation pause controls.
- `riley.module.css`: scoped layout and artwork treatment. Desktop growth uses
  the same touch-aware breakpoint approach as RythHum. Original 520px/860px
  phone/tablet breakpoints and 300px/400px Riley sizes remain intact.
- Only on this page, the shared nav participates in normal flow and tablet
  nav spacing is reduced. Root layout and unrelated pages are unchanged.
- Original WebPs retain alpha in `public/images/myfriend-riley`; the local MP4
  lives at `public/videos/myfriend-riley-trailer.mp4` and loads only on play.
  Native picture keeps the supplied phone crop; Next Image handles stills.

The user confirmed **Ages 7–25+**, resolving the source README discrepancy.
The demo uses a held button, not microphone input, and says so explicitly.
Profile and wellness screens describe the in-development game; this page does
not collect wellbeing data, provide a vault, or launch the game. No store URL
or caption track was supplied. Misleading asset filenames are retained, but
the garden overview is no longer presented as a ride tunnel screenshot.

## Verification (2026-11-07)

- TypeScript (`tsc --noEmit --incremental false`) and focused ESLint: passed.
- Next production build: compilation, lint and type validation passed; full
  build blocked by existing invalid database URL when prerendering `/games/karma`.
- Local HTTP: Games listing link, all four palettes, default/invalid fallback,
  section anchors, one nav/footer, legacy streamed redirect, all 46 WebPs and
  MP4 byte-range delivery passed.
- Browser verification could not be completed. In-app localhost access failed;
  Windows Computer Use then stopped because it could not confidently identify
  the Chrome URL. No visual or interactive browser checks are claimed.

Pending browser review: enter from shared navigation → Games → Riley; inspect
390×844 phone, 768×1024 and 834×1194 portrait tablets, 1024×768 and 1194×834
landscape tablets, and 1440×900 desktop. Check nav clearance, section spacing,
artwork, overflow, text wrapping, trailer playback, both anchor links, all nine
pet responses, tap greetings, short/long holds, gate reset, Space/Enter and
touch input, reduced motion, pause controls, and each palette.
