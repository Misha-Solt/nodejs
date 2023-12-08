import fs from 'fs'
import { join } from 'path'

const sourseDir = './files'
const destinationDir = './copied-files'

if (!fs.existsSync(sourseDir)) {
    console.warn(`Sourse dir ${sourseDir} doesn't exist!`)
    console.log('Exiting...')
    process.exit(0)
}
if (fs.existsSync(destinationDir)) {
    // fs.rmdirSync(destinationDir)
    fs.rmSync(destinationDir, { recursive: true })
    // console.log(`${destinationDir} was removed`)
}
fs.mkdirSync(destinationDir)

fs.readdir(sourseDir, (err, fileNames) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    // console.log(fileNames)
    fileNames.forEach((fileName, index) => {
        const sourseFilePath = join(sourseDir, fileName)
        const destinationFilePath = join(
            destinationDir,
            `${index + 1}. ${fileName}`
        )

        const readFileStream = fs.createReadStream(sourseFilePath)
        const writeFileStream = fs.createWriteStream(destinationFilePath)

        readFileStream.pipe(writeFileStream)

        writeFileStream.on('finish', () => {
            console.log(`File ${fileName} was copied`)
        })
    })
})
