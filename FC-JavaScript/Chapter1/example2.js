// Boolean

const isTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);

const a = new Boolean(false);

console.log(a, typeof a);

if (a) {
    console.log('false?');
}

const b = Boolean(false);

console.log(b, typeof b);

if (b) {
    console.log('false?');
}

// Null

const c = null;

console.log(c, typeof c);

// Undefined

let d;

console.log(d, typeof d);

d = undefined;

console.log(d, typeof d);

if (c == d) {
    console.log(c == d);
}

if (c === d) {
    console.log(c === d);
}


// Number

const e = 37;

console.log(e, typeof e);

const f = 96.7;

console.log(f, typeof f);

const g = NaN;

console.log(g, typeof g);

const h = Number('Mark');

console.log(h, typeof d);

const i = Number('37');

console.log(i, typeof i);

// String

const ab = 'injung';

console.log(ab, typeof ab);

const cd = "injung" + "Hwang";

const ef = ab + ' Hwang';

console.log(ef, typeof ef);

// template string

const ts = `${ab} Hwang`;
console.log(ts, typeof ts);

//Symbol

const sb = Symbol();
const bs = Symbol(37);
const vs = Symbol('injung');
const sv = Symbol('injung');

console.log(sb, typeof sb);
console.log(vs === sv);

//new Symbol(); // Symbol은 new로 만들면 안된다. 고유함, 생성자로 사용할 수 없음