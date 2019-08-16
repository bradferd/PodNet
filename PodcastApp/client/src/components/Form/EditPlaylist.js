import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Form from './Form'

export default class EditPlaylist extends Component {
	state = {
		playlist: {
			name: '',
			description: '',
			genre: ''
		},
		redirectToPlaylists: false
	}

	async componentDidMount() {
		const res = await axios.get(
			`/api/playlist/${this.props.match.params.playlistId}`
		)
		this.setState({ playlist: res.data })
	}

	handleInputChange = e => {
		const copyPlaylist = { ...this.state.playlist }
		copyPlaylist[e.target.name] = e.target.value
		this.setState({ playlist: copyPlaylist })
	}

	handleSubmit = async e => {
		e.preventDefault()
		const res = axios.put(
			`/api/playlist/${this.state.playlist._id}`,
			this.state.playlist
		)
		this.setState({ playist: res.data, redirectToPlaylists: true })
	}

	renderForm = () => {
		return (
			<>
				<div className='field'>
					<label htmlFor='playlist-name'>Playlist Name</label>
					<input
						onChange={this.handleInputChange}
						type='text'
						id='playlist-name'
						placeholder='Enter a name for this playlist...'
						name='name'
						value={this.state.playlist.name}
						autoComplete='off'
					/>
				</div>
				<div className='field'>
					<label htmlFor='playlist-description'>Playlist Description</label>
					<input
						onChange={this.handleInputChange}
						type='text'
						id='playlist-description'
						name='description'
						value={this.state.playlist.description}
						autoComplete='off'
					/>
				</div>
				<div className='field'>
					<label htmlFor='playlist-genre'>Playlist Genre</label>
					<input
						onChange={this.handleInputChange}
						type='text'
						id='playlist-genre'
						name='genre'
						value={this.state.playlist.genre}
						autoComplete='off'
					/>
				</div>
			</>
		)
	}

	render() {
		if (this.state.redirectToPlaylists) {
			return (
				<Redirect to={`/playlists/${this.props.match.params.playlistId}`} />
			)
		}
		return (
			<div>
				<Form
					playlist={this.state.playlist}
					handleInputChange={this.handleInputChange}
					handleSubmit={this.handleSubmit}
					renderForm={this.renderForm}
					inputValue='Update Playlist'
				/>
			</div>
		)
	}
}
