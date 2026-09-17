// Audit every question bank in Star Academy. RUN BEFORE ANY RELEASE.
//
//     node tools/audit-banks.js
//
// Why this exists: six answers in the 11+ app's inference bank were mis-keyed,
// so a child was marked WRONG for choosing the RIGHT answer, for months, and
// nothing noticed. This checks Ava's banks for the same class of fault.
//
// Star Academy keeps its data inside index.html as plain top-level consts, so
// those are pulled out and evaluated. The Year 3 banks are separate files that
// set globals, so they are simply required.
const fs = require('fs');
const path = require('path');

const ROOT = path.dirname(__dirname);
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

// ── 1. Pull the top-level data arrays out of index.html ────────────────────
// They are declared at column 0 and closed by "];" or "};" at column 0, with
// no JSX inside, so each one can be evaluated on its own.
const banks = {};
const failedToRead = [];
const declRe = /^const ([A-Z][A-Z_0-9]*) = (\[|\{)/gm;
const found = [];
let m;

/** Walk from an opening bracket to its true partner, skipping over strings,
 *  template literals, escapes and comments. The first version of this looked
 *  for "];" at the start of a line, which quietly swallowed a whole bank
 *  whenever a one-line array like TIMES_TABLES came before it. An extractor
 *  that silently under-reads is worse than no extractor. */
function matchBracket(src, start) {
  const open = src[start];
  const close = open === '[' ? ']' : '}';
  let depth = 0;
  for (let i = start; i < src.length; i++) {
    const c = src[i];
    if (c === '\\') { i++; continue; }
    if (c === '"' || c === "'" || c === '`') {
      const quote = c;
      i++;
      while (i < src.length && src[i] !== quote) {
        if (src[i] === '\\') i++;
        i++;
      }
      continue;
    }
    if (c === '/' && src[i + 1] === '/') { i = src.indexOf('\n', i); if (i === -1) return -1; continue; }
    if (c === '/' && src[i + 1] === '*') { i = src.indexOf('*/', i); if (i === -1) return -1; i++; continue; }
    if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) return i; }
  }
  return -1;
}

while ((m = declRe.exec(html)) !== null) {
  const name = m[1];
  const open = m.index + m[0].length - 1;
  const end = matchBracket(html, open);
  if (end === -1) { failedToRead.push(name + ' (could not find its closing bracket)'); continue; }
  found.push({ name, literal: html.slice(open, end + 1) });
}

// Plain string and number consts too (SB_URL, SB_KEY). Without them the banks
// that reference them fail to evaluate, and a bank that fails to evaluate is a
// bank nobody is checking.
const scalars = [];
const scalarRe = /^const ([A-Z][A-Z_0-9]*) = ((?:'[^']*'|"[^"]*"|-?\d+(?:\.\d+)?));?$/gm;
let sm;
while ((sm = scalarRe.exec(html)) !== null) scalars.push({ name: sm[1], literal: sm[2] });

// Some banks are built FROM other banks (LANGUAGE_SETS uses FRENCH_PHRASES,
// ENGLISH_LESSONS uses SENTENCE_FILL), so they have to be evaluated together
// in file order rather than one at a time. Evaluating them in isolation left
// three banks silently unchecked, which is exactly the kind of gap this tool
// exists to close.
const body = scalars.map((f) => `const ${f.name} = ${f.literal};`).join('\n') + '\n'
  + found.map((f) => `const ${f.name} = ${f.literal};`).join('\n')
  + '\nreturn {' + found.map((f) => f.name).join(',') + '};';
try {
  // eslint-disable-next-line no-new-func
  Object.assign(banks, new Function(body)());
} catch (e) {
  // fall back to one at a time so one bad bank cannot hide all the others
  failedToRead.push('combined evaluation failed (' + e.message.slice(0, 70) + '), fell back to one at a time');
  for (const f of found) {
    try { banks[f.name] = new Function('return ' + f.literal)(); }
    catch (err) { failedToRead.push(f.name + ' (' + err.message.slice(0, 60) + ')'); }
  }
}

// ── 2. The Year 3 banks ────────────────────────────────────────────────────
require('../year3/english.js');
require('../year3/reading.js');
require('../year3/bfg.js');
require('../year3/maths.js');
banks.Y3_ENGLISH_SETS = globalThis.Y3_ENGLISH.SETS;
banks.Y3_READING = globalThis.Y3_READING.PASSAGES;
banks.Y3_BFG = globalThis.Y3_BFG.STAGES;
try {
  banks.Y3_SPELLING = JSON.parse(fs.readFileSync(path.join(ROOT, 'year3/spelling.json'), 'utf8')).sets;
} catch (e) {
  failedToRead.push('year3/spelling.json');
}

// ── 3. Walk everything and find question-shaped objects ────────────────────
function* walk(o, p) {
  if (Array.isArray(o)) {
    for (let i = 0; i < o.length; i++) yield* walk(o[i], `${p}[${i}]`);
  } else if (o && typeof o === 'object') {
    const opts = o.options || o.opts;
    if (Array.isArray(opts) && opts.length >= 2) yield [p, o];
    for (const k of Object.keys(o)) {
      if (k === 'options' || k === 'opts') continue;
      yield* walk(o[k], `${p}.${k}`);
    }
  }
}

function answerIndex(q) {
  for (const k of ['ans', 'answer', 'correct', 'correctIndex', 'a']) {
    if (typeof q[k] === 'number') return [k, q[k]];
  }
  return [null, null];
}
function answerText(q) {
  for (const k of ['answer', 'correctAnswer']) {
    if (typeof q[k] === 'string' && q[k].trim()) return [k, q[k].trim()];
  }
  return [null, null];
}

const faults = [];
const toRead = [];
let checked = 0;
const perBank = {};

for (const [bankName, data] of Object.entries(banks)) {
  let n = 0;
  for (const [p, q] of walk(data, bankName)) {
    const opts = q.options || q.opts;
    if (!opts.every((o) => typeof o === 'string')) continue;   // shape data, not text
    n++; checked++;
    const stem = q.question || q.stem || q.q || '';
    const [key, idx] = answerIndex(q);

    if (key === null) { faults.push(`${p}: no answer key`); continue; }
    if (!(idx >= 0 && idx < opts.length)) {
      faults.push(`${p}: answer index ${idx} outside ${opts.length} options`);
      continue;
    }
    const [tkey, ttext] = answerText(q);
    if (ttext !== null && key !== tkey && opts[idx].trim() !== ttext) {
      faults.push(`${p}: MIS-KEY PROVEN. index ${idx} gives "${opts[idx].slice(0, 50)}" but ${tkey} says "${ttext.slice(0, 50)}"`);
    }
    if (new Set(opts.map((o) => o.trim())).size !== opts.length) {
      faults.push(`${p}: duplicate options -> ${JSON.stringify(opts)}`);
    }
    const why = q.why || q.explanation || q.workingOut || q.e || '';
    if (!String(why).trim()) faults.push(`${p}: no explanation${stem ? ' :: ' + stem.slice(0, 60) : ''}`);

    // ── a second cross-check: does the explanation name a DIFFERENT option? ──
    // Most explanations quote the answer. If one quotes another option verbatim
    // and never the keyed one, the key is the thing to doubt.
    const whyText = String(why).toLowerCase();
    if (whyText.length > 15) {
      const keyedIn = whyText.includes(opts[idx].toLowerCase().replace(/[.!?]$/, '').trim());
      // whole-phrase match only. "A note" is a substring of "a notebook",
      // which produced a false alarm on a perfectly good question.
      const wholePhrase = (hay, needle) => {
        const n = needle.toLowerCase().replace(/[.!?]$/, '').trim();
        if (n.length < 6) return false;
        const esc = n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return new RegExp('(^|[^a-z])' + esc + '($|[^a-z])', 'i').test(hay);
      };
      const others = opts
        .map((o, i) => [i, o])
        .filter(([i, o]) => i !== idx && wholePhrase(whyText, o));
      if (!keyedIn && others.length === 1) {
        toRead.push({
          p, stem: stem.slice(0, 80),
          keyed: opts[idx].slice(0, 70),
          longer: 'explanation quotes "' + others[0][1].slice(0, 60) + '" instead'
        });
      }
    }

    // the signature that exposed the six mis-keys in the other app
    const keyed = opts[idx];
    const longest = opts.reduce((a, b) => (b.length > a.length ? b : a), '');
    if (longest !== keyed && longest.length > Math.max(20, keyed.length * 1.5)) {
      toRead.push({ p, stem: stem.slice(0, 80), keyed: keyed.slice(0, 70), longer: longest.slice(0, 80) });
    }
  }
  if (n) perBank[bankName] = n;
}

console.log('questions checked per bank:');
for (const [k, v] of Object.entries(perBank).sort((a, b) => b[1] - a[1])) {
  console.log('  ' + k.padEnd(24) + String(v).padStart(5));
}
console.log('  ' + 'TOTAL'.padEnd(24) + String(checked).padStart(5));

const empty = Object.keys(banks).filter((b) => !perBank[b]);
if (empty.length) {
  console.log('\nno multiple-choice questions in these, so nothing to key-check:');
  console.log('   ' + empty.join(', '));
}

if (failedToRead.length) {
  console.log('\ncould not be read and so were NOT checked:');
  failedToRead.forEach((f) => console.log('   -', f));
}

console.log(`\nFAULTS: ${faults.length}`);
faults.slice(0, 50).forEach((f) => console.log('   -', f));
if (faults.length > 50) console.log(`   … and ${faults.length - 50} more`);

console.log(`\nNEEDS A HUMAN TO READ (mis-key signature): ${toRead.length}`);
toRead.slice(0, 40).forEach((s) => {
  console.log(`   ${s.p}`);
  console.log(`      Q     : ${s.stem}`);
  console.log(`      keyed : ${s.keyed}`);
  console.log(`      longer: ${s.longer}`);
});
if (toRead.length > 40) console.log(`   … and ${toRead.length - 40} more`);

if (faults.length) {
  console.log('\nFAILED. Fix these before shipping.');
  process.exit(1);
}
console.log('\nPASS. Every question has a valid key, different options and an explanation.');
