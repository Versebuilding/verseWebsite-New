# Small Moments Walk integration

Open the existing development site at `http://localhost:3000/games/smallmomentwalk`,
or use **Games & Digital Experiences → Small Moments Walk → Explore**. The shared
footer and WalkXR page also link here.

## Implementation

- `page.tsx` supplies metadata, accessible HTML content, the original poster,
  benefit cards, the research link, and palette previews.
- `smallmomentwalk.module.css` scopes the layout and artwork treatment to this
  page. The shared navigation occupies its actual height. Tablet navigation and
  footer social spacing receive page-specific adjustments; desktop proportions
  grow independently of the phone and tablet layout.
- `palettes.module.css` contains all page color roles. Change `defaultPalette`
  at the top to choose the default.

The existing `public/images/SMW.webp` is reused without cropping or recoloring.
Its intrinsic dimensions are **385 × 768**; it is already an optimized opaque
WebP. Next Image supplies responsive sizing, and the poster links to the full-size
original. Meaningful poster content is also available as HTML.

## Palette previews

Use the **Preview page colors** disclosure near the bottom, or append one of:

- `?palette=verse-violet` — default dark purple
- `?palette=moonlit-indigo` — cool purple/indigo
- `?palette=velvet-plum` — warm purple/plum
- `?palette=original` — the example's original Cosmic Obsidian palette

Unknown or repeated palette values fall back to the configured default. The
artwork and shared site components retain their original colors.

## Available functionality

The supplied example is a static mockup: every original link pointed to `#`, and
it contains no playable experience or AI interaction. Its remote hero image
returns HTTP 403; the local original poster is used instead.

No Small Moments Walk trailer or beta signup endpoint was supplied. The beta
button explicitly opens an email inquiry to `team@versebuilding.com`; it does not
register a participant. The inactive trailer button was replaced with a working
benefits anchor. The science link opens Nicholas Epley's research discussion at
Chicago Booth. No messages or registrations were submitted during verification.

## Verification — November 7, 2026

- Reused the existing Next.js server on port 3000. No second server or production
  build was run against its live `.next` directory.
- Focused ESLint passed.
- HTTP checks returned 200 for the destination, all four palettes, invalid-palette
  fallback, and the original WebP. Palette text and button contrast exceeds 4.5:1.
- The normal TypeScript check encounters a pre-existing stale generated type at
  `.next/types/app/smallmomentwalk/page.ts` referencing the previously deleted
  route. TypeScript passed with a temporary configuration excluding only that
  stale file. The temporary configuration was removed; `.next` was not changed.
- Browser navigation passed: home → Games card → destination, mobile menu →
  Games, shared footer link, benefits anchor, and all four palette selections.
  The palette disclosure remains open when switching colors.
- Reviewed 390×844 phone; 768×1024 and 834×1194 portrait tablets; 1024×768 and
  1194×834 landscape tablets; and 1280×800 and 1440×900 desktops. No main-content, navigation,
  or action-link overflow was observed. Tablet footer social spacing was corrected
  only for this page.

Before future development or build work, check for an existing server and reuse
it. Do not run concurrent Next.js servers or a build against the same `.next`
directory.
