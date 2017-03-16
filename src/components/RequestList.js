import React, { Component } from 'react';
import NewFriend from '../components/NewFriend'


export default class RequestList extends Component {

	render() {
		const { requestList, addNewFriend } = this.props;

		const list = requestList.map((friend, key) => {
		 	return <NewFriend id={key} key={key} avatar={friend.url} username={friend.name} id={friend.id} addNewFriend={addNewFriend}/>
		});

		return (
			<div className="request-list">
				<div className="scroll">
					{list}
				</div>
			</div>
		);
	}
}