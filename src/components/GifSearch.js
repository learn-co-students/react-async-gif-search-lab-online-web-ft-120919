import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        searchString: ""
    }

    handleSubmit= event => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.searchString)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={event => this.setState({searchString: event.target.value})} type="text" value={this.state.searchString}></input>
                <button type="submit">Search</button>
            </form>
        )
    }
}
