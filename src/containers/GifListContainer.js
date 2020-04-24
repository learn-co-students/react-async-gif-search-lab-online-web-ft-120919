import React from 'react'

import GifList from "../components/GifList"
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    constructor() {
        super() 
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        this.fetchGifs()
    }

    fetchGifs = (searchValue='your%20search%20here') => {
        console.log(searchValue)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response=>(response.json()))
        .then(jsonData=>
            // console.log(jsonData.data[0].images.original.url)
            this.setState({
                gifs: [jsonData.data[0].images.original.url,
                jsonData.data[1].images.original.url,
                jsonData.data[2].images.original.url
            ]
            })
        )
    }

    // // i think i need an event here being the submit
    // handleSubmit = (event) => {
    //     event.preventDefault()


    // }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <br></br>
                < GifList gifs={this.state.gifs}/>
            </div>        
        )
        
    }



}