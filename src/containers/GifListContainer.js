import React, {Component} from 'react';

import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }
  
  buildQuery(query) {
    return `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=KlSFFH6Vvf3O3NIytUGKtw87Gz1fnMDv&rating=g`;
  }

  submitQuery = (query) => {
    fetch(this.buildQuery(query))
    .then(r => r.json())
    .then(json => {
      let data = json.data;
      this.setState({
        gifs: data.slice(0,3)
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <GifSearch onSubmitQuery={this.submitQuery} />
        <GifList gifs={this.state.gifs} />
      </React.Fragment>
    )
  }
}