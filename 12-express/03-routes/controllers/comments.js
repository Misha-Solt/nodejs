const getCommentsHandler = (req, res) => {
    res.send('Get comments route.')
}
const postCommentsHandler = (req, res) => {
    res.send('Post comments route.')
}
const getSingleCommentHandler = (req, res) => {
    res.send(`Get comment route. CommentId: ${req.params.commentId}`)
}
const deleteSingleCommentHandler = (req, res) => {
    res.send(`Delete comment route. CommentId: ${req.params.commentId}`)
}

module.exports = {
    getCommentsHandler,
    postCommentsHandler,
    getSingleCommentHandler,
    deleteSingleCommentHandler,
}
