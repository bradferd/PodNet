const mongoose = require('./connection.js')

const PodcastSchema = new mongoose.Schema({
	title: String,
	host: String,
	genre: String,
	duration: String,
	description: String,
	playlistID: mongoose.Types.ObjectId
})

const PlaylistCollection = mongoose.model('Playlist', PlaylistSchema)

module.exports = {}
