import React, { Component } from 'react';

export default class NewFriend extends Component {

	onAddHandler () {
		this.props.addNewFriend(this.props);
	}
    	
	render() {
		const { avatar, name } = this.props;

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