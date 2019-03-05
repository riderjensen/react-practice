import * as actionTypes from '../actions';

const initialState = {
	counter: 0,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case actionTypes.INCREMENT:
			const newState = Object.assign({}, state);
			newState.counter = state.counter + 1;
			return newState;
		case actionTypes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}
		case actionTypes.ADD:
			return {
				...state,
				counter: state.counter + action.val
			}
		case actionTypes.SUB:
			return {
				...state,
				counter: state.counter - action.val
			}
		default:
			return state;

	}

}