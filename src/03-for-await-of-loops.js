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
  this.ms = ms

  this[Symbol.asyncIterator] = async function* () {
    let current = this.from
    while (current <= this.to) {
      yield await delay(this.ms, current++)
    }
  }

  return this
}

let numbers = [1, 2, 3, 4, 5];

async function main() {
  console.log('for await of delaysWithError')
  try {
    for await (const item of delaysWithError.map(delay)) {
      console.log(item)
    }
  } catch (e) {
    console.error(e)
  }

}

main()