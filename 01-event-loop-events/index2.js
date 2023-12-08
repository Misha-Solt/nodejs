const fs = require('fs')
const dns = require('dns')

const info = (text) => {
    console.log(text, performance.now().toFixed(2))
}

console.log('Programm start')

//Clouse events
fs.writeFile('./test.txt', 'HelloNode.js', () => info('File written'))

//Promises
Promise.resolve().then(() => info('Promice 1'))

//NextTich
process.nextTick(() => info('NextTick 1'))

//setImmediate (Check)
setImmediate(() => info('Immediate 1'))

//Timeouts
setTimeout(() => info('Timeout 1'), 0)
setTimeout(() => {
    process.nextTick(() => info('Next tick 2'))
    info('Timeout2')
}, 100)

// Intervals
let intervalCount = 0
const intervalId = setInterval(() => {
    info(`Interval ${(intervalCount += 1)}`)
    if (intervalCount === 2) clearInterval(intervalId)
}, 50)

// I/O events
dns.lookup('localhost', (err, address, family) => {
    info('DNS 1 localhost', address)
    Promise.resolve().then(() => info('Promise 2'))
    process.nextTick(() => info('Next tick 3'))
})

console.log('Programm end')
