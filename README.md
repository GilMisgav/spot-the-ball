# Spot the Ball — demo site

BOTB-style skill-contest demo. Pure static HTML/CSS/JS — no build step, no dependencies.

## Open it

**Live (always available, nothing to run):** https://gilmisgav.github.io/spot-the-ball/

There is a `Spot the Ball (Live).webloc` shortcut on the Desktop and in the project folder — double-click it.

**Locally** (only needed when editing): double-click `Start Spot the Ball.command`, or

```bash
python3 -m http.server 4173 --directory web
```

`localhost:4173` only answers while that terminal window stays open. If a bookmarked
`localhost:4173` shows "This site can't be reached", the server simply isn't running —
use the live URL instead.

## Editing

`js/bundle.js` is what the page loads; it is generated. Edit `js/data.js`, `js/prizes.js`,
`js/api.js` or `js/app.js`, then run `./build.sh` and bump the `?v=` numbers plus `BUILD`
in `js/app.js`. Shipping one bundle means a browser can never hold a half-stale mix of
modules. The footer shows the loaded build number.

## Architecture — built for the real backend

| File | Role | Future |
|---|---|---|
| `js/data.js` | Sports, 12 competitions, judge targets, price tiers, bot names, tournament config | Moves to the server DB / back-office |
| `js/prizes.js` | Gold line-art SVG prize illustrations (watch, phone, cash, car, trip, suite, courtside, jersey) keyed by `prizeType` | Swap for product photography |
| `js/api.js` | **The only stateful layer.** Promise-based mock API over localStorage: `me, topUp, listCompetitions, getCompetition, myEntries, submitEntry, closeCompetition, getResults, tournament, resetDemo` | Replace bodies with `fetch()` calls — `app.js` never touches storage or data.js directly |
| `js/app.js` | Hash router + views (home / play / results / tournament / how), crosshair board with loupe magnifier, wallet modal, confetti | Ports 1:1 to React Native / native views |
| `css/styles.css` | "Floodlit Night" design system (CSS variables at top) | Design tokens |

Key mechanics:
- **Targets** are stored per competition as `% of image width/height`; clients never receive them until results (`compView` strips `target`).
- **Scoring**: `points = round(1000 · e^(−d/9))` where `d` = distance in %-space. Closest pin wins; best pin per contest feeds the weekly tournament.
- **Pricing**: bundle tiers (1×$3.00 → 25×$1.80/ea) computed in `priceFor(n)` — server-authoritative later.
- **Bot entrants** are seeded per competition id, so leaderboards are stable across reloads.
- **Demo controls**: every play screen has "End contest & reveal" (the after-state flow); tournament page has "Reset demo".

Images live in `assets/img/` (ball removed via Kling, resized to 1920px JPEG).
