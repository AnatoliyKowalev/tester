import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class MenuTub extends Component {
	render() {
		const url = "/" + this.props.label.toLowerCase().trim().replace(" ","-")
		return (
			<Link to={url}>{this.props.label}</Link>
		)	
	}
	
}	

export default MenuTub;