import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
    state = {
        gifs: []
    }
    
    componentDidMount() {
        this.fetchGIFs()
    }

    fetchGIFs = (searchString = "dolphin") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchString}&api_key=wDq1PQOJ65PcQAT9Logl7GJ9sr3qqyfn&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(gifData => {
                this.setState({
                    gifs: gifData.data.map(gif => {
                        return gif.images.original.url
                    })
                })
            })
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch fetchGIFs={this.fetchGIFs}/>
            </div>
        )  
    }
}
