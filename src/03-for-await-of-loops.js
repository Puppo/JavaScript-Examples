const delay = (ms, v) => new Promise((resolve) => setTimeout(() => {
  console.log(`delay ${ms}ms resolved with ${v}`)
  resolve(v)
}, ms))
const delays = [2000, 1000, 3000]

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

async function main() {
  console.log('for await of delays')
  for await (const item of delays.map(delay)) {
    console.log(item)
  }

  console.log('\nfor await of range with delay')
  for await (const item of new RangeWithDelay(1, 5, 1000)) {
    console.log(item)
  }
}

main()