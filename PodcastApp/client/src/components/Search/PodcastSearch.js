import React, { Component } from 'react'
import Axios from 'axios'
import PodcastList from './PodcastList'

export default class PodcastSearch extends Component {
	state = {
		podcasts: [],
		term: ''
	}

	onSearchSubmit = async term => {
		const response = await Axios.get('/api/listenNotes', {
			params: { query: term }
		})
		this.setState({ podcasts: response.data.results })
	}

	onFormSubmit = e => {
		e.preventDefault()

		this.onSearchSubmit(this.state.term)
		this.setState({ term: '' })
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input
						className='prompt'
						placeholder='search podcasts...'
						type='text'
						value={this.state.term}
						onChange={e => this.setState({ term: e.target.value })}
					/>
				</form>
				<PodcastList podcasts={this.state.podcasts} />
			</div>
		)
	}
}
