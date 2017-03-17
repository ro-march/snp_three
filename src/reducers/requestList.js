import { users } from '../constants/Users'
import {
	ADD_NEW_FRIEND,
	CANCEL_NEW_FRIEND,
	CREATE_POKEMON
} from '../constants/Events'

//const initState = users.slice();

export default function requestList(state = [], action) {

	switch( action.type ) {

		case ADD_NEW_FRIEND:
			let id = action.payload.id;
			return state.filter(item => item.id !== id);

		case CREATE_POKEMON:
			return [...state, action.payload];

		default:
			return state;
	}
}