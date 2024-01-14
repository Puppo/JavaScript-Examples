const delay = (ms, v) => new Promise((resolve, reject) => {
  if (!ms) {
    return reject(new Error(`ms should be greater than 0 but it's equals to ${ms}`))
  }
  setTimeout(() => {
  console.log(`delay ${ms}ms resolved with ${v}`)
  resolve(v)
}, ms)
})
const delays = [2000, 1000, 3000]
const delaysWithError = [3000, 1000, 0]

function RangeWithDelay(from, to, ms) {
  this.from = from
  this.to = to
  this.delay = delay

  this[Symbol.asyncIterator] = async function* () {
    let current = this.from
    while (current <= this.to) {
      yield await delay(ms, current++)
    }
  }

  return this
}

let numbers = [1, 2, 3, 4, 5];

async function main() {
  console.log('\nfor await of range with delay')
  for await (const item of new RangeWithDelay(1, 5, 1000)) {
    console.log(item)
  }

  console.log('\n for await with array')
  for await (const item of numbers) {
    console.log(item)
  }

  console.log('for await of delays')
  for await (const item of delays.map(delay)) {
    console.log(item)
  }

  console.log('for await of delaysWithError')
  for await (const item of delaysWithError.map(delay)) {
    console.log(item)
  }
}

main()