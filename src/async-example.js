import {Worker} from 'node:worker_threads';

let lastTime = Date.now();
const intervalId = setInterval(() => {
  const now = Date.now();
  console.log(`Interval after ${now - lastTime}ms`);
  lastTime = now;
}, 500);

const worker = new Worker(new URL('./worker.js', import.meta.url), {
  workerData: {
    n: 45
  }
});
worker.on('message', (event) => {
  console.log(`fibonacci(45):`, event);
})
.on('error', (error) => {
  console.log(`error:`, error);
})
.on('exit', (code) => {
  console.log(`exit:`, code);
  clearInterval(intervalId);
})