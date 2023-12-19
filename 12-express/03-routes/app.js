const express = require('express')
const router = require('./routes/index')

const app = express()

app.use(router)

app.listen(3000, (req, res) => console.log('Server was started on port 3000'))
