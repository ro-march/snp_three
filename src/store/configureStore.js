import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { loadState } from '../localstorage/LocalStorage'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


export default function configureStore(initialState) {

	//*** my initialState for localStage ***//
	const persistedState = loadState();

	
	const store = createStore(
		rootReducer,
		persistedState,
		composeWithDevTools (
			applyMiddleware(thunk),
		)
	)

	if (module.hot){
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer)
		})
	}

	return store;
}