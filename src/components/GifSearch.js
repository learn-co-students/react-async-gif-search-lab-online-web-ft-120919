import React, { Component } from 'react'
 
export default class GifSearch extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Search for Gif" ></input>
                <button onClick={this.props.handleSearch} type="button" className="btn btn-outline-success">Search</button>
                </div>
            </div>
        )
    }
}