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
		],
		showPersons: false
	}

	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{
					name: newName,
					age: 26
				},
				{
					name: 'Zooop',
					age: 200
				}
			]
		})
	}

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{
					name: event.target.value,
					age: 26
				},
				{
					name: 'Zooop',
					age: 200
				}
			]
		})
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		})
	}

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			borderRadius: '4px'
		};

		return (
			<div className="App">
				<h1>I am a react app</h1>

				<button
					style={style}
					onClick={this.togglePersonsHandler}>Toggle persons</button>
				{this.state.showPersons ? <div>
					<Person
						name={this.state.persons[0].name}
						age={this.state.persons[0].age}
						click={this.switchNameHandler.bind(this, 'Ridont')}
						changed={this.nameChangedHandler}

					>Zoop boop shloop</Person>
					<Person
						name={this.state.persons[1].name}
						age={this.state.persons[1].age}
					>Scoop whoop</Person>
				</div> : <h1>You have no persons</h1>}

			</div>
		);
	}
}

export default App;
