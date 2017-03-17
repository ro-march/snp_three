import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import { saveState } from './localstorage/LocalStorage'
require('./style.css')

//*** create store ***//
const store = configureStore();

//*** sibscribe for localStorage ***//
store.subscribe(() => {
	//*** save all ***//
	saveState({
		friendsList: store.getState().friendsList,
		requestList: store.getState().requestList
	});
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);