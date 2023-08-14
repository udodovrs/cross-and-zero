import { INITIAL_STATE_USESTATE } from '../initial_state';


export const useStateReducer = (state = INITIAL_STATE_USESTATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'whoMove':
			return {...state, whoMove: payload};
		case 'gameOver':
			return {...state, gameOver: payload};
		case 'winner':
			return {...state, winner: payload};
		case 'isCross':
			return {...state, isCross: payload};
		case 'reset':
			return INITIAL_STATE_USESTATE;
		default:
			return state;
	}
};
