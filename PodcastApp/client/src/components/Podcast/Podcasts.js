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
				/>
			)
		})
		return (
			<div>
				<div className='ui raised segment'>{podcasts}</div>
			</div>
		)
	}
}
