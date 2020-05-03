import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs('dog')
  }

  fetchGifs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=BWH4zXTPUb2xzX4K1KX8cn7M925c0A9U&rating=g`)
      .then(resp => resp.json())
      .then(json => this.setState({gifs: json.data.slice(0, 3)}))
  }

  handleSubmit = (query) => {
    this.setState({
      query: query
    })
  }

  render() {
    return (
      <div>
        <GifSearch onSubmitQuery={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
