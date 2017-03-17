import {
	SHOW_POPUP,
	HIDE_POPUP,
	POPUP_CREATE_POKEMON
} from '../constants/Events'

const initState = {
	popupCreatePokemon: { show: false },
	popupInfoPokemon: { show: false }
}

export default function popups(state = initState, action) {

	switch( action.type ) {

		//*** show popups ***//
		case SHOW_POPUP:
			switch (action.payload) {
				//******//
				case POPUP_CREATE_POKEMON:
					state.popupCreatePokemon.show = true;
			}
			return {...state};

		

		//*** hide popups ***//
		case HIDE_POPUP:
			switch (action.payload) {

				//******//
				case POPUP_CREATE_POKEMON:
					state.popupCreatePokemon.show = false;
			}
			return {...state};

		default:
			return state;
	}
}