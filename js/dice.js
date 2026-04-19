// Tiny dice roller. Supports: NdS, NdSkhM (keep highest M), NdSklM (keep lowest M), +/- modifiers.
// rollDice("2d6kh1+3") -> { total, rolls, kept, formula }
window.rollDice = function rollDice(expr) {
  const m = String(expr).replace(/\s+/g, "").match(/^(\d+)d(\d+)(kh|kl)?(\d+)?([+\-]\d+)?$/i);
  if (!m) throw new Error("Bad dice: " + expr);
  const n = parseInt(m[1], 10), s = parseInt(m[2], 10);
  const kind = m[3] ? m[3].toLowerCase() : null;
  const keep = m[4] ? parseInt(m[4], 10) : n;
  const mod = m[5] ? parseInt(m[5], 10) : 0;
  const rolls = [];
  for (let i = 0; i < n; i++) rolls.push(1 + Math.floor(Math.random() * s));
  let kept = rolls.slice();
  if (kind === "kh") kept = [...rolls].sort((a,b)=>b-a).slice(0, keep);
  else if (kind === "kl") kept = [...rolls].sort((a,b)=>a-b).slice(0, keep);
  const total = kept.reduce((a,b)=>a+b, 0) + mod;
  return { total, rolls, kept, mod, formula: expr, n, s, kind, keep };
};
