import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
	render() {
		return (
			<div className='ui inverted segment' style={{ margin: '-10px' }}>
				<div
					className='ui inverted secondary pointing menu'
					style={{ marginBottom: '0' }}
				>
					<NavLink
						exact
						activeClassName='active link item'
						className='link item'
						to='/'
					>
						<i className='podcast icon' />
						PodNet
					</NavLink>
					<div className='right menu'>
						<NavLink
							exact
							className='link item'
							activeClassName='active link item'
							to='/playlists'
						>
							Playlists
						</NavLink>
						<NavLink
							className='link item'
							activeClassName='active link item'
							to='/playlists/new'
						>
							New Playlist
						</NavLink>
					</div>
				</div>
			</div>
		)
	}
}
