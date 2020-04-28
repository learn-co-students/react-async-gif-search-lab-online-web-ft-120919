import React, { Component } from 'react'
import GifList from './GifList'
import GifSearch from "./GifSearch";
export default class GifListContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            images: [],
        }
    }
    componentWillMount(){
        this.getData()
    }
    getData = async (q)=>{ 
       let res = await fetch(`https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g`)
       let data = await res.json()
       let images = data.data
       this.setState({images})
    
    }
    handleSearch = (e) =>{
    }
  
    render() {
        console.log(this.state.images)
        let images = this.state.images
        return (
            <div>
                <GifSearch handleSearch = {this.handleSearch}/>
                <GifList images = {images} />                
            </div>
        )
    }
}