import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{
				name: 'Rider',
				age: 23
			},
			{
				name: 'Zooop',
				age: 20
			}
		]
	}

	switchNameHandler = () => {
		this.setState({
			persons: [
				{
					name: 'Riderino',
					age: 26
				},
				{
					name: 'Zooop',
					age: 200
				}
			]
		})
	}

	render() {
		return (
			<div className="App">
				<h1>I am a react app</h1>
				<button onClick={this.switchNameHandler}>Change name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Zoop boop shloop</Person>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Scoop whoop</Person>

			</div>
		);
	}
}

export default App;
