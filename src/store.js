import { createStore, combineReducers } from 'redux';
import { playBoardReducer } from './reducers/playboard-reducer'
import { useStateReducer } from './reducers/useState-reducer'


const reducer = combineReducers({
	playBoardState : playBoardReducer,
	useStateState : useStateReducer
})

export let store = createStore(reducer);
