const mongoose = require('./connection.js')

const CommentSchema = new mongoose.Schema({
	comment: String,
	author: String,
	podcastId: mongoose.Types.ObjectId
})

const CommentCollection = mongoose.model('Comments', CommentSchema)

const getCommentsByPodcast = podcastId => CommentCollection.find({ podcastId })

const newComment = commentObject => CommentCollection.create(commentObject)

const editComment = (commentId, commentObject) =>
	CommentCollection.findByIdAndUpdate(commentId, commentObject)

const deleteComment = commentId =>
	CommentCollection.findByIdAndDelete(commentId)

module.exports = {}
