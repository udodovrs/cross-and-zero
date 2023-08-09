import { createStore } from 'redux';
import { INITIAL_STATE } from './initial_state';

const reducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	console.log(INITIAL_STATE);
	switch (type) {
		case 'cross':
			const newCrossState = [...state]
			newCrossState[payload].show = 'X';
			newCrossState[payload].value = 1;
			return newCrossState;
		case 'zero':
			const newZeroState = [...state]
			newZeroState[payload].show = '0';
			newZeroState[payload].value = -1;
			return newZeroState;
		case 'reset':
			return [
				{ value: 0, show: '' },
				{ value: 0, show: '' },
				{ value: 0, show: '' },
				{ value: 0, show: '' },
				{ value: 0, show: '' },
				{ value: 0, show: '' },
				{ value: 0, show: '' },
				{ value: 0, show: '' },
				{ value: 0, show: '' },
			];
		default:
			return state;
	}
};

export let store = createStore(reducer);
