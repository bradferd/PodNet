const express = require('express')
const podcastSearchRouter = express.Router({ mergeParams: true })
const axios = require('axios')

require('dotenv').config()

let listenApi = axios.create({
	baseURL: 'https://listen-api.listennotes.com/api/v2',
	headers: {
		'X-ListenAPI-Key': `${process.env.ListenAPIKey}`
	}
})

podcastSearchRouter.get('/', async (req, res) => {
	try {
		console.log('hey')
		const response = await listenApi.get('/search', {
			params: { q: req.query.query }
		})
		console.log(response)
		res.json(response.data)
	} catch (err) {
		console.log(err)
	}
})

module.exports = {
	podcastSearchRouter
}
