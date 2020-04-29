import React, { Component } from 'react'

export class GifSearch extends Component {

    state = {
        search: ``
    }

    handleChange = event => {
        event.persist()
        this.setState({
          [event.target.id]: event.target.value
        })
      }

    submit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.search)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                <label>
                Search:
                <input type="text" id="search" value={this.state.search} onChange={this.handleChange}/>
                </label>
                <label>
                <input type="submit"/>
                </label>
                </form>
            </div>
        )
    }
}

export default GifSearch
