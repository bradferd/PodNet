import React, { Component } from 'react'
import Axios from 'axios'
import PodcastSearch from '../Search/PodcastSearch'
import Podcasts from '../Podcast/Podcasts'

export default class PlaylistDash extends Component {
	state = {
		playlist: [],
		podcasts: [],
		isSearching: false
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

	toggleSearch = () => {
		this.setState(state => {
			return { isSearching: !state.isSearching }
		})
	}

	render() {
		return (
			<div className='ui segment' style={{ marginTop: '40px' }}>
				<h1>{this.state.playlist.name}</h1>
				<span className='right floated'>
					<i className='trash icon' />
					Delete Playlist
				</span>
				{this.state.isSearching ? (
					<PodcastSearch
						{...this.props}
						toggleSearch={this.toggleSearch}
						getPodcasts={this.getPodcasts}
					/>
				) : (
					<Podcasts
						toggleSearch={this.toggleSearch}
						podcasts={this.state.podcasts}
					/>
				)}
			</div>
		)
	}
}
