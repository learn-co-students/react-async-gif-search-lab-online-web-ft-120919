import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      query: ""
    }
  }//constructor

  executeSearch = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=0Zfhh8yzd2w8Nm6xaWWYcsX2kU28r6LR&rating=g&limit=3`)
      .then(resp => resp.json())
        .then((gifs) => {
            console.log(gifs)
            //debugger 
            this.setState({
                gifs: gifs.data
            })
            console.log(this.state)
        })
  }//executeSearch

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch submitHandler={this.executeSearch.bind(this)} />
      </div>
    )//return
  }//render

}//class

export default GifListContainer;

// this.setState({gifs: data.map(gif => ({url: gif.images.original.url}) )})