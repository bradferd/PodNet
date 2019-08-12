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

const getPodcastsByPlaylist = playlistId =>
	PodcastCollection.find({ podcastId })

const getPodcast = podcastId => PodcastCollection.find(podcastId)

const newPodcast = podcastObject => PodcastCollection.create(podcastObject)

const editPodcast = (podcastId, podcastObject) =>
	PodcastCollection.findByIdAndUpdate(podcastId, podcastObject)

const deletePodcast = podcastId =>
	PodcastCollection.findByIdAndDelete(podcastId)

module.exports = {
	getPodcastsByPlaylist,
	getPodcast,
	newPodcast,
	editPodcast,
	deletePodcast
}
