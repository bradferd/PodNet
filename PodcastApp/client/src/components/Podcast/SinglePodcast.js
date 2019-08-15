import React, { Component } from 'react'
import Axios from 'axios'

export default class SinglePodcast extends Component {
	addToPlaylist = async () => {
		await Axios.post('/api/playlist/:playlistId/podcast', {
			publisher: this.props.podcast.publisher_original,
			title: this.props.podcast.title_original,
			description: this.props.podcast.description_original,
			thumbnail: this.props.podcast.thumbnail,
			audio: this.props.podcast.audio
		})
	}
	render() {
		return (
			<div>
				<h3>{this.props.podcast.publisher_original}</h3>
				<img
					style={{ width: '100px', height: '100px' }}
					src={this.props.podcast.thumbnail}
					alt={this.props.podcast.title_original}
				/>
				<h4>{this.props.podcast.title_original}</h4>
				<p>{this.props.podcast.description_original}</p>
				<audio controls src={this.props.podcast.audio}>
					Listen
				</audio>
				<br />
				<button onClick={this.addToPlaylist}>Add to Playlist</button>
			</div>
		)
	}
}
