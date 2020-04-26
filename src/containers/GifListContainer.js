import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
	constructor() {
		super()
		this.state = {
			gifs: ''
		}
		fetch('https://api.giphy.com/v1/gifs/trending?api_key=D61B445icae44BaqwUrSuPPbS7C8bLSt&limit=3&rating=G')
		.then(resp => resp.json())
		.then(giphs => {this.setState({
			gifs: giphs.data
		})})
	}
	
	
	onSearch = search => {

		fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=D61B445icae44BaqwUrSuPPbS7C8bLSt&limit=3&rating=g`)
		.then(resp => resp.json())
		.then(giphs => this.setState({
			gifs: giphs.data
		}))
	}

	handleLoad = () => {
		
	}
	
	render() {
		return (
			<div>
				<GifSearch onSearch={this.onSearch} />
				<GifList gifs={this.state.gifs} />
			</div>
		)
	}
}
