const express = require('express')

const podcastApi = require('../models/podcast.js')
const podcastRouter = express.Router()

podcastRouter.get('/', async (req, res) => {
	try {
		const podcasts = await podcastApi.getPodcastByPlaylist(
			req.params.playlistId
		)
		res.json(podcasts)
	} catch (err) {
		console.log(err)
	}
})

podcastRouter.get('/:podcastId', async (req, res) => {
	try {
		const singlePodcast = await podcastApi.getPodcast(req.params.podcastId)
		res.json(podcastId)
	} catch (err) {
		console.log(err)
	}
})

podcastRouter.post('/', async (req, res) => {
	try {
		const newPodcast = await podcastApi.newPodcast(req.body)
		res.json(newPodcast)
	} catch (err) {
		console.log(err)
	}
})

module.exports = {
	podcastRouter
}
