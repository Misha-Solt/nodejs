const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Response from Express'))

app.listen(3000, (req, res) => console.log('Server was started on port 3000'))

// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('Response from the server')
// })

// const server = http.createServer(app)

// server.listen(3000, () => console.log('Server was started on port 3000'))
