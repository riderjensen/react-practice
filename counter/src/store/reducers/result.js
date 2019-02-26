import * as actionTypes from '../actions';

const initialState = {
	results: []
}

export default function (state = initialState, action) {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({ id: new Date(), value: state.counter })
			}
		case actionTypes.DELETE_RESULT:
			const updatedArray = state.results.filter((result, index) => result.id !== action.resultElId);
			return {
				...state,
				results: updatedArray
			}
	}

	return state;
}