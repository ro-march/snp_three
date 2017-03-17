import {
	ADD_NEW_FRIEND,
	CHANGE_INFO,
	REMOVE_FRIEND
} from '../constants/Events'
import ReactDOM from 'react-dom'

export default function friendsList(state = [], action) {

	switch( action.type ) {

		case ADD_NEW_FRIEND:
			return [...state, action.payload];

		case CHANGE_INFO:
			for (let i = 0; i < state.length; i++) {
				if (state[i].id == action.payload.id) {
					var clone = Object.assign({}, state[i]);
					clone.info = action.payload.info;
					state[i] = clone;
				}
			}
			return [...state];

		case REMOVE_FRIEND:
			let id = action.payload.id;
			return state.filter(item => item.id !== id);

		default:
			return state;
	}
}