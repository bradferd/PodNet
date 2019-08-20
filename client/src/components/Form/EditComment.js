import React, { Component } from 'react'
import Form from './Form'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class NewComment extends Component {
	state = {
		newComment: {
			comment: '',
			author: ''
		},
		redirectToComments: false
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
			`/api/playlist/${this.props.match.params.playlistId}/podcast/${
				this.props.match.params.podcastId
			}/comment/${this.props.match.params.commentId}`,
			this.state.newComment
		)
		this.setState({ redirectToComments: true })
	}

	renderForm = () => {
		return (
			<>
				<div className='field'>
					<label htmlFor='comment-comment'>Comment</label>
					<input
						onChange={this.handleInputChange}
						type='text'
						id='comment-comment'
						name='comment'
						value={this.state.newComment.comment}
						autoComplete='off'
					/>
				</div>
				<div className='field'>
					<label htmlFor='comment-author'>Author</label>
					<input
						onChange={this.handleInputChange}
						type='text'
						id='comment-author'
						name='author'
						value={this.state.newComment.author}
						autoComplete='off'
					/>
				</div>
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
				<Form
					handleSubmit={this.handleSubmit}
					handleInputChange={this.handleInputChange}
					renderForm={this.renderForm}
					inputValue='Edit Comment'
				/>
			</div>
		)
	}
}
