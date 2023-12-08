const path = require('path')

const filePath = '/home/um/bogdan/index.js'
const textfilePath = '/home/um/bogdan/node/file.txt'
const relativePath = './node/movie.mov'
const directoryPath = './node/subfolder'

console.log(path.isAbsolute(filePath)) //true
console.log(path.isAbsolute(relativePath)) //false

console.log(path.basename(filePath)) //index.js
console.log(path.basename(directoryPath)) //index.js

console.log(path.dirname(filePath)) // /home/um/bogdan
console.log(path.dirname(directoryPath)) // ./node

console.log(path.resolve(relativePath)) // /home/um/bogdan/node/07-path/node/movie.mov
console.log(path.extname(textfilePath)) //.txt
console.log(path.extname(directoryPath)) //

console.log(path.parse(filePath))

const parsedPath = path.parse(filePath)
console.log(filePath) // /home/um/bogdan/index.js
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`)) // /home/um/bogdan/renamed-index.mjs
