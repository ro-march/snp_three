import React, { Component } from 'react';
import NewFriend from '../components/NewFriend'


export default class RequestList extends Component {

	render() {
		const { requestList, addNewFriend } = this.props;

		const list = requestList.map((friend, key) => {
		 	return <NewFriend key={key} info={friend.info} avatar={friend.avatar} name={friend.name} id={friend.id} addNewFriend={addNewFriend}/>
		});

		return (
			<div className="request-list">
				<div className="title">vpokemone</div>
				<div className="scroll">{list}</div>
			</div>
		);
	}
}