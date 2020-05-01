import React, {Component} from 'react';

export default class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
  }

  handleQueryChange = (e) => {
    this.setState({query: e.target.value});
  }
  
  submitQuery = (e) => {
    e.preventDefault();
    this.props.onSubmitQuery(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this.submitQuery}>
        <label>
          Input search query:
          <input type="text" value={this.state.query} onChange={this.handleQueryChange} />
        </label>
        <button type="submit">Search</button>
      </form>
    )
  }
}