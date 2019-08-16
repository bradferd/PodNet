import React, { Component } from 'react'
import Axios from 'axios'
import PodcastSearch from '../Search/PodcastSearch'
import Podcasts from '../Podcast/Podcasts'

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
			<div className='ui segment' style={{ marginTop: '40px' }}>
				<h1>{this.state.playlist.name}</h1>
				<Podcasts podcasts={this.state.podcasts} />
				<PodcastSearch {...this.props} getPodcasts={this.getPodcasts} />
			</div>
		)
	}
}
