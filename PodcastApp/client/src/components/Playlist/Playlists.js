import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Playlists extends Component {
	state = {
		playlists: []
	}

	componentDidMount() {
		this.getAllPlaylist()
	}

	getAllPlaylist = async () => {
		const res = await axios.get(`/api/playlist`)
		this.setState({ playlists: res.data })
	}

	render() {
		let playlists = this.state.playlists.map(playlist => {
			return (
				<div
					className='ui container column'
					key='playlist._id'
					style={{ padding: '30px' }}
				>
					<div className='ui segment'>
						<div className='ui header'>
							<Link to={`/playlists/${playlist._id}`}>{playlist.name}</Link>
						</div>
						<div className='content'>
							<h3>{playlist.genre}</h3>
							<p>{playlist.description}</p>
							<Link to={`/playlists/${playlist._id}/edit`}>
								<i className='ui icon edit' />
							</Link>
						</div>
					</div>
				</div>
			)
		})
		return (
			<div className='ui two column row' style={{ marginTop: '70px' }}>
				{playlists}
			</div>
		)
	}
}
