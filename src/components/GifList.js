import React, {Component} from 'react';

export default class GifList extends Component {
  renderThreeGifs() {
    if(this.props.gifs.length > 0) {
      let result = [];
      for(let i = 0; i < 3; i++) {
        result.push(<li><img key={i} src={this.props.gifs[i].images.original.url} /></li>)
      }
      return result;
    }
  }
  
  render() {
    return (
      <ul>
        {this.renderThreeGifs()}
      </ul>
    )
  }
}