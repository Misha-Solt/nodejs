import EventEmitter from 'events'

const myEmitter = new EventEmitter()

const timeoutListenerFn = (secondsQty) =>
    console.log(`Timeout event in ${secondsQty} seconds!`)

myEmitter.on('timeout', timeoutListenerFn)

// myEmitter.emit('timeout')
setTimeout(() => myEmitter.emit('timeout', 1), 1000)
setTimeout(() => myEmitter.emit('timeout', 2), 2000)

// For only one event
myEmitter.once('singleEvent', () => {
    console.log('Single event occured.')
})
setTimeout(() => myEmitter.emit('singleEvent'), 500)
setTimeout(() => myEmitter.emit('singleEvent'), 1500)

// Remove listener from the 'timeout' event
setTimeout(() => myEmitter.off('timeout', timeoutListenerFn), 3000)
setTimeout(() => myEmitter.emit('timeout', 2), 4000)
