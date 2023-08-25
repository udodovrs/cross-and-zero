import { Component } from 'react';
import { getWinner } from '../../utilits';
import { connect } from 'react-redux';

export class PlayBoardClassConteiner extends Component {
	handleClick = (payload) => {
		if (this.props.gameOver) {
			return;
		}
		const valuePlayBox = this.props.stateArr[payload].show;

		if (valuePlayBox === '' && this.props.cross) {
			this.props.dispatch({ type: 'cross', payload });
			this.props.dispatch({ type: 'isCross', payload: false });
			this.props.dispatch({ type: 'whoMove', payload: 'Ходят нолики' });
		} else if (valuePlayBox === '' && !this.props.cross) {
			this.props.dispatch({ type: 'zero', payload });
			this.props.dispatch({ type: 'isCross', payload: true });
			this.props.dispatch({ type: 'whoMove', payload: 'Ходят крестики' });
		}

		if (getWinner() === 'X') {
			this.props.dispatch({ type: 'winner', payload: 'Победили крестики' });
			this.props.dispatch({ type: 'gameOver', payload: true });
			this.props.dispatch({ type: 'whoMove', payload: null });
		} else if (getWinner() === '0') {
			this.props.dispatch({ type: 'winner', payload: 'Победили нолики' });
			this.props.dispatch({ type: 'gameOver', payload: true });
			this.props.dispatch({ type: 'whoMove', payload: null });
		} else if (getWinner() === 'ничья') {
			this.props.dispatch({ type: 'winner', payload: 'Ничья' });
			this.props.dispatch({ type: 'gameOver', payload: true });
			this.props.dispatch({ type: 'whoMove', payload: null });
		}
	};

	render() {
		return (
			<div className=" bg-slate-700 w-74 flex flex-wrap">
				{this.props.stateArr.map((item, index) => (
					<div
						className="w-26 h-26 m-1 text-center text-7xl border-4 border-blue-950 bg-slate-400 hover:bg-slate-300"
						key={index}
						onClick={() => this.handleClick(index)}
					>
						{item.show}
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	stateArr: state.playBoardState,
	gameOver: state.useStateState.gameOver,
	cross: state.useStateState.isCross,
});

export const PlayBoardClass = connect(mapStateToProps)(PlayBoardClassConteiner);
