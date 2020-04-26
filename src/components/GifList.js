import React, { Component } from 'react'

export default class GifList extends Component {
	
	
	
	render() {
		if (this.props.gifs !== '') {
		return (
			<ul>
				<li><img src={this.props.gifs[0].images.original.url} alt='giphy' /></li>
				<li><img src={this.props.gifs[1].images.original.url} alt='giphy' /></li>
				<li><img src={this.props.gifs[2].images.original.url} alt='giphy' /></li>
			</ul>
		)} else {
			return null
		}
	}
}
