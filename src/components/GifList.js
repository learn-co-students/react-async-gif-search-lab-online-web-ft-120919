import React, { Component } from 'react'

class GifList extends Component {
    constructor() {
      super()
    }

    render() {
      let gifs = this.props.gifs.map((gif, i) => {
        //debugger
        return <li key={i}>
            <img src={gif.images.original.url} alt='great gif!' />
        </li>
      })

      return (
        <div>
          <ul>{gifs}</ul>
        </div>
      )//return
    }//render
}

export default GifList;
