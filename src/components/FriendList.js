import React, { Component } from 'react';
import MyFriend from '../components/MyFriend'

export default class FriendList extends Component {

	render() {
		const { friendsList, onShowInfo, onRemoveFriend } = this.props;
		
		const list = friendsList.map((friend, key) => {
		 	return <MyFriend key={key} avatar={friend.avatar}
		 			name={friend.name} id={friend.id} info={friend.info}
		 			onShowInfo={onShowInfo} onRemoveFriend={onRemoveFriend}/>
		});

		return (
			<div className="friends-list">
				<div className="bar"></div>
				<div className="scroll">{list}</div>
			</div>
		);
	}
}