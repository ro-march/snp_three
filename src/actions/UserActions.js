import {
	ADD_NEW_FRIEND,
	CANCEL_NEW_FRIEND,
	REMOVE_FRIEND,
	SHOW_INFO,
	CLOSE_INFO,
	CHANGE_INFO
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

export function removeFriend(friend) {
	return (dispatch) =>
	{
		dispatch({
			type: REMOVE_FRIEND,
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

 //*** ***//
export function changeInfo(id, info) {
	return (dispatch) =>
	{
		dispatch({
			type: CHANGE_INFO,
			payload: {id: id, info: info}
		})
	}
}

 //*** ***//
export function showInfo(friend) {
	return (dispatch) =>
	{
		dispatch({
			type: SHOW_INFO,
			payload: friend
		})
	}
}

export function closeInfo(friend) {
	return (dispatch) =>
	{
		dispatch({
			type: CLOSE_INFO,
			payload: {}
		})
	}
}