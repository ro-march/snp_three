import React, { Component } from 'react';
import { users } from '../../constants/Users'
import { POPUP_CREATE_POKEMON } from '../../constants/Events';


export default class CreatePokemonPopup extends Component {

	constructor(props) {
		super(props);
		this.state = {id: guid(), avatar: './public/icons/reload.png', name: '', info: ''}
	}

	onCloseHandler() {
		this.props.actions.hidePopup(POPUP_CREATE_POKEMON);
	}

	onCreatePokemon() {
		if (this.state.avatar !== './public/icons/reload.png' &&
			this.state.name !== '')
		{
			console.log(this.state);
			this.props.actions.createPokemon(this.state);
			this.onCloseHandler();
		}
	}

	onRandomAvatar() {
		let id = random(0, users.length-1);
		this.setState({ avatar: users[id].avatar });
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
				<input className="name" onChange={::this.onChangeName} placeholder="введи имя"/>
				<textarea className="info-field" onChange={::this.onChangeInfo} placeholder="краткое описание"></textarea>
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
