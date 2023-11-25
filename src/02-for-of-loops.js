let numbers = [1, 2, 3, 4, 5];
let string = 'Hello World!';
let strings = ['Hello', 'World', '!'];

function Range(start, end) {
  this.start = start;
  this.end = end;

  this[Symbol.iterator] = function*() {
    let current = this.start;
    while (current <= this.end) {
      yield current++;
    }
  }

  return this;
}

console.log('for of numbers');
for (const n of numbers) {
  console.log(n);
}

console.log('\nfor of string');
for (const c of string) {
  console.log(c);
}

console.log('\nfor of strings');
for (const s of strings) {
  console.log(s);
}

console.log('\nfor of range');
for (const n of new Range(1, 5)) {
  console.log(n);
}