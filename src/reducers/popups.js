import {
	SHOW_POPUP,
	HIDE_POPUP,
	POPUP_CREATE_POKEMON,
	POPUP_INFO_POKEMON,
} from '../constants/Events'


const regPopups = [];


// registry popup
export function regPopup(name, component) {
	regPopups.push( {name: name, isShow: false, arg: null, component: component} )
}


// change popup
function changePopup(state, name, isShow, arg) {
		for (let i = 0; i < state.length; i++)
			if (state[i].name == name)
				state[i] = {name: name, isShow: isShow, arg: arg, component: state[i].component};
}


// reducer
export default function popups(state = regPopups, action) {
	switch( action.type ) {

		//
		case 'SHOW_POPUP':
			changePopup(state, action.payload.name, true, action.payload.arg);
			return [...state]

		//
		case 'HIDE_POPUP':
			changePopup(state, action.payload.name, false, action.payload.arg);
			return [...state]

		//
		default:
			return state;
	}
}