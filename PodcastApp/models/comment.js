const mongoose = require('./connection.js')

const CommentSchema = new mongoose.Schema({
	comment: String,
	author: String,
	podcastId: mongoose.Types.ObjectId
})

const CommentCollection = mongoose.model('Comments', CommentSchema)

module.exports = {}
