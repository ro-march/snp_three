import React, { PropTypes, Component } from 'react';
import CreatePokemonPopup from './popups/CreatePokemonPopup'
import InfoPokemonPopup from './popups/InfoPokemonPopup'


export default class Popups extends Component {

	static contextTypes = {
		actions: PropTypes.object.isRequired,
		popups: PropTypes.array.isRequired,
	}


	render() {
		const { popups } = this.context
		const list = []

		for (let i = 0; i < popups.length; i++)
			if (popups[i].isShow)
				list.push( React.createElement(popups[i].component, {key: i, popup: popups[i]}) )

		if (list.length < 1)
			return null

		return <div className="popup-container">{list}</div>
	}
}