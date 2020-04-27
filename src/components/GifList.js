import React, { Component } from 'react'

class GifList extends Component {

  //not sure this is doing anything
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.gifs === nextState.gifs) {
      return false
    }
    return true
  }


  render() {
    debugger
    return (
      <div>
        <ul>
          {this.props.gifs.forEach(gif => <li>{gif}</li>)}
        </ul>
      </div>
    )
  }
}

export default GifList