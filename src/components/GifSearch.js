import React, { Component } from 'react'

class GifSearch extends Component {
  state = {
    searchWord: ""
  }

  handleChange = (event) => {
    this.setState({
      searchWord: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.props.handleSubmit(event)} name={this.state.searchWord}>
          <label>Search</label>
          <input type="text" onChange={this.handleChange} value={this.state.searchWord}></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    )
  }
}

export default GifSearch