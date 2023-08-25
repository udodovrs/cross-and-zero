import './App.css';
//import { PlayBoard } from './components/play_board/play-board';
//import { InformBoard } from './components/inform_board/inform-board';
import { PlayBoardClass } from './components/play_board/play-board-class-component'
import { InformBoardClass } from './components/inform_board/inform-board-class-component'

export const App = () => {
	return (
		<div className="wrapper">
			{/* <InformBoard />
			<PlayBoard /> */}
			<InformBoardClass />
			<PlayBoardClass />
		</div>
	);
};
