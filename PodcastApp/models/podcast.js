const mongoose = require('./connection.js')

const PodcastSchema = new mongoose.Schema({
	title: String,
	host: String,
	genre: String,
	duration: String,
	description: String,
	playlistID: mongoose.Types.ObjectId
})

const PodcastCollection = mongoose.model('Podcasts', PodcastSchema)

module.exports = {}
