import React, { Component } from 'react'

export default class Podcast extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.publisher}</h3>
				<h4>{this.props.title}</h4>
				<img src={this.props.thumbnail} alt={this.props.title} />
				<audio controls src={this.props.audio} />
			</div>
		)
	}
}
