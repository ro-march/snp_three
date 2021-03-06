import React, { PropTypes, Component } from 'react';
import NewPokemon from '../../components/elements/NewPokemon'
import { POPUP_CREATE_POKEMON } from '../../constants/Events'


export default class NewPokemonsList extends Component {

	//** injection **//
	static contextTypes = {
		actions: PropTypes.object.isRequired,
		new_pokemons: PropTypes.array.isRequired,
	}


	onNewPokemon() {
		this.context.actions.showPopup(POPUP_CREATE_POKEMON);
	}
	

	render() {
		const { new_pokemons } = this.context;

		const list = new_pokemons.map((pokemon, index) => {
		 	return <NewPokemon key={index} id={index} pokemon={pokemon}/>
		});

		return (
			<div className="request-list">
				<div className="title">
					<div className="newpokemon" onClick={::this.onNewPokemon}></div>
					<div className="appname">mypokemon</div>
				</div>
				<div className="scroll">{list}</div>
			</div>
		);
	}
}