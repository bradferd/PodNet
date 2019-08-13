const express = require('express')

const podcastApi = require('../models/podcast.js')
const podcastRouter = express.Router({ mergeParams: true })

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
		req.params.playlistId = req.body.playlistId
		const newPodcast = await podcastApi.newPodcast(req.body)
		res.json(newPodcast)
	} catch (err) {
		console.log(err)
	}
})

podcastRouter.put('/:podcastId', async (req, res) => {
	try {
		const editedPodcast = await podcastApi.editPodcast(
			req.params.podcastId,
			req.body
		)
		res.json(editedPodcast)
	} catch (err) {
		console.log(err)
	}
})

podcastRouter.delete('/:podcastId', async (req, res) => {
	try {
		const deletedPodcast = await podcastApi.deletePodcast(req.params.podcastId)
		res.JSON(deletedPodcast)
	} catch (err) {
		console.log(err)
	}
})

module.exports = {
	podcastRouter
}
