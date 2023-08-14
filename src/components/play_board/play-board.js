import style from './play_board.module.css';
import { store } from '../../store';
import { getWinner } from '../../utilits';
import { useDispatch } from 'react-redux';

export const PlayBoard = ({
	setIsWhoMove,
	setWinner,
	isGameOver,
	setIsGameOver,
	isCross,
	setIsCross,
}) => {
	const dispatch = useDispatch();

	const handleClick = (payload) => {
		if (isGameOver) {
			return;
		}

		const valuePlayBox = store.getState()[payload].show;

		if (valuePlayBox === '' && isCross) {
			dispatch({ type: 'cross', payload });
			setIsCross(false);
			setIsWhoMove('Ходят нолики');
			getWinner(setWinner, setIsGameOver, setIsWhoMove);
		} else if (valuePlayBox === '' && !isCross) {
			dispatch({ type: 'zero', payload });
			setIsCross(true);
			setIsWhoMove('Ходят крестики');
			getWinner(setWinner, setIsGameOver, setIsWhoMove);
		}
	};

	return (
		<div className={style.playBoard}>
			{store.getState().map((item, index) => (
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
