import React, { useEffect, useRef, useContext } from 'react';

import assignedClasses from './cockpit.css'
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);

	useEffect(() => {
		console.log('[Cockpit.js] useEffect')
		
	})

	// can have as many useEffect as you want


	// runs once
	useEffect(() => {
		console.log('[Cockpit.js] useEffect')
		toggleBtnRef.current.click();

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
				onClick={props.clicked} 
				ref={toggleBtnRef}>Toggle persons
				
				</button>
			{<button onClick={authContext.login}>Log In</button>}
				
		</div>
	);
}

export default React.memo(cockpit);