const mongoose = require('./connection.js')

const PodcastSchema = new mongoose.Schema({
	publisher: String,
	title: String,
	description: String,
	thumbnail: String,
	audio: String,
	playlistId: mongoose.Types.ObjectId
})

const PodcastCollection = mongoose.model('Podcasts', PodcastSchema)

const getPodcastsByPlaylist = playlistId =>
	PodcastCollection.find({ playlistId })

const getPodcast = podcastId => PodcastCollection.findById(podcastId)

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
