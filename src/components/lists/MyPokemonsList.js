import React, { PropTypes, Component } from 'react';
import MyPokemon from '../../components/elements/MyPokemon'
import { Router as BrowserRouter, Route } from 'react-router-dom'

export default class MyPokemonsList extends Component {

	//** injection **//
	static contextTypes = {
		actions: PropTypes.object.isRequired,
		my_pokemons: PropTypes.array.isRequired,
	}


	constructor(props) {
		super(props);
		this.state = {search: ''}
	}

	onSearch(e) {
		this.setState({
			search: e.target.value
		});
	}
	
	search(search, text) {
		return (text.toLowerCase().indexOf(search.toLowerCase()) + 1);
		return false;
	}

	render() {
		const { my_pokemons } = this.context;

		let listFilter = []

		for (let i = 0; i < my_pokemons.length; i++) {
			if (this.search(this.state.search, my_pokemons[i].name))
				listFilter.push(my_pokemons[i])
		}

		const list = listFilter.map((pokemon, key) => {
		 	return <MyPokemon key={key} pokemon={pokemon} />
		});

		return (
			<div className="friends-list">
				<div className="bar">
					<input className="search" onChange={::this.onSearch} />
				</div>
				<div className="scroll">{list}</div>
			</div>
		);
	}
}
