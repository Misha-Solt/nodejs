const express = require('express')

const app = express()
const firstHandler = (req, res, next) => {
    console.log('First Handler')
    next()
}
const secondHandler = (req, res) => {
    res.send('Response from Express')
    console.log('Second Handler')
}

app.get('/', firstHandler, secondHandler)

app.listen(3000, (req, res) => console.log('Server was started on port 3000'))
