const express = require('express')

const playlistApi = require('../models/playlist.js')
const playlistRouter = express.Router()

playlistRouter.get('/', async (req, res) => {
	const playlists = await playlistApi.getAllPlaylist()
	res.json(playlists)
})

playlistRouter.get('/:playlistId', async (req, res) => {
	try {
		const playlist = await playlistApi.getPlaylist(req.params.playlistId)
		res.json(playlist)
	} catch (err) {
		console.log(err)
	}
})

playlistRouter.post('/', async (req, res) => {
	try {
		const newPlaylist = await playlistApi.addNewPlaylist(req.body)
		res.json(newPlaylist)
	} catch (err) {
		console.log(err)
	}
})

playlistRouter.put('/:playlistId', async (req, res) => {
	try {
		const updatedPlaylist = await playlistApi.updatePlaylist(
			req.params.playlistId,
			req.body
		)
		res.json(updatedPlaylist)
	} catch (err) {
		console.log(err)
	}
})

playlistRouter.delete('/:playlistId', async (req, res) => {
	try {
		const deletedPlaylist = await playlistApi.deletePlaylist(
			req.params.playlistId
		)
		res.json(deletedPlaylist)
	} catch (err) {
		console.log(err)
	}
})

module.exports = {
	playlistRouter
}
