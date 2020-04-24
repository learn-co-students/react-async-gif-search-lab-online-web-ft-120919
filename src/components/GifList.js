import React from 'react'

export default class GifList extends React.Component {

    render() {

        let arr = this.props.gifs.map( gif =>  <li> <img src={gif}></img>
            </li>)


        return (
            <ul>
                {arr}
            </ul>
            
        )
    }

}