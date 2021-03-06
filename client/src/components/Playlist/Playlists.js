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
				<div className='four wide column'>
					<div
						className='ui card'
						key={playlist._id}
						style={{ padding: '30px' }}
					>
						<div className='ui header'>
							<Link to={`/playlists/${playlist._id}`}>
								{' '}
								{playlist.name}
								<i className='podcast icon' />
							</Link>
						</div>
						<div className='content'>
							<h3>{playlist.genre}</h3>
							<p>{playlist.description}</p>
						</div>
					</div>
				</div>
			)
		})
		return (
			<div className='ui container' style={{ marginTop: '50px' }}>
				<h2 className='header'>Find a playlist to listen to!</h2>
				<div className='ui grid'>{playlists}</div>
			</div>
		)
	}
}
