import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
	render() {
		return (
			<React.Fragment>
					<p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
					<input type="text" onChange={this.props.changed} value={this.props.name} />
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