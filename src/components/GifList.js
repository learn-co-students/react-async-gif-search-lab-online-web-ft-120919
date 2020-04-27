import React, { Component } from 'react'

class GifList extends Component {
    render() {
      let gifs = this.props.gifs.map((gif, i) => {
        return <li key={i}>
            <img src='gif.url' alt="great gif!" />
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
