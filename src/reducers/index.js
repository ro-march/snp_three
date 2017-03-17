import { combineReducers } from 'redux'
import requestList from './requestList'
import friendsList from './friendsList'
import PopupInfoReducer from './PopupInfoReducer'
import popups from './popups'


export default combineReducers ({
	popups,
	requestList,
	friendsList,
	PopupInfoReducer
})