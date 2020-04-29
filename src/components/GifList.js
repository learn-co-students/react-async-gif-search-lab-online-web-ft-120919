import React, { Component } from 'react'

export class GifList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.gifs.map(gif => <li><img src={gif} alt="gif"></img></li>)}
                </ul>
            </div>
        )
    }
}

export default GifList
