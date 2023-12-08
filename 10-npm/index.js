const safer = require('safer-buffer')

// console.log(safer)

// Install without dev modules:

// npm i --omit=dev  ||  npm i --only=prod

// Install module only for dev =>  npm i -D <Module name>

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello from Express!')
})

app.listen(3000)
