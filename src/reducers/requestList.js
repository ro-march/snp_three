import { users } from '../constants/Users'
import {
	ADD_NEW_FRIEND,
	CANCEL_NEW_FRIEND
} from '../constants/Events'

const initState = users;

export default function requestList(state = initState, action) {

	switch( action.type ) {

		case ADD_NEW_FRIEND:
			let id = action.payload.id;
			return state.filter(comment => comment.id !== id);

		// case CANCEL_NEW_FRIEND:
		// 	return [...state, {name: '', count: 1, cost: 0} ]


		default:
			return state;
	}
}