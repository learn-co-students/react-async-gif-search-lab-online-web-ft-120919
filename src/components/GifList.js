import React, { Component } from 'react'

class GifList extends Component {

  render() {
    // console.log(this.props.gifs)
    return (
      <div className="gif-list"> 
        {this.props.gifs.map((gif, index) => {
          return (
            <div key={index} className="gif">
              <img src={gif.images.original.url} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default GifList