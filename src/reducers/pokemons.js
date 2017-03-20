import {
	ADD_POKEMON,
	CHANGE_POKEMON,
	REMOVE_POKEMON,
	CREATE_POKEMON,
} from '../constants/Events'
import ReactDOM from 'react-dom'
import users from '../constants/Users'


export function new_pokemons(state = [], action) {

	switch( action.type ) {

		case ADD_POKEMON:
			let id = action.payload.id;
			return state.filter(item => item.id !== id);

		case CREATE_POKEMON:
			return [...state, action.payload];

		default:
			return state;
	}
}


export function my_pokemons(state = [], action) {

	switch( action.type ) {

		case ADD_POKEMON:
			return [...state, action.payload];

		case REMOVE_POKEMON:
			let id = action.payload.id;
			return state.filter(item => item.id !== id);

		case CHANGE_POKEMON:
			for (let i = 0; i < state.length; i++) {
				if (state[i].id == action.payload.id) {

					let {name, info, avatar} = action.payload;
					state[i] = {...state[i], name: name, info: info, avatar: avatar}
				}
			}
			return [...state];


		default:
			return state;
	}
}
