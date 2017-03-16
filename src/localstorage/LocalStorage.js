export const loadState = () => {

	let serializedState = localStorage.getItem('state');

	//*** if item null creat him ***//
	if (serializedState === null) {
		serializedState = JSON.stringify({});
		localStorage.setItem('state', serializedState);
	}

	return JSON.parse(serializedState);
}

export const saveState = (state) => {
	const serializedState = JSON.stringify(state);
	localStorage.setItem('state', serializedState);
}