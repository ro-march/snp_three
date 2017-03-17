import React, { Component } from 'react';
import CreatePokemonPopup from './popups/CreatePokemonPopup'


export default class Popups extends Component {
	
	render() {
		const { popups, userActions, changePokemon } = this.props.data;
		const popupList = []

		if (popups.popupCreatePokemon.show)
			popupList.push( <CreatePokemonPopup key='1' actions={userActions}/> )

		if (popups.popupInfoPokemon.show)
			popupList.push( <InfoPokemonPopup key='1' actions={userActions} pokemon={changePokemon}/> )

		if (popupList.length < 1)
			return null;

		return (
			<div className="popup-container">{popupList}</div>
		);
	}
}