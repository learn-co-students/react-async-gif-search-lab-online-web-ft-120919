import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  
  // LIFECYCLE METHODS

  constructor() {
    super()
    this.state = {
      gifs: [],
      searchInput: ''
    }
  }

  render() {
    return (
    <div className="container">
      <GifSearch handleChange={this.handleChange}/>
      <GifList gifs={this.state.gifs}/>
    </div>
    )
  }

  componentDidMount() {
    // fetch gifs after mounting
    this.loadGifs()
  }


  // CLASS METHODS

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    this.loadGifs()
  }

  loadGifs = () => {
    // Get your API key at https://developers.giphy.com/docs/api/#quick-start-guide
    const apiKey = ''
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchInput}&api_key=${apiKey}&rating=g`)
      .then(response => response.json())
      .then(json => {
        this.setState({gifs: json.data.slice(0, 10)})
      })
  }
}

export default GifListContainer