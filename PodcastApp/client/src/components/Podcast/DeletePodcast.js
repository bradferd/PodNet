import React, { Component } from 'react'
import axios from 'axios'
import Modal from '../Modal'
import { Link, Redirect } from 'react-router-dom'

export default class DeletePodcast extends Component {
	state = {
		podcast: {},
		redirectToPlaylist: false
	}

	async componentDidMount() {
		this.getAllPodcastData()
	}

	getAllPodcastData = async () => {
		const res = await axios.get(
			`/api/playlist/${this.props.match.params.playlistId}/podcast/${
				this.props.match.params.podcastId
			}`
		)
		this.setState({ podcast: res.data })
	}

	handleDelete = async podcastId => {
		await axios.delete(
			`/api/playlist/${this.props.match.params.playlistId}/podcast/${podcastId}`
		)
		this.setState({ redirectToPlaylist: true })
	}

	renderActions = () => {
		return (
			<>
				<button
					onClick={() => this.handleDelete(this.state.podcast._id)}
					className='ui button negative'
				>
					Delete
				</button>
				<Link
					to={`/playlists/${this.props.match.params.playlistId}`}
					className='ui button'
				>
					Cancel
				</Link>
			</>
		)
	}

	render() {
		if (this.state.redirectToPlaylist) {
			return (
				<Redirect to={`/playlists/${this.props.match.params.playlistId}`} />
			)
		}
		return (
			<div>
				<Modal
					title='Delete Podcast from Playlist'
					content={`Are you sure you want to delete ${
						this.state.podcast.title
					}?`}
					actions={this.renderActions()}
					onDismiss={() => this.props.history.goBack()}
				/>
			</div>
		)
	}
}
