import { store } from '../../store';
import style from './inform-board.module.css';

export const InaormBoard = ({
	isWhoMove,
	winner,
	setIsWhoMove,
	setWinner,
	setIsGameOver,
	setIsCross,
	setIsUpdate,
	isUpdate,
}) => {
	const handleReset = () => {
		setIsWhoMove('Ходят крестики');
		setWinner(null);
		setIsGameOver(false);
		setIsCross(true);
		store.dispatch({ type: 'reset' });
		setIsUpdate(!isUpdate);
	};

	return (
		<div className={style.infoBoard}>
			<p>{isWhoMove}</p>
			<p>{winner}</p>
			<button className={style.btn} onClick={handleReset}>⟲</button>
		</div>
	);
};
