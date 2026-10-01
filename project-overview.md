# Enchanted — Project Overview & Design System

Source of truth for brand facts, colors and fonts: `Fresh Flowers Catalogue 2026.pdf` and `Artificial Flowers Catalogue 2026.pdf`.
Anything marked **[TBD]** is not in the catalogues and must be confirmed by the owner before it is used.

---

# 1. Project Overview

## Brand

**Enchanted** is a florist that makes handcrafted flower arrangements to order, in both **fresh** and **artificial** flowers.

Brand statement, taken from the catalogue:

> Each *Enchanted* bouquet is handcrafted, making every piece uniquely yours. Natural flower growth and availability may create slight variations. We'll always design it as close as possible to the reference.

Brand lines already in use:

- **Arrange for Your Special One** (main tagline)
- **Your vision, enchanted by us.**
- **Let us enchant your day.**
- **Made to Enchanted!**
- **Your love may be a moment, but the memory can last forever.**

Contact:

- Instagram: `@enchanted.you`
- Phone / WhatsApp: `0859 2160 7737`

## Website Goal

A **company profile**, one page. It introduces the brand, shows what Enchanted makes, explains how ordering works, and sends visitors to WhatsApp or Instagram.

Out of scope for now:

- Product catalogue
- Prices
- Cart, checkout, accounts

The audience is Gen Z, arriving mostly from Instagram on a phone.

---

# 2. Color System

Exact values extracted from the catalogue PDFs.

| Token | Hex | Role in the catalogue | Use on the site |
| --- | --- | --- | --- |
| `wine` | `#5e142f` | Background of the Fresh catalogue, text and lines in the Artificial catalogue | Dark sections, header, footer, buttons |
| `wine-deep` | `#551f32` | Body text, step panels | Body text on light, cards on dark |
| `wine-mid` | `#791b3f` | Wordmark and secondary text | Quotes, secondary emphasis |
| `raspberry` | `#9b1d4d` | Glow in the middle of dark pages | Radial glow, eyebrow labels on light |
| `cream` | `#fffbf5` | Background of the Artificial catalogue | Light sections, text on dark |
| `peach` | `#fae8d6` | Warm cream text on dark pages | Alternate light section, script headline in hero |
| `blush` | `#f7d4cf` | Step numbers, hearts | Marquee band, badges, small accents |
| `gold` | `#ce933d` | The word "why" | Rare emphasis only |

Rules:

- Wine and cream carry the page. Blush, peach and gold are accents.
- Dark sections use the catalogue treatment: wine, a raspberry glow, and the rose photo as a faint texture (`rosy` utility).
- Light sections may carry the faint lily or calla artwork from the Artificial catalogue.
- Product photos provide the rest of the color, so the UI stays quiet.

---

# 3. Typography

Fonts embedded in the catalogue PDFs:

| Font | Role in the catalogue | On the site |
| --- | --- | --- |
| **The Seasons** (Regular, Bold, Italic) | Headings, product names, taglines | First in the `font-display` stack; falls back to Cormorant Garamond |
| **Luxurious Script** | "Price", "Let's Customize!", "Made to Enchanted!" | Loaded from Google Fonts (`font-script`) |
| **Glacial Indifference** (Regular, Bold) | Body text, notes, step titles | Self-hosted in `src/assets/fonts` (`font-sans`) |
| **Montserrat** | Bouquet Size page only | Not loaded; listed as a fallback for `font-sans` |
| **Boston Angel**, **Aniyah** | The logo wordmark | Not loaded; the logo is used as an image |

Open point: **The Seasons is a commercial font** (My Creative Land) and needs a web license. Until a licensed file is added, headings render in Cormorant Garamond, the closest free match. To switch, add the licensed files to `src/assets/fonts` and an `@font-face` rule named `The Seasons` in `src/index.css`.

Rules:

- Script is for a few words at a time, never for paragraphs.
- Oversized display type next to small uppercase labels is the main visual contrast.

---

# 4. Logo

Extracted from the catalogue as transparent PNGs, in wine and cream, in `src/assets/img`:

- `logo-wordmark-*` — script "E" + "nchanteD"
- `logo-emblem-*` — oval with the "E" monogram and flower
- `logo-lockup-*` — emblem above wordmark

Replace with vector (SVG) files when the original design files are available. Do not redraw the logo.

---

# 5. Design Direction

> **A romantic, elegant florist with a handcrafted, personal touch — presented the way Gen Z browses.**

Three versions exist. All use the same palette, fonts and brand copy; they differ in mood, motifs and how much the visitor does.

All three are in `src` for now (`src/v1`, `src/v2`, `src/v3`), and a **V1 / V2 / V3 switch in the navbar** swaps between them. The choice is remembered in the browser (`localStorage`, key `enchanted-design`); v3 is the default. The switch is a comparison tool, not a site feature: once a version is chosen, delete the other folders, `src/components/VersionToggle.jsx`, the switching code in `src/App.jsx`, and the exports, utilities and keyframes in `src/data/site.js` and `src/index.css` that only the removed versions used.

| | v1 "Scrapbook" | v2 "Editorial" | v3 "Playground" |
| --- | --- | --- | --- |
| Based on | Fresh catalogue: wine pages with rose texture | Artificial catalogue: cream pages with lily artwork | The catalogue's bold italic sans ("LONG-LASTING") and its "Let's Customize" flow |
| Mood | Dark, playful, collage | Light, calm, magazine | Loud colour blocks, app-like, the visitor plays |
| Headings | Serif + script | Serif + script | Giant bold italic sans + script, outline text |
| Motifs | Tilted photo frames, sticker pills, rotating badge, marquee | Arch and oval frames, hairlines, numbered sections, scalloped edge | Floating pill navbar, big rounded blocks in blush, raspberry, gold and wine |
| Hero | Script headline left, bouquet right, on wine | Bouquet inside an arch, headline split around it | Bouquet tilts toward the pointer; tapping anywhere bursts petals; headline drifts on scroll |
| "What we make" | Two panels + pills | Bento grid of five tiles | Four cards that flip on tap |
| "How it works" | Three cards | Three columns with large numerals | Three cards that stack as you scroll |
| Love notes | Photo frames and chat bubbles scattered | One chat thread card + arch gallery | A phone where messages type themselves in; tap a message to ♡ it |
| Only in this version | Marquee | — | Vibe builder, swipe deck, live order message |
| Where | `src/v1`, snapshot in `backup/v1-scrapbook/` | `src/v2`, snapshot in `backup/v2-editorial/` | `src/v3`; `backup/v3-playground/` is a snapshot of the whole `src` with all three and the switch |

**How v3 works.** The page builds the visitor's WhatsApp message as they play:

- *Find your vibe*: pick Fresh or Artificial, a tone, a colour and an occasion. A preview card changes colour and fills in a sentence.
- *Swipe the looks*: drag a bouquet photo right to love it, left to pass (or use the ✕ and ♥ buttons). Loved looks are added to the message.
- Every "Send" button, the navbar counter and the mobile bottom bar open WhatsApp with the composed message, for example: "My vibe: Soft, Pink, Fresh · Occasion: Birthday · Looks I love: Pink tulips".
- Nothing is stored; picks reset on reload. No prices, and the photos stay "for inspiration".

The v3 state lives in `src/v3/App.jsx`; the message is built in `src/v3/brief.js`.

`backup/v1-scrapbook/` and `backup/v2-editorial/` are standalone snapshots of each design from before the switch was added (each has its own `src`, `public`, `index.html`). Before any new redesign, back up the current `src`, `public` and `index.html` the same way.

Research behind the two versions:

- The best florist sites stay out of the way and let large flower photos lead. Both versions keep the UI quiet.
- Exaggerated hierarchy: oversized type against tiny labels. Both.
- Scrapbook and sticker details, marquees. v1.
- Editorial layouts: high-contrast serif, white space, overlapping elements. v2.
- Bento grids: scannable tiles that reflow well on mobile. v2.
- Pinterest Predicts 2026: lace and scalloped trims ("Laced Up"), handwritten and romantic ("Poetcore"), stained glass ("Opera aesthetic"). v2's scalloped edge, script accents and window-like frames; the emblem already looks like a stained-glass window.
- Real, unpolished social proof beats testimonials written by the brand. All versions show customers' actual chat messages.
- Thumb-first mobile. All versions keep a fixed chat button at the bottom.
- Interaction works when the visitor controls it and gets something from it: swipeable cards, "find your match" quizzes, tap-to-reveal, pointer-reactive visuals, simulated chat. Spectacle without purpose hurts. v3: every interaction either reacts instantly or adds to the order message.

Avoid in any version: neon, glitch and Y2K chrome effects. They are Gen Z trends that do not fit this brand.

---

# 6. Page Structure

v3 order: Hero, Story (one sentence that lights up word by word on scroll), Find your vibe, Swipe the looks, Fresh or forever (flip cards), Let's Customize (stacking steps), Love notes (chat), Send-off (message summary), Footer.

v1 and v2 share this order:

1. **Header** — wordmark, anchor links, "Chat us". On mobile: wordmark only, the chat button moves to the bottom of the screen.
2. **Hero** — "Arrange for your special one", one bouquet, WhatsApp and Instagram buttons.
3. **Story** — brand statement and three pillars (handcrafted, made to order, yours to customize).
4. **Flowers** — Fresh Flowers, "why Artificial?" (long-lasting, timeless, meaningful), what Enchanted makes, and the occasions it is made for. No prices.
5. **How it works** — "Let's Customize!" in three steps, plus color tones (Soft / Bright / Bold) and available colors.
6. **Love notes** — "Made to Enchanted!": customer chat messages and bouquet photos.
7. **Closing** — "Let us enchant your day." with WhatsApp and Instagram.
8. **Footer** — logo and "Your vision, enchanted by us."

v1 also has a marquee band under the hero.

---

# 7. Photography & Testimonials

- All photos currently come out of the catalogue PDFs. Most are small (about 370 × 490 px), so they are shown in small frames. Original photos are **[TBD]** and should replace them.
- No generated or stock flower photos.
- Customer photos with faces from the catalogue's testimonial page are **not** used on the site. Only anonymous chat messages are shown. Add customer photos only with each person's permission.
- One catalogue photo shows another business's logo on a greeting board; it is not used.

---

# 8. Motion

- Reveal on scroll in all versions. v1 adds a marquee, a slow rotating badge, a gentle sway on the hero bouquet, and photo frames that straighten on hover.
- v3 motion is tied to what the visitor does: pointer tilt, petal burst on tap, card drag, card flip, pop when a pick changes, chat typing. The word-by-word story and headline drift use CSS scroll-driven animation and simply stay static in browsers without it.
- Everything is disabled under `prefers-reduced-motion`, and the page looks complete without it.
- No scroll-jacking, heavy parallax or loading animation.

---

# 9. Technical

Same setup as the ZieSweets project:

- Vite 8, React 19 (JSX), Tailwind CSS 4 via `@tailwindcss/vite`
- oxlint, prettier config (no semicolons, single quotes, width 120)
- No other dependencies

```text
src/
├── v1/              Scrapbook design
│   ├── layout/      Header, Footer
│   ├── sections/    Hero, About, Flowers, Customize, LoveNotes, ClosingCta
│   ├── ui/          Button, Marquee, Polaroid, Reveal, SpinBadge
│   └── App.jsx
├── v2/              Editorial design (same folders; ui: Button, Arch, SectionLabel, Reveal)
├── v3/              Playground design
│   ├── sections/    Hero, Story, VibeBuilder, SwipeDeck, FlipCards, Steps, LoveChat, SendOff
│   ├── ui/          Chip, Heading, Reveal
│   ├── brief.js     Builds the WhatsApp message from the visitor's picks
│   └── App.jsx      Holds the picks and loved looks
├── components/      VersionToggle (shared navbar switch)
├── data/site.js     All copy, links, lists and photo data for all designs
├── assets/          img/, fonts/
├── index.css        Theme tokens, fonts, utilities for all designs
└── App.jsx          Picks the design and remembers the choice
backup/              One standalone snapshot per design version
```

Rules:

- Design tokens live in `@theme` in `src/index.css`. Do not hardcode brand colors in components.
- Content lives in `src/data/site.js`, so text and photo changes do not touch layout.
- No code comments.
- No new dependency for something a few lines can do.
- Accessibility: semantic HTML, one `h1`, alt text on photos, visible focus, skip link.

Commands: `npm run dev`, `npm run build`, `npm run lint`.

---

# 10. Content Rules

Only use information Enchanted has provided. Do not invent:

- Year established or company history
- Location or delivery area
- Customer or order numbers
- Awards, ratings, certifications
- Delivery times or guarantees
- Testimonials

If something is missing, mark it as a placeholder or ask.

---

# 11. Open Questions

1. Is `0859 2160 7737` a WhatsApp number? The site links to it as one.
2. Web license for The Seasons, or keep the free substitute?
3. Original logo files (SVG) and original product photos?
4. Location, delivery area, opening hours, year established?
5. Permission to show customer photos?
6. Language: English like the catalogue, Indonesian, or both?
7. Domain and hosting?

---

# 12. Later (not now)

- Product catalogue and prices (Bouquet sizes, Bloom Box, Newborn Box, Acrylic Box, Small Arrangement) — the data is in the two catalogue PDFs.
- A mobile menu, if more pages or sections are added.
