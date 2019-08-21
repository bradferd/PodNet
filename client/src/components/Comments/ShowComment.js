import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ShowComment extends Component {
	state = {
		podcast: {},
		comments: [],
		newComment: {
			author: '',
			comment: ''
		}
	}

	componentDidMount() {
		this.getComments()
		this.getPodcast()
	}

	getPodcast = async () => {
		const res = await axios.get(
			`/api/playlist/${this.props.match.params.playlistId}/podcast/${
				this.props.match.params.podcastId
			}`
		)
		this.setState({ podcast: res.data })
	}

	getComments = async () => {
		const res = await axios.get(
			`/api/playlist/${this.props.match.params.playlistId}/podcast/${
				this.props.match.params.podcastId
			}/comment`
		)
		this.setState({ comments: res.data })
	}

	handleSubmit = e => {
		e.preventDefault()
		axios.post(
			`/api/playlist/${this.props.match.params.playlistId}/podcast/${
				this.props.match.params.podcastId
			}/comment`,
			this.state.newComment
		)
		this.setState({ newComment: { comment: '', author: '' } })
		this.getComments()
	}

	handleInputChange = e => {
		const copyComment = { ...this.state.newComment }
		copyComment[e.target.name] = e.target.value
		this.setState({ newComment: copyComment })
	}

	render() {
		let fetchedComments = this.state.comments.map(comment => {
			return (
				<div className='ui comment items'>
					<div className='content item'>
						<div className='header left floated'>
							<h4>{comment.author}</h4>
						</div>
						<div className='description'>
							<p>{comment.comment}</p>
						</div>
						<div className='actions right floated'>
							<Link
								to={`/playlists/${this.props.match.params.playlistId}/podcast/${
									this.props.match.params.podcastId
								}/comments/${comment._id}/edit`}
							>
								Edit
							</Link>
							<Link
								to={`/playlists/${this.props.match.params.playlistId}/podcast/${
									this.props.match.params.podcastId
								}/comments/${comment._id}/delete`}
							>
								Delete
							</Link>
						</div>
					</div>
					<hr />
				</div>
			)
		})
		return (
			<div className='ui container'>
				<Link
					to={`/playlists/${this.props.match.params.playlistId}/podcast`}
					className='ui icon button left floated'
					style={{ marginTop: '-35px' }}
				>
					<i className='left arrow icon' />
				</Link>
				<div className='ui segment' style={{ margin: '60px' }}>
					<h1>{this.state.podcast.title}</h1>
					<img
						src={this.state.podcast.thumbnail}
						alt={this.state.podcast.publisher}
					/>
					<h3>{this.state.podcast.publisher}</h3>
					<p>{this.state.podcast.description}</p>
					<audio controls src={this.state.podcast.audio} />
					<div className='ui container'>
						<div className='ui comments' style={{ margin: '0 auto' }}>
							<h3 className='ui dividing header'>Comments</h3>
							{fetchedComments}
							<form onSubmit={this.handleSubmit} class='ui reply form'>
								<div className='field'>
									<input
										onChange={this.handleInputChange}
										type='text'
										htmlFor='comment-author'
										id='comment-author'
										name='author'
										placeholder='Enter author name...'
										value={this.state.newComment.author}
										autoComplete='off'
									/>
								</div>
								<div className='field'>
									<input
										onChange={this.handleInputChange}
										type='text'
										id='comment-comment'
										name='comment'
										placeholder='Enter comment...'
										value={this.state.newComment.comment}
										autoComplete='off'
									/>
								</div>
								<input type='submit' class='ui primary submit button' />
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
