import React, { Component } from 'react'

import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.fetchGifs(event.target.name)
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.submitHandler} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  componentDidMount() {
    this.fetchGifs('dolphins')
  }

  fetchGifs(searchWord) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=uo3iKi1iwKbt9G19uTYCFl380ou9WzLJ`)
      .then(resp => resp.json())
      .then(data => {
        let gifs = data.data.slice(0, 3)
        this.setState({
          gifs: gifs
        })
        console.log(this.state.gifs)
      })
  }

}

export default GifListContainer