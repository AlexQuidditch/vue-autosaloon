export const hello = () => {
	return console.log(
		'Мутация вызвана! '
		+ new Date().getHours()
		+ ':'
		+ new Date().getMinutes()
		+ ':'
		+ new Date().getSeconds()
		+ ':'
		+ new Date().getMilliseconds()
	);
};
