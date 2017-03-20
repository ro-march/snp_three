import React, { PropTypes, Component } from 'react';
import { users } from '../../constants/Users'
import { POPUP_CREATE_POKEMON } from '../../constants/Events';


export default class CreatePokemonPopup extends Component {

	static contextTypes = {
		actions: PropTypes.object.isRequired,
		new_pokemons: PropTypes.array.isRequired,
	}


	constructor(props, context) {
		super(props, context);
		this.state = {id: guid(), avatar: './public/icons/reload.png', name: '', info: ''}
	}


	onCloseHandler() {
		this.context.actions.hidePopup(POPUP_CREATE_POKEMON);
	}


	onCreatePokemon() {
		if (this.state.avatar !== './public/icons/reload.png' &&
			this.state.name !== '')
		{
			this.context.actions.createPokemon(this.state);
			this.onCloseHandler();
		}
	}


	onRandomAvatar() {
		let id = random(0, users.length-1);
		this.setState({ 
			avatar: users[id].avatar,
			info: users[id].info,
			name: users[id].name
		});
	}


	onChangeName(e) {
		this.setState({ name: e.target.value });
	}


	onChangeInfo(e) {
		this.setState({ info: e.target.value });
	}


	render() {
		const style = {backgroundImage: 'url('+this.state.avatar+')'}

		return (
			<div className="create-pokemon-popup">
				<div className="avatar" onClick={::this.onRandomAvatar} style={style}></div>
				<input className="name" value={this.state.name} onChange={::this.onChangeName} placeholder="введи имя"/>
				<textarea className="info-field" value={this.state.info} onChange={::this.onChangeInfo} placeholder="краткое описание"></textarea>
				<div className="add-btn" onClick={::this.onCreatePokemon}>Добавить</div>
				<div className="close-btn" onClick={::this.onCloseHandler}></div>
			</div>
		);
	}
}


const guid = () => {
  	return (new Date()).getTime();
}


const random = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
