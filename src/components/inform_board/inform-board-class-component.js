import { Component } from 'react';
import { connect } from 'react-redux';

export class InformBoardClassConteiner extends Component {
	render() {
		return (
			<div className="text-xl w-56 relative m-4" >
				<p>{this.props.whoMove}</p>
				<p>{this.props.winner}</p>
				<button
					className="w-14 h-14 m-1 border-4 border-blue-950 bg-green-500 absolute left-52 -top-5  active:bg-slate-500"
					onClick={() => this.props.dispatch({ type: 'reset' })}
				>
					⟲
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	whoMove: state.useStateState.whoMove,
	winner: state.useStateState.winner,
});

export const InformBoardClass = connect(mapStateToProps)(InformBoardClassConteiner);
