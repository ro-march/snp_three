import { combineReducers } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import popups from './popups'
import {
	my_pokemons,
	new_pokemons,
} from './pokemons'

export default combineReducers ({
	popups,
	my_pokemons,
	new_pokemons,
	routing: routerReducer,
})
