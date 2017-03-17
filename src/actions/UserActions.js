import {
	ADD_NEW_FRIEND,
	CANCEL_NEW_FRIEND,
	REMOVE_FRIEND,
	SHOW_INFO,
	CLOSE_INFO,
	CHANGE_POKEMON,
	CREATE_POKEMON,
	SHOW_POPUP,
	HIDE_POPUP
} from '../constants/Events'


 //*** ***//
export function createPokemon(pokemon) {
	return (dispatch) =>
	{
		dispatch({
			type: CREATE_POKEMON,
			payload: pokemon
		})
	}
}

export function showPopup( id ) {
	return (dispatch) =>
	{
		dispatch({
			type: SHOW_POPUP,
			payload: id
		})
	}
}

export function hidePopup( id ) {
	return (dispatch) =>
	{
		dispatch({
			type: HIDE_POPUP,
			payload: id
		})
	}
}

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
export function changePokemon(pokemon) {
	return (dispatch) =>
	{
		dispatch({
			type: CHANGE_POKEMON,
			payload: pokemon
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