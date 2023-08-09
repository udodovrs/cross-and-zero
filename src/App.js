import { useState } from 'react';
import './App.css';
import { PlayBoard } from './components/play_board/play-board';
import { InaormBoard } from './components/inform_board/inform-board';

export const App = () => {
	const [isWhoMove, setIsWhoMove] = useState('Ходят крестики');
	const [winner, setWinner] = useState(null);
	const [isGameOver, setIsGameOver] = useState(false);
	const [isCross, setIsCross] = useState(true);
	const [isUpdate, setIsUpdate] = useState(false);

	return (
		<div className="wrapper">
			<InaormBoard
				isWhoMove={isWhoMove}
				winner={winner}
				setIsWhoMove={setIsWhoMove}
				setWinner={setWinner}
				setIsGameOver={setIsGameOver}
				setIsCross={setIsCross}
				setIsUpdate={setIsUpdate}
				isUpdate={isUpdate}
				 />
			<PlayBoard
				setIsWhoMove={setIsWhoMove}
				setWinner={setWinner}
				isGameOver={isGameOver}
				setIsGameOver={setIsGameOver}
				isCross={isCross}
				setIsCross={setIsCross}
				isUpdate={isUpdate}
				setIsUpdate={setIsUpdate}
			/>
		</div>
	);
};
