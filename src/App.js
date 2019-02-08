import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{
				id: 'asdf',
				name: 'Rider',
				age: 23
			},
			{
				id: 'sfhs',
				name: 'Zooop',
				age: 20
			}
		],
		showPersons: false
	}

	deletePersonHandler = (index) => {
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({
			persons: persons
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

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person
							click={() => this.deletePersonHandler(index)}
							name={person.name}
							age={person.age}
							key={person.id} />
					})}
				</div>


			);
		}

		return (

			<div className="App">
				<h1>I am a react app</h1>

				<button
					style={style}
					onClick={this.togglePersonsHandler}>Toggle persons</button>
				{persons}
			</div>

		);
	}
}

export default App;
