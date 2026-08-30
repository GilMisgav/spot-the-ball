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
$('#walletChip').addEventListener('click', openWallet);
$('#mobileWallet')?.addEventListener('click', openWallet);
$('#walletModal').addEventListener('click', async e => {
  if (e.target.dataset.closeWallet !== undefined || e.target === $('#walletModal')) $('#walletModal').hidden = true;
  const amt = e.target.dataset.topup;
  if (amt) {
    await API.topUp(+amt);
    const me = await refreshWallet(true);
    $('#wmBalance').textContent = money(me.balance);
    toast(`Added ${money(+amt)} demo funds`);
    openWallet();
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
      ${c.myTickets ? `<div class="cc-mine">▸ You hold ${c.myTickets} ticket${c.myTickets > 1 ? 's' : ''} here</div>` : ''}
    </div>
  </a>`;
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

  <section class="section">
    <div class="sec-head">
      <h2>The winners' wall</h2>
      <span class="count">illustrative · demo build</span>
    </div>
    <div class="win-strip">
      ${winners.map(w => `
        <figure class="win-card">
          <div class="wc-photo">
            <img src="${w.photo}" alt="" loading="lazy">
            <span class="wc-sport">${SPORTS[w.sport].icon}</span>
            <span class="wc-week">WEEK ${w.week.slice(1)}</span>
          </div>
          <figcaption>
            <div class="p">${esc(w.prize)}</div>
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
  // BOTB flow: the photo stays hidden until you hold tickets
  if (c.myCredits > 0 || submitted.length > 0) return renderBoard(c, submitted);
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
      safeRoute();   // re-enter play → board is now unlocked
    } catch (err) {
      if (String(err.message).includes('Insufficient')) { toast('Not enough balance — top up your wallet', true); openWallet(); }
      else toast(err.message, true);
    }
  });

  $('#finishBtn').addEventListener('click', async () => {
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
            <div class="ball-cursor" id="ballCursor">${BALL_CURSOR[c.sport]}${BALL_CENTRE}</div>
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
            <div class="spin-preview" id="spinPreview">${BALL_CURSOR.football}</div>
            <div class="spin-axes">
              <label>Spin<input type="range" id="angSlider" min="0" max="359" value="0" step="1"></label>
              <label>Depth<input type="range" id="tiltSlider" min="0" max="90" value="0" step="1"></label>
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
    el.style.setProperty('--sx', sxFor(p.tilt || 0).toFixed(4));
    el.innerHTML = `${BALL_CURSOR[c.sport]}<span class="d"></span><span class="n">${n}</span>`;
    if (!locked) el.addEventListener('click', e => {
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
    cur.style.height = (c.sport === 'football' ? w * 0.62 : w) + 'px';
    board.style.setProperty('--pin-w', w + 'px');
    board.style.setProperty('--pin-h', (c.sport === 'football' ? w * 0.62 : w) + 'px');
  }
  addEventListener('resize', sizeCursor);
  if (img.complete) sizeCursor(); else img.addEventListener('load', sizeCursor);

  /* long axis shrinks from a full oval to a circle as the nose turns toward us */
  const sxFor = t => (28 + (47 - 28) * Math.cos(t * Math.PI / 180)) / 47;

  function setOrient(deg, deep) {
    if (deg !== null) angle = ((deg % 360) + 360) % 360;
    if (deep !== null) tilt = Math.max(0, Math.min(90, deep));
    const sx = sxFor(tilt);
    [$('#ballCursor'), $('#spinPreview')].forEach(el => {
      if (!el) return;
      el.style.setProperty('--rot', angle + 'deg');
      el.style.setProperty('--sx', sx.toFixed(4));
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
      renderPins();
      toast(`Entry locked — ${res.total} crosshair${res.total > 1 ? 's' : ''} on this board. Good luck! 🎯`);
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
      await refreshWallet(true);
      $('#tileBal').textContent = money(res.balance).replace('.00', '');
      renderPins();
      toast(`+${addQty} ticket${addQty > 1 ? 's' : ''} added to your hand`);
    } catch (err) {
      if (String(err.message).includes('Insufficient')) { toast('Not enough balance — top up your wallet', true); openWallet(); }
      else toast(err.message, true);
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
            ${ballImg ? `<img class="ball-real" src="${ballImg}" alt="" style="left:${target.x}%;top:${target.y}%;width:${ballW}%">` : ''}
            <div class="ballmark" style="left:${target.x}%;top:${target.y}%">
              <span class="ring r1"></span><span class="ring r2"></span><span class="ring r3"></span>
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
    rb.style.setProperty('--pin-h', (c.sport === 'football' ? w * 0.62 : w) + 'px');
  };
  const rimg = $('img', rb);
  if (rimg.complete) sizePins(); else rimg.addEventListener('load', sizePins);
  addEventListener('resize', sizePins);

  mine.forEach((p, i) => {
    const el = document.createElement('div');
    el.className = 'pin ball-pin' + (i === 0 ? ' best' : ' submitted');
    el.style.left = p.x + '%'; el.style.top = p.y + '%';
    el.style.setProperty('--rot', (p.a || 0) + 'deg');
    const sx = (28 + (47 - 28) * Math.cos((p.tilt || 0) * Math.PI / 180)) / 47;
    el.style.setProperty('--sx', sx.toFixed(4));
    el.innerHTML = `${BALL_CURSOR[c.sport]}<span class="d"></span>
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
  app.innerHTML = `
  <div class="how-page">
    <h1>Skill. <span>Not luck.</span></h1>
    <p class="lead">Spot the Ball is a game of judgement — legally and philosophically the opposite of a lottery. Here's the full loop, exactly as the production build will run it.</p>
    <div class="how-grid" style="grid-template-columns:1fr">
      <div class="how-card"><div class="num">01</div><h3>The moment</h3><p>We license a professional sports photograph and digitally remove the ball. Nothing else in the frame is touched.</p></div>
      <div class="how-card"><div class="num">02</div><h3>Buy, then aim</h3><p>Tickets are bought blind — the photo stays hidden until you hold crosshairs to place. Your cursor is a ghost of the actual ball at its true size in that frame, so you judge the whole shape, not a dot. A football is no sphere: spin it 360° to the angle you believe it flew at.</p></div>
      <div class="how-card"><div class="num">03</div><h3>The panel</h3><p>After entries close, a panel of former pros studies the frame and fixes the definitive ball position. The judges' ball — not the original photo — is the target. That's what keeps it 100% skill.</p></div>
      <div class="how-card"><div class="num">04</div><h3>Scoring</h3><p>Each pin earns <b>1000 · e<sup>−d/9</sup></b> points, where d is the distance to the judges' ball in board units. Closest single pin takes the headline prize; your best pin per contest feeds the weekly tournament pot.</p></div>
      <div class="how-card"><div class="num">05</div><h3>The wallet</h3><p>Top up, enter, withdraw winnings. In this demo the balance is simulated — the production app plugs a real PSP into the exact same API surface.</p></div>
    </div>
    <div style="margin-top:30px"><a class="btn big" href="#/">Try it now →</a></div>
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

const BUILD = 18;
const stamp = document.getElementById('buildStamp');
if (stamp) stamp.textContent = 'build ' + BUILD;

addEventListener('hashchange', safeRoute);
safeRoute();
refreshWallet().catch(() => {});
