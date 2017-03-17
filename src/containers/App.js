import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RequestList from '../components/RequestList'
import FriendList from '../components/FriendList'
import Info from '../components/Info'
import Popups from '../components/Popups'
import * as userActions from '../actions/UserActions'


export class App extends Component {
	render() {
		const actions = this.props.userActions;
		const popups = this.props.popups;

		const { removeFriend, changeInfo, showInfo, closeInfo, addNewFriend, CancelNewFriend } = this.props.userActions;
		const { requestList, friendsList, info } = this.props;
		return (
			<div className="container">
				<RequestList actions={actions} requestList={requestList} addNewFriend={addNewFriend}/>
				<FriendList friendsList={friendsList} onShowInfo={showInfo} onRemoveFriend={removeFriend}/>
				<Popups data={this.props}/>
			</div>
		);
	}
}


function mapStateToProps (state) {
	return {
		requestList: state.requestList,
		friendsList: state.friendsList,
		info: state.PopupInfoReducer,
		popups: state.popups,
	}
}


function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)