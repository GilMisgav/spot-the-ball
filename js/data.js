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
    target: { x: 57.6, y: 86.7 }, ar: 0.6667, ballSize: 5.6, ballImg: 'assets/balls/fb-looseball.png', ballW: 7.03,
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
