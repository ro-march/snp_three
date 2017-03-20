import React, { PropTypes, Component } from 'react';
import { POPUP_INFO_POKEMON } from '../../constants/Events'

export default class MyPokemon extends Component {

	//** injection **//
	static contextTypes = {
		actions: PropTypes.object.isRequired,
	}


	onClickAvatar() {
		//context.router.push('/my-new-location')
		//this.context.actions.showPopup(POPUP_INFO_POKEMON, this.props.pokemon);
	}


	onRemoveHandler() {
		this.context.actions.removePokemon(this.props.pokemon);
	}


	render() {

		var { avatar, name } = this.props.pokemon;

		const avatarStyle = {
		  backgroundImage: 'url('+ avatar +')'
		}

		return (
			<div className="my-friend">
				<div className="avatar" onClick={::this.onClickAvatar} style={avatarStyle}></div>
				<div className="user-name">{name}</div>
				<div className="remove-btn" onClick={::this.onRemoveHandler}></div>
			</div>
		);
	}
}