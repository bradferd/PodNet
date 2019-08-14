import React, { Component } from 'react'
import axios from 'axios'

export default class Playlists extends Component {
	state = {
		playlists: []
	}

	componentDidMount() {
		this.getAllPlaylist()
	}

	getAllPlaylist = async () => {
		const res = await axios.get(`/api/playlists`)
		this.setState({ playlist: res.data })
	}

	render() {
		let playlists = this.state.playlists.map(playlist => {
			return (
				<div key='playlist._id'>
					<div>{playlist.name}</div>
					<div>{playlist.genre}</div>
					<div>{playlist.description}</div>
				</div>
			)
		})
		return (
			<div>
				<h1>Playlists</h1>
				{playlists}
			</div>
		)
	}
}
