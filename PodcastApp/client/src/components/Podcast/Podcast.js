import React, { Component } from 'react'

export default class Podcast extends Component {
	render() {
		return (
			<div className='ui card'>
				<div className='content'>
					<h3>{this.props.publisher}</h3>
					<button onClick={this.toggleSearch}>Find a New Podcast</button>
				</div>
				<div className='image'>
					<img
						src={this.props.thumbnail}
						style={{ width: '290px' }}
						alt={this.props.title}
					/>
				</div>
				<div className='extra content'>
					<h4>{this.props.title}</h4>
					<audio controls src={this.props.audio} style={{ width: '265px' }} />
				</div>
			</div>
		)
	}
}
