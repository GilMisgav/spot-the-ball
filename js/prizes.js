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
