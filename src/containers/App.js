import React, { Component } from 'react';
import scopedClasses from './App.css';

import Person from '../components/Persons/Person/Person';

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

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => p.id === id);
		const person = { ...this.state.persons[personIndex] };
		console.log(personIndex)
		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person

		this.setState({
			persons: persons
		})
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		})
	}

	render() {

		let persons = null;

		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person
							click={() => this.deletePersonHandler(index)}
							name={person.name}
							age={person.age}
							key={person.id}
							changed={(event) => this.nameChangedHandler(event, person.id)} />
					})}
				</div>


			);

			btnClass = scopedClasses.red;
		}

		const classes = [];

		if (this.state.persons.length <= 2) {
			classes.push('red')
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}

		return (
			<div className={scopedClasses.App}>
				<h1 className={classes.join(' ')}>I am a react app</h1>

				<button
					className={btnClass}
					onClick={this.togglePersonsHandler}>Toggle persons</button>
				{persons}
			</div>
		);
	}
}

export default App;
