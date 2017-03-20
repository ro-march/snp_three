import React from 'react'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import { saveState } from './localstorage/LocalStorage'
import { createBrowserHistory } from 'history';

//import {BrowserRouter, Route} from 'react-router'
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

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

//const history = syncHistoryWithStore(createBrowserHistory(), store)

ReactDOM.render(
	<Provider store={store}>
		 <App />
	</Provider>,
	document.getElementById('root')
);
