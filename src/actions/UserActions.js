import {
	ADD_POKEMON,
	REMOVE_POKEMON,
	CHANGE_POKEMON,
	CREATE_POKEMON,
	SHOW_POPUP,
	HIDE_POPUP
} from '../constants/Events'


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


export function createPokemon(pokemon) {
	return (dispatch) =>
	{
		dispatch({
			type: CREATE_POKEMON,
			payload: pokemon
		})
	}
}


export function addPokemon(pokemon) {
	return (dispatch) =>
	{
		dispatch({
			type: ADD_POKEMON,
			payload: pokemon
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


export function changePokemon(pokemon) {
	return (dispatch) =>
	{
		dispatch({
			type: CHANGE_POKEMON,
			payload: pokemon
		})
	}
}