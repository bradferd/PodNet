import React, { Component } from 'react'
import Axios from 'axios'
import PodcastSearch from '../Search/PodcastSearch'

export default class PlaylistDash extends Component {
	state = {
		playlist: [],
		podcasts: []
	}

	componentDidMount() {
		this.getPlaylist()
		this.getPodcasts()
	}

	getPlaylist = async () => {
		const res = await Axios.get(
			`/api/playlist/${this.props.match.params.playlistId}`
		)
		this.setState({ playlist: res.data })
	}

	getPodcasts = async () => {
		const res = await Axios.get(
			`/api/playlist/${this.props.match.params.playlistId}/podcast`
		)
		this.setState({ podcasts: res.data })
	}

	render() {
		return (
			<div>
				<p>sup</p>
				<PodcastSearch getPodcasts={this.getPodcasts} />
			</div>
		)
	}
}
