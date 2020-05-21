import React, { Component } from 'react'

class GifSearch extends Component {

  render() {
    return (
      <div id="magic-form">
        <h1>GIF SEARCH</h1>
        <h4>start typing...</h4>
        <form>
          <input 
            type="text"
            name="searchInput"
            onChange={this.props.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default GifSearch