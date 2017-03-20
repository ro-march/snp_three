import React from 'react'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import { saveState } from './localstorage/LocalStorage'
import { createBrowserHistory } from 'history';
require('./style.css')


//*** create store ***//
const store = configureStore();


//*** sibscribe for localStorage ***//
store.subscribe(() => {
	//*** save all ***//
	saveState({
		my_pokemons: store.getState().my_pokemons,
		new_pokemons: store.getState().new_pokemons
	});
});


ReactDOM.render(
	<Provider store={store}>
		 <App />
	</Provider>,
	document.getElementById('root')
);
