import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RequestList from '../components/RequestList'
import FriendList from '../components/FriendList'
import * as userActions from '../actions/UserActions'


export class App extends Component {
	render() {
		const { addNewFriend, CancelNewFriend } = this.props.userActions;
		const { requestList } = this.props;
		return (
			<div className="container">
				<RequestList requestList={requestList} addNewFriend={addNewFriend}/>
				<FriendList />
			</div>
		);
	}
}


function mapStateToProps (state) {
	return {
		requestList: state.requestList
	}
}


function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)