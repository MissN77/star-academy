// Re-derives the answer from the PRINTED question text and checks it against
// the option the generator marked correct. Anything it cannot parse is printed
// as a sample for a human to read, rather than quietly passing.
//   node year3/test-maths-answers.js
require('./maths.js');
const { TOPICS } = globalThis.Y3_MATHS;

const N = 3000;
let checked = 0, failed = [];
const unparsed = {};

const num = (s) => Number(String(s).replace(/[,£p\s]/g, ''));

function solve(q) {
  const t = q.q.replace(/−/g, '-');
  let m;
  if ((m = t.match(/^(\d+) \+ (\d+) = \?$/))) return String(+m[1] + +m[2]);
  if ((m = t.match(/^(\d+) - (\d+) = \?$/))) return String(+m[1] - +m[2]);
  if ((m = t.match(/^(\d+) × (\d+) = \?$/))) return String(+m[1] * +m[2]);
  if ((m = t.match(/^(\d+) ÷ (\d+) = \?$/))) return String(+m[1] / +m[2]);
  if ((m = t.match(/^(\d+) × ___ = (\d+)$/))) return String(+m[2] / +m[1]);
  if ((m = t.match(/in your head: (\d+) ([+-]) (\d+)$/i))) {
    return String(m[2] === '+' ? +m[1] + +m[3] : +m[1] - +m[3]);
  }
  if ((m = t.match(/value of the (\d+) in (\d+)\?$/))) {
    const d = m[1], n = m[2];
    const pos = n.indexOf(d);
    return String(+d * Math.pow(10, n.length - 1 - pos));
  }
  if ((m = t.match(/What is (\d+) (more than|less than) (\d+)\?$/))) {
    return String(m[2] === 'more than' ? +m[3] + +m[1] : +m[3] - +m[1]);
  }
  if ((m = t.match(/^Round (\d+) to the nearest 10\.$/))) {
    return String(Math.round(+m[1] / 10) * 10);
  }
  if ((m = t.match(/What is (\d+)\/(\d+) of (\d+)\?$/))) {
    return String((+m[3] / +m[2]) * +m[1]);
  }
  if ((m = t.match(/^(\d+)\/(\d+) \+ (\d+)\/(\d+) = \?$/))) {
    return `${+m[1] + +m[3]}/${m[2]}`;
  }
  if ((m = t.match(/How many millimetres are the same as (\d+) cm\?$/))) {
    return `${+m[1] * 10} mm`;
  }
  if ((m = t.match(/^(\d+) m and (\d+) cm is how many centimetres altogether\?$/))) {
    return `${+m[1] * 100 + +m[2]} cm`;
  }
  if ((m = t.match(/^(\d+) kg and (\d+) g is how many grams\?$/))) {
    return `${+m[1] * 1000 + +m[2]} g`;
  }
  if ((m = t.match(/holds (\d+) litres and (\d+) millilitres/))) {
    return `${+m[1] * 1000 + +m[2]} ml`;
  }
  if ((m = t.match(/rectangle is (\d+) cm long and (\d+) cm wide.*perimeter/))) {
    return `${2 * (+m[1] + +m[2])} cm`;
  }
  if ((m = t.match(/each ⭐ stands for (\d+) .*What do (\d+) stars mean\?$/))) {
    return String(+m[1] * +m[2]);
  }
  if ((m = t.match(/rule is add (\d+):\s+(.+)$/))) {
    const step = +m[1];
    const parts = m[2].split(',').map((s) => s.trim());
    const i = parts.indexOf('___');
    const before = parts[i - 1];
    return String(+before + step);
  }
  if ((m = t.match(/Count on in (\d+)s: (.+), ___$/))) {
    const last = m[2].split(',').map((s) => +s.trim()).pop();
    return String(last + +m[1]);
  }
  if ((m = t.match(/Count back in (\d+)s: (.+), ___$/))) {
    const last = m[2].split(',').map((s) => +s.trim()).pop();
    return String(last - +m[1]);
  }
  return null;
}

for (const t of TOPICS) {
  for (let i = 0; i < N; i++) {
    const q = t.gen();
    const expected = solve(q);
    if (expected === null) {
      unparsed[t.id] = unparsed[t.id] || q.q;
      continue;
    }
    checked++;
    const marked = q.opts[q.ans];
    if (String(marked).trim() !== String(expected).trim()) {
      failed.push(`${t.id}: "${q.q}" marked "${marked}" but the text gives "${expected}"`);
      if (failed.length > 10) break;
    }
  }
  if (failed.length > 10) break;
}

console.log(`re-derived and checked ${checked} answers straight from the question text`);
if (failed.length) {
  console.log('\nWRONG ANSWERS:');
  failed.forEach((f) => console.log(' -', f));
  process.exit(1);
}
console.log('every one matched.\n');
console.log('Not machine-checkable, read these by eye:');
for (const [k, v] of Object.entries(unparsed)) console.log(`  ${k.padEnd(10)} e.g. ${v}`);
