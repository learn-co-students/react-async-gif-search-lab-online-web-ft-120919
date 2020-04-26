import React, { Component } from 'react'

export default class GifSearch extends Component {
	
	state = {
		search: ''
	}
	
	handleChange = event => {
		this.setState({
			search: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.onSearch(this.state.search)
	}

	render() {
		

		return (
			<form
			onSubmit={event => this.handleSubmit(event)}
			>
				<input type='text' placeholder='Search Gifs' onChange={event => this.handleChange(event)} />
				<input type='submit' />
			</form>
		)
	}
}
