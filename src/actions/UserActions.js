import {
	ADD_NEW_FRIEND,
	CANCEL_NEW_FRIEND
} from '../constants/Events'


 //*** ***//
export function addNewFriend(friend) {
	return (dispatch) =>
	{
		dispatch({
			type: ADD_NEW_FRIEND,
			payload: friend
		})
	}
}

export function cancelNewFriend(friend) {
	return (dispatch) =>
	{
		dispatch({
			type: CANCEL_NEW_FRIEND,
			payload: friend
		})
	}
}