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

	async componentDidMount() {
		const res = await axios.get(
			`/api/playlist/${this.props.match.params.playlistId}/podcast/${
				this.props.match.params.podcastId
			}/comment/${this.props.match.params.commentId}`
		)
		this.setState({ newComment: res.data })
	}

	handleInputChange = e => {
		const copyComment = { ...this.state.newComment }
		copyComment[e.target.name] = e.target.value
		this.setState({ newComment: copyComment })
	}

	handleSubmit = e => {
		e.preventDefault()
		axios.put(
			`/api/playlists/${this.props.match.params.playlistId}/podcast/${
				this.props.match.params.podcastId
			}/comment/${this.props.match.params.commentId}`,
			this.state.newComment
		)
	}

	renderForm = () => {
		return (
			<>
				<label htmlFor='comment-comment'>Comment</label>
				<input
					onChange={this.handleInputChange}
					type='text'
					id='comment-comment'
					name='comment'
					value={this.state.newComment.comment}
					autoComplete='off'
				/>
				<label htmlFor='comment-author'>Author</label>
				<input
					onChange={this.handleInputChange}
					type='text'
					id='comment-author'
					name='author'
					value={this.state.newComment.author}
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
