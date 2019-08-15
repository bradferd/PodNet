const express = require('express')
const app = express()

const { playlistRouter } = require('./controllers/playlist.js')
const { podcastRouter } = require('./controllers/podcast.js')
const { commentRouter } = require('./controllers/comment.js')
const { podcastSearchRouter } = require('./controllers/listenNotes.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))
app.use('/api/playlist', playlistRouter)
app.use('/api/playlist/:playlistId/podcast', podcastRouter)
app.use('/api/playlist/:playlistId/podcast/:commentId/comment', commentRouter)
app.use('/api/listenNotes', podcastSearchRouter)

app.get('/*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
	console.log(`App is listening on PORT ${PORT}`)
})
