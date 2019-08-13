const express = require('express')

const commentApi = require('../models/comment.js')
const commentRouter = express.Router({ mergeParams: true })

commentRouter.get('/', async (req, res) => {
	try {
		const comments = await commentApi.getCommentsByPodcast(req.params.podcastId)
		res.json(comments)
	} catch (err) {
		console.log(err)
	}
})

commentRouter.get('/:commentId', async (req, res) => {
	try {
		const comment = await commentApi.getComment(req.params.commentId)
		res.json(comment)
	} catch (err) {
		console.log(err)
	}
})

commentRouter.post('/', async (req, res) => {
	try {
		req.params.podcastId = req.body.podcastId
		const newComment = await commentApi.newComment(req.body)
	} catch (err) {
		console.log(err)
	}
})

commentRouter.put('/:commentId', async (req, res) => {
	try {
		const updatedComment = await commentApi.editComment(
			req.params.commentId,
			req.body
		)
		res.json(updatedComment)
	} catch (err) {
		console.log(err)
	}
})

commentRouter.delete('/:commentId', async (req, res) => {
	try {
		const deletedComment = await commentApi.deleteComment(req.params.commentId)
		res.json(deletedComment)
	} catch (err) {
		console.log(err)
	}
})

module.exports = {
	commentRouter
}
