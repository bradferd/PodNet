import React, { Component } from 'react'

export default class Form extends Component {
	render() {
		return (
			<div style={{ margin: '100px' }}>
				<form className='ui form' onSubmit={this.props.handleSubmit}>
					{this.props.renderForm ? <div>{this.props.renderForm()} </div> : null}
					<input
						className='ui button primary'
						style={{ marginTop: '40px' }}
						type='submit'
						value={this.props.inputValue}
					/>
				</form>
			</div>
		)
	}
}
