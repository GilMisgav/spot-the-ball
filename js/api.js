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
      const s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.v === 1) return s;
    } catch (e) { /* fresh start */ }
    return {
      v: 1,
      balance: START_BALANCE,
      tx: [{ t: Date.now(), label: 'Welcome credit', amt: START_BALANCE }],
      entries: {},   // compId -> [{x,y,t}]
      closed: {},    // compId -> true (demo "finish" pressed)
      epoch: Date.now(),
    };
  }
  function save(s) { localStorage.setItem(KEY, JSON.stringify(s)); }
  let state = load();

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
  function distPct(a, b) {
    const dx = a.x - b.x, dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy); // % space
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
      const d = distPct({ x, y }, comp.target);
      bots.push({ name, x, y, d, score: scoreFor(d) });
    }
    return bots.sort((a, b) => a.d - b.d);
  }

  const clone = o => JSON.parse(JSON.stringify(o));
  const compById = id => COMPETITIONS.find(c => c.id === id);

  function compView(c) {
    const v = clone(c);
    delete v.target;                       // clients never see the answer
    delete v.ballImg; delete v.ballW;      // real-ball reveal assets stay server-side until results
    v.closed = !!state.closed[c.id];
    v.closesAt = state.epoch + c.closesIn * 1000;
    v.myTickets = (state.entries[c.id] || []).length;
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

    async submitEntry(compId, picks) {
      const c = compById(compId);
      if (!c) throw new Error('Unknown competition');
      if (state.closed[compId]) throw new Error('Competition is closed');
      const cost = priceFor(picks.length);
      if (cost > state.balance) throw new Error('Insufficient balance');
      state.balance = +(state.balance - cost).toFixed(2);
      state.tx.push({ t: Date.now(), label: `${picks.length} ticket${picks.length > 1 ? 's' : ''} · ${c.title}`, amt: -cost });
      const list = state.entries[compId] || (state.entries[compId] = []);
      picks.forEach(p => list.push({ x: p.x, y: p.y, t: Date.now() }));
      save(state);
      return { balance: state.balance, total: list.length, cost };
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
        const d = distPct(p, c.target);
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
        const best = Math.max(...picks.map(p => scoreFor(distPct(p, c.target))));
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
