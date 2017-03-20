import React, { PropTypes, Component } from 'react';
import { users } from '../../constants/Users'
import { POPUP_INFO_POKEMON } from '../../constants/Events'

export default class InfoPokemonPopup extends Component {

	//** injection **//
	static contextTypes = {
		actions: PropTypes.object.isRequired
	}
	
	
	constructor(props) {
		super(props);
		const {id, name, avatar, info} = props.popup.arg;
		this.data = {id: id, avatar: avatar, name: name, info: info}
	}
	
	
	onChangePokemon() {
		this.context.actions.hidePopup(POPUP_INFO_POKEMON);
	}
	

	onRandomAvatar() {
		let id = random(0, users.length-1);
		this.data.avatar= users[id].avatar;
		this.context.actions.changePokemon(this.data);
	}


	onChangeName(e) {
		this.data.name = e.target.value;
		this.context.actions.changePokemon(this.data);
	}


	onChangeInfo(e) {
		this.data.info = e.target.value;
		this.context.actions.changePokemon(this.data);
	}


	onClose() {
		this.context.actions.hidePopup(POPUP_INFO_POKEMON);
	}
	
	
	render() {
		const style = {backgroundImage: 'url('+this.data.avatar+')'}
		
		return (
			<div className="info-pokemon-popup">
				<div className="avatar" style={style}></div>
				<input className="name" value={this.data.name} onChange={::this.onChangeName} placeholder="введи имя"/>
				<textarea className="info-field" onChange={::this.onChangeInfo} placeholder="краткое описание"></textarea>
				<div className="change-btn" onClick={::this.onChangePokemon}>Изменить</div>
				<div className="close-btn" onClick={::this.onClose}></div>
			</div>
		);
	}
}
