import React, { Component } from 'react'
import Podcast from './Podcast'

export default class Podcasts extends Component {
	render() {
		let podcasts = this.props.podcasts.map(podcast => {
			return (
				<Podcast
					key={podcast._id}
					id={podcast._id}
					publisher={podcast.publisher}
					title={podcast.title}
					description={podcast.description}
					thumbnail={podcast.thumbnail}
					audio={podcast.audio}
					toggleSearch={this.props.toggleSearch}
				/>
			)
		})
		return (
			<div>
				<div className='ui raised segment' style={{ marginTop: '10px' }}>
					<button onClick={this.props.toggleSearch}>Find a new Podcast!</button>
					<div className='ui grid' style={{ marginTop: '10px' }}>
						{podcasts}
					</div>
				</div>
			</div>
		)
	}
}
