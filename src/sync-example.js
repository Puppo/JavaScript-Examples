import {fibonacci} from './fibonacci.js';

let lastTime = Date.now();
const intervalId = setInterval(() => {
  const now = Date.now();
  console.log(`Interval after ${now - lastTime}ms`);
  lastTime = now;
}, 500);

const res = fibonacci(45);
console.log(`fibonacci(45):`, res);
clearInterval(intervalId);