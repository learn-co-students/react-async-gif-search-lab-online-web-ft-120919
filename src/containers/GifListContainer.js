import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'



export class GifListContainer extends Component {

    state = {
        gif: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=7MG2NLTmP2q50Jf6UVoOkOvGExKwgF0N&rating=g')
        .then(resp => resp.json())
        .then (resp => {
            let data = resp.data.slice(0, 3).map(obj => obj.images.original.url)
            this.setState({gif: data})
        })
    }

    handleSubmit = search => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=7MG2NLTmP2q50Jf6UVoOkOvGExKwgF0N&rating=g`)
        .then(resp => resp.json())
        .then (resp => {
            let data = resp.data.slice(0, 3).map(obj => obj.images.original.url)
            this.setState({gif: data})
        })
      }
    
    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <GifList gifs={this.state.gif}/>
            </div>
        )
    }
}

export default GifListContainer
