import {select} from '@inquirer/prompts';

const delay = (ms, r) => new Promise(resolve => {
  setTimeout(() => {
    console.log(`delay ${ms}ms resolved with ${r}`)
    resolve(r)
  }, ms)
});

const delayWithError = (ms) => new Promise((_, reject) => {
  setTimeout(() => {
    console.log(`delay ${ms}ms rejected`)
    reject(new Error('Error!'))
  }, ms)
})

function generatePromisesWithoutError() {
  return [
    delay(1000, '1'),
    delay(3000, '2'),
    delay(5000, '3'),
  ]
}

function generatePromisesWithError() {
  return [
    delay(1000, '1'),
    delayWithError(3000),
    delay(5000, '3'),
  ]
}

async function allWithoutError() {
  await Promise.all(generatePromisesWithoutError())
  .then((values) => {
    console.log('All resolved!', values);
  })
  .catch((error) => {
    console.error('All rejected!', error.message);
  })
}

async function allWithError() {
  await Promise.all(generatePromisesWithError())
  .then((values) => {
    console.log('All resolved!', values);
  })
  .catch((error) => {
    console.error('All rejected!', error.message);
  })
}

async function raceWithoutError() {
  await Promise.race(generatePromisesWithoutError())
  .then((values) => {
    console.log('Race resolved!', values);
  })
  .catch((error) => {
    console.error('Race rejected!', error.message);
  })
}

async function raceWithError() {
  await Promise.race(generatePromisesWithError())
  .then((values) => {
    console.log('Race resolved!', values);
  })
  .catch((error) => {
    console.error('Race rejected!', error.message);
  })
}

async function anyWithoutError() {
  await Promise.any(generatePromisesWithoutError())
  .then((values) => {
    console.log('Any resolved!', values);
  })
  .catch((error) => {
    console.error('Any rejected!', error.message);
  })
}

async function allSettledWithError() {
  await Promise.allSettled(generatePromisesWithError())
  .then((values) => {
    console.log('AllSettled resolved!', values);
  })
  .catch((error) => {
    console.error('AllSettled rejected!', error.message);
  })
}

async function allSettledWithoutError() {
  await Promise.allSettled(generatePromisesWithoutError())
  .then((values) => {
    console.log('AllSettled resolved!', values);
  })
  .catch((error) => {
    console.error('AllSettled rejected!', error.message);
  })
}

async function anyWithError() {
  await Promise.any(generatePromisesWithError())
  .then((values) => {
    console.log('Any resolved!', values);
  })
  .catch((error) => {
    console.error('Any rejected!', error.message);
  })
}

async function main() {
  const option = await select({
    type: 'list',
    name: 'choice',
    message: 'Select an example',
    choices: [{
      name: 'Promise.all Without Error',
      value: allWithoutError
    }, {
      name: 'Promise.all With Error',
      value: allWithError
    }, {
      name: 'Promise.race Without Error',
      value: raceWithoutError
    }, {
      name: 'Promise.race With Error',
      value: raceWithError
    }, {
      name: 'Promise.allSettled Without Error',
      value: allSettledWithoutError
    }, {
      name: 'Promise.allSettled With Error',
      value: allSettledWithError
    }, {
      name: 'Promise.any Without Error',
      value: anyWithoutError
    }, {
      name: 'Promise.any With Error',
      value: anyWithError
    }]
  })

  await option()
}

main()