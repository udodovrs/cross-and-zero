import style from './inform-board.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const InformBoard = () => {
	const dispatch = useDispatch();
	const whoMove = useSelector((state) => state.useStateState.whoMove);
	const winner = useSelector((state) => state.useStateState.winner);

	return (
		<div className={style.infoBoard}>
			<p>{whoMove}</p>
			<p>{winner}</p>
			<button className={style.btn} onClick={()=> dispatch({ type: 'reset' })}>
				⟲
			</button>
		</div>
	);
};
