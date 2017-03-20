import React, { PropTypes, Component } from 'react';
import { POPUP_INFO_POKEMON } from '../../constants/Events'


export default class MyPokemon extends Component {

	
	static contextTypes = {
		actions: PropTypes.object.isRequired,
	}


	onClickAvatar() {
		this.props.history.push('/items/'+this.props.id);
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