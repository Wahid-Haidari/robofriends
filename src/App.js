import React , {Component} from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox'
import {robots} from './robots.js';
import './App.css'


class App extends Component{

	constructor(){
		super()
		this.state = {
			robots: robots,
			searchFiled: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchFiled: event.target.value});
	}

	render(){

		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchFiled.toLowerCase());
		})

		return(
			<div className='tc'>
				<h1 className="f1">Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/> 
			</div>
		);
	}
	
}

export default App;