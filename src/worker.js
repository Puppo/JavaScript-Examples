import {fibonacci} from './fibonacci.js';

import {parentPort, workerData} from 'node:worker_threads';

console.log('worker.js');
const { n } = workerData;
const res = fibonacci(n);
parentPort.postMessage(res);