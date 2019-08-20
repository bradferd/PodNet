import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
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
			<div className='ui container' style={{ marginTop: '40px' }}>
				<div className='row'>
					<h1>{this.state.playlist.name}</h1>
				</div>

				{this.state.isSearching ? (
					<>
						<button className='ui button primary' onClick={this.toggleSearch}>
							Back to Playlist
						</button>
						<PodcastSearch {...this.props} getPodcasts={this.getPodcasts} />
					</>
				) : (
					<>
						<Link to={`/playlists/${this.state.playlist._id}/delete`}>
							<i className='trash dark icon' />
						</Link>
						<Podcasts
							toggleSearch={this.toggleSearch}
							podcasts={this.state.podcasts}
						/>
					</>
				)}
			</div>
		)
	}
}
