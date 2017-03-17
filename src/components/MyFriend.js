import React, { Component } from 'react';

export default class MyFriend extends Component {

	onClickAvatar() {
		this.props.onShowInfo( this.props );
	}

	onRemoveHandler() {
		this.props.onRemoveFriend(this.props);
	}

	render() {

		const { avatar, name, onShowInfo, onRemoveFriend } = this.props;

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