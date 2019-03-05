import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	counter: 0,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return updateObject(state, { counter: state.counter + 1 })
		case actionTypes.DECREMENT:
			return updateObject(state, { counter: state.counter - 1 })
		case actionTypes.ADD:
			return updateObject(state, { counter: state.counter + action.val })
		case actionTypes.SUB:
			return updateObject(state, { counter: state.counter - action.val })
		default:
			return state;

	}

}