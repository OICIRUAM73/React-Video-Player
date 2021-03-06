import React, { Component } from 'react';
import Search from '../components/search.js';

class SearchContainer extends Component {
	state = {
		value:'Luis Fonsi',
	}
	handleSubmit = event => {
		event.preventDefault();
		console.log(this.input.value, 'submit');
	}

	setInputRef = element => {
		this.input = element;
	}

	handleInputChange = event => {
		this.setState({
			value: event.target.value.replace(' ', '-')
		})
	}

	render() {
		return (
			<Search 
				handleChange={this.handleInputChange}
				setRef={this.setInputRef}
				handleSubmit={this.handleSubmit}
				value={this.state.value}
			/>
		)
	}
}

export default SearchContainer;