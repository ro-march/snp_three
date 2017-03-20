import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as userActions from '../actions/UserActions'
import * as popups from '../reducers/popups'
import {POPUP_CREATE_POKEMON, POPUP_INFO_POKEMON} from '../constants/Events'

import CreatePokemonPopup from '../components/popups/CreatePokemonPopup'
import NewPokemonsList from '../components/lists/NewPokemonsList'
import MyPokemonsList from '../components/lists/MyPokemonsList'
import ViewPokemon from '../components/elements/ViewPokemon'
import Popups from '../components/Popups'


export class App extends Component {


	componentWillMount() {
		popups.regPopup(POPUP_CREATE_POKEMON, CreatePokemonPopup);
	}


	render() {
		return (
		<Router>
			<div className="container">
				<NewPokemonsList />
				<Switch>
					<Route exact path="/" component={MyPokemonsList} />
					<Route path="/items/:routeId" component={ViewPokemon} />
				</Switch>
				<Popups />
			</div>
		</Router>
		)
	}


	//** inject **//
	getChildContext() {
    	return {
    		actions: this.props.userActions,
    		popups: this.props.popups,
    		new_pokemons: this.props.new_pokemons,
    		my_pokemons: this.props.my_pokemons,
    	};
  	}
}


//** types dependency **//
App.childContextTypes = {
	actions: React.PropTypes.object,
	popups: React.PropTypes.array,
	new_pokemons: React.PropTypes.array,
	my_pokemons: React.PropTypes.array,
}


function mapStateToProps (state) {
	return {
		popups: state.popups,
		new_pokemons: state.new_pokemons,
		my_pokemons: state.my_pokemons,
	}
}


function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
