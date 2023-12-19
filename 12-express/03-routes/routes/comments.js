const express = require('express')
const {
    getCommentsHandler,
    postCommentsHandler,
    getSingleCommentHandler,
    deleteSingleCommentHandler,
} = require('../controllers/comments')

const commentsRouter = express.Router()

commentsRouter.route('/').get(getCommentsHandler).post(postCommentsHandler)
// commentsRouter.get('/comments', getCommentsHandler)
// commentsRouter.post('/comments', postCommentsHandler)

commentsRouter.get('/:commentId', getSingleCommentHandler)
commentsRouter.delete('/:commentId', deleteSingleCommentHandler)

module.exports = commentsRouter
