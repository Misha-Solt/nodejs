import { Transform } from 'stream'
import fs from 'fs'
import { stdin, stdout } from 'process'

const upperCaseStream = new Transform({
    transform: function (chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase()
        cb(null, upperCased)
    },
})

const reverseStringStream = new Transform({
    transform(chunk, encoding, cb) {
        const arrayOfChars = chunk.toString().split('')
        const lastChar = arrayOfChars.pop()
        const reversedString = arrayOfChars.reverse().concat(lastChar).join('')
        cb(null, reversedString)
    },
})

stdin.pipe(upperCaseStream).pipe(reverseStringStream).pipe(stdout)
