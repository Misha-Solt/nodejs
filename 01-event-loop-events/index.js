const fs = require('fs')
const dns = require('dns')

const timestamp = () => {
    return performance.now().toFixed(2)
}

console.log('Programm start', timestamp())

//Clouse events
fs.writeFile('./test.txt', 'HelloNode.js', () =>
    console.log('File written', timestamp())
)

//Promises
Promise.resolve().then(() => console.log('Promice 1', timestamp()))

//NextTich
process.nextTick(() => console.log('NextTick 1', timestamp()))

//setImmediate (Check)
setImmediate(() => console.log('Immediate 1', timestamp()))

//Timeouts
setTimeout(() => console.log('Timeout 1', timestamp()), 0)
setTimeout(() => {
    process.nextTick(() => console.log('Next tick 2', timestamp()))
    console.log('Timeout 2', timestamp())
}, 100)

// Intervals
let intervalCount = 0
const intervalId = setInterval(() => {
    console.log(`Interval ${(intervalCount += 1)}`, timestamp())
    if (intervalCount === 2) clearInterval(intervalId)
}, 50)

// I/O events
dns.lookup('localhost', (err, address, family) => {
    console.log('DNS 1 localhost', address, timestamp())
    Promise.resolve().then(() => console.log('Promice 2', timestamp()))
    process.nextTick(() => console.log('Next tick 3', timestamp()))
})

console.log('Programm end', timestamp())
