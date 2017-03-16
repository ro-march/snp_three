import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../actions/UserActions'


export class App extends Component {
	render() {
		return (
			<div>
			</div>
		);
	}
}


function mapStateToProps (state) {
	return {
	}
}


function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)