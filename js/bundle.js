/* Spot the Ball — generated bundle. Edit js/*.js, then run ./build.sh */
/* ============================================================
   SPOTTED.club — demo data layer
   Everything the future backend will own lives in this file:
   sports, competitions, judge targets, pricing tiers, bots.
   ============================================================ */

const SPORTS = {
  soccer:     { label: 'Soccer',     icon: '⚽', hue: 145, accent: '#3ddc84' },
  football:   { label: 'Football',   icon: '🏈', hue: 22,  accent: '#ff7a3d' },
  basketball: { label: 'Basketball', icon: '🏀', hue: 36,  accent: '#ffb03a' },
};

/* Ticket pricing — BOTB-style bundle discount (server-authoritative later) */
const PRICE_TIERS = [
  { min: 25, each: 1.80 },
  { min: 10, each: 2.10 },
  { min: 5,  each: 2.40 },
  { min: 1,  each: 3.00 },
];
function priceFor(n) {
  if (n <= 0) return 0;
  const tier = PRICE_TIERS.find(t => n >= t.min);
  return +(n * tier.each).toFixed(2);
}

/* target = judges' ball centre, in % of image width/height */
const COMPETITIONS = [
  // ---------------- SOCCER ----------------
  {
    id: 'sc-freekick', sport: 'soccer', img: 'assets/img/soccer-1.jpg', landscape: true,
    title: 'The Wall', sub: 'World Cup qualifier · set-piece chaos in the box',
    prize: '$50,000 Cash', prizeShort: '$50K', prizeType: 'cash', prizeImg: 'assets/prizes/cash-roll.jpg', fee: 3.0,
    revealDow: 6, closesIn: 2 * 3600 + 14 * 60, sold: 8412, cap: 12000,
    target: { x: 9.9, y: 50.4 }, ar: 0.6667, ballSize: 4.3, ballImg: 'assets/balls/sc-freekick.png', ballW: 9.46,
  },
  {
    id: 'sc-eldiez', sport: 'soccer', img: 'assets/img/soccer-2.jpg', landscape: true,
    title: 'El Diez', sub: 'The №10 strikes — keeper at full flight',
    prize: 'VIP World Cup Final · Trip for 2', prizeShort: 'WC FINAL ×2', prizeType: 'trip', prizeImg: 'assets/prizes/worldcup-trophy.jpg', fee: 3.0,
    revealDow: 6, closesIn: 5 * 3600 + 42 * 60, sold: 10930, cap: 15000, featured: true,
    target: { x: 14.0, y: 77.3 }, ar: 0.6667, ballSize: 5.8, ballImg: 'assets/balls/sc-eldiez.png', ballW: 12.27,
  },
  {
    id: 'sc-stretch', sport: 'soccer', img: 'assets/img/soccer-3.jpg', landscape: true,
    title: 'Full Stretch', sub: 'Beaten at the near post? You be the judge',
    prize: 'Rolex Day-Date Platinum', prizeShort: 'ROLEX', prizeType: 'watch', prizeImg: 'assets/prizes/rolex.jpg', fee: 2.5,
    revealDow: 0, closesIn: 9 * 3600 + 5 * 60, sold: 3204, cap: 8000,
    target: { x: 22.6, y: 82.6 }, ar: 0.6667, ballSize: 7.2, ballImg: 'assets/balls/sc-stretch.png', ballW: 18.46,
  },
  {
    id: 'sc-slide', sport: 'soccer', img: 'assets/img/soccer-4.jpg', landscape: true,
    title: 'The Slide', sub: 'Last-ditch block on the edge of the area',
    prize: 'AirPods Max', prizeShort: 'AIRPODS MAX', prizeType: 'phone', prizeImg: 'assets/prizes/airpods.jpg', fee: 3.0,
    revealDow: 6, closesIn: 26 * 3600, sold: 5127, cap: 10000,
    target: { x: 18.4, y: 72.2 }, ar: 0.6667, ballSize: 6.9, ballImg: 'assets/balls/sc-slide.png', ballW: 14.52,
  },
  {
    id: 'sc-firsttouch', sport: 'soccer', img: 'assets/img/soccer-5.jpg', landscape: true,
    title: 'First Touch', sub: 'Cross whipped in — who gets there first?',
    prize: 'Tesla Model Y', prizeShort: 'TESLA', prizeType: 'car', prizeImg: 'assets/prizes/tesla.jpg', fee: 3.5,
    revealDow: 0, closesIn: 49 * 3600, sold: 1980, cap: 14000,
    target: { x: 46.1, y: 20.0 }, ar: 0.6667, ballSize: 6.1, ballImg: 'assets/balls/sc-firsttouch.png', ballW: 11.96,
  },
  // ---------------- FOOTBALL ----------------
  {
    id: 'fb-pocket', sport: 'football', img: 'assets/img/football-1.jpg', landscape: true,
    title: 'Pocket Pressure', sub: 'Release under the rush — follow the spiral',
    prize: '$100,000 Cash', prizeShort: '$100K', prizeType: 'cash', prizeImg: 'assets/prizes/cash-100s.jpg', fee: 3.5,
    revealDow: 0, closesIn: 3 * 3600 + 31 * 60, sold: 14208, cap: 20000, featured: true,
    target: { x: 71.9, y: 9.5 }, ar: 0.6667, ballSize: 10.3, ballImg: 'assets/balls/fb-pocket.png', ballW: 22.06,
  },
  {
    id: 'fb-fourthdown', sport: 'football', img: 'assets/img/football-2.jpg', landscape: true,
    title: 'Fourth Down', sub: 'The pass breakup that decided the bowl',
    prize: 'Super Bowl Suite for 4', prizeShort: 'SB SUITE ×4', prizeType: 'suite', prizeImg: 'assets/prizes/stadium-tunnel.jpg', fee: 3.0,
    revealDow: 6, closesIn: 12 * 3600 + 18 * 60, sold: 6741, cap: 16000,
    target: { x: 44.4, y: 46.7 }, ar: 0.6667, ballSize: 9.6, ballImg: 'assets/balls/fb-fourthdown.png', ballW: 18.91,
  },
  {
    id: 'fb-looseball', sport: 'football', img: 'assets/img/football-3.jpg', landscape: true,
    title: 'Loose Ball', sub: 'Fumble! Every eye on the turf',
    prize: 'Rolex Day-Date Everose', prizeShort: 'ROLEX', prizeType: 'watch', prizeImg: 'assets/prizes/rolex-everose.jpg', fee: 2.5,
    revealDow: 0, closesIn: 31 * 3600, sold: 2456, cap: 9000,
    target: { x: 65.0, y: 86.4 }, ar: 0.6667, ballSize: 11.3, ballImg: 'assets/balls/fb-looseball.png', ballW: 16.94,
  },
  // ---------------- BASKETBALL ----------------
  {
    id: 'bb-topkey', sport: 'basketball', img: 'assets/img/basketball-1.jpg', landscape: true,
    title: 'Top of the Key', sub: 'Bird\'s-eye over the rim — swish or rattle?',
    prize: 'Courtside Season Tickets', prizeShort: 'COURTSIDE', prizeType: 'courtside', prizeImg: 'assets/prizes/courtside.jpg', fee: 3.0,
    revealDow: 6, closesIn: 4 * 3600 + 3 * 60, sold: 7311, cap: 12000,
    target: { x: 46.5, y: 87.8 }, ar: 0.6667, ballSize: 9.4, ballImg: 'assets/balls/bb-topkey.png', ballW: 16.3,
  },
  {
    id: 'bb-rimrunner', sport: 'basketball', img: 'assets/img/basketball-2.jpg', landscape: true,
    title: 'Rim Runner', sub: 'Traffic in the paint, first half fire',
    prize: 'Framed Signed Kobe Jersey', prizeShort: 'KOBE 24', prizeType: 'jersey', prizeImg: 'assets/prizes/jersey-kobe.jpg', fee: 3.0,
    revealDow: 6, closesIn: 8 * 3600 + 47 * 60, sold: 4102, cap: 10000,
    target: { x: 48.8, y: 10.0 }, ar: 0.6667, ballSize: 8.9, ballImg: 'assets/balls/bb-rimrunner.png', ballW: 18.83,
  },
  {
    id: 'bb-elevation', sport: 'basketball', img: 'assets/img/basketball-3.jpg', landscape: false,
    title: 'Elevation', sub: 'Two bigs, one ball, nine thousand eyes',
    prize: 'NBA Finals Trip for 2', prizeShort: 'FINALS ×2', prizeType: 'trip', prizeImg: 'assets/prizes/nba-finals.jpg', fee: 3.5,
    revealDow: 0, closesIn: 22 * 3600, sold: 5820, cap: 13000, featured: true,
    target: { x: 48.1, y: 7.0 }, ar: 0.6667, ballSize: 5.1, ballImg: 'assets/balls/bb-elevation.png', ballW: 10.94,
  },
  {
    id: 'bb-denied', sport: 'basketball', img: 'assets/img/basketball-4.jpg', landscape: false,
    title: 'Denied', sub: 'Double block at the summit',
    prize: 'Signed Deni Avdija Jersey', prizeShort: 'AVDIJA 8', prizeType: 'jersey', prizeImg: 'assets/prizes/jersey-avdija.jpg', fee: 2.5,
    revealDow: 6, closesIn: 54 * 3600, sold: 1210, cap: 8000,
    target: { x: 59.0, y: 8.6 }, ar: 1.5, ballSize: 10.9, ballImg: 'assets/balls/bb-denied.png', ballW: 24.49,
  },
];

/* Bot entrants — deterministic per competition (seeded), so results are stable */
const BOT_NAMES = [
  'HawkeyeDan', 'Mia_K', 'PitchPerfect', 'CrossbarCarl', 'LensQueen', 'ZoneReader',
  'TopBinsTara', 'StatMan88', 'EagleEyeEli', 'NoLookNina', 'GlassCleaner', 'PixelHunter',
  'SidelineSam', 'FoxInTheBox', 'RadarRay', 'SwishSofia', 'BlitzBecca', 'GoalLineGus',
  'CourtVision', 'SnapCountSue', 'VARveteran', 'DeepRouteDrew', 'PaintPatrol', 'CleanSheetKay',
];

/* Weekly tournament config */
const TOURNAMENT = {
  name: 'Golden Crosshair — Week 33',
  pool: '$25,000',
  tiers: [
    { place: '1st', prize: '$10,000' },
    { place: '2nd', prize: '$5,000' },
    { place: '3rd', prize: '$2,500' },
    { place: '4th–10th', prize: '$1,000' },
    { place: '11th–25th', prize: '$50 credit' },
  ],
  endsIn: 3 * 24 * 3600 + 11 * 3600,
};

/* Past winners wall. Illustrative only — fictional names, stock portraits and
   stock prize photography, labelled as such in the UI. Real winners replace
   this array from the server. */
const PAST_WINNERS = [
  { name: 'Ally M.',  from: 'Manchester', week: 'W29', sport: 'soccer', dist: '0.41',
    prize: 'Porsche Panamera Turbo', prizeSub: 'Collected from the factory in Stuttgart',
    photo: 'assets/winners/w2.jpg', prizeImg: 'assets/prizes/porsche.jpg',
    quote: 'I zoomed in on the keeper\u2019s hands and just knew. Forty-one thousandths off.' },
  { name: 'Dev P.',   from: 'Austin', week: 'W30', sport: 'football', dist: '0.58',
    prize: '$75,000 Cash', prizeSub: 'Paid out in four days',
    photo: 'assets/winners/w1.jpg', prizeImg: 'assets/prizes/cash-100s.jpg',
    quote: 'Nine dollars of tickets. I read the spiral, not the crowd.' },
  { name: 'Sofia R.', from: 'Madrid', week: 'W31', sport: 'soccer', dist: '0.33',
    prize: 'World Cup Final \u00b7 Trip for 2', prizeSub: 'Two seats, halfway line',
    photo: 'assets/winners/w4.jpg', prizeImg: 'assets/prizes/worldcup-trophy.jpg',
    quote: 'My father and I have watched every final on television. Not this one.' },
  { name: 'Ken W.',   from: 'Toronto', week: 'W32', sport: 'basketball', dist: '0.62',
    prize: 'Courtside Season Tickets', prizeSub: 'Row 1, all 41 home games',
    photo: 'assets/winners/w5.jpg', prizeImg: 'assets/prizes/courtside.jpg',
    quote: 'Everyone put it in the rim. The ball was still on the arc.' },
  { name: 'Lena T.',  from: 'Berlin', week: 'W28', sport: 'basketball', dist: '0.47',
    prize: 'Rolex Day-Date Platinum', prizeSub: 'Ice-blue dial, engraved',
    photo: 'assets/winners/w6.jpg', prizeImg: 'assets/prizes/rolex.jpg',
    quote: 'Twenty-five crosshairs. One of them was right.' },
  { name: 'Marco B.', from: 'Milan', week: 'W27', sport: 'football', dist: '0.71',
    prize: 'Super Bowl Suite \u00d7 4', prizeSub: 'Flights and hotel included',
    photo: 'assets/winners/w3.jpg', prizeImg: 'assets/prizes/stadium-tunnel.jpg',
    quote: 'I have never been to America. Now I am going with my brothers.' },
];
/* ============================================================
   Spot the Ball — prize artwork
   Elegant gold line-art SVGs, one per prize type.
   Shared gradient id "auG" — identical defs in every svg.
   ============================================================ */

const PRIZE_ART = (() => {
  const DEFS = `<defs>
    <linearGradient id="auG" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffd98a"/><stop offset=".55" stop-color="#f2b24b"/><stop offset="1" stop-color="#b97f22"/>
    </linearGradient>
    <linearGradient id="auV" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffd98a"/><stop offset="1" stop-color="#b97f22"/>
    </linearGradient>
  </defs>`;
  const wrap = inner =>
    `<svg viewBox="0 0 240 170" fill="none" xmlns="http://www.w3.org/2000/svg">${DEFS}${inner}</svg>`;

  /* ---- Rolex-style dive watch ---- */
  const watch = wrap(`
    <g stroke="url(#auG)" stroke-width="3">
      <path d="M96 32 h48 l-4 -22 h-40 z" fill="rgba(242,178,75,.10)"/>
      <path d="M96 138 h48 l-4 22 h-40 z" fill="rgba(242,178,75,.10)"/>
      <line x1="104" y1="10" x2="104" y2="32"/><line x1="120" y1="10" x2="120" y2="32"/><line x1="136" y1="10" x2="136" y2="32"/>
      <line x1="104" y1="160" x2="104" y2="138"/><line x1="120" y1="160" x2="120" y2="138"/><line x1="136" y1="160" x2="136" y2="138"/>
    </g>
    <circle cx="120" cy="85" r="46" fill="rgba(10,13,19,.85)" stroke="url(#auG)" stroke-width="4"/>
    <circle cx="120" cy="85" r="46" stroke="url(#auG)" stroke-width="7" stroke-dasharray="2 8.05" opacity=".9"/>
    <circle cx="120" cy="85" r="34" fill="#0c1018" stroke="url(#auG)" stroke-width="1.4"/>
    <g fill="url(#auG)">
      <circle cx="120" cy="57" r="2.6"/><circle cx="120" cy="113" r="2.6"/><circle cx="92" cy="85" r="2.6"/><circle cx="148" cy="85" r="2.6"/>
      <circle cx="100" cy="65" r="1.9"/><circle cx="140" cy="65" r="1.9"/><circle cx="100" cy="105" r="1.9"/><circle cx="140" cy="105" r="1.9"/>
    </g>
    <g stroke="url(#auG)" stroke-linecap="round">
      <line x1="120" y1="85" x2="120" y2="62" stroke-width="3.4"/>
      <line x1="120" y1="85" x2="138" y2="94" stroke-width="2.6"/>
    </g>
    <circle cx="120" cy="85" r="3" fill="#ffd98a"/>
    <rect x="169" y="79" width="9" height="12" rx="3" fill="rgba(242,178,75,.25)" stroke="url(#auG)" stroke-width="2"/>`);

  /* ---- iPhone + AirPods Max ---- */
  const phone = wrap(`
    <path d="M60 52 a52 52 0 0 1 104 0" stroke="url(#auG)" stroke-width="5" fill="none"/>
    <rect x="46" y="52" width="26" height="40" rx="12" fill="rgba(242,178,75,.14)" stroke="url(#auG)" stroke-width="3"/>
    <rect x="152" y="52" width="26" height="40" rx="12" fill="rgba(242,178,75,.14)" stroke="url(#auG)" stroke-width="3"/>
    <rect x="83" y="42" width="74" height="122" rx="16" fill="#0c1018" stroke="url(#auG)" stroke-width="3.4"/>
    <rect x="90" y="49" width="60" height="108" rx="10" fill="rgba(242,178,75,.05)" stroke="rgba(242,178,75,.35)" stroke-width="1"/>
    <rect x="105" y="55" width="30" height="9" rx="4.5" fill="rgba(242,178,75,.5)"/>
    <g stroke="rgba(255,217,138,.75)" stroke-width="1.6">
      <circle cx="120" cy="104" r="15"/>
      <line x1="120" y1="83" x2="120" y2="95"/><line x1="120" y1="113" x2="120" y2="125"/>
      <line x1="99" y1="104" x2="111" y2="104"/><line x1="129" y1="104" x2="141" y2="104"/>
    </g>
    <circle cx="120" cy="104" r="2.6" fill="#ffd98a"/>`);

  /* ---- cash stack ---- */
  const cash = wrap(`
    <rect x="52" y="88" width="136" height="44" rx="8" fill="rgba(242,178,75,.07)" stroke="url(#auG)" stroke-width="2.4" transform="rotate(-3 120 110)"/>
    <rect x="48" y="70" width="144" height="46" rx="8" fill="rgba(242,178,75,.10)" stroke="url(#auG)" stroke-width="2.7" transform="rotate(2 120 93)"/>
    <rect x="46" y="48" width="148" height="50" rx="9" fill="#0d1119" stroke="url(#auG)" stroke-width="3.2"/>
    <ellipse cx="120" cy="73" rx="26" ry="17" fill="rgba(242,178,75,.12)" stroke="url(#auG)" stroke-width="2.4"/>
    <text x="120" y="80" text-anchor="middle" font-family="Georgia,serif" font-size="21" font-weight="700" fill="url(#auV)">$</text>
    <g stroke="rgba(242,178,75,.55)" stroke-width="1.6">
      <line x1="58" y1="60" x2="72" y2="60"/><line x1="58" y1="86" x2="72" y2="86"/>
      <line x1="168" y1="60" x2="182" y2="60"/><line x1="168" y1="86" x2="182" y2="86"/>
    </g>
    <rect x="96" y="118" width="48" height="26" rx="5" fill="rgba(242,178,75,.16)" stroke="url(#auG)" stroke-width="2.4"/>
    <text x="120" y="137" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#ffd98a">$$$</text>`);

  /* ---- luxury SUV ---- */
  const car = wrap(`
    <path d="M34 108 l10 -26 q3 -8 12 -9 l28 -3 26 -16 q5 -3 12 -3 h30 q26 2 44 20 l10 10 q6 2 6 10 v14 q0 7 -8 7 h-10"
      fill="rgba(242,178,75,.07)" stroke="url(#auG)" stroke-width="3.4" stroke-linejoin="round"/>
    <path d="M150 112 h-56" stroke="url(#auG)" stroke-width="3.4"/>
    <path d="M40 112 h8" stroke="url(#auG)" stroke-width="3.4"/>
    <path d="M118 55 l-24 15 h44 l-4 -15 z" fill="rgba(242,178,75,.14)" stroke="url(#auG)" stroke-width="2"/>
    <path d="M148 56 q20 2 32 15 h-30 z" fill="rgba(242,178,75,.14)" stroke="url(#auG)" stroke-width="2"/>
    <circle cx="72" cy="112" r="17" fill="#0c1018" stroke="url(#auG)" stroke-width="3.4"/>
    <circle cx="172" cy="112" r="17" fill="#0c1018" stroke="url(#auG)" stroke-width="3.4"/>
    <g stroke="rgba(255,217,138,.8)" stroke-width="1.6">
      <circle cx="72" cy="112" r="7"/><circle cx="172" cy="112" r="7"/>
      <line x1="72" y1="105" x2="72" y2="119"/><line x1="65" y1="112" x2="79" y2="112"/>
      <line x1="172" y1="105" x2="172" y2="119"/><line x1="165" y1="112" x2="179" y2="112"/>
    </g>
    <line x1="196" y1="96" x2="206" y2="96" stroke="url(#auG)" stroke-width="2.4"/>`);

  /* ---- VIP trip: plane + boarding pass ---- */
  const trip = wrap(`
    <path d="M30 118 q60 -58 150 -80" stroke="rgba(242,178,75,.5)" stroke-width="2" stroke-dasharray="1 9" stroke-linecap="round"/>
    <g transform="translate(150 30) rotate(14)">
      <path d="M0 14 l52 -14 -38 30 -8 -6 -12 14 -4 -3 8 -16 z" fill="rgba(242,178,75,.16)" stroke="url(#auG)" stroke-width="2.6" stroke-linejoin="round"/>
    </g>
    <g transform="rotate(-6 120 122)">
      <rect x="58" y="96" width="124" height="52" rx="9" fill="#0d1119" stroke="url(#auG)" stroke-width="3"/>
      <line x1="142" y1="96" x2="142" y2="148" stroke="url(#auG)" stroke-width="2" stroke-dasharray="4 5"/>
      <text x="70" y="116" font-family="Georgia,serif" font-size="12" letter-spacing="2" fill="#ffd98a">VIP</text>
      <g stroke="rgba(242,178,75,.6)" stroke-width="2">
        <line x1="70" y1="126" x2="128" y2="126"/><line x1="70" y1="135" x2="112" y2="135"/>
      </g>
      <g stroke="rgba(255,217,138,.85)" stroke-width="2">
        <line x1="150" y1="104" x2="150" y2="140"/><line x1="156" y1="104" x2="156" y2="140"/>
        <line x1="163" y1="104" x2="163" y2="140"/><line x1="171" y1="104" x2="171" y2="140"/>
      </g>
    </g>
    <path d="M196 62 l3.5 7.5 8 1 -6 5.6 1.6 8 -7.1 -4.2 -7.1 4.2 1.6 -8 -6 -5.6 8 -1 z" fill="url(#auG)"/>`);

  /* ---- stadium suite ---- */
  const suite = wrap(`
    <path d="M32 96 a88 42 0 0 1 176 0" stroke="url(#auG)" stroke-width="3.2" fill="none"/>
    <path d="M52 96 a68 32 0 0 1 136 0" stroke="rgba(242,178,75,.6)" stroke-width="2.2" fill="none"/>
    <path d="M72 96 a48 22 0 0 1 96 0" stroke="rgba(242,178,75,.4)" stroke-width="1.8" fill="none"/>
    <rect x="94" y="84" width="52" height="26" rx="4" fill="rgba(61,220,132,.10)" stroke="url(#auG)" stroke-width="2"/>
    <line x1="120" y1="84" x2="120" y2="110" stroke="rgba(242,178,75,.55)" stroke-width="1.6"/>
    <circle cx="120" cy="97" r="6" stroke="rgba(242,178,75,.55)" stroke-width="1.6" fill="none"/>
    <g transform="rotate(-5 120 132)">
      <rect x="72" y="118" width="96" height="34" rx="7" fill="#0d1119" stroke="url(#auG)" stroke-width="2.8"/>
      <circle cx="72" cy="135" r="5" fill="#0a0d13" stroke="url(#auG)" stroke-width="2"/>
      <circle cx="168" cy="135" r="5" fill="#0a0d13" stroke="url(#auG)" stroke-width="2"/>
      <text x="120" y="140" text-anchor="middle" font-family="Georgia,serif" font-size="13" letter-spacing="3" fill="#ffd98a">SUITE</text>
    </g>
    <path d="M120 30 l2.8 6 6.5 .8 -4.8 4.5 1.3 6.4 -5.8 -3.4 -5.8 3.4 1.3 -6.4 -4.8 -4.5 6.5 -.8 z" fill="url(#auG)"/>`);

  /* ---- courtside: hoop + ticket ---- */
  const courtside = wrap(`
    <rect x="76" y="26" width="88" height="58" rx="5" fill="rgba(242,178,75,.06)" stroke="url(#auG)" stroke-width="3"/>
    <rect x="103" y="46" width="34" height="26" rx="3" stroke="rgba(242,178,75,.6)" stroke-width="2" fill="none"/>
    <ellipse cx="120" cy="86" rx="24" ry="7" fill="none" stroke="url(#auG)" stroke-width="3.4"/>
    <g stroke="rgba(255,217,138,.75)" stroke-width="1.6">
      <path d="M98 89 l8 26 M142 89 l-8 26 M106 92 l14 22 M134 92 l-14 22 M120 93 v22"/>
      <path d="M101 100 h38 M105 110 h30"/>
    </g>
    <g transform="rotate(-4 120 140)">
      <rect x="70" y="126" width="100" height="30" rx="6" fill="#0d1119" stroke="url(#auG)" stroke-width="2.6"/>
      <line x1="120" y1="126" x2="120" y2="156" stroke="url(#auG)" stroke-width="1.6" stroke-dasharray="3 4"/>
      <text x="95" y="145" text-anchor="middle" font-family="Georgia,serif" font-size="11" letter-spacing="1.5" fill="#ffd98a">ROW 1</text>
      <g stroke="rgba(255,217,138,.85)" stroke-width="2">
        <line x1="130" y1="132" x2="130" y2="150"/><line x1="137" y1="132" x2="137" y2="150"/><line x1="145" y1="132" x2="145" y2="150"/><line x1="154" y1="132" x2="154" y2="150"/>
      </g>
    </g>`);

  /* ---- signed jersey ---- */
  const jersey = wrap(`
    <path d="M92 34 q28 14 56 0 l34 20 -14 26 -14 -8 v70 q-34 12 -68 0 v-70 l-14 8 -14 -26 z"
      fill="rgba(242,178,75,.08)" stroke="url(#auG)" stroke-width="3.2" stroke-linejoin="round"/>
    <path d="M92 34 q28 24 56 0" stroke="url(#auG)" stroke-width="2.6" fill="none"/>
    <g stroke="rgba(242,178,75,.45)" stroke-width="1.6">
      <line x1="82" y1="140" x2="158" y2="140"/>
    </g>
    <text x="120" y="106" text-anchor="middle" font-family="Georgia,serif" font-size="38" font-weight="700" fill="url(#auV)" stroke="rgba(10,13,19,.4)" stroke-width=".8">10</text>
    <path d="M88 126 q10 -10 18 -2 q6 6 14 -3 q9 -9 16 0 q6 8 16 -4" stroke="#ffd98a" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M196 48 l2.6 5.6 6 .7 -4.4 4.2 1.2 6 -5.4 -3.2 -5.4 3.2 1.2 -6 -4.4 -4.2 6 -.7 z" fill="url(#auG)"/>`);

  return { watch, phone, cash, car, trip, suite, courtside, jersey };
})();

/* ============================================================
   Ball cursors — a true-to-scale ghost of the actual ball,
   drawn so the photo stays readable underneath.
   Football is a prolate spheroid: its orientation is yours to set.
   ============================================================ */
const BALL_CURSOR = {
  soccer: `<svg viewBox="0 0 100 100" class="bc-svg">
    <circle cx="50" cy="50" r="50" fill="rgba(255,255,255,.16)" stroke="var(--bc)" stroke-width="3"/>
    <path d="M50 22 l20.8 15.1-7.9 24.4H37.1l-7.9-24.4z" fill="rgba(10,13,19,.4)" stroke="var(--bc)" stroke-width="1.6" stroke-linejoin="round"/>
    <g stroke="var(--bc)" stroke-width="1.6" opacity=".75">
      <path d="M50 22V3M70.8 37.1 89.5 23.5M63.1 61.5 78 86.5M36.9 61.5 22 86.5M29.2 37.1 10.5 23.5"/>
    </g>
  </svg>`,
  basketball: `<svg viewBox="0 0 100 100" class="bc-svg">
    <circle cx="50" cy="50" r="50" fill="rgba(255,138,40,.20)" stroke="var(--bc)" stroke-width="3"/>
    <g stroke="var(--bc)" stroke-width="1.8" fill="none" opacity=".8">
      <path d="M1.5 50h97M50 1.5v97"/>
      <path d="M16 16c18 18 18 50 0 68M84 16c-18 18-18 50 0 68"/>
    </g>
  </svg>`,
  /* Football is drawn from real geometry, not a squeeze.
     A prolate spheroid (a=47, b=28) whose long axis points away from the
     camera by `tilt` projects to an ellipse of semi-axes
       rx = sqrt(a^2 cos^2 t + b^2 sin^2 t),  ry = b
     so it passes smoothly from a full oval (0deg) to a circle (90deg) and on
     round the back through 360deg. buildFootball() returns that exact shape. */
  football: '',
};
/* centre marker shared by every cursor */
const BALL_CENTRE = `<span class="bc-dot"><i></i><i></i></span>`;


/* ---- football: exact silhouette for any 3D orientation ---- */
function footballGeom(tilt) {
  const A = 50, B = 30.3;   // 1.65:1, the real proportion; fills the box exactly
  const t = tilt * Math.PI / 180;
  const rx = Math.sqrt(A * A * Math.cos(t) ** 2 + B * B * Math.sin(t) ** 2);
  return { rx, ry: B, nose: Math.cos(t), face: Math.abs(Math.cos(t)) };
}

function buildFootball(tilt = 0) {
  const { rx, ry, nose, face } = footballGeom(tilt);
  const t = tilt * Math.PI / 180;
  const side = Math.abs(Math.sin(t));       // 0 side-on, 1 nose-on
  const cy = 30.3;

  /* The equator — the ball's circular cross-section, seen edge-on when the
     ball lies across the frame and opening into a full circle as the nose
     swings toward the camera. This is the cue that reads as depth. */
  const eqRx = (ry * side).toFixed(2);

  /* Nose caps: the two tips. The near tip grows as the ball turns toward us. */
  const tipX = (rx * 0.995).toFixed(2);
  const tipCurve = (ry * 0.55 * face).toFixed(2);

  /* Laces ride the upper surface and swing off-centre with the ball, then
     fade out once you are looking at the point instead of the seam. */
  const laceShift = (rx * 0.30 * Math.sin(t)).toFixed(2);
  const laceHalf = rx * 0.32 * face;
  const laceOp = (0.15 + 0.85 * face).toFixed(2);
  let rungs = '';
  for (let i = 0; i < 4; i++) {
    const px = 50 + +laceShift - laceHalf + (2 * laceHalf) * (i + 0.5) / 4;
    rungs += `M${px.toFixed(1)} ${(cy - 5.2 * face).toFixed(1)}v${(10.4 * face).toFixed(1)}`;
  }

  return `<svg viewBox="0 0 100 60.6" class="bc-svg">
    <defs>
      <radialGradient id="fbShade" cx="34%" cy="28%" r="78%">
        <stop offset="0" stop-color="rgba(190,110,60,.42)"/>
        <stop offset="1" stop-color="rgba(70,32,14,.34)"/>
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="${cy}" rx="${rx.toFixed(2)}" ry="${ry}" fill="url(#fbShade)"
             stroke="var(--bc)" stroke-width="3"/>
    ${eqRx > 0.6 ? `<ellipse cx="50" cy="${cy}" rx="${eqRx}" ry="${ry}" fill="none"
             stroke="var(--bc)" stroke-width="1.6" opacity="${(0.35 + 0.5 * side).toFixed(2)}"/>` : ''}
    <g stroke="var(--bc)" fill="none" opacity="${(0.30 + 0.45 * face).toFixed(2)}" stroke-width="1.5">
      <path d="M${(50 - tipX)} ${cy}q${tipCurve} -${(ry * 0.5).toFixed(1)} ${(rx * 0.34).toFixed(1)} -${(ry * 0.62).toFixed(1)}"/>
      <path d="M${(50 - tipX)} ${cy}q${tipCurve} ${(ry * 0.5).toFixed(1)} ${(rx * 0.34).toFixed(1)} ${(ry * 0.62).toFixed(1)}"/>
      <path d="M${(50 + +tipX)} ${cy}q-${tipCurve} -${(ry * 0.5).toFixed(1)} -${(rx * 0.34).toFixed(1)} -${(ry * 0.62).toFixed(1)}"/>
      <path d="M${(50 + +tipX)} ${cy}q-${tipCurve} ${(ry * 0.5).toFixed(1)} -${(rx * 0.34).toFixed(1)} ${(ry * 0.62).toFixed(1)}"/>
    </g>
    <g stroke="var(--bc)" fill="none" opacity="${laceOp}">
      <path d="M${(50 + +laceShift - laceHalf).toFixed(1)} ${cy}h${(laceHalf * 2).toFixed(1)}" stroke-width="2.2"/>
      <path d="${rungs}" stroke-width="1.6"/>
    </g>
    ${face < 0.62 ? `<ellipse cx="50" cy="${cy}" rx="${(ry * 0.20 * (1 - face)).toFixed(2)}"
             ry="${(ry * 0.20 * (1 - face)).toFixed(2)}" fill="none" stroke="var(--bc)"
             stroke-width="1.4" opacity="${(0.9 * (1 - face)).toFixed(2)}"/>` : ''}
    ${nose < 0 ? `<ellipse cx="50" cy="${cy}" rx="${rx.toFixed(2)}" ry="${ry}" fill="none"
             stroke="rgba(255,255,255,.45)" stroke-width="1.2" stroke-dasharray="3 4"/>` : ''}
  </svg>`;
}
BALL_CURSOR.football = buildFootball(0);

/* ============================================================
   How-to-play diagrams. No text inside the SVGs — a scaled
   viewBox stretches type and letter-spacing unpredictably, so
   every label lives in HTML beside the art instead.
   ============================================================ */
const HOW_ART = {
  /* 01 — a frame of play with the ball lifted out */
  moment: `<svg viewBox="0 0 320 200" class="ha">
    <defs>
      <linearGradient id="hgSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1b2432"/><stop offset="1" stop-color="#0c1118"/></linearGradient>
      <linearGradient id="hgTurf" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#22503a"/><stop offset="1" stop-color="#163226"/></linearGradient>
    </defs>
    <rect width="320" height="200" fill="url(#hgSky)"/>
    <g fill="rgba(255,255,255,.05)">
      ${[18,52,90,132,176,214,252,292].map((x,i)=>`<circle cx="${x}" cy="${34+(i%3)*11}" r="${7-(i%2)}"/>`).join('')}
    </g>
    <rect y="132" width="320" height="68" fill="url(#hgTurf)"/>
    <g stroke="rgba(255,255,255,.13)" stroke-width="1.6">
      <path d="M0 150h320"/><path d="M64 132v68M256 132v68"/></g>
    <!-- striker, mid-volley -->
    <g fill="#8b97a9">
      <path d="M96 92c0-7 5-12 12-12s12 5 12 12-5 12-12 12-12-5-12-12z"/>
      <path d="M104 104c9-2 17 3 19 12l5 22-9 3-6-19-6 26-8-2 5-42z"/>
      <path d="M113 148l6 24 9 12-6 5-12-14-5-25z"/>
      <path d="M108 150l-5 24-13 11 5 6 16-13 6-26z"/>
      <path d="M120 116l24-9 3 8-25 10z"/>
    </g>
    <!-- defender, arms up -->
    <g fill="#6e7a8c">
      <path d="M206 96c0-7 5-12 11-12s11 5 11 12-5 11-11 11-11-4-11-11z"/>
      <path d="M212 108c9-2 16 3 18 11l4 24-8 2-6-18-5 26-8-2 5-43z"/>
      <path d="M220 150l4 24-9 13 6 5 13-16-4-26z"/>
      <path d="M214 151l-6 24-14 12 5 6 17-14 6-27z"/>
      <path d="M210 108l-20-16-6 6 21 18zM226 106l20-17 6 7-21 17z"/>
    </g>
    <ellipse cx="112" cy="196" rx="26" ry="5" fill="rgba(0,0,0,.3)"/>
    <ellipse cx="216" cy="196" rx="24" ry="5" fill="rgba(0,0,0,.3)"/>
    <!-- the hole where the ball was -->
    <circle cx="163" cy="70" r="23" fill="rgba(10,13,19,.55)"/>
    <circle cx="163" cy="70" r="23" fill="none" stroke="#f2b24b" stroke-width="2.4" stroke-dasharray="7 6"/>
    <g stroke="#ffd98a" stroke-width="1.6" opacity=".8">
      <path d="M163 36V22M163 104v14M129 70h-14M197 70h14"/></g>
  </svg>`,

  /* 02 — ticket bundles, cheaper by the handful */
  tickets: `<svg viewBox="0 0 320 200" class="ha">
    ${[0,1,2].map(i=>`
    <g transform="translate(${30+i*76} ${56+i*14}) rotate(${-9+i*8})" opacity="${0.55+i*0.22}">
      <rect width="132" height="72" rx="9" fill="#141c28" stroke="#f2b24b" stroke-width="${i===2?2.6:1.6}"/>
      <circle cx="0" cy="36" r="6" fill="#0a0d13"/><circle cx="132" cy="36" r="6" fill="#0a0d13"/>
      <path d="M92 6v60" stroke="#f2b24b" stroke-width="1.3" stroke-dasharray="5 5" opacity=".65"/>
      <g fill="rgba(242,178,75,.22)">
        <rect x="16" y="16" width="${[16,30,42][i]}" height="9" rx="2"/>
        <rect x="16" y="32" width="${[38,44,50][i]}" height="6" rx="2"/>
        <rect x="16" y="45" width="28" height="6" rx="2"/></g>
      <g stroke="#ffd98a" stroke-width="1.5" opacity=".9">
        <circle cx="112" cy="36" r="9" fill="none"/>
        <path d="M112 24v5M112 43v5M100 36h5M119 36h5"/></g>
    </g>`).join('')}
  </svg>`,

  /* 03 — the true-size ghost, and pins already placed */
  aim: `<svg viewBox="0 0 320 200" class="ha">
    <rect width="320" height="200" fill="#0e141d"/>
    <rect y="140" width="320" height="60" fill="rgba(34,80,58,.5)"/>
    <g stroke="rgba(255,255,255,.07)" stroke-width="1"><path d="M0 140h320"/></g>
    <g stroke="rgba(242,178,75,.30)" stroke-width="1"><path d="M160 0v200M0 92h320"/></g>
    <circle cx="160" cy="92" r="34" fill="rgba(255,255,255,.11)" stroke="#ffd98a" stroke-width="2.8"/>
    <path d="M160 71l14.4 10.5-5.5 16.9h-17.8l-5.5-16.9z" fill="rgba(10,13,19,.42)"
          stroke="#ffd98a" stroke-width="1.4"/>
    <g stroke="#ffd98a" stroke-width="1.4" opacity=".7">
      <path d="M160 71V57M174.4 81.5 187 73M168.9 98.4l8 14M151.1 98.4l-8 14M145.6 81.5 133 73"/></g>
    <g stroke="#fff" stroke-width="1.5"><path d="M149 92h22M160 81v22"/></g>
    <g fill="none" stroke="rgba(61,220,132,.7)" stroke-width="2.2">
      <circle cx="72" cy="128" r="22"/><circle cx="246" cy="56" r="22"/></g>
    <g fill="rgba(61,220,132,.7)"><circle cx="72" cy="128" r="2"/><circle cx="246" cy="56" r="2"/></g>
  </svg>`,

  /* 04 — three judges converge on one truth */
  judges: `<svg viewBox="0 0 320 200" class="ha">
    <circle cx="160" cy="100" r="74" fill="none" stroke="rgba(255,255,255,.07)" stroke-dasharray="3 7"/>
    <circle cx="160" cy="100" r="42" fill="none" stroke="rgba(255,255,255,.11)" stroke-dasharray="3 7"/>
    ${[[86,52],[240,66],[122,170]].map((p,i)=>`
      <g>
        <path d="M${p[0]} ${p[1]}L160 100" stroke="#f2b24b" stroke-width="1.3" stroke-dasharray="5 5" opacity=".55"/>
        <circle cx="${p[0]}" cy="${p[1]}" r="17" fill="#141c28" stroke="#f2b24b" stroke-width="1.9"/>
        <g fill="#ffd98a" transform="translate(${p[0]-8} ${p[1]-9}) scale(.7)">
          <circle cx="11" cy="7" r="6"/><path d="M11 16c7 0 12 5 12 12H-1c0-7 5-12 12-12z"/></g>
        <circle cx="${p[0]}" cy="${p[1]}" r="3" fill="#f2b24b" opacity=".0"/>
      </g>`).join('')}
    <circle cx="160" cy="100" r="17" fill="#f2b24b"/>
    <circle cx="160" cy="100" r="5.5" fill="#0a0d13"/>
    <g stroke="#ffd98a" stroke-width="1.8"><path d="M160 66V54M160 146v12M114 100h-12M218 100h12"/></g>
  </svg>`,

  /* 05 — the scoring curve */
  score: `<svg viewBox="0 0 320 200" class="ha">
    <defs><linearGradient id="hgFill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="rgba(242,178,75,.40)"/><stop offset="1" stop-color="rgba(242,178,75,0)"/></linearGradient></defs>
    <g stroke="rgba(255,255,255,.06)" stroke-width="1">
      ${[0,1,2,3,4].map(i=>`<path d="M44 ${34+i*30}h250"/>`).join('')}
      ${[0,1,2,3,4,5].map(i=>`<path d="M${44+i*50} 34v120"/>`).join('')}</g>
    <path d="M44 34C96 34 106 122 160 134s76 4 134 6v14H44z" fill="url(#hgFill)"/>
    <path d="M44 34C96 34 106 122 160 134s76 4 134 6" fill="none" stroke="#f2b24b" stroke-width="3"/>
    <g stroke="#626c7d" stroke-width="1.5"><path d="M44 154h250M44 26v128"/></g>
    <g fill="#ffd98a" stroke="#0a0d13" stroke-width="1.5">
      <circle cx="44" cy="34" r="5"/><circle cx="120" cy="100" r="5"/><circle cx="230" cy="138" r="5"/></g>
  </svg>`,

  /* 06 — payment methods and payouts */
  pay: `<svg viewBox="0 0 320 200" class="ha">
    <rect x="26" y="28" width="268" height="144" rx="14" fill="#111823" stroke="rgba(255,255,255,.12)"/>
    ${[0,1,2,3,4].map(i=>`
      <g transform="translate(${44+i*46} 50)" opacity="${0.5+i*0.1}">
        <rect width="38" height="30" rx="7" fill="#0a0d13" stroke="#f2b24b" stroke-width="1.5"/>
        <rect x="7" y="9" width="24" height="3.4" rx="1.7" fill="rgba(242,178,75,.75)"/>
        <rect x="7" y="17" width="15" height="3.4" rx="1.7" fill="rgba(242,178,75,.4)"/>
      </g>`).join('')}
    <path d="M44 100h232" stroke="rgba(255,255,255,.08)"/>
    <g fill="rgba(255,255,255,.14)">
      <rect x="44" y="112" width="58" height="7" rx="3.5"/>
      <rect x="44" y="132" width="86" height="7" rx="3.5"/></g>
    <g fill="rgba(242,178,75,.55)"><rect x="216" y="112" width="60" height="7" rx="3.5"/></g>
    <g fill="rgba(61,220,132,.6)"><rect x="232" y="132" width="44" height="7" rx="3.5"/></g>
  </svg>`,
};
/* ============================================================
   SPOTTED.club — mock API layer
   Every call returns a Promise and touches localStorage only.
   Swap this file for real fetch() calls when the server exists —
   app.js never reads data.js or storage directly.
   ============================================================ */

const API = (() => {
  const KEY = 'spotted_demo_v1';
  const START_BALANCE = 250;

  /* ---------- storage ---------- */
  function load() {
    try {
      if (location.search.includes('reset')) localStorage.removeItem(KEY);
      const s = JSON.parse(localStorage.getItem(KEY));
      // only trust a save whose shape still matches — otherwise start clean
      if (s && s.v === 1 && typeof s.balance === 'number' && !isNaN(s.balance)
          && s.entries && typeof s.entries === 'object'
          && Array.isArray(s.tx) && typeof s.epoch === 'number') {
        return s;
      }
    } catch (e) { /* fresh start */ }
    return {
      v: 1,
      balance: START_BALANCE,
      tx: [{ t: Date.now(), label: 'Welcome credit', amt: START_BALANCE }],
      entries: {},   // compId -> [{x,y,t}]
      credits: {},   // compId -> purchased tickets not yet placed
      closed: {},    // compId -> true (demo "finish" pressed)
      epoch: Date.now(),
    };
  }
  function save(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); }
    catch (e) { /* private mode / quota — demo still runs in memory */ }
  }
  let state = load();
  // migrate saves written by earlier builds
  state.credits = state.credits || {};
  state.closed = state.closed || {};
  state.entries = state.entries || {};

  /* ---------- seeded rng (stable bot entries per competition) ---------- */
  function rng(seedStr) {
    let h = 2166136261;
    for (let i = 0; i < seedStr.length; i++) { h ^= seedStr.charCodeAt(i); h = Math.imul(h, 16777619); }
    return () => {
      h += 0x6D2B79F5;
      let t = Math.imul(h ^ (h >>> 15), 1 | h);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* ---------- scoring ----------
     d = normalized distance in % of image diagonal (0..~141)
     score: 1000 at dead centre, ~exp decay, 0 beyond far miss   */
  /* true geometric distance, in units of image width.
     A raw y-percentage covers fewer pixels than an x-percentage on a landscape
     photo, so y is scaled by the image aspect ratio before measuring. */
  function distPct(a, b, ar = 1) {
    const dx = a.x - b.x, dy = (a.y - b.y) * ar;
    return Math.sqrt(dx * dx + dy * dy);
  }
  function scoreFor(d) {
    return Math.max(0, Math.round(1000 * Math.exp(-d / 9)));
  }

  function botEntries(comp) {
    const r = rng(comp.id);
    const n = 18 + Math.floor(r() * 6);
    const bots = [];
    for (let i = 0; i < n; i++) {
      const name = BOT_NAMES[Math.floor(r() * BOT_NAMES.length)] + (r() > 0.7 ? '' : '_' + Math.floor(r() * 99));
      // mixture: a third are sharp (σ≈2.2%), rest are scattered (σ≈9%)
      const sharp = r() < 0.34;
      const sd = sharp ? 2.2 : 9;
      const gauss = () => (r() + r() + r() + r() - 2) * sd;
      const x = Math.min(98, Math.max(2, comp.target.x + gauss()));
      const y = Math.min(98, Math.max(2, comp.target.y + gauss()));
      const d = distPct({ x, y }, comp.target, comp.ar || 1);
      bots.push({ name, x, y, d, score: scoreFor(d) });
    }
    return bots.sort((a, b) => a.d - b.d);
  }

  const clone = o => JSON.parse(JSON.stringify(o));
  const compById = id => COMPETITIONS.find(c => c.id === id);

  /* Every board is judged on the coming weekend: entries shut, the panel sits,
     the prize is awarded. Dates are derived so the calendar is always live. */
  function weekendReveal(c) {
    const closes = new Date(state.epoch + c.closesIn * 1000);
    const d = new Date(closes);
    d.setHours(20, 0, 0, 0);
    const want = c.revealDow === undefined ? 6 : c.revealDow;
    for (let i = 0; i < 14; i++) {
      if (d.getDay() === want && d > closes) break;
      d.setDate(d.getDate() + 1);
    }
    return d.getTime();
  }

  function compView(c) {
    const v = clone(c);
    v.revealAt = weekendReveal(c);
    v.awardAt = v.revealAt + 20 * 3600 * 1000;   // prizes go out the next day
    delete v.target;                       // clients never see the answer
    delete v.ballImg; delete v.ballW;      // real-ball reveal assets stay server-side until results
    v.closed = !!state.closed[c.id];
    v.closesAt = state.epoch + c.closesIn * 1000;
    v.myTickets = (state.entries[c.id] || []).length;
    v.myCredits = state.credits[c.id] || 0;
    v.sold = c.sold + v.myTickets;
    return v;
  }

  /* ---------- public API ---------- */
  return {
    async me() {
      return { name: 'Gil M.', initials: 'GM', balance: state.balance, tx: clone(state.tx).reverse().slice(0, 12) };
    },

    async topUp(amount) {
      state.balance = +(state.balance + amount).toFixed(2);
      state.tx.push({ t: Date.now(), label: 'Top-up (demo)', amt: amount });
      save(state);
      return { balance: state.balance };
    },

    async listCompetitions() {
      return COMPETITIONS.map(compView);
    },

    async getCompetition(id) {
      const c = compById(id);
      return c ? compView(c) : null;
    },

    priceFor,   // pure pricing helper (sync)

    async myEntries(compId) {
      return clone(state.entries[compId] || []);
    },

    /* BOTB flow step 1 — buy tickets BEFORE the photo is revealed */
    async buyTickets(compId, n) {
      const c = compById(compId);
      if (!c) throw new Error('Unknown competition');
      if (state.closed[compId]) throw new Error('Competition is closed');
      n = Math.max(1, Math.min(25, Math.floor(n)));
      const cost = priceFor(n);
      if (cost > state.balance) throw new Error('Insufficient balance');
      state.balance = +(state.balance - cost).toFixed(2);
      state.credits[compId] = (state.credits[compId] || 0) + n;
      state.tx.push({ t: Date.now(), label: `${n} ticket${n > 1 ? 's' : ''} · ${c.title}`, amt: -cost });
      save(state);
      return { balance: state.balance, credits: state.credits[compId], cost };
    },

    /* step 2 — place the crosshairs the player already paid for */
    async submitEntry(compId, picks) {
      const c = compById(compId);
      if (!c) throw new Error('Unknown competition');
      if (state.closed[compId]) throw new Error('Competition is closed');
      const credits = state.credits[compId] || 0;
      if (picks.length > credits) throw new Error('Not enough tickets — buy more first');
      state.credits[compId] = credits - picks.length;
      const list = state.entries[compId] || (state.entries[compId] = []);
      picks.forEach(p => list.push({ x: p.x, y: p.y, a: p.a || 0, tilt: p.tilt || 0, t: Date.now() }));
      save(state);
      return { balance: state.balance, total: list.length, credits: state.credits[compId] };
    },

    /* demo control — "finish the guessing" to preview the after-state */
    async closeCompetition(compId) {
      state.closed[compId] = true;
      save(state);
      return { ok: true };
    },
    async reopenCompetition(compId) {
      delete state.closed[compId];
      save(state);
      return { ok: true };
    },

    /* full results — only meaningful once closed */
    async getResults(compId) {
      const c = compById(compId);
      if (!c) return null;
      const mine = (state.entries[compId] || []).map((p, i) => {
        const d = distPct(p, c.target, c.ar || 1);
        return { ...p, n: i + 1, d, score: scoreFor(d) };
      }).sort((a, b) => a.d - b.d);
      const bots = botEntries(c);
      const rows = [
        ...bots.map(b => ({ name: b.name, d: b.d, score: b.score, me: false })),
        ...(mine.length ? [{ name: 'Gil M. (you)', d: mine[0].d, score: mine[0].score, me: true }] : []),
      ].sort((a, b) => a.d - b.d).map((r, i) => ({ ...r, rank: i + 1 }));
      return {
        comp: compView(c),
        target: clone(c.target),
        ballImg: c.ballImg || null,
        ballW: c.ballW || 0,
        ballInPhoto: !!c.ballInPhoto,
        mine, rows,
        myRank: rows.find(r => r.me)?.rank ?? null,
        myBest: mine[0] || null,
      };
    },

    /* weekly tournament — my points = best score per closed comp I entered */
    async tournament() {
      const r = rng('tournament-w33');
      let myPts = 0, myComps = 0;
      for (const c of COMPETITIONS) {
        if (!state.closed[c.id]) continue;
        const picks = state.entries[c.id] || [];
        if (!picks.length) continue;
        const best = Math.max(...picks.map(p => scoreFor(distPct(p, c.target, c.ar || 1))));
        myPts += best; myComps++;
      }
      const names = [...BOT_NAMES].sort(() => r() - 0.5).slice(0, 20);
      const rows = names.map((name, i) => ({
        name,
        comps: 3 + Math.floor(r() * 9),
        pts: Math.round(2500 - i * (90 + r() * 60) + r() * 80),
        me: false,
      }));
      if (myComps > 0) rows.push({ name: 'Gil M. (you)', comps: myComps, pts: myPts, me: true });
      rows.sort((a, b) => b.pts - a.pts).forEach((row, i) => row.rank = i + 1);
      return {
        ...clone(TOURNAMENT),
        endsAt: state.epoch + TOURNAMENT.endsIn * 1000,
        rows,
        myRow: rows.find(row => row.me) || null,
      };
    },

    async pastWinners() { return clone(PAST_WINNERS); },

    async resetDemo() {
      localStorage.removeItem(KEY);
      state = load();
      return { ok: true };
    },
  };
})();
/* ============================================================
   SPOTTED.club — app shell (hash router + views)
   Talks to API only; rendering is string-template based.
   ============================================================ */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const app = $('#app');
const money = n => '$' + n.toFixed(2);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

addEventListener('error', e => {
  const t = e.target;
  if (t && t.tagName === 'IMG' && !t.dataset.retried) {
    t.dataset.retried = '1';
    setTimeout(() => { t.src = t.src.split('?')[0] + '?r=' + Date.now(); }, 800);
  }
}, true);

let tickTimers = [];
function clearTicks() {
  tickTimers.forEach(t => { if (t && t.off) t.off(); else clearInterval(t); });
  tickTimers = [];
}

/* ---------- countdown ---------- */
function fmtLeft(ms) {
  if (ms <= 0) return 'CLOSED';
  const s = Math.floor(ms / 1000);
  const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600),
        m = Math.floor((s % 3600) / 60), ss = s % 60;
  if (d > 0) return `${d}d ${h}h ${String(m).padStart(2, '0')}m`;
  if (h > 0) return `${h}h ${String(m).padStart(2, '0')}m ${String(ss).padStart(2, '0')}s`;
  return `${m}m ${String(ss).padStart(2, '0')}s`;
}
function liveCountdowns() {
  const t = setInterval(() => {
    $$('[data-deadline]').forEach(el => {
      const left = +el.dataset.deadline - Date.now();
      el.textContent = fmtLeft(left);
      el.classList.toggle('hot', left > 0 && left < 4 * 3600 * 1000);
    });
  }, 1000);
  tickTimers.push(t);
}

/* ---------- wallet ---------- */
async function refreshWallet(bump = false) {
  const me = await API.me();
  $('#walletAmount').textContent = money(me.balance);
  const mw = $('#mwAmount'); if (mw) mw.textContent = money(me.balance).replace('.00', '');
  if (bump) {
    const chip = $('#walletChip');
    chip.classList.remove('bump'); void chip.offsetWidth; chip.classList.add('bump');
  }
  return me;
}
async function openWallet() {
  const me = await refreshWallet();
  $('#wmBalance').textContent = money(me.balance);
  $('#wmTx').innerHTML = me.tx.map(t => `
    <li><span>${esc(t.label)}</span>
    <span class="amt ${t.amt > 0 ? 'pos' : ''}">${t.amt > 0 ? '+' : '−'}${money(Math.abs(t.amt))}</span></li>`).join('');
  $('#walletModal').hidden = false;
}
$('#coModal').addEventListener('click', e => {
  if (e.target.dataset.closeCo !== undefined || e.target === $('#coModal')) closeCheckout();
});
$('#walletChip').addEventListener('click', openWallet);
$('#mobileWallet')?.addEventListener('click', openWallet);
$('#walletModal').addEventListener('click', e => {
  if (e.target.dataset.closeWallet !== undefined || e.target === $('#walletModal')) $('#walletModal').hidden = true;
  const amt = e.target.dataset.topup;
  if (amt) {
    // money enters the account here — this is where the payment sheet belongs
    $('#walletModal').hidden = true;
    openCheckout({
      amount: +amt,
      onDone: async () => {
        await API.topUp(+amt);
        const me = await refreshWallet(true);
        toast(`${money(+amt)} added to your balance`);
        openWallet();
      },
    });
  }
});

/* ---------- toast + confetti ---------- */
let toastT;
function toast(msg, err = false) {
  const el = $('#toast');
  el.textContent = msg; el.className = 'toast' + (err ? ' err' : ''); el.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(() => el.hidden = true, 3200);
}
function confetti() {
  const cv = $('#confetti'), ctx = cv.getContext('2d');
  cv.width = innerWidth; cv.height = innerHeight;
  const P = Array.from({ length: 160 }, () => ({
    x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * .5,
    w: 5 + Math.random() * 6, h: 8 + Math.random() * 8,
    vy: 2 + Math.random() * 3.5, vx: -1.2 + Math.random() * 2.4,
    rot: Math.random() * Math.PI, vr: -.1 + Math.random() * .2,
    c: ['#f2b24b', '#ffd98a', '#ffffff', '#3ddc84', '#ff7a3d'][Math.floor(Math.random() * 5)],
  }));
  let frame = 0;
  (function draw() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    P.forEach(p => {
      p.y += p.vy; p.x += p.vx; p.rot += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
    });
    if (++frame < 260) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, cv.width, cv.height);
  })();
}


/* ============================================================
   Checkout — a simulation of the payment step, end to end.
   Nothing leaves the browser. The card panel is pre-filled with a
   test number and is read-only, so no real details are ever typed.
   ============================================================ */
const PAY_METHODS = [
  { id: 'apple',  label: 'Apple Pay', tag: 'One touch',
    art: `<svg viewBox="0 0 44 24" fill="currentColor"><path d="M10.6 6.2c.6-.7 1-1.7.9-2.7-.9.04-2 .6-2.7 1.4-.6.7-1 1.7-.9 2.6 1 .08 2-.5 2.7-1.3zM13.4 17.6c-.7 1-1.5 2-2.7 2-1.1 0-1.5-.7-2.8-.7-1.3 0-1.7.7-2.8.7-1.2 0-2-1.1-2.8-2.2C.9 15.6.2 12.4 1.4 10.2c.7-1.2 1.9-2 3.2-2 1.2 0 2 .7 2.8.7.8 0 1.7-.8 3.1-.7 1 .04 2.2.6 2.9 1.7-1.9 1.2-1.7 4.1.2 5.1-.2.6-.5 1.2-.9 1.9z"/><text x="17.5" y="17.5" font-family="-apple-system,Helvetica,sans-serif" font-size="12" font-weight="600">Pay</text></svg>` },
  { id: 'card',   label: 'Credit card', tag: 'Visa · Mastercard · Amex',
    art: `<svg viewBox="0 0 44 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="38" height="16" rx="3"/><path d="M3 9.5h38"/><path d="M8 15.5h8"/><path d="M31 15.5h6"/></svg>` },
  { id: 'paypal', label: 'PayPal', tag: 'Pay from your balance',
    art: `<svg viewBox="0 0 44 24" fill="currentColor"><path d="M9 3.5h7.6c3.7 0 5.6 1.9 5 5.1-.5 3.3-3.1 5.1-6.6 5.1h-2.4L11.9 20H7.4L9 3.5zm3.3 6.6h1.8c1.4 0 2.5-.6 2.7-2 .2-1.2-.5-1.7-1.9-1.7h-1.9l-.7 3.7z"/><path d="M21.6 6.6h7.6c3.7 0 5.6 1.9 5 5.1-.5 3.3-3.1 5.1-6.6 5.1h-2.4L24.5 23H20l1.6-16.4zm3.3 6.6h1.8c1.4 0 2.5-.6 2.7-2 .2-1.2-.5-1.7-1.9-1.7H25.6l-.7 3.7z" opacity=".5"/></svg>` },
  { id: 'venmo',  label: 'Venmo', tag: 'Split with friends',
    art: `<svg viewBox="0 0 44 24" fill="currentColor"><path d="M11.9 4.2c.6 1.1.9 2.3.9 3.8 0 4.7-4 10.8-7.2 15H1.2L5.2 4.2h4.7L7.9 15.9c1.6-2.7 3.6-6.8 3.6-9.6 0-1.5-.3-2.5-.6-3.3l1 1.2z"/><text x="15" y="17.5" font-family="Helvetica,sans-serif" font-size="11" font-weight="700">venmo</text></svg>` },
  { id: 'crypto', label: 'Crypto', tag: 'BTC · ETH · USDT',
    art: `<svg viewBox="0 0 44 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8.4"/><path d="M9.2 7.6h4.4a2.2 2.2 0 0 1 0 4.4H9.2m0 0h4.8a2.2 2.2 0 0 1 0 4.4H9.2m0-8.8v8.8M11 5.6v2M11 16.4v2"/><path d="M26 12h14M34.5 6.5 40 12l-5.5 5.5" opacity=".45"/></svg>` },
];
const payMethod = id => PAY_METHODS.find(m => m.id === id);

let CO = null;

function openCheckout(o) {
  CO = { ...o, cost: o.amount, method: 'apple', stage: 'pick' };
  renderCheckout();
  $('#coModal').hidden = false;
}
function closeCheckout() { $('#coModal').hidden = true; CO = null; }

/* decorative QR-looking block — deterministic, not a scannable code */
function qrBlock() {
  let cells = '', h = 99991;
  for (let y = 0; y < 13; y++) for (let x = 0; x < 13; x++) {
    h = (h * 1103515245 + 12345) & 0x7fffffff;
    const corner = (x < 4 && y < 4) || (x > 8 && y < 4) || (x < 4 && y > 8);
    const on = corner ? ((x + y) % 3 !== 1) : (h % 100 > 52);
    if (on) cells += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
  }
  return `<svg viewBox="0 0 13 13" fill="currentColor" shape-rendering="crispEdges">${cells}</svg>`;
}

function methodPanel() {
  const m = CO.method;
  if (m === 'apple') return `
    <div class="co-panel co-apple">
      <div class="ap-sheet">
        <div class="ap-top"><span class="ap-mark">${payMethod('apple').art}</span><b>Spot the Ball</b></div>
        <div class="ap-row"><span>Card</span><b>•••• 4242 · Visa</b></div>
        <div class="ap-row"><span>Total</span><b>${money(CO.cost)}</b></div>
        <div class="ap-confirm"><span class="ap-ring"></span>Confirm with Touch ID</div>
      </div>
    </div>`;
  if (m === 'card') return `
    <div class="co-panel">
      <div class="co-fields">
        <label>Card number<input value="4242 4242 4242 4242" readonly></label>
        <div class="co-two">
          <label>Expiry<input value="12 / 29" readonly></label>
          <label>CVC<input value="•••" readonly></label>
        </div>
        <label>Name on card<input value="GIL MISGAV" readonly></label>
      </div>
      <p class="co-note">A test card, filled in for you — this demo never asks for real details.</p>
    </div>`;
  if (m === 'paypal') return `
    <div class="co-panel co-redirect">
      <span class="co-brand pp">${payMethod('paypal').art}</span>
      <b>gil@artestudio.io</b><span>PayPal balance · $1,240.00</span>
      <p class="co-note">In production this hands off to PayPal and returns with a token.</p>
    </div>`;
  if (m === 'venmo') return `
    <div class="co-panel co-redirect">
      <span class="co-brand vn">${payMethod('venmo').art}</span>
      <b>@gil-misgav</b><span>Venmo balance · $310.50</span>
      <label class="co-check"><input type="checkbox" checked disabled> Share this entry on my feed</label>
    </div>`;
  return `
    <div class="co-panel co-crypto">
      <div class="cy-coins">
        ${['BTC','ETH','USDT'].map((c,i)=>`<button class="cy-coin ${i===0?'sel':''}" data-coin="${c}">${c}</button>`).join('')}
      </div>
      <div class="cy-body">
        <div class="cy-qr">${qrBlock()}</div>
        <div class="cy-addr">
          <span>Send exactly</span><b id="cyAmt">${(CO.cost * 0.0000147).toFixed(6)} BTC</b>
          <code>bc1q · demo only · not a real wallet</code>
        </div>
      </div>
      <p class="co-note">Demo address — nothing is broadcast to any chain.</p>
    </div>`;
}

function renderCheckout() {
  const body = $('#coBody');
  if (CO.stage === 'done') {
    body.innerHTML = `
      <div class="co-done">
        <span class="co-tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2.6" stroke-linecap="round"><path d="M4 12.5l5.2 5.2L20 7"/></svg></span>
        <h3>Balance topped up</h3>
        <p><b>${money(CO.cost)}</b> is in your wallet — every entry now comes straight out of it.</p>
        <div class="co-receipt">
          <div><span>Paid</span><b>${money(CO.cost)}</b></div>
          <div><span>Method</span><b>${payMethod(CO.method).label}</b></div>
          <div><span>Reference</span><b>STB-${Math.random().toString(36).slice(2,8).toUpperCase()}</b></div>
        </div>
        <button class="btn big" id="coFinish">Back to the wallet →</button>
      </div>`;
    $('#coFinish').addEventListener('click', () => { const f = CO.onDone; closeCheckout(); f(); });
    return;
  }
  if (CO.stage === 'busy') {
    body.innerHTML = `
      <div class="co-busy"><span class="co-spin"></span>
        <h3>Authorising…</h3><p>${payMethod(CO.method).label} · ${money(CO.cost)}</p></div>`;
    return;
  }
  body.innerHTML = `
    <div class="co-summary">
      <div class="co-line"><span>Top up your balance</span><b>${money(CO.cost)}</b></div>
      <div class="co-line sm"><span>Spot the Ball wallet</span><span>buys ${Math.floor(CO.cost / 1.8)} tickets at the best rate</span></div>
      <div class="co-total"><span>To pay</span><b>${money(CO.cost)}</b></div>
    </div>
    <div class="co-methods">
      ${PAY_METHODS.map(m => `
        <button class="co-method ${m.id === CO.method ? 'sel' : ''}" data-m="${m.id}">
          <span class="cm-art">${m.art}</span>
          <span class="cm-txt"><b>${m.label}</b><i>${m.tag}</i></span>
          <span class="cm-tick"></span>
        </button>`).join('')}
    </div>
    ${methodPanel()}
    <button class="btn big" id="coPay">Pay ${money(CO.cost)}</button>
    <p class="co-legal">Demo checkout — no money moves and nothing is stored.</p>`;

  $$('#coBody .co-method').forEach(b => b.addEventListener('click', () => {
    CO.method = b.dataset.m; renderCheckout();
  }));
  $$('#coBody .cy-coin').forEach(b => b.addEventListener('click', () => {
    $$('#coBody .cy-coin').forEach(x => x.classList.remove('sel'));
    b.classList.add('sel');
    const per = { BTC: 0.0000147, ETH: 0.00037, USDT: 1 }[b.dataset.coin];
    $('#cyAmt').textContent = (CO.cost * per).toFixed(b.dataset.coin === 'USDT' ? 2 : 6) + ' ' + b.dataset.coin;
  }));
  $('#coPay').addEventListener('click', async () => {
    CO.stage = 'busy'; renderCheckout();
    await new Promise(r => setTimeout(r, 1700));
    CO.stage = 'done'; renderCheckout();
  });
}

/* ============================================================
   VIEWS
   ============================================================ */

function compCard(c) {
  const s = SPORTS[c.sport];
  const left = c.closesAt - Date.now();
  const pct = Math.min(100, Math.round((c.sold / c.cap) * 100));
  return `
  <a class="comp-card" href="#/play/${c.id}" style="--acc:${s.accent}">
    <div class="cc-plate">
      <svg class="plate-mark" viewBox="0 0 400 250" aria-hidden="true">
        <circle cx="200" cy="125" r="70" fill="none" stroke="currentColor"/>
        <circle cx="200" cy="125" r="110" fill="none" stroke="currentColor"/>
        <circle cx="200" cy="125" r="150" fill="none" stroke="currentColor"/>
        <line x1="200" y1="-20" x2="200" y2="270" stroke="currentColor"/>
        <line x1="-20" y1="125" x2="420" y2="125" stroke="currentColor"/>
      </svg>
      <span class="cc-sport"><span>${s.icon}</span> ${s.label}</span>
      ${c.closed
        ? `<span class="cc-flag closed">RESULTS IN</span>`
        : c.featured ? `<span class="cc-flag">FEATURED</span>` : ''}
      ${c.prizeImg
        ? `<img class="cc-photo" src="${c.prizeImg}" alt="${esc(c.prize)}">`
        : `<div class="cc-art">${PRIZE_ART[c.prizeType] || PRIZE_ART.cash}</div>`}
      <div class="cc-prize">
        <div class="p-label">Win</div>
        <div class="p-value">${esc(c.prize)}</div>
      </div>
    </div>
    <div class="cc-body">
      <div class="cc-title">${esc(c.title)}</div>
      <div class="cc-sub">${esc(c.sub)}</div>
      <div class="cc-meta">
        <span>⏱ <span class="cd" data-deadline="${c.closesAt}">${c.closed ? 'CLOSED' : fmtLeft(left)}</span></span>
        <span>${c.sold.toLocaleString()} tickets</span>
      </div>
      <div class="cc-bar"><i style="width:${pct}%"></i></div>
      <div class="cc-foot">
        <span class="cc-fee">from <b>${money(PRICE_TIERS[0].each)}</b> / ticket</span>
        <span class="btn" style="padding:9px 18px;font-size:13px">${c.closed ? 'See results' : 'Play now'}</span>
      </div>
      ${weekStrip(c)}
      ${c.myTickets ? `<div class="cc-mine">▸ You hold ${c.myTickets} ticket${c.myTickets > 1 ? 's' : ''} here</div>` : ''}
    </div>
  </a>`;
}


/* ============================================================
   Weekly rhythm: entries run, the panel sits on the weekend,
   prizes go out the day after. Drawn as a live seven-day strip.
   ============================================================ */
const DOW = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const DOW_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function weekStrip(c, big = false) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const close = new Date(c.closesAt); close.setHours(0, 0, 0, 0);
  const rev = new Date(c.revealAt); rev.setHours(0, 0, 0, 0);
  const award = new Date(c.awardAt); award.setHours(0, 0, 0, 0);
  // the week that contains the reveal, Monday first
  const start = new Date(rev);
  start.setDate(rev.getDate() - ((rev.getDay() + 6) % 7));
  const cells = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(start); d.setDate(start.getDate() + i);
    const k = d.getTime();
    const cls = [
      k === today.getTime() ? 'now' : '',
      k === close.getTime() ? 'close' : '',
      k === rev.getTime() ? 'reveal' : '',
      k === award.getTime() ? 'award' : '',
      k < today.getTime() ? 'past' : '',
      (d.getDay() === 0 || d.getDay() === 6) ? 'wknd' : '',
    ].filter(Boolean).join(' ');
    cells.push(`<i class="${cls}" style="--i:${i}"><b>${DOW[d.getDay()]}</b><u>${d.getDate()}</u></i>`);
  }
  const revName = DOW_FULL[new Date(c.revealAt).getDay()];
  return `
    <div class="wk ${big ? 'wk-big' : ''}">
      <div class="wk-days">${cells.join('')}</div>
      ${big ? `<div class="wk-legend">
        <span><i class="d-close"></i>Entries close</span>
        <span><i class="d-rev"></i>Judges rule · ${revName}</span>
        <span><i class="d-aw"></i>Prize awarded</span>
      </div>` : `<div class="wk-note">Judged <b>${revName}</b></div>`}
    </div>`;
}

/* the home-page showpiece: a week that plays itself, then opens the vault */
function revealCalendar(comps) {
  const wk = comps.filter(c => !c.closed).slice(0, 5);
  return `
  <section class="section reveal-cal">
    <div class="sec-head">
      <h2>Every weekend, the judges rule</h2>
      <span class="count">entries all week · verdict on the weekend</span>
    </div>
    <div class="rc-stage">
      <div class="rc-week">
        ${['MON','TUE','WED','THU','FRI','SAT','SUN'].map((d, i) => `
          <div class="rc-day ${i > 4 ? 'is-wknd' : ''}" style="--i:${i}">
            <span class="rc-dow">${d}</span>
            <span class="rc-dot"></span>
            <span class="rc-cap">${i < 5 ? 'entries open' : (i === 5 ? 'panel sits' : 'prizes out')}</span>
          </div>`).join('')}
        <div class="rc-sweep"></div>
      </div>
      <div class="rc-prizes">
        ${wk.map((c, i) => `
          <figure class="rc-prize" style="--i:${i}">
            <img src="${c.prizeImg}" alt="" loading="lazy">
            <figcaption><span>${SPORTS[c.sport].icon}</span> ${esc(c.prizeShort)}</figcaption>
            <em>AWARDED</em>
          </figure>`).join('')}
      </div>
    </div>
  </section>`;
}

/* ---------- HOME ---------- */
async function viewHome(sportFilter) {
  const comps = await API.listCompetitions();
  const winners = await API.pastWinners();
  const filtered = sportFilter ? comps.filter(c => c.sport === sportFilter) : comps;
  const totalPrizes = '$310,000+';

  app.innerHTML = `
  <section class="hero">
    <div class="hero-deco"><i class="ring"></i><i class="ring"></i><i class="ring"></i><i class="hline"></i><i class="vline"></i><i class="dot"></i></div>
    <div class="hero-kicker"><span class="live-dot"></span> ${comps.filter(c => !c.closed).length} competitions live now</div>
    <h1>Spot the ball.<br><span class="x">Beat the judges.</span><br><span class="g">Win the dream.</span></h1>
    <p class="hero-sub">The ball has been removed from a frozen moment of play. Study the eyes, the shape, the physics — then place your crosshair where the ball must be. <strong>Pure judgement. Zero luck.</strong> Closest to the judges' position takes the prize.</p>
    <div class="hero-cta">
      <a class="btn big" href="#comps">Enter a competition</a>
      <a class="btn big ghost" href="#/how">How judging works</a>
    </div>
    <div class="hero-stats">
      <div class="hstat"><div class="n">${totalPrizes}</div><div class="l">Live prize board</div></div>
      <div class="hstat"><div class="n">${comps.reduce((a, c) => a + c.sold, 0).toLocaleString()}</div><div class="l">Tickets this week</div></div>
      <div class="hstat"><div class="n">3</div><div class="l">Sports covered</div></div>
      <div class="hstat"><div class="n">1mm</div><div class="l">Judging precision</div></div>
    </div>
  </section>

  <div class="moments" aria-hidden="true">
    <div class="m-track">
      ${[...comps, ...comps].map(c => `<div class="m-cell"><img src="${c.img}" alt=""><span>${SPORTS[c.sport].icon} ${esc(c.title)}</span></div>`).join('')}
    </div>
    <div class="m-caption">This week's frozen moments — the ball is out there</div>
  </div>

  <section class="section" id="comps">
    <div class="sec-head"><h2>Live competitions</h2><span class="count">${filtered.length} open boards</span></div>
    <div class="sport-tabs">
      <button class="sport-tab ${!sportFilter ? 'active' : ''}" data-sport="">All sports</button>
      ${Object.entries(SPORTS).map(([k, s]) =>
        `<button class="sport-tab ${sportFilter === k ? 'active' : ''}" data-sport="${k}"><span class="ico">${s.icon}</span>${s.label}</button>`).join('')}
    </div>
    ${Object.entries(SPORTS).filter(([k]) => !sportFilter || k === sportFilter).map(([k, s]) => {
      const group = comps.filter(c => c.sport === k);
      const pool = group.length;
      return `
      <div class="sport-block" style="--acc:${s.accent};--bg-sport:url('assets/bg/${k}.jpg')">
        <div class="sport-divider">
          <span class="sd-medal">${s.icon}</span>
          <h3 class="sd-word">${s.label}</h3>
          <span class="sd-line"></span>
          <span class="sd-count">${pool} live board${pool > 1 ? 's' : ''} · closest crosshair takes the prize</span>
        </div>
        <div class="comp-grid">${group.map(compCard).join('')}</div>
      </div>`;
    }).join('')}
  </section>

  <section class="section">
    <div class="sec-head"><h2>How it works</h2></div>
    <div class="how-grid">
      <div class="how-card"><div class="num">01</div><h3>Pick a moment</h3><p>Choose a competition. Every photo is a real frame of play with the ball digitally removed.</p></div>
      <div class="how-card"><div class="num">02</div><h3>Buy your tickets</h3><p>Choose your bundle before the photo is revealed — 1 to 25 crosshairs, bigger bundles cost less per pin. Then the moment unlocks and you aim with a true-size ball.</p></div>
      <div class="how-card"><div class="num">03</div><h3>Judges decide</h3><p>When entries close, our panel of pros fixes the ball's true position. It's their judgement — not the original photo — that counts. Skill, not chance.</p></div>
      <div class="how-card"><div class="num">04</div><h3>Closest wins</h3><p>Nearest crosshair takes the headline prize. Every entry earns precision points toward the weekly tournament pot.</p></div>
    </div>
  </section>

  ${revealCalendar(comps)}

  <section class="section winners">
    <div class="sec-head">
      <h2>The winners' wall</h2>
      <span class="count">illustrative · demo build</span>
    </div>

    ${(() => { const w = winners[0]; return `
    <article class="win-hero">
      <div class="wh-prize">
        <img src="${w.prizeImg}" alt="${esc(w.prize)}">
        <div class="wh-face"><img src="${w.photo}" alt=""></div>
        <span class="wh-week">Week ${w.week.slice(1)} · ${SPORTS[w.sport].icon} ${SPORTS[w.sport].label}</span>
      </div>
      <div class="wh-copy">
        <div class="wh-kicker">She won</div>
        <h3>${esc(w.prize)}</h3>
        <div class="wh-sub">${esc(w.prizeSub)}</div>
        <blockquote>${esc(w.quote)}</blockquote>
        <div class="wh-who">
          <b>${esc(w.name)}</b><span>${esc(w.from)}</span>
          <em>won by <i>${w.dist}</i> units</em>
        </div>
      </div>
    </article>`; })()}

    <div class="win-strip">
      ${winners.slice(1).map(w => `
        <figure class="win-card">
          <div class="wc-photo">
            <img class="wc-prize-bg" src="${w.prizeImg}" alt="${esc(w.prize)}">
            <div class="wc-face"><img src="${w.photo}" alt=""></div>
            <span class="wc-sport">${SPORTS[w.sport].icon}</span>
            <span class="wc-week">WEEK ${w.week.slice(1)}</span>
          </div>
          <figcaption>
            <div class="p">${esc(w.prize)}</div>
            <div class="s">${esc(w.prizeSub)}</div>
            <div class="n">${esc(w.name)} · ${esc(w.from)}</div>
            <div class="d">won by <b>${w.dist}</b> units</div>
          </figcaption>
        </figure>`).join('')}
    </div>
  </section>`;

  $$('.sport-tab').forEach(b => b.addEventListener('click', () => {
    location.hash = b.dataset.sport ? `#/sport/${b.dataset.sport}` : '#/';
  }));
  liveCountdowns();
}

/* ---------- PLAY ---------- */
async function viewPlay(id) {
  const c = await API.getCompetition(id);
  if (!c) { location.hash = '#/'; return; }
  if (c.closed) { location.hash = `#/results/${id}`; return; }
  const submitted = await API.myEntries(id);
  // BOTB flow: photo hidden until you hold tickets · board while you still
  // have crosshairs to place · a receipt once everything is locked in
  if (c.myCredits > 0) return renderBoard(c, submitted);
  if (submitted.length > 0) return renderSubmitted(c, submitted);
  return renderGate(c);
}

function playTop(c) {
  const s = SPORTS[c.sport];
  return `
    <div class="play-top">
      <a class="back-link" href="#/">← All competitions</a>
      <div class="play-title">${esc(c.title)} <small>· ${s.icon} ${s.label}</small></div>
      <div class="play-badges">
        <span class="pb">Closes in <b><span data-deadline="${c.closesAt}">${fmtLeft(c.closesAt - Date.now())}</span></b></span>
        <span class="pb">${c.sold.toLocaleString()} tickets in play</span>
      </div>
    </div>`;
}

function prizeCard(c, tiles) {
  return `
    <div class="panel-card">
      <div class="prize-line">
        <span class="p-art">${c.prizeImg
          ? `<img src="${c.prizeImg}" alt="">`
          : (PRIZE_ART[c.prizeType] || PRIZE_ART.cash)}</span>
        <div><div class="l">Headline prize</div><div class="v">${esc(c.prize)}</div></div>
      </div>
      <div class="count-tiles">${tiles}</div>
    </div>`;
}

/* ----- step 1: buy tickets, photo hidden ----- */
async function renderGate(c) {
  let qty = 5;

  app.innerHTML = `
  <div class="play-wrap">
    ${playTop(c)}
    <div class="play-grid">
      <div>
        <div class="board-shell">
          <div class="gate-board">
            <svg class="plate-mark" viewBox="0 0 400 250" aria-hidden="true">
              <circle cx="200" cy="125" r="70" fill="none" stroke="currentColor"/>
              <circle cx="200" cy="125" r="110" fill="none" stroke="currentColor"/>
              <circle cx="200" cy="125" r="150" fill="none" stroke="currentColor"/>
              <line x1="200" y1="-20" x2="200" y2="270" stroke="currentColor"/>
              <line x1="-20" y1="125" x2="420" y2="125" stroke="currentColor"/>
            </svg>
            <div class="gate-lock">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15.5" r="1.6"/></svg>
            </div>
            <div class="gate-title">The moment stays hidden</div>
            <div class="gate-sub">${esc(c.sub)}.<br>Buy your tickets first — the photo is revealed only once you hold crosshairs to place.</div>
          </div>
          <div class="board-hint">
            <span><span class="k">STEP 1</span> — choose tickets · <span class="k">STEP 2</span> — the photo unlocks and you place your crosshairs</span>
          </div>
        </div>
      </div>

      <aside class="panel">
        ${prizeCard(c, `
          <div class="ct"><div class="n">${c.sold.toLocaleString()}</div><div class="l">In play</div></div>
          <div class="ct"><div class="n" id="tileBal">…</div><div class="l">Balance</div></div>`)}

        <div class="panel-card">
          <h4>Choose your tickets <span class="mono">more pins · better odds</span></h4>
          <div class="bundles" id="bundles">
            ${[1, 5, 10, 25].map(n => `
              <button class="bundle ${n === 5 ? 'sel' : ''}" data-n="${n}">
                <b>${n}</b><span>ticket${n > 1 ? 's' : ''}</span>
                <i>${money(API.priceFor(n))}</i>
                <em>${n > 1 ? '$' + (API.priceFor(n) / n).toFixed(2) + '/ea' : 'single'}</em>
              </button>`).join('')}
          </div>
          <div class="qty-row">
            <span>Custom</span>
            <div class="stepper">
              <button id="qMinus">−</button><b id="qVal">5</b><button id="qPlus">+</button>
            </div>
          </div>
          <div class="cost-row"><span>Total</span> <span><span class="save" id="saveNote"></span> <b id="costTotal">${money(API.priceFor(5))}</b></span></div>
          <button class="btn big" id="buyBtn">Buy 5 tickets &amp; reveal the moment</button>
        </div>

        <div class="panel-card">
          <h4>This week <span class="mono">weekend verdict</span></h4>
          ${weekStrip(c, true)}
        </div>

        <div class="panel-card demo-card">
          <h4>Demo control</h4>
          <p>Skip the wait — close this competition now and see the reveal flow.</p>
          <button class="btn ghost" id="finishBtn">⏭ End contest &amp; reveal result</button>
        </div>
      </aside>
    </div>
  </div>`;

  refreshWallet().then(me => $('#tileBal').textContent = money(me.balance).replace('.00', ''));

  function paint() {
    $$('#bundles .bundle').forEach(b => b.classList.toggle('sel', +b.dataset.n === qty));
    $('#qVal').textContent = qty;
    const cost = API.priceFor(qty);
    $('#costTotal').textContent = money(cost);
    const full = qty * 3.0;
    $('#saveNote').textContent = full > cost ? `save ${money(full - cost)}` : '';
    $('#buyBtn').textContent = `Buy ${qty} ticket${qty > 1 ? 's' : ''} & reveal the moment`;
  }
  $$('#bundles .bundle').forEach(b => b.addEventListener('click', () => { qty = +b.dataset.n; paint(); }));
  $('#qMinus').addEventListener('click', () => { qty = Math.max(1, qty - 1); paint(); });
  $('#qPlus').addEventListener('click', () => { qty = Math.min(25, qty + 1); paint(); });

  $('#buyBtn').addEventListener('click', async () => {
    try {
      const res = await API.buyTickets(c.id, qty);
      await refreshWallet(true);
      toast(`${res.credits} crosshair${res.credits > 1 ? 's' : ''} in hand — the moment is yours. Aim well 🎯`);
      safeRoute();
    } catch (err) {
      if (String(err.message).includes('Insufficient')) {
        toast('Not enough in your balance — top up to enter', true);
        openWallet();
      } else toast(err.message, true);
    }
  });

  $('#finishBtn').addEventListener('click', async () => {
    await API.closeCompetition(c.id);
    location.hash = `#/results/${c.id}`;
  });

  liveCountdowns();
}


/* ----- step 3: entry is in, the panel sits at the weekend ----- */
async function renderSubmitted(c, mine) {
  const s = SPORTS[c.sport];
  const revName = DOW_FULL[new Date(c.revealAt).getDay()];

  app.innerHTML = `
  <div class="play-wrap">
    ${playTop(c)}

    <div class="sub-hero">
      <span class="sub-tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2.6" stroke-linecap="round"><path d="M4 12.5l5.2 5.2L20 7"/></svg></span>
      <div class="sub-kicker">Entry received</div>
      <h2>You're in the ${esc(c.title)} draw</h2>
      <p><b>${mine.length}</b> crosshair${mine.length > 1 ? 's' : ''} locked · nothing more to do until the panel sits</p>
    </div>

    <div class="play-grid">
      <div>
        <div class="sub-clock">
          <div class="sc-label">The judges rule <b>${revName}</b></div>
          <div class="sc-time" data-deadline="${c.revealAt}">${fmtLeft(c.revealAt - Date.now())}</div>
          <div class="sc-note">Three former professionals mark the ball independently. The average of their
            verdicts becomes the official position, and the closest crosshair takes ${esc(c.prize)}.</div>
          ${weekStrip(c, true)}
        </div>

        <div class="board-shell sub-board">
          <div class="board" id="subBoard">
            <img src="${c.img}" alt="${esc(c.title)}" draggable="false">
          </div>
          <div class="board-hint">
            <span><span class="k">LOCKED</span> — your ${mine.length} crosshair${mine.length > 1 ? 's' : ''} as submitted</span>
            <span>${esc(c.sub)}</span>
          </div>
        </div>
      </div>

      <aside class="panel">
        ${prizeCard(c, `
          <div class="ct"><div class="n">${mine.length}</div><div class="l">Locked</div></div>
          <div class="ct"><div class="n">${c.sold.toLocaleString()}</div><div class="l">In play</div></div>
          <div class="ct"><div class="n" id="tileBal">…</div><div class="l">Balance</div></div>`)}

        <div class="panel-card">
          <h4>Your crosshairs <span class="mono">${mine.length} locked</span></h4>
          <div class="picks">
            ${mine.map((p, i) => `<div class="pick-row submitted">
              <span class="idx">${i + 1}</span>
              <span class="xy">x ${p.x.toFixed(1)} · y ${p.y.toFixed(1)}${c.sport === 'football' ? ` · ${Math.round(p.a || 0)}°/${Math.round(p.tilt || 0)}°` : ''}</span>
              <span class="lock">✓ locked</span></div>`).join('')}
          </div>
        </div>

        <div class="panel-card">
          <h4>Want more chances?</h4>
          <p class="sub-more">Entries stay open until the board closes. Buy more crosshairs and place them on the same photo.</p>
          <div class="qty-row" style="margin-top:0">
            <div class="stepper"><button id="mMinus">−</button><b id="mVal">5</b><button id="mPlus">+</button></div>
            <button class="btn ghost" id="moreBtn" style="width:auto;margin:0;padding:10px 16px">Add · ${money(API.priceFor(5))}</button>
          </div>
        </div>

        <div class="panel-card demo-card">
          <h4>Demo control</h4>
          <p>Don't wait for the weekend — run this contest to the verdict and see the winners' experience now.</p>
          <button class="btn big" id="runBtn">⏭ Run to the verdict</button>
        </div>
      </aside>
    </div>
  </div>`;

  refreshWallet().then(me => $('#tileBal').textContent = money(me.balance).replace('.00', ''));

  /* show the locked pins on the frozen board */
  const sb = $('#subBoard'), img = $('img', sb);
  const drawPins = () => {
    $$('.pin', sb).forEach(p => p.remove());
    const w = c.ballSize / 100 * sb.clientWidth;
    sb.style.setProperty('--pin-w', w + 'px');
    sb.style.setProperty('--pin-h', (c.sport === 'football' ? w * 0.606 : w) + 'px');
    mine.forEach((p, i) => {
      const el = document.createElement('div');
      el.className = 'pin ball-pin submitted';
      el.style.left = p.x + '%'; el.style.top = p.y + '%';
      el.style.setProperty('--rot', (p.a || 0) + 'deg');
      const art = c.sport === 'football' ? buildFootball(p.tilt || 0) : BALL_CURSOR[c.sport];
      el.innerHTML = `${art}<span class="n">${i + 1}</span>`;
      sb.appendChild(el);
    });
  };
  if (img.complete) drawPins(); else img.addEventListener('load', drawPins);
  addEventListener('resize', drawPins);

  let moreQty = 5;
  const paintMore = () => {
    $('#mVal').textContent = moreQty;
    $('#moreBtn').textContent = `Add · ${money(API.priceFor(moreQty))}`;
  };
  $('#mMinus').addEventListener('click', () => { moreQty = Math.max(1, moreQty - 1); paintMore(); });
  $('#mPlus').addEventListener('click', () => { moreQty = Math.min(25, moreQty + 1); paintMore(); });
  $('#moreBtn').addEventListener('click', async () => {
    try {
      await API.buyTickets(c.id, moreQty);
      await refreshWallet(true);
      toast(`${moreQty} more crosshair${moreQty > 1 ? 's' : ''} in hand — place them on the photo`);
      safeRoute();                       // credits > 0 → straight back to the board
    } catch (err) {
      if (String(err.message).includes('Insufficient')) {
        toast('Not enough in your balance — top up to add more', true); openWallet();
      } else toast(err.message, true);
    }
  });

  $('#runBtn').addEventListener('click', async () => {
    await API.closeCompetition(c.id);
    location.hash = `#/results/${c.id}`;
  });

  liveCountdowns();
}

/* ----- step 2: the photo is unlocked, place your paid crosshairs ----- */
async function renderBoard(c, submitted) {
  let picks = [];              // staged, not yet locked
  let credits = c.myCredits;   // paid crosshairs in hand

  app.innerHTML = `
  <div class="play-wrap">
    ${playTop(c)}
    <div class="play-grid">
      <div>
        <div class="board-shell">
          <div class="board" id="board">
            <img src="${c.img}" alt="${esc(c.title)}" draggable="false">
            <div class="hairV"></div><div class="hairH"></div>
            <div class="ball-cursor" id="ballCursor">${c.sport === "football" ? buildFootball(0) : BALL_CURSOR[c.sport]}${BALL_CENTRE}</div>
            <div class="coords"></div>
          </div>
          <div class="board-hint">
            <span><span class="k">AIM</span> — the ghost is the ball at its true size · <span class="k">CLICK</span> — place a paid crosshair${c.sport === 'football' ? ' · <span class="k">SCROLL / [ ]</span> — spin the ball' : ''} · click a pin to take it back</span>
            <span>${esc(c.sub)}</span>
          </div>
        </div>
      </div>

      <aside class="panel">
        ${prizeCard(c, `
          <div class="ct"><div class="n" id="tileLeft">0</div><div class="l">In hand</div></div>
          <div class="ct"><div class="n" id="tileSub">${submitted.length}</div><div class="l">Locked</div></div>
          <div class="ct"><div class="n" id="tileBal">…</div><div class="l">Balance</div></div>`)}

        <div class="panel-card">
          <h4>Your crosshairs <span class="mono" id="pickCount"></span></h4>
          <div class="picks" id="picksList"></div>
          <button class="btn big" id="submitBtn" disabled>Lock in entry</button>
          <div class="tier-hint">Already paid — locking costs nothing. Unplaced tickets stay in hand.</div>
        </div>

        ${c.sport === 'football' ? `
        <div class="panel-card">
          <h4>Ball orientation <span class="mono" id="angLabel">0° · 0°</span></h4>
          <div class="spin-row">
            <div class="spin-preview" id="spinPreview">${buildFootball(0)}</div>
            <div class="spin-axes">
              <label>Spin<input type="range" id="angSlider" min="0" max="359" value="0" step="1"></label>
              <label>Depth<input type="range" id="tiltSlider" min="0" max="359" value="0" step="1"></label>
            </div>
          </div>
          <div class="tier-hint">A football is no sphere. <em>Spin</em> turns it in the frame; <em>depth</em> turns its nose toward you until it reads as a circle. Scroll to spin, <em>shift</em>+scroll for depth, or press [ ] and - =.</div>
        </div>` : ''}

        <div class="panel-card">
          <h4>Add tickets</h4>
          <div class="qty-row" style="margin-top:0">
            <div class="stepper"><button id="aMinus">−</button><b id="aVal">5</b><button id="aPlus">+</button></div>
            <button class="btn ghost" id="addBtn" style="width:auto;margin:0;padding:10px 16px">Add · ${money(API.priceFor(5))}</button>
          </div>
        </div>

        <div class="panel-card demo-card">
          <h4>Demo control</h4>
          <p>Skip the wait — close this competition now, let the judges rule, and see the reveal flow.</p>
          <button class="btn ghost" id="finishBtn">⏭ End contest &amp; reveal result</button>
        </div>
      </aside>
    </div>
  </div>`;

  const board = $('#board'), img = $('img', board);
  const loupe = $('.loupe', board), coords = $('.coords', board), reticle = $('.reticle', board);
  const hairV = $('.hairV', board), hairH = $('.hairH', board);
  let addQty = 5;

  refreshWallet().then(me => $('#tileBal').textContent = money(me.balance).replace('.00', ''));

  function renderPins() {
    $$('.pin', board).forEach(p => p.remove());
    submitted.forEach((p, i) => board.appendChild(pinEl(p, i + 1, true)));
    picks.forEach((p, i) => board.appendChild(pinEl(p, submitted.length + i + 1, false)));
    const n = picks.length;
    $('#tileLeft').textContent = credits - n;
    $('#tileSub').textContent = submitted.length;
    $('#pickCount').textContent = `${credits - n} left to place`;
    $('#submitBtn').disabled = n === 0;
    $('#submitBtn').textContent = n ? `Lock in ${n} crosshair${n > 1 ? 's' : ''}` : 'Lock in entry';
    $('#picksList').innerHTML = [
      ...submitted.map((p, i) => `<div class="pick-row submitted"><span class="idx">${i + 1}</span><span class="xy">x ${p.x.toFixed(1)} · y ${p.y.toFixed(1)}</span><span class="lock">✓ locked</span></div>`),
      ...picks.map((p, i) => `<div class="pick-row"><span class="idx">${submitted.length + i + 1}</span><span class="xy">x ${p.x.toFixed(1)} · y ${p.y.toFixed(1)}${c.sport === 'football' ? ` · ${Math.round(p.a || 0)}°/${Math.round(p.tilt || 0)}°` : ''}</span><button class="del" data-del="${i}">×</button></div>`),
    ].join('');
    $$('[data-del]').forEach(b => b.addEventListener('click', () => { picks.splice(+b.dataset.del, 1); renderPins(); }));
  }
  function pinEl(p, n, locked) {
    const el = document.createElement('div');
    el.className = 'pin ball-pin' + (locked ? ' submitted' : '');
    el.style.left = p.x + '%'; el.style.top = p.y + '%';
    el.style.setProperty('--rot', (p.a || 0) + 'deg');
    const art = c.sport === 'football' ? buildFootball(p.tilt || 0) : BALL_CURSOR[c.sport];
    // only the small centre disc takes clicks — a ball-sized hit area would
    // swallow every attempt to place a neighbouring pin
    el.innerHTML = `${art}<span class="d"></span><span class="n">${n}</span>` +
      (locked ? '' : '<button class="pin-hit" title="Take this crosshair back"></button>');
    if (!locked) el.querySelector('.pin-hit').addEventListener('click', e => {
      e.stopPropagation();
      picks = picks.filter(q => q !== p); renderPins();
    });
    return el;
  }

  let angle = 0;   // football spin in the plane, degrees
  let tilt = 0;    // football depth rotation (0 = side on, 90 = nose on)

  function sizeCursor() {
    const r = board.getBoundingClientRect();
    const w = c.ballSize / 100 * r.width;
    const cur = $('#ballCursor');
    if (!cur) return;
    cur.style.width = w + 'px';
    cur.style.height = (c.sport === 'football' ? w * 0.606 : w) + 'px';
    board.style.setProperty('--pin-w', w + 'px');
    board.style.setProperty('--pin-h', (c.sport === 'football' ? w * 0.606 : w) + 'px');
  }
  addEventListener('resize', sizeCursor);
  if (img.complete) sizeCursor(); else img.addEventListener('load', sizeCursor);

  /* redraw the exact silhouette for the current depth, then spin it in-plane */
  function setOrient(deg, deep) {
    if (deg !== null) angle = ((deg % 360) + 360) % 360;
    if (deep !== null) tilt = ((deep % 360) + 360) % 360;
    const svg = buildFootball(tilt);
    [$('#ballCursor'), $('#spinPreview')].forEach(el => {
      if (!el) return;
      el.style.setProperty('--rot', angle + 'deg');
      const dot = el.querySelector('.bc-dot');
      el.innerHTML = svg + (dot ? BALL_CENTRE : '');
    });
    const lbl = $('#angLabel'); if (lbl) lbl.textContent = `${Math.round(angle)}° · ${Math.round(tilt)}°`;
    const sl = $('#angSlider'); if (sl && +sl.value !== Math.round(angle)) sl.value = Math.round(angle);
    const tl = $('#tiltSlider'); if (tl && +tl.value !== Math.round(tilt)) tl.value = Math.round(tilt);
  }
  const setAngle = d => setOrient(d, null);

  function aim(e) {
    const r = board.getBoundingClientRect();
    const cx = e.clientX - r.left, cy = e.clientY - r.top;
    if (cx < 0 || cy < 0 || cx > r.width || cy > r.height) return;
    board.classList.add('aiming');
    hairV.style.left = cx + 'px'; hairH.style.top = cy + 'px';
    const cur = $('#ballCursor');
    cur.style.left = cx + 'px'; cur.style.top = cy + 'px';
    coords.style.left = cx + 'px'; coords.style.top = cy + 'px';
    coords.textContent = `x ${(cx / r.width * 100).toFixed(1)} · y ${(cy / r.height * 100).toFixed(1)}`
      + (c.sport === 'football' ? ` · ${Math.round(angle)}°/${Math.round(tilt)}°` : '');
  }

  if (c.sport === 'football') {
    board.addEventListener('wheel', e => {
      e.preventDefault();
      const step = e.deltaY > 0 ? 6 : -6;
      if (e.shiftKey) setOrient(null, tilt + step); else setOrient(angle + step, null);
    }, { passive: false });
    const onKey = e => {
      if (e.key === '[') setOrient(angle - 6, null);
      if (e.key === ']') setOrient(angle + 6, null);
      if (e.key === '-') setOrient(null, tilt - 6);
      if (e.key === '=' || e.key === '+') setOrient(null, tilt + 6);
    };
    addEventListener('keydown', onKey);
    tickTimers.push({ off: () => removeEventListener('keydown', onKey) });
    $('#angSlider')?.addEventListener('input', e => setOrient(+e.target.value, null));
    $('#tiltSlider')?.addEventListener('input', e => setOrient(null, +e.target.value));
    setOrient(0, 0);
  }

  board.addEventListener('mousemove', aim);
  board.addEventListener('mouseleave', () => board.classList.remove('aiming'));

  /* touch: drag the ball into place, lift to drop it (phones have no hover) */
  let touchPt = null;
  board.addEventListener('touchstart', e => {
    const t = e.touches[0];
    touchPt = { clientX: t.clientX, clientY: t.clientY };
    aim(touchPt);
  }, { passive: true });
  board.addEventListener('touchmove', e => {
    const t = e.touches[0];
    touchPt = { clientX: t.clientX, clientY: t.clientY };
    aim(touchPt);
    e.preventDefault();            // aiming should not scroll the page
  }, { passive: false });
  board.addEventListener('touchend', e => {
    e.preventDefault();            // also suppresses the synthetic click
    if (touchPt) place(touchPt);
    touchPt = null;
    setTimeout(() => board.classList.remove('aiming'), 1200);
  }, { passive: false });
  function place(pt) {
    if (picks.length >= credits) { toast('No tickets left in hand — add more below', true); return; }
    const r = board.getBoundingClientRect();
    const x = (pt.clientX - r.left) / r.width * 100;
    const y = (pt.clientY - r.top) / r.height * 100;
    if (x < 0 || y < 0 || x > 100 || y > 100) return;
    picks.push({ x: +x.toFixed(2), y: +y.toFixed(2), a: angle, tilt });
    renderPins();
  }
  board.addEventListener('click', e => place(e));

  $('#submitBtn').addEventListener('click', async () => {
    try {
      const res = await API.submitEntry(c.id, picks);
      submitted.push(...picks.map(p => ({ ...p })));
      picks = [];
      credits = res.credits;
      toast(`Entry locked — ${res.total} crosshair${res.total > 1 ? 's' : ''} on this board. Good luck! 🎯`);
      if (credits === 0) { safeRoute(); return; }   // nothing left to place
      renderPins();
    } catch (err) { toast(err.message, true); }
  });

  function paintAdd() {
    $('#aVal').textContent = addQty;
    $('#addBtn').textContent = `Add · ${money(API.priceFor(addQty))}`;
  }
  $('#aMinus').addEventListener('click', () => { addQty = Math.max(1, addQty - 1); paintAdd(); });
  $('#aPlus').addEventListener('click', () => { addQty = Math.min(25, addQty + 1); paintAdd(); });
  $('#addBtn').addEventListener('click', async () => {
    try {
      const res = await API.buyTickets(c.id, addQty);
      credits = res.credits;
      const me = await refreshWallet(true);
      $('#tileBal').textContent = money(me.balance).replace('.00', '');
      renderPins();
      toast(`+${addQty} ticket${addQty > 1 ? 's' : ''} added to your hand`);
    } catch (err) {
      if (String(err.message).includes('Insufficient')) {
        toast('Not enough in your balance — top up to add more', true);
        openWallet();
      } else toast(err.message, true);
    }
  });

  $('#finishBtn').addEventListener('click', async () => {
    if (picks.length) { toast('Lock in or remove your placed crosshairs first', true); return; }
    await API.closeCompetition(c.id);
    location.hash = `#/results/${c.id}`;
  });

  renderPins();
  liveCountdowns();
}

/* ---------- RESULTS ---------- */
async function viewResults(id) {
  const res = await API.getResults(id);
  if (!res) { location.hash = '#/'; return; }
  const { comp: c, target, ballImg, ballW, ballInPhoto, mine, rows, myRank, myBest } = res;
  const s = SPORTS[c.sport];
  const played = mine.length > 0;
  const podium = played && myRank <= 3;

  const headline = !played
    ? 'The judges have ruled'
    : podium
      ? (myRank === 1 ? 'You nailed it!' : `Podium finish — P${myRank}!`)
      : myRank <= 10 ? 'So close. Top ten.' : 'The judges have ruled';

  /* standings: always show where YOU are — top 3, then the window around your rank */
  const rowHtml = r => `
    <tr class="${r.me ? 'me' : ''} ${r.rank <= 3 ? 'podium' : ''}">
      <td class="r">${r.rank <= 3 ? ['🥇', '🥈', '🥉'][r.rank - 1] : r.rank}</td>
      <td class="name">${esc(r.name)}${r.me ? ' <span class="you-chip">YOU</span>' : ''}</td>
      <td class="d">${r.d.toFixed(2)}</td>
      <td class="pts">${r.score}</td>
    </tr>`;
  const gapRow = `<tr class="gap"><td colspan="4">···</td></tr>`;
  let standingsHtml;
  if (!played || myRank <= 10) {
    standingsHtml = rows.slice(0, 12).map(rowHtml).join('');
  } else {
    const around = rows.slice(Math.max(3, myRank - 3), Math.min(rows.length, myRank + 2));
    standingsHtml = rows.slice(0, 3).map(rowHtml).join('')
      + gapRow + around.map(rowHtml).join('')
      + (myRank + 2 < rows.length ? gapRow : '');
  }

  app.innerHTML = `
  <div class="play-wrap">
    <div class="play-top">
      <a class="back-link" href="#/">← All competitions</a>
      <div class="play-title">${esc(c.title)} <small>· ${s.icon} ${s.label}</small></div>
      <div class="play-badges"><span class="pb" style="color:var(--danger)">ENTRIES CLOSED</span></div>
    </div>

    <div class="res-hero">
      <div class="rk">Official result · judged panel decision</div>
      <h2>${headline}</h2>
      <p>${played
        ? `Your best crosshair landed <b style="color:var(--gold-hi)">${myBest.d.toFixed(2)} units</b> from the judges' ball — rank <b style="color:var(--gold-hi)">#${myRank}</b> of ${rows.length} entrants.`
        : 'You didn\'t enter this one. The gold rings mark the judges\' final ball position.'}</p>
      <div class="res-stats">
        ${played ? `
        <div class="res-stat"><div class="n ${podium ? 'top' : ''}">#${myRank}</div><div class="l">Your rank</div></div>
        <div class="res-stat"><div class="n">${myBest.score}</div><div class="l">Best pin points</div></div>
        <div class="res-stat"><div class="n">${mine.length}</div><div class="l">Your tickets</div></div>` : ''}
        <div class="res-stat"><div class="n">${rows.length}</div><div class="l">Entrants ranked</div></div>
      </div>
    </div>

    <div class="play-grid">
      <div>
        <div class="board-shell">
          <div class="board" id="resBoard">
            <img src="${c.img}" alt="${esc(c.title)}" draggable="false">
            <div class="reveal-spot" style="--tx:${target.x}%;--ty:${target.y}%"></div>
            ${ballImg ? `<img class="ball-real" src="${ballImg}" alt="" style="left:${target.x}%;top:${target.y}%;width:${ballW}%">` : ''}
            <div class="ball-halo" style="left:${target.x}%;top:${target.y}%"></div>
            <div class="ball-shape" style="left:${target.x}%;top:${target.y}%">${
              c.sport === 'football' ? buildFootball(0) : BALL_CURSOR[c.sport]}</div>
            <div class="ball-tag" style="left:${target.x}%;top:${target.y}%"><i></i><span>THE BALL</span></div>
            <div class="ballmark" style="left:${target.x}%;top:${target.y}%">
              <span class="ring r2"></span><span class="ring r3"></span>
              ${ballImg || ballInPhoto ? '' : '<span class="ball"></span>'}
              <span class="cmark"><i class="ch"></i><i class="cv"></i><i class="cd"></i></span>
            </div>
          </div>
          <div class="board-hint">
            <span><span class="k">●</span> the real ball, restored — centre marked ${played ? '· your pins numbered by closeness' : ''}</span>
            <span>score = 1000 · e<sup>−d/9</sup> per pin</span>
          </div>
        </div>
        <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap">
          <button class="btn ghost" id="reopenBtn">↺ Re-open this contest (demo)</button>
          <a class="btn" href="#/tournament">View weekly tournament →</a>
        </div>
      </div>

      <aside class="panel">
        <div class="panel-card lb-card">
          <h4 style="padding:12px 14px 0">Final standings <span class="mono">closest wins</span></h4>
          <table class="lb">
            <thead><tr><th>#</th><th>Player</th><th>Dist</th><th style="text-align:right">Pts</th></tr></thead>
            <tbody>${standingsHtml}</tbody>
          </table>
        </div>
        ${played ? `
        <div class="panel-card">
          <h4>Your pins</h4>
          <div class="picks">
            ${mine.map((p, i) => `<div class="pick-row ${i === 0 ? 'submitted' : ''}">
              <span class="idx">${i + 1}</span><span class="xy">d ${p.d.toFixed(2)}</span>
              <span class="lock" style="color:${i === 0 ? 'var(--ok)' : 'var(--text-faint)'}">${p.score} pts</span></div>`).join('')}
          </div>
        </div>` : ''}
      </aside>
    </div>
  </div>`;

  /* draw my pins + distance line for best */
  const rb = $('#resBoard');
  const sizePins = () => {
    const w = c.ballSize / 100 * rb.clientWidth;
    rb.style.setProperty('--pin-w', w + 'px');
    rb.style.setProperty('--pin-h', (c.sport === 'football' ? w * 0.606 : w) + 'px');
    rb.style.setProperty('--halo', w * 1.35 + 'px');
    rb.style.setProperty('--spot-in', w * 1.5 + 'px');
    rb.style.setProperty('--spot-out', w * 4.2 + 'px');
  };
  const rimg = $('img', rb);
  if (rimg.complete) sizePins(); else rimg.addEventListener('load', sizePins);
  addEventListener('resize', sizePins);

  mine.forEach((p, i) => {
    const el = document.createElement('div');
    el.className = 'pin ball-pin' + (i === 0 ? ' best' : ' submitted');
    el.style.left = p.x + '%'; el.style.top = p.y + '%';
    el.style.setProperty('--rot', (p.a || 0) + 'deg');
    const art = c.sport === 'football' ? buildFootball(p.tilt || 0) : BALL_CURSOR[c.sport];
    el.innerHTML = `${art}<span class="d"></span>
      <span class="n">${i === 0 ? `YOU · #${myRank}` : i + 1}</span>`;
    rb.appendChild(el);
  });
  if (myBest) {
    // dashed line from best pin to ball, in % space via transform
    const img = $('img', rb);
    const draw = () => {
      $$('.dist-line', rb).forEach(e => e.remove());
      const w = rb.clientWidth, h = rb.clientHeight;
      const x1 = myBest.x / 100 * w, y1 = myBest.y / 100 * h;
      const x2 = target.x / 100 * w, y2 = target.y / 100 * h;
      const len = Math.hypot(x2 - x1, y2 - y1);
      const ang = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
      const line = document.createElement('div');
      line.className = 'dist-line';
      line.style.cssText = `left:${x1}px;top:${y1}px;width:${len}px;transform:rotate(${ang}deg)`;
      rb.appendChild(line);
    };
    if (img.complete) draw(); else img.addEventListener('load', draw);
    addEventListener('resize', draw, { once: true });
  }

  $('#reopenBtn').addEventListener('click', async () => {
    await API.reopenCompetition(id);
    location.hash = `#/play/${id}`;
  });

  if (podium) setTimeout(confetti, 500);
}

/* ---------- TOURNAMENT ---------- */
async function viewTournament() {
  const t = await API.tournament();
  app.innerHTML = `
  <div class="tourn-hero">
    <div>
      <div class="hero-kicker"><span class="live-dot"></span> Weekly precision league</div>
      <h1>${esc(t.name.split('—')[0])}<br><span>${esc(t.name.split('—')[1] || '')}</span></h1>
      <p class="sub">Every crosshair you submit earns precision points. The sharpest eyes of the week split the <b style="color:var(--gold-hi)">${t.pool}</b> pot — win or lose the headline prizes.</p>
    </div>
    <div class="tourn-clock">
      <div class="cd" data-deadline="${t.endsAt}">${fmtLeft(t.endsAt - Date.now())}</div>
      <div class="l">until week closes</div>
    </div>
  </div>

  <section class="section">
    <div class="tourn-grid">
      <div class="panel-card lb-card">
        <h4 style="padding:12px 14px 0">Leaderboard <span class="mono">points from best pin per contest</span></h4>
        <table class="lb">
          <thead><tr><th>#</th><th>Player</th><th>Contests</th><th style="text-align:right">Points</th></tr></thead>
          <tbody>
            ${t.rows.slice(0, 15).map(r => `
              <tr class="${r.me ? 'me' : ''} ${r.rank <= 3 ? 'podium' : ''}">
                <td class="r">${r.rank <= 3 ? ['🥇', '🥈', '🥉'][r.rank - 1] : r.rank}</td>
                <td class="name">${esc(r.name)}</td>
                <td class="d">${r.comps}</td>
                <td class="pts">${r.pts.toLocaleString()}</td>
              </tr>`).join('')}
            ${t.myRow && t.myRow.rank > 15 ? `
              <tr><td colspan="4" style="text-align:center;color:var(--text-faint)">···</td></tr>
              <tr class="me"><td class="r">${t.myRow.rank}</td><td class="name">Gil M. (you)</td>
              <td class="d">${t.myRow.comps}</td><td class="pts">${t.myRow.pts.toLocaleString()}</td></tr>` : ''}
          </tbody>
        </table>
        ${!t.myRow ? `<div class="tourn-empty" style="padding:16px">You're not on the board yet — enter a competition and let a contest finish to bank points. <a href="#/" style="color:var(--gold)">Browse live boards →</a></div>` : ''}
      </div>
      <div>
        <div class="panel-card">
          <h4>Prize tiers</h4>
          ${t.tiers.map(x => `<div class="tier-row"><span>${x.place}</span><b>${x.prize}</b></div>`).join('')}
        </div>
        <div class="panel-card demo-card" style="margin-top:16px">
          <h4>Demo control</h4>
          <p>Wipe wallet, entries and results back to a fresh demo state.</p>
          <button class="btn danger" id="resetBtn">Reset demo</button>
        </div>
      </div>
    </div>
  </section>`;

  $('#resetBtn').addEventListener('click', async () => {
    await API.resetDemo();
    await refreshWallet(true);
    toast('Demo reset — fresh $250 balance');
    location.hash = '#/';
  });
  liveCountdowns();
}

/* ---------- HOW ---------- */
async function viewHow() {
  const steps = [
    { n: '01', art: 'moment', cap: 'Ball removed · nothing else touched', h: 'The moment',
      p: 'We license a professional sports photograph and lift the ball out of it. Eye-lines, body shape, the spray off the turf — everything else stays exactly as it happened.' },
    { n: '02', art: 'tickets', cap: '1 · 10 · 25 — more pins, lower price each', h: 'Buy your tickets',
      p: 'Tickets are bought blind: the photo stays hidden until you hold crosshairs to place. One to twenty-five per board, and the bigger the bundle the less each pin costs.' },
    { n: '03', art: 'aim', cap: 'The ghost is the ball, at its true size', h: 'Aim with the ball itself',
      p: 'Your cursor is a ghost of the real ball, drawn at its exact size in that frame — so you judge the whole shape, not a dot. A football is no sphere: spin it and turn its nose toward you through a full 360°.' },
    { n: '04', art: 'judges', cap: 'Three verdicts · one official position', h: 'The panel rules',
      p: 'When entries close, three former professionals mark the ball independently. The official position is the average of their three verdicts — the judges’ ball, not the original photo. That is what makes this skill and not a draw.' },
    { n: '05', art: 'score', cap: '1000 points at dead centre, falling away fast', h: 'Closest wins',
      p: 'Every pin scores 1000 · e⁻ᵈᐟ⁹, where d is its distance from the official position. The single closest crosshair takes the headline prize, and your best pin on each board banks points toward the weekly tournament.' },
    { n: '06', art: 'pay', cap: 'Pay how you like · cash out the same way', h: 'Wallet and payouts',
      p: 'Pay by Apple Pay, card, PayPal, Venmo or crypto — and cash out the same way. In this demo every balance is simulated; production plugs a real processor into the same API surface.' },
  ];
  app.innerHTML = `
  <div class="how-page">
    <h1>Skill. <span>Not luck.</span></h1>
    <p class="lead">Spot the Ball is a game of judgement — legally and philosophically the opposite of a lottery. Here is the whole loop, exactly as the production build runs it.</p>

    <div class="how-steps">
      ${steps.map((s, i) => `
        <section class="how-step ${i % 2 ? 'flip' : ''}">
          <figure class="hs-art">
            ${HOW_ART[s.art]}
            <figcaption>${s.cap}</figcaption>
          </figure>
          <div class="hs-copy">
            <span class="hs-num">${s.n}</span>
            <h3>${s.h}</h3>
            <p>${s.p}</p>
          </div>
        </section>`).join('')}
    </div>

    <div class="how-cta">
      <a class="btn big" href="#/">Enter a competition →</a>
      <a class="btn big ghost" href="#/tournament">See the weekly tournament</a>
    </div>
  </div>`;
}

/* ============================================================
   ROUTER
   ============================================================ */
async function route() {
  clearTicks();
  refreshWallet();
  const h = location.hash || '#/';
  const [, path, arg] = h.match(/^#\/([^/]*)\/?(.*)$/) || [];
  $$('[data-nav]').forEach(a => a.classList.remove('active'));
  const setNav = k => $$(`[data-nav="${k}"]`).forEach(a => a.classList.add('active'));
  scrollTo(0, 0);
  if (path === 'play' && arg) { setNav('home'); return viewPlay(arg); }
  if (path === 'results' && arg) { setNav('home'); return viewResults(arg); }
  if (path === 'tournament') { setNav('tournament'); return viewTournament(); }
  if (path === 'how') { setNav('how'); return viewHow(); }
  if (path === 'sport' && arg) { setNav('home'); return viewHome(arg); }
  setNav('home');
  return viewHome();
}
/* never leave a blank page: if a view throws, offer a one-click recovery */
function crashScreen(err) {
  app.innerHTML = `
  <div class="how-page" style="text-align:center">
    <h1>Something <span>jammed</span></h1>
    <p class="lead" style="margin:0 auto 28px">The demo hit an unexpected state. Resetting clears the local
    wallet and entries stored in this browser — the competitions themselves are untouched.</p>
    <button class="btn big" id="crashReset">Reset the demo &amp; reload</button>
    <p style="margin-top:22px;font-family:var(--mono);font-size:11.5px;color:var(--text-faint)">${esc(String(err && err.message || err))}</p>
  </div>`;
  $('#crashReset').addEventListener('click', async () => {
    try { await API.resetDemo(); } catch (e) { localStorage.clear(); }
    location.hash = '#/';
    location.reload();
  });
}

async function safeRoute() {
  try { await route(); }
  catch (err) { console.error('[spot-the-ball]', err); crashScreen(err); }
}

const BUILD = 32;
const stamp = document.getElementById('buildStamp');
if (stamp) stamp.textContent = 'build ' + BUILD;

addEventListener('hashchange', safeRoute);
safeRoute();
refreshWallet().catch(() => {});
