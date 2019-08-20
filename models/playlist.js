const mongoose = require('./connection.js')

const PlaylistSchema = new mongoose.Schema({
	name: String,
	description: String,
	genre: String
})

const PlaylistCollection = mongoose.model('Playlists', PlaylistSchema)

const getAllPlaylist = () => PlaylistCollection.find()

const getPlaylist = playlistId => PlaylistCollection.findById(playlistId)

const addNewPlaylist = playlistObject =>
	PlaylistCollection.create(playlistObject)

const updatePlaylist = (playlistId, playlistObject) =>
	PlaylistCollection.findByIdAndUpdate(playlistId, playlistObject)

const deletePlaylist = playlistId =>
	PlaylistCollection.findByIdAndDelete(playlistId)

module.exports = {
	getAllPlaylist,
	getPlaylist,
	addNewPlaylist,
	updatePlaylist,
	deletePlaylist
}
