import React, { Component } from 'react'
import Form from './Form'
import axios from 'axios'

export default class NewComment extends Component {
	state = {
		newComment: {
			comment: '',
			author: ''
		}
	}

	handleInputChange = e => {
		const copyComment = { ...this.state.newComment }
		copyComment[e.target.name] = e.target.value
		this.setState({ newComment: copyComment })
	}

	handleSubmit = e => {
		e.preventDefault()
		axios.post(
			`/api/playlists/${this.props.match.params.playlistId}/podcast/${
				this.props.match.params.podcastId
			}/comment`,
			this.state.newComment
		)
	}

	renderForm = () => {
		return (
			<>
				<label htmlFor='playlist-name'>Playlist Name</label>
				<input
					onChange={this.handleInputChange}
					type='text'
					id='comment-comment'
					name='comment'
					value={this.state.newComment.comment}
					autoComplete='off'
				/>
				<label htmlFor='playlist-description'>Playlist Description</label>
				<input
					onChange={this.handleInputChange}
					type='text'
					id='comment-author'
					name='author'
					value={this.state.newPlaylist.author}
					autoComplete='off'
				/>
			</>
		)
	}

	render() {
		return (
			<div>
				<Form
					handleSubmit={this.handleSubmit}
					handleInputChange={this.handleInputChange}
					renderForm={this.renderForm}
					inputValue='Create Comment'
				/>
			</div>
		)
	}
}
