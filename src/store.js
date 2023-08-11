import { createStore } from 'redux';
import { INITIAL_STATE } from './initial_state';

const reducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'cross':
			const newCrossState = [...state];
			newCrossState[payload] = { ...newCrossState[payload], show: 'X', value: 1 };
			return newCrossState;
		case 'zero':
			const newZeroState = [...state];
			newZeroState[payload] = { ...newZeroState[payload], show: '0', value: -1 };
			return newZeroState;
		case 'reset':
			return INITIAL_STATE;
		default:
			return state;
	}
};

export let store = createStore(reducer);
