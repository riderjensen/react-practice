import React , { useEffect } from 'react';

import assignedClasses from './cockpit.css'

const cockpit = (props) => {
	useEffect(() => {
		console.log('[Cockpit.js] useEffect')
	})

	// can have as many useEffect as you want


	// runs once
	useEffect(() => {
		console.log('[Cockpit.js] useEffect')
		return () => {
			console.log('I run before a first creation and just before a deletion of this item')
		}
	}, [])

	// runs anytime you change the data that is passed in the array
	useEffect(() => {
		console.log('[Cockpit.js] useEffect')
		return () => {
			console.log('I run after use effect ')
		}
	}, ['bam'])

	const classes = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = assignedClasses.red
	}

	if (props.personsLength <= 2) {
		classes.push(assignedClasses.red)
	}
	if (props.personsLength <= 1) {
		classes.push(assignedClasses.bold);
	}

	return (
		<div>
			<h1 className={classes.join(' ')}>{props.title}</h1>
			<button
				className={btnClass}
				onClick={props.clicked}>Toggle persons</button>
		</div>
	);
}

export default React.memo(cockpit);