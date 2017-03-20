import React, { PropTypes, Component } from 'react';


export default class NewPokemon extends Component {

	//** injection **//
	static contextTypes = {
		actions: PropTypes.object.isRequired
	}


	onAddHandler () {
		this.context.actions.addPokemon(this.props.pokemon);
	}


	render() {
		const { avatar, name } = this.props.pokemon;

		const avatarStyle = {
		  backgroundImage: 'url(' + avatar + ')'
		}

		return (
			<div className="new-friend">
				<div className="avatar" style={avatarStyle}></div>
				<div className="user-name">{name}</div>
				<div className="add-btn" onClick={::this.onAddHandler}></div>
			</div>
		);
	}
}
