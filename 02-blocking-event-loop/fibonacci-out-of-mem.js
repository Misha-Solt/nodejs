//-----FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory----

setTimeout(() => console.log('Timeout'), 0)

const fib = (n) => {
    return new Promise((res, rej) => {
        if (n === 0 || n === 1) {
            return res(n)
        }
        setImmediate(() =>
            Promise.all([fib(n - 1), fib(n - 2)]).then(([fib1, fib2]) =>
                res(fib1 + fib2)
            )
        )
    })
}

fib(29).then((res) => console.log(res))
