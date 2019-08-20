import React, { Component } from 'react'
import axios from 'axios'
import Modal from '../Modal'
import { Link, Redirect } from 'react-router-dom'

export default class DeletePlaylist extends Component {
	state = {
		playlist: [],
		redirectToPlaylists: false
	}

	async componentDidMount() {
		this.getAllPlaylistData()
	}

	getAllPlaylistData = async () => {
		const res = await axios.get(
			`/api/playlist/${this.props.match.params.playlistId}`
		)
		this.setState({ playlist: res.data })
	}

	handleDelete = async () => {
		await axios.delete(`/api/playlist/${this.props.match.params.playlistId}`)
		this.setState({ redirectToPlaylists: true })
	}

	renderActions = () => {
		return (
			<>
				<button
					onClick={() => this.handleDelete(this.state.playlist._id)}
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
		if (this.state.redirectToPlaylists) {
			return <Redirect to={`/playlists`} />
		}
		return (
			<div>
				<Modal
					title='Delete Playlist'
					content={`Are you sure you want to delete ${
						this.state.playlist.title
					}?`}
					actions={this.renderActions()}
					onDismiss={() => this.props.history.goBack()}
				/>
			</div>
		)
	}
}
