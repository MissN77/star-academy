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

  // Teaching comes BEFORE the questions. A child cannot be expected to score
  // well on something nobody has shown her. Each card is: the rule in plain
  // words, then a worked example she can copy the method from.
  const TOPICS = [
    { id: 'place', name: 'Place Value to 1000', icon: '\u{1F522}', gen: placeValue,
      rule: 'Every digit is worth something different depending on where it sits. Reading from the right: ones, tens, hundreds.',
      points: [
        'In 472 the 4 means 400, the 7 means 70 and the 2 means 2.',
        'A zero is a placeholder. It keeps the other digits in the right column, so 205 is not the same as 25.',
        'To find 10 more, only the tens digit changes. To find 100 more, only the hundreds digit changes.',
        'To round to the nearest 10, look at the ones digit. 5 or more rounds up, less than 5 rounds down.'
      ],
      example: { q: 'What is the value of the 6 in 364?', steps: ['Start at the right: 4 is ones, 6 is tens, 3 is hundreds.', 'The 6 is in the tens column.', '6 tens is 60.'], a: '60' } },

    { id: 'counting', name: 'Counting in 4s, 8s, 50s, 100s', icon: '\u{1F3AF}', gen: counting,
      rule: 'A sequence follows a rule. Find what is added or taken away each time, then keep doing it.',
      points: [
        'Work out the gap between the first two numbers, then check it is the same gap all the way along.',
        'Counting in 8s is just counting in 4s twice: 4, 8, 12, 16 becomes 8, 16, 24, 32.',
        'A sequence can start anywhere. 3, 7, 11, 15 goes up in 4s even though none of them are in the 4 times table.',
        'Going backwards, you take the gap away each time.'
      ],
      example: { q: 'Count on in 50s: 130, 180, 230, 280, ___', steps: ['180 − 130 = 50, so the rule is add 50.', 'Check the next gap: 230 − 180 = 50. Same rule.', '280 + 50 = 330.'], a: '330' } },

    { id: 'add', name: 'Column Addition', icon: '➕', gen: columnAdd,
      rule: 'Line the numbers up in their columns and add the ones first, then the tens, then the hundreds.',
      points: [
        'Ones under ones, tens under tens, hundreds under hundreds. Never line them up on the left.',
        'If a column comes to 10 or more, write the ones digit and carry the ten into the next column.',
        'The carried digit gets added on at the top of the next column. Do not forget it.',
        'Estimate first: 276 + 348 is roughly 280 + 350, so about 630. If your answer is nowhere near, check it.'
      ],
      example: { q: '276 + 348', steps: ['Ones: 6 + 8 = 14. Write 4, carry 1.', 'Tens: 7 + 4 = 11, plus the carried 1 = 12. Write 2, carry 1.', 'Hundreds: 2 + 3 = 5, plus the carried 1 = 6.'], a: '624' } },

    { id: 'sub', name: 'Column Subtraction', icon: '➖', gen: columnSub,
      rule: 'Line them up in columns and take away the ones first, then the tens, then the hundreds.',
      points: [
        'The bigger number always goes on top.',
        'If the top digit is too small, exchange: take one from the column to its left. Ten ones for one ten, or ten tens for one hundred.',
        'Cross out the digit you took from and write what is left above it, so you do not lose track.',
        'Check by adding your answer back on to the number you took away. It should give you the number you started with.'
      ],
      example: { q: '523 − 176', steps: ['Ones: 3 is smaller than 6, so exchange a ten. 13 − 6 = 7.', 'Tens: the 2 became 1, and 1 is smaller than 7, so exchange a hundred. 11 − 7 = 4.', 'Hundreds: the 5 became 4. 4 − 1 = 3.'], a: '347' } },

    { id: 'mental', name: 'In Your Head', icon: '\u{1F9E0}', gen: mental,
      rule: 'Adding 1, 10 or 100 changes ONE digit. You do not need to write anything down.',
      points: [
        'Add 1 and only the ones digit changes. Add 10 and only the tens digit changes. Add 100 and only the hundreds digit changes.',
        'Watch for the moment a column fills up: 10 more than 395 is 405, not 3105.',
        'Adding 20 is just adding 10 twice. Adding 200 is adding 100 twice.',
        'Say the number out loud in your head as you change it.'
      ],
      example: { q: '473 + 100', steps: ['Only the hundreds digit changes.', '4 hundreds becomes 5 hundreds.', 'The 7 and the 3 stay exactly as they are.'], a: '573' } },

    { id: 'tables', name: '3, 4 and 8 Times Tables', icon: '✖️', gen: tables,
      rule: 'These three tables are the Year 3 ones. Knowing them by heart makes everything else quicker.',
      points: [
        'The 4 times table is double the 2 times table. The 8 times table is double the 4s.',
        'Every answer in the 3 times table has digits that add up to 3, 6 or 9. 24 gives 2 + 4 = 6.',
        'Multiplying works in any order: 8 × 3 is the same as 3 × 8.',
        'Every times fact is also a dividing fact. If 4 × 7 = 28, then 28 ÷ 4 = 7 and 28 ÷ 7 = 4.'
      ],
      example: { q: '8 × 6', steps: ['You may know 4 × 6 = 24.', '8 is double 4, so double the answer.', '24 doubled is 48.'], a: '48' } },

    { id: 'twobyone', name: 'Two Digits × One Digit', icon: '\u{1F9EE}', gen: twoByOne,
      rule: 'Split the two-digit number into tens and ones, multiply each part, then add the two answers.',
      points: [
        'Break 34 into 30 and 4. They are much easier to multiply separately.',
        'Multiply the tens first, because it gives you the biggest part of the answer.',
        'Then multiply the ones and add the two results together.',
        'Estimate to check: 34 × 6 is roughly 30 × 6 = 180, so an answer of 204 is sensible and an answer of 84 is not.'
      ],
      example: { q: '34 × 6', steps: ['30 × 6 = 180.', '4 × 6 = 24.', '180 + 24 = 204.'], a: '204' } },

    { id: 'fractions', name: 'Fractions and Tenths', icon: '\u{1F355}', gen: fractions,
      rule: 'The bottom number says how many equal parts the whole is cut into. The top number says how many of those parts you have.',
      points: [
        'To find a fraction of an amount: divide by the BOTTOM, then multiply by the TOP.',
        'When the bottoms match, the fraction with the bigger top is bigger. 5/8 beats 3/8.',
        'To add fractions with the same bottom number, add the tops and leave the bottom alone.',
        'Multiply the top and bottom by the same number and the fraction is worth exactly the same: 1/2 = 2/4 = 5/10.'
      ],
      example: { q: 'What is 3/5 of 40?', steps: ['Divide by the bottom: 40 ÷ 5 = 8. That is one fifth.', 'Multiply by the top: 8 × 3 = 24.', 'So 3/5 of 40 is 24.'], a: '24' } },

    { id: 'measure', name: 'Measuring', icon: '\u{1F4CF}', gen: measure,
      rule: 'Before you compare or add measurements, change them into the SAME unit.',
      points: [
        '10 millimetres make 1 centimetre. 100 centimetres make 1 metre. 1000 metres make 1 kilometre.',
        '1000 grams make 1 kilogram. 1000 millilitres make 1 litre.',
        'To go to the smaller unit you multiply. To go to the bigger unit you divide.',
        'Perimeter is the distance all the way round the edge. Add every side.'
      ],
      example: { q: '3 m and 45 cm is how many centimetres?', steps: ['1 metre is 100 cm, so 3 metres is 3 × 100 = 300 cm.', 'Now add the extra 45 cm.', '300 + 45 = 345 cm.'], a: '345 cm' } },

    { id: 'money', name: 'Money', icon: '\u{1F4B7}', gen: moneyQ,
      rule: 'Turn everything into pence, do the sum, then turn the answer back into pounds.',
      points: [
        '£1 is 100p. So £3.45 is 345p.',
        'Put both amounts in the same form before you add or subtract. Never mix pounds and pence in one sum.',
        'To find change, take the cost away from what you paid.',
        'When you write the answer in pounds, there are always TWO digits after the dot: £4.50, not £4.5.'
      ],
      example: { q: 'You pay with £5 for something costing £1.36. What is the change?', steps: ['£5 is 500p and £1.36 is 136p.', '500 − 136 = 364p.', '364p is £3.64.'], a: '£3.64' } },

    { id: 'time', name: 'Telling the Time', icon: '⏰', gen: timeQ,
      rule: 'Past the hour for the first half, to the NEXT hour for the second half.',
      points: [
        'Up to 30 minutes you say "past" and use the hour you have just had. After 30 you say "to" and use the hour coming next.',
        '15 minutes is a quarter, 30 minutes is a half, 45 minutes is a quarter to the next hour.',
        'For a duration, count on to the next o\'clock first, then count the rest.',
        'On a 24-hour clock, anything from 13:00 onwards means take 12 away: 19:30 is half past 7 in the evening.'
      ],
      example: { q: 'A film starts at 2:40 and lasts 35 minutes. When does it end?', steps: ['From 2:40, count on 20 minutes to reach 3:00.', 'You have used 20 of the 35, so 15 minutes are left.', '15 minutes past 3 is 3:15.'], a: '3:15' } },

    { id: 'shape', name: 'Angles and Shape', icon: '\u{1F4D0}', gen: shapeQ,
      rule: 'A right angle is a square corner. It is a quarter of a full turn.',
      points: [
        'One right angle is a quarter turn. Two is a half turn. Four right angles make a full turn all the way round.',
        'An angle smaller than a right angle is acute. Bigger than a right angle is obtuse.',
        'Parallel lines stay the same distance apart and never meet. Perpendicular lines cross at a right angle.',
        'For 3D shapes: faces are the flat surfaces, edges are where two faces meet, vertices are the corners.'
      ],
      example: { q: 'You face north and make 2 quarter turns clockwise. Which way are you facing?', steps: ['Clockwise from north goes north, east, south, west.', 'One quarter turn takes you to east.', 'A second quarter turn takes you to south.'], a: 'South' } },

    { id: 'data', name: 'Charts and Tables', icon: '\u{1F4CA}', gen: dataQ,
      rule: 'Read the labels and the key BEFORE you look at the numbers.',
      points: [
        'On a bar chart, check what each line on the side is worth. It is not always 1.',
        'On a pictogram, the key tells you what one symbol stands for. Half a symbol is half of that.',
        '"How many altogether" means add them all up. "How many more" means find the difference.',
        'Answer the question that was asked. It is easy to find the biggest bar when it asked you for the smallest.'
      ],
      example: { q: 'On a pictogram each star stands for 5 books. How many books do 6 stars mean?', steps: ['Check the key first: one star is 5 books.', 'There are 6 stars.', '6 × 5 = 30 books.'], a: '30 books' } }
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
