import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <div>
                {this.props.gifs.map(gif => <li>
                    <img key={gif} src={gif} alt="gif"/>
                    </li>)}
            </div>
        )
    }
}
