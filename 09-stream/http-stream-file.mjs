import http from 'http'
import fs from 'fs'

const PORT = 3001

const server = http.createServer((req, res) => {
    const filePath = './files/index.html'

    // Transfer files WITH stream
    if (req.url === '/' && req.method === 'GET') {
        const readStream = fs.createReadStream(filePath)
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        readStream.pipe(res)
    }
    // Transfer files WITHOUT stream. We need to read entire file and then send it to the client.
    if (req.url === '/no-stream' && req.method === 'GET') {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('Error reading file on server')
            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    }
})

server.listen(PORT, () => {
    console.log(`Server was launched on http://localhost:${PORT}`)
})
