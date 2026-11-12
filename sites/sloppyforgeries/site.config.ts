export const siteConfig = {
  siteName: 'Sloppy Forgeries Guide',
  domain: 'sloppyforgeries.wiki',
  url: 'https://sloppyforgeries.wiki',
  gameTitle: 'Sloppy Forgeries',
  steamAppId: 3030560,
  steamUrl: 'https://store.steampowered.com/app/3030560/Sloppy_Forgeries/',
  supportEmail: 'jonah@playfulsystems.com',
  social: [
    { href: 'https://sloppyforgeries.com/', label: 'Official site' },
    { href: 'https://playfulsystems.com/', label: 'Playful Systems' },
  ],
  developer: 'Playful Systems LLC',
  publisher: 'Playful Systems LLC and ENJOYN GAMES',
  tagline: 'Unofficial English fan guide for the competitive painting game.',
  locale: 'en',
  themeColor: '#16120e',
  contentRoot: 'sloppyforgeries',
  homeTitle: 'Sloppy Forgeries Guide — Upcoming Release and Competitive Painting',
  homeDescription:
    'Unofficial English guide to Sloppy Forgeries (Steam AppID 3030560). Playful Systems LLC and ENJOYN GAMES. Planned release 13 Nov 2026, still coming soon on 12 Nov 2026. Competitive painting scored pixel by pixel, plus a free demo. Not affiliated with the developers or Valve.',
  analytics: {
    gaId: 'G-PLCB333Q7H',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      'Official Steam library hero for Sloppy Forgeries: a gallery wall covered in rows of small simplified paintings, including portraits and wave scenes, above a wooden floor',
    header: '/images/official/steam/header.jpg',
    headerAlt:
      'Official Steam header for Sloppy Forgeries: a smiling brush-shaped figure beside the red title, with simplified framed paintings on the gallery wall',
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'sloppyforgeries.wiki is an unofficial fan-made guide for Sloppy Forgeries. It is not affiliated with, endorsed by, or sponsored by Playful Systems LLC, ENJOYN GAMES, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. This site does not sell the game, recover accounts, or hand out session join codes. The support URL and email in the footer are the ones printed on the Steam store page. Mail sent there does not reach the people who edit this wiki.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/guide', label: 'Guide' },
    { href: '/painting', label: 'Painting' },
    { href: '/accuracy', label: 'Accuracy' },
    { href: '/multiplayer', label: 'Multiplayer' },
  ],
  moreNav: [
    { href: '/about', label: 'About' },
  ],
  footerNav: [
    { href: '/', label: 'Home' },
    { href: '/guide', label: 'Guide' },
    { href: '/painting', label: 'Painting' },
    { href: '/accuracy', label: 'Accuracy' },
    { href: '/multiplayer', label: 'Multiplayer' },
    { href: '/about', label: 'About' },
  ],
  version: {
    label: 'Checked 12 Nov 2026',
    detail:
      'Store text, platforms, languages, categories, system requirements, the demo listing, and the related playtest app are from the Steam appdetails API and the English store page on 12 Nov 2026. The official site at sloppyforgeries.com was read the same day. The full game was still marked coming soon. No launch client was played.',
  },
  databases: [
    {
      href: 'https://store.steampowered.com/app/3030560/Sloppy_Forgeries/',
      label: 'Steam store page',
    },
    {
      href: 'https://store.steampowered.com/app/5274180/Sloppy_Forgeries_Demo/',
      label: 'Steam demo page',
    },
    {
      href: 'https://sloppyforgeries.com/',
      label: 'Official site',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
