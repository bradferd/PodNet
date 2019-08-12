const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema
 * NOTE: skip this if you are not using mongoose
 *
 */
const PlaylistSchema = new mongoose.Schema({
	name: String,
	description: String,
	genre: String
})

const PodcastCollection = mongoose.model('Podcast', PodcastSchema)

module.exports = {}
