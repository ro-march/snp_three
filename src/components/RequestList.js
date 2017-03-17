import React, { Component } from 'react';
import NewFriend from '../components/NewFriend'
import { POPUP_CREATE_POKEMON } from '../constants/Events'


export default class RequestList extends Component {

	onNewPokemon() {
		this.props.actions.showPopup(POPUP_CREATE_POKEMON);
	}

	render() {
		const {requestList, addNewFriend } = this.props;

		const list = requestList.map((friend, key) => {
		 	return <NewFriend key={key} info={friend.info} avatar={friend.avatar} name={friend.name} id={friend.id} addNewFriend={addNewFriend}/>
		});

		return (
			<div className="request-list">
				<div className="title">
					<div className="newpokemon" onClick={::this.onNewPokemon}></div>
					<div className="appname">pokemon</div>
				</div>
				<div className="scroll">{list}</div>
			</div>
		);
	}
}