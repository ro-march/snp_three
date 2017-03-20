import {
	ADD_NEW_FRIEND,
	CANCEL_NEW_FRIEND,
	SHOW_INFO,
	CLOSE_INFO,
	REMOVE_POKEMON,
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

export function showPopup( name, arg = null ) {
	return (dispatch) =>
	{
		dispatch({
			type: SHOW_POPUP,
			payload: {
				name: name,
				arg: arg
			}
		})
	}
}

export function hidePopup( name, arg = null ) {
	return (dispatch) =>
	{
		dispatch({
			type: HIDE_POPUP,
			payload: {
				name: name,
				arg: arg
			}
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

export function removePokemon(pokemon) {
	return (dispatch) =>
	{
		dispatch({
			type: REMOVE_POKEMON,
			payload: pokemon
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