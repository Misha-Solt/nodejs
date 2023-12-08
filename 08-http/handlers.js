const fs = require('fs')
const qs = require('querystring')
const comments = require('./data')
const { receiveMessageOnPort } = require('worker_threads')

function getHome(req, res) {
    fs.readFile('./files/form.html', (err, data) => {
        if (err) {
            res.statusCode = 500
            console.log(err)
            res.setHeader('Content-Type', 'text/plain')
            res.end('Server error while loading HTML file')
        } else {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        }
    })
}

const getHtml = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/HTML')
    res.write('<html><body><div>')
    res.write('<h1>Greetings from http server!</h1>')
    res.write('</html></body></div>')
    res.end()
}

const getText = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Just plain text.')
}

const getComments = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(comments))
}

const postComment = (req, res) => {
    res.setHeader('Content-Type', 'text/plain')

    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        })
        req.on('end', () => {
            try {
                const comment = qs.parse(body)
                comment.id = parseInt(comment.id)
                comments.push(comment)
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.write(
                    '<h1 style="text-align:center; color:blue">Comment data was received</h1>'
                )
                res.write('<a href="/">Submit one more comment</a>')
                res.end()
            } catch (error) {
                res.statusCode = 400
                res.end('Invalid Form data')
            }
        })
    } else if (req.headers['content-type'] === 'application/json') {
        let commentJSON = ''
        req.on('data', (chunk) => (commentJSON += chunk))
        req.on('end', () => {
            try {
                comments.push(JSON.parse(commentJSON))
                res.statusCode = 200
                res.end('Comment data was received')
            } catch (error) {
                res.statusCode = 400
                res.end('Invalid JSON')
            }
        })
    } else {
        res.statusCode = 400
        res.end('Data must be in JSON format or as form.')
    }
}

const handleNotFound = (req, res) => {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Page not found </h1>')
}
module.exports = {
    getComments,
    getHtml,
    getText,
    handleNotFound,
    postComment,
    getHome,
}
