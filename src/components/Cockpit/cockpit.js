import React from 'react';

import assignedClasses from './cockpit.css'

const cockpit = (props) => {

	const classes = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = assignedClasses.red
	}

	if (props.persons.length <= 2) {
		classes.push(assignedClasses.red)
	}
	if (props.persons.length <= 1) {
		classes.push(assignedClasses.bold);
	}

	return (
		<div>
			<h1 className={classes.join(' ')}>I am a react app</h1>
			<button
				className={btnClass}
				onClick={props.clicked}>Toggle persons</button>
		</div>
	);
}

export default cockpit;