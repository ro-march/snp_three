import React, { Component } from 'react';

export default class Info extends Component {

	onCloseInfoHandler() {
		this.props.onCloseInfo();
	}

	onChangeInfo(e) {
		let text = e.target.value;
		let id = this.props.info.id;
		this.props.changeInfo(id, text);
	}

	render() {
		const { info } = this.props;

		if (Object.keys(info).length == 0)
			return null;

		const avatarStyle = {
		  backgroundImage: 'url('+ info.avatar +')'
		}

		return (
			<div className="info-popup">
				<div className="content">
					<div className="avatar" style={avatarStyle}></div>
					<div className="name">{info.name}</div>
					<textarea onChange={::this.onChangeInfo} defaultValue={info.info} className="field"></textarea>
					<div className="close-btn" onClick={::this.onCloseInfoHandler}></div>
				</div>
			</div>
		);
	}
}