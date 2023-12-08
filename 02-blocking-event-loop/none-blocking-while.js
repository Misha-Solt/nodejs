const fs = require('fs')

let isRunning = true

setTimeout(() => (isRunning = false), 10)

process.nextTick(() => console.log('Next Tick'))

const setImmediatePromise = () => {
    return new Promise((res, rej) => {
        setImmediate(() => res())
        // With res() we stay on the same event loop iteration
        // res()
    })
}

const whileLoop = async () => {
    while (isRunning) {
        console.log('While loop is running...')
        await setImmediatePromise()
    }
}

whileLoop().then(() => console.log('While loop ended'))
