import React, { Component } from 'react';

export default class MyFriend extends Component {
	render() {
		return (
			<div className="my-friend">
				<div className="avatar"></div>
				<div className="user-name"></div>
				<div className="change-btn"></div>
				<div className="remove-btn"></div>
			</div>
		);
	}
}