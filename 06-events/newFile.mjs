import fs from 'fs'
import { fileEmitter } from './fs-events.mjs'

fileEmitter.on('appendComplete', () => {
    console.log('Appended text to the first.txt file.')
    fs.rename('./first.txt', './renamed-first.txt', () => {
        fileEmitter.emit('renameComplete')
    })
})
