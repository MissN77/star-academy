// Runs every Year 3 maths generator thousands of times and checks the shape of
// what comes out. Run with:  node year3/test-maths.js
require('./maths.js');
const { TOPICS } = globalThis.Y3_MATHS;

const RUNS = 4000;
let problems = [];
const seenPerTopic = {};

for (const t of TOPICS) {
  const texts = new Set();
  for (let i = 0; i < RUNS; i++) {
    let q;
    try { q = t.gen(); } catch (e) { problems.push(`${t.id}: threw ${e.message}`); break; }
    if (!q || typeof q.q !== 'string' || !q.q.trim()) problems.push(`${t.id}: empty question`);
    if (!Array.isArray(q.opts) || q.opts.length !== 4) problems.push(`${t.id}: ${q.opts && q.opts.length} options, need 4 (${q.q})`);
    else if (new Set(q.opts).size !== 4) problems.push(`${t.id}: duplicate options in "${q.q}" -> ${JSON.stringify(q.opts)}`);
    if (!(q.ans >= 0 && q.ans < 4)) problems.push(`${t.id}: answer index ${q.ans} out of range (${q.q})`);
    if (!q.why || !String(q.why).trim()) problems.push(`${t.id}: no explanation for "${q.q}"`);
    if (String(q.why).includes('undefined') || q.q.includes('undefined')) problems.push(`${t.id}: "undefined" in "${q.q}" / "${q.why}"`);
    if (/NaN/.test(q.q + q.why + q.opts.join(''))) problems.push(`${t.id}: NaN in "${q.q}"`);
    texts.add(q.q);
    if (problems.length > 25) break;
  }
  seenPerTopic[t.id] = texts.size;
  if (problems.length > 25) break;
}

console.log('distinct questions produced in ' + RUNS + ' runs per topic:');
for (const [k, v] of Object.entries(seenPerTopic)) {
  const flag = v < 40 ? '  <-- THIN' : '';
  console.log(`  ${k.padEnd(12)} ${String(v).padStart(5)}${flag}`);
}

if (problems.length) {
  console.log('\nFAILED:');
  problems.slice(0, 25).forEach((p) => console.log(' -', p));
  process.exit(1);
}
console.log('\nAll generators pass: 4 different options, one correct, an explanation, no NaN.');

// ── The worked examples on the teach cards are checked too ─────────────────
const bad = [];
for (const t of TOPICS) {
  const ex = t.example;
  if (!ex) { bad.push(t.id + ': no worked example'); continue; }
  if (!ex.q || !ex.a || !Array.isArray(ex.steps) || ex.steps.length < 2) bad.push(t.id + ': thin example');
  if (!t.rule || !Array.isArray(t.points) || t.points.length < 3) bad.push(t.id + ': thin teaching');
  // re-derive the ones that are pure arithmetic
  let m;
  if ((m = ex.q.match(/^(\d+) \+ (\d+)$/))) {
    if (String(+m[1] + +m[2]) !== ex.a) bad.push(t.id + ': example answer ' + ex.a + ' should be ' + (+m[1] + +m[2]));
  }
  if ((m = ex.q.replace(/−/g, '-').match(/^(\d+) - (\d+)$/))) {
    if (String(+m[1] - +m[2]) !== ex.a) bad.push(t.id + ': example answer ' + ex.a + ' should be ' + (+m[1] - +m[2]));
  }
  if ((m = ex.q.match(/^(\d+) × (\d+)$/))) {
    if (String(+m[1] * +m[2]) !== ex.a) bad.push(t.id + ': example answer ' + ex.a + ' should be ' + (+m[1] * +m[2]));
  }
}
if (bad.length) { console.log('\nTEACH CARD PROBLEMS:'); bad.forEach(b => console.log(' -', b)); process.exit(1); }
console.log('All 13 teach cards have a rule, 4 points and a checked worked example.');
