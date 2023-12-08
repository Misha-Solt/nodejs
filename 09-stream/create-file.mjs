import fs from 'fs'
import path from 'path'

// console.log(process.argv)
//---------------------------------------------------------
//How to start? Input: node createFile.mjs <filename> <number of lines>
//---------------------------------------------------------

if (!process.argv[2] || !process.argv[3]) {
    console.log('Filename and lines qty must be supplied as arguments')
    process.exit(0)
}
// console.log('Continue...')

const fileName = process.argv[2]
const lineQty = parseInt(process.argv[3])
if (isNaN(lineQty)) {
    console.log('Lines qty must be a number!')
    process.exit(0)
}

const writeStream = fs.createWriteStream(path.join('files', fileName))

console.log('Start', performance.now())

for (let i = 1; i <= lineQty; i++) {
    writeStream.write(
        `This is a line number ${i} in automatically generated file\n`
    )
}

console.log('End', performance.now())
setTimeout(() => console.log('Timeout', performance.now()), 0)

writeStream.end(() => {
    console.log(`Automatically generated file ${fileName} was created!`)
})
