import React , {Component} from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox'
import {robots} from './robots.js';
import './App.css'
import Scroll from './Scroll';


class App extends Component{

	constructor(){
		super()
		this.state = {
			robots: [],
			searchFiled: ''
		}
	}

	componentDidMount(){

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then( users => this.setState({robots: robots}));
		
	}

	onSearchChange = (event) => {
		this.setState({searchFiled: event.target.value});
	}

	render(){

		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchFiled.toLowerCase());
		})

		if(this.state.robots.length === 0){
			return<h1>Loading...</h1>

		}else{
			return(
				<div className='tc'>
					
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);

		}

		
	}
	
}

export default App;