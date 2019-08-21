import React, { Component } from 'react'
import Axios from 'axios'

export default class SinglePodcast extends Component {
	state = {
		clicked: false
	}

	addToPlaylist = async () => {
		await Axios.post(
			`/api/playlist/${this.props.match.params.playlistId}/podcast`,
			{
				publisher: this.props.podcast.publisher_original,
				title: this.props.podcast.title_original,
				description: this.props.podcast.description_original,
				thumbnail: this.props.podcast.thumbnail,
				audio: this.props.podcast.audio
			}
		)
		this.props.getPodcasts()
		this.setState({ clicked: true })
	}
	render() {
		return (
			<div className='column'>
				<div className='ui card' style={{ margin: '10px' }}>
					<div className='content'>
						<h3>{this.props.podcast.publisher_original}</h3>
					</div>
					<div className='image'>
						<img
							src={this.props.podcast.thumbnail}
							alt={this.props.podcast.title_original}
						/>
					</div>
					<div className='content'>
						<h4>{this.props.podcast.title_original}</h4>
						<audio
							controls
							style={{ width: '270px' }}
							src={this.props.podcast.audio}
						>
							Listen
						</audio>
					</div>
					{this.props.match.params.playlistId ? (
						<>
							<div className='extra content'>
								<button
									className='ui button primary'
									onClick={this.addToPlaylist}
								>
									Add to Playlist
								</button>
							</div>
							{this.state.clicked ? (
								<div className='ui green message'>Added to Playlist!</div>
							) : null}
						</>
					) : null}
				</div>
			</div>
		)
	}
}
