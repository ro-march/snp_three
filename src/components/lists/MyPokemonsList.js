import React, { PropTypes, Component } from 'react';
import MyPokemon from '../../components/elements/MyPokemon'
import { Router as BrowserRouter, Route } from 'react-router-dom'

export default class MyPokemonsList extends Component {

	//** injection **//
	static contextTypes = {
		actions: PropTypes.object.isRequired,
		my_pokemons: PropTypes.array.isRequired,
	}


	componentWillMount() {
		this.state = { search: this.props.location.search.substring(8, 100) }
	}


	onSearch(e) {
		 if (e.target.value.length > 0)
		 	this.props.history.push('?search='+e.target.value);
		 else
		 	this.props.history.push('');

		this.setState({
			search: e.target.value
		});
	}

	
	search(search, text) {
		return (text.toLowerCase().indexOf(search.toLowerCase()) + 1);
		return false;
	}


	getPokemons(list) {
		if (list.length > 0)
			return <div className="scroll">{list}</div>
		else
			return <div className="title-no-pokemons">У вас нету покемонов</div>
	}
	

	render() {
		const { my_pokemons } = this.context;

		let listFilter = []

		for (let i = 0; i < my_pokemons.length; i++) {
			if (this.search(this.state.search, my_pokemons[i].name))
				listFilter.push(my_pokemons[i])
		}

		const list = listFilter.map((pokemon, index) => {
		 	return <MyPokemon key={index} id={index} pokemon={pokemon} history={this.props.history}/>
		});

		return (
			<div className="friends-list">
				<div className="bar">
					<input className="search" placeholder="Поиск" onChange={::this.onSearch} />
				</div>
				{this.getPokemons(list)}
			</div>
		);
	}
}
