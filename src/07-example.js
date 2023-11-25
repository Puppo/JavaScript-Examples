import {select} from '@inquirer/prompts';

Promise.withResolvers = Promise.withResolvers ?? function() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

function delay(ms) {
  const { promise, resolve } = Promise.withResolvers();
  setTimeout(() => {
    resolve(ms)
  }, ms);
  return promise;
}

function delayWithError(ms) {
  const { promise, reject } = Promise.withResolvers();
  setTimeout(() => {
    reject(new Error('Error!'))
  }, ms);
  return promise;
}

function exampleWithoutError() {
  return delay(2000)
  .then((ms) => {
    console.log(`delay ${ms}ms resolved`)
  })
  .catch((error) => {
    console.error(`delay rejected! ${error.message}`)
  })
}

function exampleWithError() {
  return delayWithError(2000)
  .then((ms) => {
    console.log(`delay ${ms}ms resolved`)
  })
  .catch((error) => {
    console.error(`delay rejected! ${error.message}`)
  })
}

async function main() {
  const option = await select({
    type: 'list',
    name: 'choice',
    message: 'Select an example',
    choices: [{
      name: 'Promise.withResolvers Without Error',
      value: exampleWithoutError
    }, {
      name: 'Promise.withResolvers With Error',
      value: exampleWithError
    }]
  })

  await option()
}

main()