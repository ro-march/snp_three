import React, { Component } from 'react';
import { users } from '../../constants/Users'

export default class InfoPokemonPopup extends Component {

	constructor(props) {
		super(props);
		const {id, name, avatar, info} = props.pokemon;
		this.state = {id: id, avatar: avatar, name: name, info: info}
	}

	onChangePokemon() {
		
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
			<div className="infp-pokemon-popup">
				<div className="avatar" style={style}></div>
				<input className="name" onChange={::this.onChangeName} placeholder="введи имя"/>
				<textarea className="info-field" onChange={::this.onChangeInfo} placeholder="краткое описание"></textarea>
				<div className="change-btn" onClick={::this.onChangePokemon}>Изменить</div>
				<div className="close-btn" onClick={::this.onCloseHandler}></div>
			</div>
		);
	}
}
