import style from './play_board.module.css';
import { getWinner } from '../../utilits';
import { useDispatch, useSelector } from 'react-redux';

export const PlayBoard = () => {
	const dispatch = useDispatch();

	const stateArr = useSelector((state) => state.playBoardState);
	const cross = useSelector((state) => state.useStateState.isCross);
	const gameOver = useSelector((state) => state.useStateState.gameOver);

	const handleClick = (payload) => {
		if (gameOver) {
			return;
		}
		const valuePlayBox = stateArr[payload].show;

		if (valuePlayBox === '' && cross) {
			dispatch({ type: 'cross', payload });
			dispatch({ type: 'isCross', payload: false });
			dispatch({ type: 'whoMove', payload: 'Ходят нолики' });
		} else if (valuePlayBox === '' && !cross) {
			dispatch({ type: 'zero', payload });
			dispatch({ type: 'isCross', payload: true });
			dispatch({ type: 'whoMove', payload: 'Ходят крестики' });
		}

		if (getWinner() === 'X') {
			dispatch({ type: 'winner', payload: 'Победили крестики' });
			dispatch({ type: 'gameOver', payload: true });
			dispatch({ type: 'whoMove', payload: null });
		} else if (getWinner() === '0') {
			dispatch({ type: 'winner', payload: 'Победили нолики' });
			dispatch({ type: 'gameOver', payload: true });
			dispatch({ type: 'whoMove', payload: null });
		} else if (getWinner() === 'ничья') {
			dispatch({ type: 'winner', payload: 'Ничья' });
			dispatch({ type: 'gameOver', payload: true });
			dispatch({ type: 'whoMove', payload: null });
		}
	};

	return (
		<div className={style.playBoard}>
			{stateArr.map((item, index) => (
				<div
					className={style.playBox}
					key={index}
					onClick={() => handleClick(index)}
				>
					{item.show}
				</div>
			))}
		</div>
	);
};
