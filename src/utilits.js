import { store } from './store';

const arrWin = () => [
	store.getState()[0].value + store.getState()[1].value + store.getState()[2].value,
	store.getState()[3].value + store.getState()[4].value + store.getState()[5].value,
	store.getState()[6].value + store.getState()[7].value + store.getState()[8].value,
	store.getState()[0].value + store.getState()[3].value + store.getState()[6].value,
	store.getState()[1].value + store.getState()[4].value + store.getState()[7].value,
	store.getState()[2].value + store.getState()[5].value + store.getState()[8].value,
	store.getState()[0].value + store.getState()[4].value + store.getState()[8].value,
	store.getState()[2].value + store.getState()[4].value + store.getState()[6].value,
];

export const getWinner = (setWinner, setIsGameOver, setIsWhoMove) => {
	const draw = store.getState().filter(({ show }) => show === '');
	let isGameOver = true;

	arrWin().forEach((item) => {
		if (item === 3) {
			setWinner('Победили крестики');
			setIsGameOver(true);
			setIsWhoMove(null);
			isGameOver = false;
		} else if (item === -3) {
			setWinner('Победили нолики');
			setIsGameOver(true);
			setIsWhoMove(null);
			isGameOver = false;
		}
	});

	if (draw.length === 0 && isGameOver) {
		setWinner('Ничья');
		setIsGameOver(true);
		setIsWhoMove(null);
	}
};
