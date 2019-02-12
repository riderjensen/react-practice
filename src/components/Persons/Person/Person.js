import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
	constructor(props) {
		super(props);
		this.myElementRef =  React.createRef();
	}

	static contextType = AuthContext;

	componentDidMount(){
		this.myElementRef.current.focus();
		console.log(this.context.authenticated)
	}

	render() {
		return (
			<React.Fragment>
			
					{this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}

					<p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
					<input type="text" onChange={this.props.changed} value={this.props.name} 
					// ref={(thisElement) => {this.myElement = thisElement}}
					ref={this.myElementRef}
					/>
			</React.Fragment>
		)
	}

}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number
};

export default withClass(Person, classes.person);