import {
	ADD_NEW_FRIEND,
	CHANGE_POKEMON,
	REMOVE_FRIEND
} from '../constants/Events'
import ReactDOM from 'react-dom'


export default function new_pokemons(state = [], action) {

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


export default function my_pokemons(state = [], action) {

	switch( action.type ) {

		case ADD_NEW_FRIEND:
			return [...state, action.payload];

		case REMOVE_FRIEND:
			let id = action.payload.id;
			return state.filter(item => item.id !== id);

		default:
			return state;
	}
}

export default function change_pokemon(state = {}, action) {

	switch( action.type ) {

		case CHANGE_POKEMON:
			for (let i = 0; i < state.length; i++) {
				if (state[i].id == action.payload.id) {
					var clone = Object.assign({}, state[i]);

					clone.avatar = action.payload.avatar;
					clone.name = action.payload.name;
					clone.info = action.payload.info;

					state[i] = clone;
				}
			}
			return [...state];

		default:
			return state;
	}
}