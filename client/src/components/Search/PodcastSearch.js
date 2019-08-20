import React, { Component } from 'react'
import Axios from 'axios'
import PodcastList from './PodcastList'

export default class PodcastSearch extends Component {
	state = {
		podcasts: [],
		term: '',
		hasSearched: false
	}

	onSearchSubmit = async term => {
		const response = await Axios.get('/api/listenNotes', {
			params: { query: term }
		})
		this.setState({ podcasts: response.data.results, hasSearched: true })
	}

	onFormSubmit = e => {
		e.preventDefault()

		this.onSearchSubmit(this.state.term)
		this.setState({ term: '' })
	}

	render() {
		return (
			<div className='ui container' style={{ marginTop: '40px' }}>
				<h2>Search All Podcasts</h2>
				<form onSubmit={this.onFormSubmit}>
					<div className='ui action input'>
						<input
							className='prompt'
							placeholder='search podcasts...'
							type='text'
							value={this.state.term}
							onChange={e => this.setState({ term: e.target.value })}
						/>
						<button className='ui icon button'>
							<i className='search icon' />
						</button>
					</div>
				</form>
				{this.state.hasSearched ? (
					<PodcastList {...this.props} podcasts={this.state.podcasts} />
				) : null}
			</div>
		)
	}
}
