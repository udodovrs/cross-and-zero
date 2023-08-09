import { useEffect } from 'react';
import style from './play_board.module.css';
import { store } from '../../store';
import { getWinner } from '../../utilits';

export const PlayBoard = ({
	setIsWhoMove,
	setWinner,
	isGameOver,
	setIsGameOver,
	isCross,
	setIsCross,
	isUpdate,
	setIsUpdate,
}) => {
	useEffect(() => {
		store.getState();
	}, [isUpdate]);

	const handleClick = (payload) => {
		if (isGameOver) {
			return;
		}

		const valuePlayBox = store.getState()[payload].show;

		if (valuePlayBox === '' && isCross) {
			store.dispatch({ type: 'cross', payload });
			setIsCross(false);
			setIsUpdate(!isUpdate);
			setIsWhoMove('Ходят нолики');
			getWinner(setWinner, setIsGameOver, setIsWhoMove);
		} else if (valuePlayBox === '' && !isCross) {
			store.dispatch({ type: 'zero', payload });
			setIsCross(true);
			setIsUpdate(!isUpdate);
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
