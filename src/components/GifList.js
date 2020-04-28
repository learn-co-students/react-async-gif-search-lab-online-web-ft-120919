import React, { Component } from "react";

export default class GiftList extends Component {
	constructor(props){
		super(props)
		this.state={
			images : []
		}
	}
	getGifList = async () =>{
		let res = await this.props.data()
		let data = await res
		this.state={
			images:data
		}
	}
	componentWillMount(){
		console.log(this.props.images)
		this.setState({
			state : {
				images: this.props.images
			}
		})
		console.log(this.state.images)
		// this.elements = this.props.images.map((i)={})
	}
	render() {

		// this.state.items = this.props.images.map((i)=>{i.url})
        // console.log(data[0])
		return (
			<div>
				<ul onClick={this.getGifList}>{6}</ul>
			</div>
		);
	}
}
