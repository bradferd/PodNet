import React, { Component } from 'react'
import axios from 'axios'

export default class ShowComment extends Component {
	state = {
		podcast: {},
		comments: []
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

	render() {
		let fetchedComments = this.state.comments.map(comment => {
			return (
				<div className='comment'>
					<div className='content'>
						<div className='author'>{comment.author}</div>
						<div className='text'>{comment.comment}</div>
					</div>
				</div>
			)
		})
		return (
			<div className='ui container'>
				<div className='ui segment' style={{ margin: '100px' }}>
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
							{fetchedComments}
							<form class='ui reply form'>
								<div class='field'>
									<textarea />
								</div>
								<div class='ui primary submit labeled icon button'>
									<i class='icon edit' /> Add Comment
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
