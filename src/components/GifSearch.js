import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {query: ""}

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmitQuery(this.state.query)
  }

  render() {
    return (
      <div>
        <form>
        <input type="text" name="query" onChange={this.handleChange} value={this.state.query} />
        <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}
