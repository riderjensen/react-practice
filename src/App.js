import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';

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
		const style = {
			backgroundColor: 'green',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			borderRadius: '4px',
			color: 'white',
			':hover': {
				backgroundColor: 'rebeccaPurple'
			}
		};

		let persons = null;

		if (this.state.showPersons) {
			style.backgroundColor = 'red';
			style[':hover'] = {
				backgroundColor: 'pink'
			}

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
		}

		const classes = [];

		if (this.state.persons.length <= 2) {
			classes.push('red')
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}

		return (
			<StyleRoot>
				<div className="App">
					<h1 className={classes.join(' ')}>I am a react app</h1>

					<button
						style={style}
						onClick={this.togglePersonsHandler}>Toggle persons</button>
					{persons}
				</div>

			</StyleRoot>


		);
	}
}

export default Radium(App);
