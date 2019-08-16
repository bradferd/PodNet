import React from 'react'
import SinglePodcast from './SinglePodcast'

const PodcastList = props => {
	const podcasts = props.podcasts.map(podcast => {
		return <SinglePodcast {...props} key={podcast.id} podcast={podcast} />
	})

	return (
		<div className='ui raised segment'>
			<div className='ui grid'>
				<div className='ui three column row'>{podcasts}</div>
			</div>
		</div>
	)
}

export default PodcastList
