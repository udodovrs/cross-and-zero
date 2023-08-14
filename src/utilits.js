import { store } from './store';

export const getWinner = () => {
	const arr = store.getState().playBoardState;

	const arrWin = () => [
		arr[0].value + arr[1].value + arr[2].value,
		arr[3].value + arr[4].value + arr[5].value,
		arr[6].value + arr[7].value + arr[8].value,
		arr[0].value + arr[3].value + arr[6].value,
		arr[1].value + arr[4].value + arr[7].value,
		arr[2].value + arr[5].value + arr[8].value,
		arr[0].value + arr[4].value + arr[8].value,
		arr[2].value + arr[4].value + arr[6].value,
	];

	const draw = arr.filter(({ show }) => show === '');
	let isGameOver = true;
	let result = null;

	arrWin().forEach((item) => {
		if (item === 3) {
			result = 'X';
			isGameOver = false;
		} else if (item === -3) {
			result = '0';
			isGameOver = false;
		}
	});

	if (draw.length === 0 && isGameOver) {
		result = 'ничья';
	}

	return result;
};
