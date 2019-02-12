import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
	constructor(props) {
		super(props);
		this.myElementRef =  React.createRef();
	}

	componentDidMount(){
		this.myElementRef.current.focus()
	}

	render() {
		return (
			<React.Fragment>
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