import './App.css';
import { PlayBoard } from './components/play_board/play-board';
import { InformBoard } from './components/inform_board/inform-board';

export const App = () => {
	return (
		<div className="wrapper">
			<InformBoard />
			<PlayBoard />
		</div>
	);
};
