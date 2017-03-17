import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RequestList from '../components/RequestList'
import FriendList from '../components/FriendList'
import Info from '../components/Info'

import * as userActions from '../actions/UserActions'


export class App extends Component {
	render() {
		const { removeFriend, changeInfo, showInfo, closeInfo, addNewFriend, CancelNewFriend } = this.props.userActions;
		const { requestList, friendsList, info } = this.props;
		return (
			<div className="container">
				<RequestList requestList={requestList} addNewFriend={addNewFriend}/>
				<FriendList friendsList={friendsList} onShowInfo={showInfo} onRemoveFriend={removeFriend}/>
				<Info info={info} onCloseInfo={closeInfo} changeInfo={changeInfo}/>
			</div>
		);
	}
}


function mapStateToProps (state) {
	return {
		requestList: state.requestList,
		friendsList: state.friendsList,
		info: state.PopupInfoReducer
	}
}


function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)