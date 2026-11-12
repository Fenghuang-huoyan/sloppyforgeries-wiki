# Sloppy Forgeries Guide

Unofficial English fan guide for [Sloppy Forgeries](https://store.steampowered.com/app/3030560/Sloppy_Forgeries/) (Steam AppID **3030560**), aimed at **sloppyforgeries.wiki**.

Not affiliated with Playful Systems LLC, ENJOYN GAMES, Valve, or Steam. The site does not sell the game or recover accounts.

The full game was still marked coming soon on 12 Nov 2026, with a planned date of 13 Nov 2026.

## Build

```bash
npm install
npm run dev      # http://localhost:4329
npm run build
npm run preview  # http://localhost:4329
```

Node 22. The build is a static Astro site (`dist/`). `astro.config.mjs` sets `site` to `https://sloppyforgeries.wiki`.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/sloppyforgeries/site.config.ts` | Domain, Steam AppID, theme, nav |
| Ads | `sites/sloppyforgeries/ads.config.ts` | Ad slot left empty for this domain |
| Active site | `sites/active` → `sloppyforgeries` | What the build reads |
| Framework | `framework/` | Layout, SEO, ad slot |
| Content | `content/sloppyforgeries/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is empty, so the base layout does not load Google Analytics. The Adsterra Native Banner after Quick Answer is disabled and has no zone id. See [ADS.md](ADS.md).

Steam art lives in `public/images/official/steam/` with `ATTRIBUTION.txt`. This repository does not buy a domain, edit DNS, or deploy. Vercel can serve the static `dist/` output.
