import React, { Component } from 'react'
import axios from 'axios'

export default class ShowComment extends Component {
	state = {
		podcast: [],
		comments: []
	}

	componentDidMount() {
		this.getComments()
	}

	getPodcast = async () => {
		const res = axios.get(
			`/api/playlist/${this.props.match.params.playlistId}/podcast/${
				this.props.match.params.podcastId
			}`
		)
		this.setState({ podcast: res.data })
	}

	getComments = async () => {
		const res = axios.get(
			`/api/playlist/${this.props.match.params.playlistId}/podcast/${
				this.props.match.params.podcastId
			}/comment`
		)
		this.setState({ comments: res.data })
	}

	render() {
		return <div>{comments}</div>
	}
}
