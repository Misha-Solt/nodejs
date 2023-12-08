// console.log('Hi World from Node.js')
// const myName = 'Misha'
// console.log(myName)

// const hello = 'Hello'
// const world = 'World'
// const greetings = hello + ' ' + world
// console.log(greetings)
// const greetings2 = `${hello} ${world}`
// console.log(greetings2)

// function myFn(a, b) {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }
// let d = myFn(2, 3)
// console.log(d)

// const myArrFn = (a, b) => {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }

// console.log(myArrFn(2, 3))

const personOne = {
    name: 'bob',
    age: 20,
}
const increaseAge = (person) => {
    person.age += 1
    return person
}
console.log(increaseAge(personOne))
console.log(increaseAge(personOne))
console.log(increaseAge(personOne))

function printMyName() {
    console.log('Misha')
}
setTimeout(printMyName, 1000)

console.log(typeof personOne)

console.log(!!1 || null)

const newPerson = {
    ...personOne,
    height: 1.8,
}
console.table(newPerson)

let value = -11
console.log(value >= 0 ? value : -value)

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment')
console.log(firstComment.votesQty)
firstComment.upvote()
firstComment.upvote()
firstComment.upvote()
firstComment.upvote()
console.log(firstComment.votesQty)

class extendedArray extends Array {
    info() {
        return `Array has ${this.length} elements`
    }
}

const myArray = new extendedArray(2, 4, 6)

console.log(myArray.info())
//----------------------------------------------------------
const myPromise = new Promise((res, rej) => {})
myPromise.then((value) => {}).catch((error) => {})
//----------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error))

async function fetchData(url) {
    try {
        const res = await fetch(url)
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
const url = 'https://jsonplaceholder.typicode.com/posts/1'
fetchData(url).then((data) => {
    console.log(data)
})

