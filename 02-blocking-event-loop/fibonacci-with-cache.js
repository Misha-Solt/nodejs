// -------------------- Without error, but cache ------------------------

setTimeout(() => console.log('Timeout'), 0)

const cache = new Map()
const fib = (n) => {
    return new Promise((res, rej) => {
        if (n === 0 || n === 1) {
            return res(n)
        }
        if (cache.has(n)) {
            return res(cache.get(n))
        }
        setImmediate(() =>
            fib(n - 1).then((fib1) =>
                fib(n - 2).then((fib2) => {
                    cache.set(n, fib1 + fib2)
                    res(fib1 + fib2)
                })
            )
        )
    })
}

fib(40).then((res) => console.log(res))
