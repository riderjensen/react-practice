import React, { Component } from 'react';
import scopedClasses from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/cockpit';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
		this.state = {
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
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
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

	componentDidMount() {
		console.log('[App.js] componentDidMount');

	}

	render() {
		console.log('[App.js] render');

		let persons = null;


		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons
						persons={this.state.persons}
						changed={this.nameChangedHandler}
						clicked={this.deletePersonHandler} />
				</div>


			);

		}

		return (
			<div className={scopedClasses.App}>
				<Cockpit
					title={this.props.appTitle}
					showpersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}
				/>
				{persons}
			</div>
		);
	}
}

export default App;
