// ── YEAR 3 MATHS ─────────────────────────────────────────────────────────────
// Every question is GENERATED, not stored, so Ava never meets the same paper
// twice across a whole year of daily practice. Topics follow the Year 3
// programme of study: place value to 1000, the 3, 4 and 8 times tables,
// three-digit column methods, tenths, measurement, money, time, right angles
// and simple data.
//
// Each generator returns { q, opts:[4 strings], ans:index, why }.
// The answer is computed, never typed, so it cannot be wrong. The option
// builder guarantees four DIFFERENT options with exactly one correct.
(function (root) {
  'use strict';

  function ri(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function shuffle(a) {
    const c = [...a];
    for (let i = c.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [c[i], c[j]] = [c[j], c[i]];
    }
    return c;
  }

  /**
   * Build a 4-option question.
   * `wrong` are candidate distractors as raw values; any that equal the answer
   * or repeat are dropped, and the list is topped up with near misses so there
   * are always exactly four different options.
   */
  function mc(q, answer, wrong, why, fmt) {
    const f = fmt || String;
    const ansText = f(answer);
    const opts = [ansText];
    for (const w of wrong) {
      const t = f(w);
      if (t !== ansText && !opts.includes(t)) opts.push(t);
      if (opts.length === 4) break;
    }
    // Top up from near misses if the caller did not supply enough usable ones.
    let step = 1;
    while (opts.length < 4 && step < 200) {
      for (const cand of [Number(answer) + step, Number(answer) - step]) {
        if (!isFinite(cand) || cand < 0) continue;
        const t = f(cand);
        if (t !== ansText && !opts.includes(t)) opts.push(t);
        if (opts.length === 4) break;
      }
      step++;
    }
    // Absolute last resort, so a question is never rendered with < 4 options.
    let n = 1;
    while (opts.length < 4) { const t = ansText + ' '.repeat(n++); opts.push(t); }
    const shuffled = shuffle(opts);
    return { q, opts: shuffled, ans: shuffled.indexOf(ansText), why };
  }

  const money = (p) => (p >= 100
    ? '£' + (p / 100).toFixed(2)
    : p + 'p');

  const PLACE = ['ones', 'tens', 'hundreds'];

  // ── 1. Place value to 1000 ────────────────────────────────────────────────
  function placeValue() {
    const kind = ri(1, 5);
    if (kind === 1) {
      const n = ri(111, 999);
      const col = ri(0, 2);
      const digit = Number(String(n)[2 - col]);
      // "the value of the 7 in 777" is unanswerable, so only ask when the digit
      // appears once in the number.
      if (String(n).split('').filter((d) => Number(d) === digit).length > 1) return placeValue();
      const value = digit * Math.pow(10, col);
      return mc(
        `What is the value of the ${digit} in ${n}?`,
        value,
        [digit, digit * 10, digit * 100].filter((v) => v !== value),
        `The ${digit} is in the ${PLACE[col]} column, so it is worth ${value}.`
      );
    }
    if (kind === 2) {
      const n = ri(100, 899);
      const step = pick([10, 100]);
      const more = Math.random() < 0.5;
      const ans = more ? n + step : n - step;
      return mc(
        `What is ${step} ${more ? 'more than' : 'less than'} ${n}?`,
        ans,
        [more ? n + (step === 10 ? 100 : 10) : n - (step === 10 ? 100 : 10), n + 1, n - 1],
        `${more ? 'Add' : 'Take away'} ${step}: ${n} ${more ? '+' : '−'} ${step} = ${ans}.`
      );
    }
    if (kind === 3) {
      const h = ri(1, 9), t = ri(0, 9), o = ri(0, 9);
      const n = h * 100 + t * 10 + o;
      return mc(
        `Which number is made from ${h * 100} + ${t * 10} + ${o}?`,
        n,
        [h * 100 + o * 10 + t, n + 100, n - 10],
        `${h * 100} + ${t * 10} + ${o} = ${n}.`
      );
    }
    if (kind === 4) {
      const nums = shuffle([ri(100, 399), ri(400, 699), ri(700, 999)]);
      const biggest = Math.random() < 0.5;
      const ans = biggest ? Math.max(...nums) : Math.min(...nums);
      return mc(
        `Which is the ${biggest ? 'largest' : 'smallest'}?  ${nums.join(', ')}`,
        ans,
        nums.filter((x) => x !== ans),
        `Compare the hundreds first. ${ans} is the ${biggest ? 'largest' : 'smallest'}.`
      );
    }
    let n = ri(101, 989);
    while (n % 10 === 0) n = ri(101, 989);   // already round, nothing to do
    const nearest = Math.round(n / 10) * 10;
    return mc(
      `Round ${n} to the nearest 10.`,
      nearest,
      [nearest + 10, nearest - 10, Math.round(n / 100) * 100],
      `Look at the ones digit (${String(n)[2]}). ${Number(String(n)[2]) >= 5 ? 'It is 5 or more, so round up' : 'It is less than 5, so round down'} to ${nearest}.`
    );
  }

  // ── 2. Counting in 4s, 8s, 50s and 100s ──────────────────────────────────
  function counting() {
    const step = pick([2, 3, 4, 5, 8, 10, 25, 50, 100]);
    // Sometimes start on a multiple, sometimes part way along, so the sequence
    // is not always the times table she already knows.
    const start = step * ri(1, 12) + (Math.random() < 0.35 ? ri(1, step - 1) : 0);
    const kind = ri(1, 3);

    if (kind === 1) {                       // next term
      const seq = [0, 1, 2, 3].map((i) => start + i * step);
      const ans = start + 4 * step;
      return mc(
        `Count on in ${step}s: ${seq.join(', ')}, ___`,
        ans,
        [ans + step, ans - 1, ans + 1],
        `Add ${step} each time. ${seq[3]} + ${step} = ${ans}.`
      );
    }
    if (kind === 2) {                       // counting back
      const top = start + 4 * step;
      const seq = [0, 1, 2, 3].map((i) => top - i * step);
      const ans = top - 4 * step;
      return mc(
        `Count back in ${step}s: ${seq.join(', ')}, ___`,
        ans,
        [ans - step, ans + 1, ans - 1],
        `Take ${step} away each time. ${seq[3]} − ${step} = ${ans}.`
      );
    }
    // missing number in the middle
    const seq = [0, 1, 2, 3, 4].map((i) => start + i * step);
    const hole = ri(1, 3);
    const ans = seq[hole];
    const shown = seq.map((v, i) => (i === hole ? '___' : v)).join(', ');
    return mc(
      `Fill the gap. The rule is add ${step}:  ${shown}`,
      ans,
      [ans + step, ans - step, ans + 1],
      `${seq[hole - 1]} + ${step} = ${ans}.`
    );
  }

  // ── 3. Column addition, three digits ─────────────────────────────────────
  function columnAdd() {
    const a = ri(112, 879), b = ri(112, 879);
    const ans = a + b;
    return mc(
      `${a} + ${b} = ?`,
      ans,
      [ans - 10, ans + 10, ans - 100, ans + 1],
      `Line up the columns: ones first, then tens, then hundreds. ${a} + ${b} = ${ans}.`
    );
  }

  // ── 4. Column subtraction, three digits ──────────────────────────────────
  function columnSub() {
    const a = ri(320, 999);
    const b = ri(105, a - 50);
    const ans = a - b;
    return mc(
      `${a} − ${b} = ?`,
      ans,
      [ans + 10, ans - 10, ans + 100, ans + 1],
      `Subtract the ones, then the tens, then the hundreds, exchanging when you need to. ${a} − ${b} = ${ans}.`
    );
  }

  // ── 5. Mental add and subtract 1s, 10s, 100s ─────────────────────────────
  function mental() {
    const n = ri(120, 850);
    const step = pick([1, 10, 100, 2, 20, 200]);
    const add = Math.random() < 0.5;
    const ans = add ? n + step : n - step;
    return mc(
      `Work it out in your head: ${n} ${add ? '+' : '−'} ${step}`,
      ans,
      [add ? n + step * 10 : n - step * 10, n, ans + 1],
      `Only the ${step >= 100 ? 'hundreds' : step >= 10 ? 'tens' : 'ones'} digit changes. ${n} ${add ? '+' : '−'} ${step} = ${ans}.`
    );
  }

  // ── 6. The 3, 4 and 8 times tables ───────────────────────────────────────
  function tables() {
    const t = pick([3, 4, 8]);
    const n = ri(2, 12);
    const kind = ri(1, 3);
    if (kind === 1) {
      const ans = t * n;
      return mc(
        `${t} × ${n} = ?`,
        ans,
        [t * (n + 1), t * (n - 1), ans + t],
        `${n} lots of ${t} is ${ans}.`
      );
    }
    if (kind === 2) {
      const product = t * n;
      return mc(
        `${product} ÷ ${t} = ?`,
        n,
        [n + 1, n - 1, n + 2],
        `${t} × ${n} = ${product}, so ${product} ÷ ${t} = ${n}.`
      );
    }
    const product = t * n;
    return mc(
      `${t} × ___ = ${product}`,
      n,
      [n + 1, n - 1, product],
      `Ask yourself how many ${t}s make ${product}. The answer is ${n}.`
    );
  }

  // ── 7. Two digits times one digit ────────────────────────────────────────
  function twoByOne() {
    const a = ri(12, 49);
    const b = pick([3, 4, 5, 6, 8]);
    const ans = a * b;
    const tens = Math.floor(a / 10) * 10;
    const ones = a % 10;
    return mc(
      `${a} × ${b} = ?`,
      ans,
      [ans + b, ans - b, ans + 10, tens * b],
      `Split it up: ${tens} × ${b} = ${tens * b} and ${ones} × ${b} = ${ones * b}. Add them: ${ans}.`
    );
  }

  // ── 8. Fractions ─────────────────────────────────────────────────────────
  function fractions() {
    const kind = ri(1, 5);
    if (kind === 1) {
      const den = pick([2, 3, 4, 5, 8, 10]);
      const num = ri(1, den - 1);
      const mult = ri(2, 9);
      const whole = den * mult;
      const ans = num * mult;
      return mc(
        `What is ${num}/${den} of ${whole}?`,
        ans,
        [mult, whole - ans, ans + mult],
        `Divide by the bottom number: ${whole} ÷ ${den} = ${mult}. Then multiply by the top: ${mult} × ${num} = ${ans}.`
      );
    }
    if (kind === 2) {
      const den = pick([5, 6, 8, 10]);
      const a = ri(1, den - 2);
      const b = ri(1, den - a - 1);
      return mc(
        `${a}/${den} + ${b}/${den} = ?`,
        `${a + b}/${den}`,
        [`${a + b}/${den * 2}`, `${a * b}/${den}`, `${a + b + 1}/${den}`],
        `The bottom number stays the same. Add the tops: ${a} + ${b} = ${a + b}, so the answer is ${a + b}/${den}.`
      );
    }
    if (kind === 3) {
      const tenths = ri(1, 9);
      return mc(
        `Which fraction means ${tenths} parts out of 10?`,
        `${tenths}/10`,
        [`10/${tenths}`, `${tenths}/100`, `${tenths + 1}/10`],
        `The bottom number says how many equal parts there are. ${tenths} out of 10 is ${tenths}/10.`
      );
    }
    if (kind === 4) {
      const base = pick([[1, 2, 2, 4], [1, 2, 5, 10], [1, 4, 2, 8], [1, 3, 2, 6], [2, 3, 4, 6], [3, 4, 6, 8], [1, 5, 2, 10]]);
      const [n1, d1, n2, d2] = base;
      return mc(
        `Which fraction is the same as ${n1}/${d1}?`,
        `${n2}/${d2}`,
        [`${n2 + 1}/${d2}`, `${n1}/${d2}`, `${d2}/${n2}`],
        `Multiply the top and the bottom by the same number: ${n1}/${d1} = ${n2}/${d2}.`
      );
    }
    const den = pick([3, 4, 5, 6, 8, 10]);
    const a = ri(1, den - 1);
    const b = ri(1, den - 1);
    if (a === b) return fractions();
    const bigger = Math.max(a, b);
    return mc(
      `Which is bigger, ${a}/${den} or ${b}/${den}?`,
      `${bigger}/${den}`,
      [`${Math.min(a, b)}/${den}`, 'They are the same', `${den}/${bigger}`],
      `The parts are the same size, so the one with more parts is bigger. ${bigger}/${den} wins.`
    );
  }

  // ── 9. Measurement ───────────────────────────────────────────────────────
  function measure() {
    const kind = ri(1, 5);
    if (kind === 1) {
      const cm = ri(2, 90);
      return mc(
        `How many millimetres are the same as ${cm} cm?`,
        `${cm * 10} mm`,
        [`${cm * 100} mm`, `${cm} mm`, `${cm / 2 * 10} mm`],
        `There are 10 mm in every centimetre. ${cm} × 10 = ${cm * 10} mm.`
      );
    }
    if (kind === 2) {
      const m = ri(2, 9), extra = ri(5, 95);
      return mc(
        `${m} m and ${extra} cm is how many centimetres altogether?`,
        `${m * 100 + extra} cm`,
        [`${m * 10 + extra} cm`, `${m + extra} cm`, `${m * 100} cm`],
        `There are 100 cm in a metre. ${m} × 100 = ${m * 100}, then add ${extra}: ${m * 100 + extra} cm.`
      );
    }
    if (kind === 3) {
      const kg = ri(1, 8), g = ri(50, 950);
      return mc(
        `${kg} kg and ${g} g is how many grams?`,
        `${kg * 1000 + g} g`,
        [`${kg * 100 + g} g`, `${kg + g} g`, `${kg * 1000} g`],
        `There are 1000 g in a kilogram. ${kg} × 1000 = ${kg * 1000}, add ${g}: ${kg * 1000 + g} g.`
      );
    }
    if (kind === 4) {
      const l = ri(1, 6), ml = ri(50, 900);
      return mc(
        `A jug holds ${l} litres and ${ml} millilitres. How many millilitres is that?`,
        `${l * 1000 + ml} ml`,
        [`${l * 100 + ml} ml`, `${l + ml} ml`, `${l * 1000} ml`],
        `There are 1000 ml in a litre. ${l} × 1000 = ${l * 1000}, add ${ml}: ${l * 1000 + ml} ml.`
      );
    }
    const a = ri(3, 12), b = ri(3, 12);
    const ans = 2 * (a + b);
    return mc(
      `A rectangle is ${a} cm long and ${b} cm wide. What is its perimeter?`,
      `${ans} cm`,
      [`${a + b} cm`, `${a * b} cm`, `${ans + 2} cm`],
      `Perimeter is all the way round: ${a} + ${b} + ${a} + ${b} = ${ans} cm.`
    );
  }

  // ── 10. Money ────────────────────────────────────────────────────────────
  function moneyQ() {
    const kind = ri(1, 3);
    if (kind === 1) {
      const a = ri(35, 480), b = ri(35, 480);
      return mc(
        `What is ${money(a)} add ${money(b)}?`,
        money(a + b),
        [money(a + b + 10), money(a + b - 10), money(Math.abs(a - b))],
        `${a}p + ${b}p = ${a + b}p, which is ${money(a + b)}.`
      );
    }
    if (kind === 2) {
      const paid = pick([100, 200, 500, 1000]);
      const cost = ri(25, paid - 15);
      const change = paid - cost;
      return mc(
        `Ava pays with ${money(paid)} for something costing ${money(cost)}. What is her change?`,
        money(change),
        [money(change + 10), money(change - 10), money(cost)],
        `${paid}p − ${cost}p = ${change}p, which is ${money(change)}.`
      );
    }
    const each = ri(15, 145);
    const n = ri(2, 6);
    return mc(
      `Pencils cost ${money(each)} each. What do ${n} cost?`,
      money(each * n),
      [money(each * (n + 1)), money(each * n + 10), money(each + n)],
      `${n} lots of ${each}p is ${each * n}p, which is ${money(each * n)}.`
    );
  }

  // ── 11. Time ─────────────────────────────────────────────────────────────
  const ROMAN = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 11: 'XI', 12: 'XII' };
  function timeQ() {
    const kind = ri(1, 4);
    if (kind === 1) {
      const h = ri(1, 11), m = pick([5, 10, 15, 20, 25, 35, 40, 45, 50, 55]);
      const past = m <= 30;
      const mins = past ? m : 60 - m;
      const hourWord = past ? h : h + 1;
      const label = mins === 15 ? (past ? 'quarter past' : 'quarter to')
        : mins === 30 ? 'half past'
          : `${mins} minutes ${past ? 'past' : 'to'}`;
      return mc(
        `The clock says ${h}:${String(m).padStart(2, '0')}. How do you say that?`,
        `${label} ${hourWord}`,
        [`${label} ${hourWord === 12 ? 1 : hourWord + 1}`,
          `${mins} minutes ${past ? 'to' : 'past'} ${hourWord}`,
          `${label} ${h === 1 ? 12 : h - 1}`],
        `${m} minutes ${past ? 'after' : 'before'} the hour is "${label} ${hourWord}".`
      );
    }
    if (kind === 2) {
      const startH = ri(1, 9), startM = pick([0, 10, 15, 20, 30, 45]);
      const mins = pick([20, 25, 35, 40, 45, 50, 55, 70, 90]);
      const total = startH * 60 + startM + mins;
      const eh = Math.floor(total / 60), em = total % 60;
      const f = (h, m) => `${h > 12 ? h - 12 : h}:${String(m).padStart(2, '0')}`;
      return mc(
        `A film starts at ${f(startH, startM)} and lasts ${mins} minutes. When does it finish?`,
        f(eh, em),
        [f(eh, (em + 10) % 60), f(eh + 1, em), f(eh, (em + 55) % 60)],
        `Count on ${mins} minutes from ${f(startH, startM)} to reach ${f(eh, em)}.`
      );
    }
    if (kind === 3) {
      const n = ri(1, 12);
      return mc(
        `On a Roman numeral clock face, which number is ${ROMAN[n]}?`,
        n,
        [n === 12 ? 1 : n + 1, n === 1 ? 12 : n - 1, n + 2 > 12 ? n - 2 : n + 2],
        `${ROMAN[n]} stands for ${n}.`
      );
    }
    const h = ri(13, 23), m = pick([0, 15, 30, 45]);
    const partOfDay = h <= 16 ? 'in the afternoon' : h <= 20 ? 'in the evening' : 'at night';
    const mm = String(m).padStart(2, '0');
    return mc(
      `A timetable says ${h}:${mm}. What time is that on a normal clock?`,
      `${h - 12}:${mm} ${partOfDay}`,
      [`${h - 12}:${mm} in the morning`,
        `${h}:${mm} in the morning`,
        `${h - 10}:${mm} ${partOfDay}`],
      `After midday you take 12 away: ${h} − 12 = ${h - 12}, and that is ${partOfDay}.`
    );
  }

  // ── 12. Angles and shape ─────────────────────────────────────────────────
  const SHAPES_2D = [
    { n: 'triangle', sides: 3, v: 3, right: 0 }, { n: 'square', sides: 4, v: 4, right: 4 },
    { n: 'rectangle', sides: 4, v: 4, right: 4 }, { n: 'pentagon', sides: 5, v: 5, right: 0 },
    { n: 'hexagon', sides: 6, v: 6, right: 0 }, { n: 'octagon', sides: 8, v: 8, right: 0 },
    { n: 'rhombus', sides: 4, v: 4, right: 0 }, { n: 'trapezium', sides: 4, v: 4, right: 0 },
    { n: 'heptagon', sides: 7, v: 7, right: 0 }, { n: 'parallelogram', sides: 4, v: 4, right: 0 }
  ];
  const SHAPES_3D = [
    { n: 'cube', f: 6, e: 12, v: 8 }, { n: 'cuboid', f: 6, e: 12, v: 8 },
    { n: 'square-based pyramid', f: 5, e: 8, v: 5 },
    { n: 'triangular prism', f: 5, e: 9, v: 6 },
    { n: 'triangular pyramid', f: 4, e: 6, v: 4 },
    { n: 'pentagonal prism', f: 7, e: 15, v: 10 },
    { n: 'hexagonal prism', f: 8, e: 18, v: 12 }
  ];
  const COMPASS = ['north', 'east', 'south', 'west'];
  function shapeQ() {
    const kind = ri(1, 7);
    if (kind === 5) {                      // right angles inside a shape
      const s = pick(SHAPES_2D.filter((x) => x.right > 0 || x.n === 'triangle'));
      const ans = s.n === 'triangle' ? 1 : s.right;
      if (s.n === 'triangle') {
        return mc(
          'How many right angles does a right-angled triangle have?',
          1, [2, 3, 0],
          'It has exactly one square corner. That is where it gets its name.'
        );
      }
      return mc(
        `How many right angles does a ${s.n} have?`,
        ans, [ans - 1, ans + 1, 2],
        `Every corner of a ${s.n} is a square corner, so there are ${ans}.`
      );
    }
    if (kind === 6) {                      // compare an angle to a right angle
      const deg = pick([20, 35, 45, 60, 80, 100, 120, 145, 170]);
      const ans = deg < 90 ? 'smaller than a right angle' : 'bigger than a right angle';
      return mc(
        `An angle measures ${deg} degrees. Is it ___?`,
        ans,
        [deg < 90 ? 'bigger than a right angle' : 'smaller than a right angle',
          'exactly a right angle', 'a full turn'],
        `A right angle is 90 degrees, and ${deg} is ${deg < 90 ? 'less' : 'more'} than that.`
      );
    }
    if (kind === 7) {                      // turns and direction
      const from = pick(COMPASS);
      const turns = ri(1, 3);
      const clockwise = Math.random() < 0.5;
      const i = COMPASS.indexOf(from);
      const ans = COMPASS[(i + (clockwise ? turns : 4 - turns)) % 4];
      return mc(
        `Ava faces ${from} and makes ${turns} quarter turn${turns === 1 ? '' : 's'} ${clockwise ? 'clockwise' : 'anticlockwise'}. Which way is she facing?`,
        ans,
        COMPASS.filter((c) => c !== ans),
        `Each quarter turn is one right angle. Starting at ${from} and turning ${turns} time${turns === 1 ? '' : 's'} ${clockwise ? 'clockwise' : 'anticlockwise'} lands on ${ans}.`
      );
    }
    if (kind === 1) {
      const s = pick(SHAPES_2D);
      return mc(
        `How many sides does a ${s.n} have?`,
        s.sides,
        [s.sides + 1, s.sides - 1, s.sides + 2],
        `A ${s.n} has ${s.sides} sides.`
      );
    }
    if (kind === 2) {
      const s = pick(SHAPES_3D);
      const what = pick(['faces', 'edges', 'vertices (corners)']);
      const ans = what === 'faces' ? s.f : what.startsWith('edges') ? s.e : s.v;
      return mc(
        `How many ${what} does a ${s.n} have?`,
        ans,
        [ans + 1, ans - 1, ans + 2],
        `A ${s.n} has ${ans} ${what}.`
      );
    }
    if (kind === 3) {
      const turns = ri(1, 4);
      const deg = turns * 90;
      const name = turns === 1 ? 'a quarter turn' : turns === 2 ? 'a half turn' : turns === 3 ? 'three quarters of a turn' : 'a full turn';
      return mc(
        `How many right angles are there in ${name}?`,
        turns,
        [turns + 1, turns - 1 || 4, deg],
        `One right angle is a quarter turn, so ${name} is ${turns} right angle${turns === 1 ? '' : 's'}.`
      );
    }
    const pairs = [
      ['Lines that stay the same distance apart and never meet are called', 'parallel', ['perpendicular', 'horizontal', 'vertical']],
      ['Lines that cross at a right angle are called', 'perpendicular', ['parallel', 'horizontal', 'curved']],
      ['A line that goes flat, like the horizon, is', 'horizontal', ['vertical', 'parallel', 'perpendicular']],
      ['A line that goes straight up and down is', 'vertical', ['horizontal', 'parallel', 'diagonal']]
    ];
    const [stem, ans, wrong] = pick(pairs);
    return mc(`${stem} ___.`, ans, wrong,
      `${ans.charAt(0).toUpperCase() + ans.slice(1)} is the word for that.`);
  }

  // ── 13. Data: bar charts, pictograms and tables ──────────────────────────
  const DATA_NOUNS = [
    { items: ['apples', 'pears', 'plums', 'bananas'], what: 'pieces of fruit sold' },
    { items: ['red', 'blue', 'green', 'yellow'], what: 'cars counted' },
    { items: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], what: 'books read' },
    { items: ['dogs', 'cats', 'rabbits', 'hamsters'], what: 'pets in the class' }
  ];
  function dataQ() {
    const set = pick(DATA_NOUNS);
    const vals = set.items.map(() => ri(2, 20));
    const table = set.items.map((it, i) => `${it}: ${vals[i]}`).join('  ·  ');
    const kind = ri(1, 4);
    if (kind === 1) {
      const total = vals.reduce((a, b) => a + b, 0);
      return mc(
        `${table}. How many ${set.what} altogether?`,
        total,
        [total + 10, total - 10, total + 1],
        `Add them all: ${vals.join(' + ')} = ${total}.`
      );
    }
    if (kind === 2) {
      const i = ri(0, 3);
      let j = ri(0, 3);
      while (j === i) j = ri(0, 3);
      const diff = Math.abs(vals[i] - vals[j]);
      return mc(
        `${table}. What is the difference between ${set.items[i]} and ${set.items[j]}?`,
        diff,
        [vals[i] + vals[j], diff + 1, diff - 1],
        `${Math.max(vals[i], vals[j])} − ${Math.min(vals[i], vals[j])} = ${diff}.`
      );
    }
    if (kind === 3) {
      const most = Math.max(...vals);
      const idx = vals.indexOf(most);
      if (vals.filter((v) => v === most).length > 1) return dataQ();
      return mc(
        `${table}. Which has the most?`,
        set.items[idx],
        set.items.filter((_, i) => i !== idx),
        `${set.items[idx]} has ${most}, which is the highest number.`
      );
    }
    const per = pick([2, 5, 10]);
    const symbols = ri(3, 9);
    return mc(
      `On a pictogram each ⭐ stands for ${per} ${set.what}. What do ${symbols} stars mean?`,
      symbols * per,
      [symbols + per, symbols * (per + 1), symbols * per + per],
      `${symbols} × ${per} = ${symbols * per}.`
    );
  }

  const TOPICS = [
    { id: 'place', name: 'Place Value to 1000', icon: '\u{1F522}', gen: placeValue },
    { id: 'counting', name: 'Counting in 4s, 8s, 50s, 100s', icon: '\u{1F3AF}', gen: counting },
    { id: 'add', name: 'Column Addition', icon: '➕', gen: columnAdd },
    { id: 'sub', name: 'Column Subtraction', icon: '➖', gen: columnSub },
    { id: 'mental', name: 'In Your Head', icon: '\u{1F9E0}', gen: mental },
    { id: 'tables', name: '3, 4 and 8 Times Tables', icon: '✖️', gen: tables },
    { id: 'twobyone', name: 'Two Digits × One Digit', icon: '\u{1F9EE}', gen: twoByOne },
    { id: 'fractions', name: 'Fractions and Tenths', icon: '\u{1F355}', gen: fractions },
    { id: 'measure', name: 'Measuring', icon: '\u{1F4CF}', gen: measure },
    { id: 'money', name: 'Money', icon: '\u{1F4B7}', gen: moneyQ },
    { id: 'time', name: 'Telling the Time', icon: '⏰', gen: timeQ },
    { id: 'shape', name: 'Angles and Shape', icon: '\u{1F4D0}', gen: shapeQ },
    { id: 'data', name: 'Charts and Tables', icon: '\u{1F4CA}', gen: dataQ }
  ];

  /** A set of `n` questions from one topic, with no repeated question text. */
  function makeSet(topicId, n) {
    const topic = TOPICS.find((t) => t.id === topicId) || pick(TOPICS);
    const out = [], seen = new Set();
    let guard = 0;
    while (out.length < n && guard++ < n * 60) {
      const q = topic.gen();
      if (seen.has(q.q)) continue;
      seen.add(q.q);
      out.push(q);
    }
    return out;
  }

  /** A mixed paper across every topic, for the daily warm-up. */
  function makeMixed(n) {
    const out = [], seen = new Set();
    let guard = 0;
    while (out.length < n && guard++ < n * 60) {
      const q = pick(TOPICS).gen();
      if (seen.has(q.q)) continue;
      seen.add(q.q);
      out.push(q);
    }
    return out;
  }

  root.Y3_MATHS = { TOPICS, makeSet, makeMixed };
})(typeof window !== 'undefined' ? window : globalThis);
