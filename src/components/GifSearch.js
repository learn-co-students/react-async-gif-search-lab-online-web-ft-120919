import React from 'react'

export default class GifSearch extends React.Component {


    constructor() {
        super() 
        this.state = {
            search: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.search)

    }
    
    handleSubmit = (event) => {
        console.log('here handle submit')
        event.preventDefault()
        this.props.fetchGifs(this.state.search)
    }

    render() {
        

        return (
            <div>
                
            <form onSubmit={this.handleSubmit}>
                <label>Enter search term</label>
                <input
                type="text"
                id="search"
                name="search"
                onChange={this.handleChange}
                value={this.state.search}
                
                />
                <button type="submit">Search!</button>
            </form>
            </div>
        )
    }
   

}