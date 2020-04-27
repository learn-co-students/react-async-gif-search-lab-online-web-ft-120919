import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.fetchGifs(event.target.name)
  }

  //not sure this is doing anythign
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.gifs === nextState.gifs) {
      return false
    }
    return true
  }

  render() {
    return (
      <div><GifList gifs={this.state.gifs} /></div>,
      <div><GifSearch handleSubmit={this.submitHandler} /></div>
    )
  }

  fetchGifs(searchWord) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=uo3iKi1iwKbt9G19uTYCFl380ou9WzLJ`)
      .then(resp => resp.json())
      .then(data => {
        let gifs = data.data.slice(0, 3)
        this.setState({
          gifs: gifs
        })
      })
  }

}

export default GifListContainer