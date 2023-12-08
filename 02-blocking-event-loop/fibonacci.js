//----------------------------Maximum call stack size exceeded--------------------

setTimeout(() => console.log('Timeout'), 0)

const fib = (n) => {
    if (n === 0 || n === 1) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(100000))

//----------------------------Maximum call stack size exceeded--------------------
