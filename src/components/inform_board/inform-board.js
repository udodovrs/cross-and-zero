import style from './inform-board.module.css';
import { useDispatch } from 'react-redux';

export const InaormBoard = ({
	isWhoMove,
	winner,
	setIsWhoMove,
	setWinner,
	setIsGameOver,
	setIsCross,
}) => {
	const dispatch = useDispatch();

	const handleReset = () => {
		setIsWhoMove('Ходят крестики');
		setWinner(null);
		setIsGameOver(false);
		setIsCross(true);
		dispatch({ type: 'reset' });
	};

	return (
		<div className={style.infoBoard}>
			<p>{isWhoMove}</p>
			<p>{winner}</p>
			<button className={style.btn} onClick={handleReset}>
				⟲
			</button>
		</div>
	);
};
