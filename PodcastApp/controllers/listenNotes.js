const express = require('express')
const podcastSearchRouter = express.Router({ mergeParams: true })
const axios = require('axios')

require('dotenv').config()

let listenApi = axios.create({
	baseURL: 'https://listen-api.listennotes.com/api/v2',
	headers: {
		Authorization: `Client-ID ${process.env.ListenAPIKey}`
	}
})

podcastSearchRouter.get('/', async (req, res) => {
	try {
		const response = await listenApi.get('/search/photos', {
			params: { query: req.query.query }
		})
		res.json(response.data)
	} catch (err) {
		console.log(err)
	}
})

module.exports = {
	imageSearchRouter
}
