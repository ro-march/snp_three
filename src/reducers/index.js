import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import requestList from './requestList'

export default combineReducers ({
	requestList
})