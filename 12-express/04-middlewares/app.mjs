import express from 'express'
import morgan from 'morgan'

const app = express()

//logs info about request
app.use(morgan('tiny'))

//x-www-form-urlencoded from client
app.use(express.urlencoded({ extended: true }))

// app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//         let data = ''
//         req.on('data', (chunk) => (data += chunk.toString()))
//         req.on('end', () => {
//             const parsedFormData = qs.parse(data)
//             req.body = parsedFormData
//             next()
//         })
//     } else {
//         next()
//     }
// })

// JSON from client
app.use(express.json())

// app.use((req, res, next) => {
//     let data = ''
//     req.on('data', (chunk) => (data += chunk))
//     req.on('end', () => {
//         const parsedJSON = JSON.parse(data)
//         req.body = parsedJSON
//         next()
//     })
// })


app.use((req, res) => {
    console.log(req.body)
    return res.send('This is express server')
})

app.listen(5000, () => console.log('Server listening at port 5000'))
