import React, { Component } from 'react'

export default class Form extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit}>
					{this.props.renderForm ? <div>{this.props.renderForm()} </div> : null}
					<input type='submit' value={this.props.inputValue} />
				</form>
			</div>
		)
	}
}
