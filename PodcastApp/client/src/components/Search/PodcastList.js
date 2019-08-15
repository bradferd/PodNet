import React from 'react'
import SinglePodcast from './SinglePodcast'

const PodcastList = props => {
	const podcasts = props.podcasts.map(podcast => {
		return <SinglePodcast key={podcast.id} podcast={podcast} />
	})

	return <div>{podcasts}</div>
}

export default PodcastList
