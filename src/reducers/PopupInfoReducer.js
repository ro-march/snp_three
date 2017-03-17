import {
	SHOW_INFO,
	CLOSE_INFO
} from '../constants/Events'

export default function PopupInfoReducer(state = {}, action) {

	switch( action.type ) {

		case SHOW_INFO:
			return action.payload;

		case CLOSE_INFO:
			return action.payload;

		default:
			return state;
	}
}