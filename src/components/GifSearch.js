import React, { Component } from 'react'

class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitHandler(this.state.searchTerm)
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
            <input type="submit" value="Search GIFs"></input>
            {/* What goes in form??? */}
        </form>  
      </div>
    )//return
  }//render
}

export default GifSearch;
