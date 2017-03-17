import { combineReducers } from 'redux'

import requestList from './requestList'
import friendsList from './friendsList'
import PopupInfoReducer from './PopupInfoReducer'


export default combineReducers ({
	requestList,
	friendsList,
	PopupInfoReducer
})