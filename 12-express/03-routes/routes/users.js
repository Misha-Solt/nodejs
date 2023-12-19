const express = require('express')
const {
    getUsersHandler,
    postUsersHandler,
    getSingleUserHandler,
} = require('../controllers/users')

const usersRouter = express.Router()

usersRouter.get('/', getUsersHandler)
usersRouter.post('/', postUsersHandler)
usersRouter.get('/:userId', getSingleUserHandler)

module.exports = usersRouter
