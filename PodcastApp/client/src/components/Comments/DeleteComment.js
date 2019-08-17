import React, { Component } from 'react'
import axios from 'axios'
import Modal from '../Modal'
import { Link, Redirect } from 'react-router-dom'

export default class DeletePlaylist extends Component {
	state = {
		comment: [],
		redirectToComments: false
	}

	async componentDidMount() {
		this.getAllCommentData()
	}

	getAllCommentData = async () => {
		const res = await axios.get(
			`/api/playlist/${this.props.match.params.playlistId}/podcast/${
				this.props.match.params.podcastId
			}/comment/${this.props.match.params.commentId}`
		)
		this.setState({ comment: res.data })
	}

	handleDelete = async () => {
		await axios.delete(
			`/api/playlist/${this.props.match.params.playlistId}/podcast/${
				this.props.match.params.podcastId
			}/comment/${this.props.match.params.commentId}`
		)
		this.setState({ redirectToComments: true })
	}

	renderActions = () => {
		return (
			<>
				<button
					onClick={() => this.handleDelete()}
					className='ui button negative'
				>
					Delete
				</button>
				<Link
					to={`/playlists/${this.props.match.params.playlistId}/podcast/${
						this.props.match.params.podcastId
					}/comments`}
					className='ui button'
				>
					Cancel
				</Link>
			</>
		)
	}

	render() {
		if (this.state.redirectToComments) {
			return (
				<Redirect
					to={`/playlists/${this.props.match.params.playlistId}/podcast/${
						this.props.match.params.podcastId
					}/comments`}
				/>
			)
		}
		return (
			<div>
				<Modal
					title='Delete Comment'
					content={`Are you sure you want to delete "${
						this.state.comment.comment
					}"?`}
					actions={this.renderActions()}
					onDismiss={() => this.props.history.goBack()}
				/>
			</div>
		)
	}
}
