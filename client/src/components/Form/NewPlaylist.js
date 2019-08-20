import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Form from './Form'

export default class NewPlaylist extends Component {
	state = {
		newPlaylist: {
			name: '',
			description: '',
			genre: ''
		},
		redirectToPlaylists: false
	}

	handleInputChange = e => {
		const copyPlaylist = { ...this.state.newPlaylist }
		copyPlaylist[e.target.name] = e.target.value
		this.setState({ newPlaylist: copyPlaylist })
	}

	handleSubmit = e => {
		e.preventDefault()
		axios.post(`/api/playlist`, this.state.newPlaylist)
		this.setState({ redirectToPlaylists: true })
	}

	renderForm = () => {
		return (
			<>
				<label htmlFor='playlist-name'>Playlist Name</label>
				<input
					onChange={this.handleInputChange}
					type='text'
					id='playlist-name'
					placeholder='Enter a name for this playlist...'
					name='name'
					value={this.state.newPlaylist.name}
					autoComplete='off'
				/>
				<label htmlFor='playlist-description'>Playlist Description</label>
				<input
					onChange={this.handleInputChange}
					type='text'
					id='playlist-description'
					name='description'
					value={this.state.newPlaylist.description}
					autoComplete='off'
				/>
				<label htmlFor='playlist-genre'>Playlist Genre</label>
				<input
					onChange={this.handleInputChange}
					type='text'
					id='playlist-genre'
					name='genre'
					value={this.state.newPlaylist.genre}
					autoComplete='off'
				/>
			</>
		)
	}

	render() {
		if (this.state.redirectToPlaylists) {
			return <Redirect to='/playlists' />
		}
		return (
			<div>
				<Form
					handleSubmit={this.handleSubmit}
					renderForm={this.renderForm}
					inputValue='Create Playlist'
				/>
			</div>
		)
	}
}
