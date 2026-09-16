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
