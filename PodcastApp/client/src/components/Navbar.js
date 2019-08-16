import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
	render() {
		return (
			<div className='ui inverted top fixed menu' style={{ marginBottom: '0' }}>
				<div className='item'>PodNet</div>
				<div className='right menu'>
					<div className='link item'>
						<Link to='/playlists'>Playlists</Link>
					</div>
					<div className='link item'>
						<Link to=''>Podcasts</Link>
					</div>
				</div>
			</div>
		)
	}
}
