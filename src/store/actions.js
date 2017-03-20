export const action = () => {};

export const hello = () => {
	return console.log(
		'Действие вызвано! '
		+ new Date().getHours()
		+ ':'
		+ new Date().getMinutes()
		+ ':'
		+ new Date().getSeconds()
		+ ':'
		+ new Date().getMilliseconds()
	);
};
