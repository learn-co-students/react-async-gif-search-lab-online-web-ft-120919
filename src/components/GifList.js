import React, { Component } from 'react'

export default class GifList extends Component {



  render() {
    return (
      <ul>
        {this.props.gifs.map(gif => {
          console.log(gif.id)
          return (
            <li key={gif.id}>
              <img id={gif.id} key={gif.id} src={gif.images.original.url} alt="gif" />
            </li>
          )
        })}
      </ul>
    )
  }
}
