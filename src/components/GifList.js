import React, { Component } from 'react'

class GifList extends Component {

  renderGifs() {
    return this.props.gifs.map(gif => {
      return <img key={gif.id} src={gif.images.original.url} alt={gif.title} />
    })
  }

  render() {
    return (
      < div >
        <ul>
          {this.renderGifs()}
        </ul>
      </div >
    )
  }
}

export default GifList