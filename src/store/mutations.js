export const setPosts = ( state, payload ) => {
	state.Posts = payload;
};

export const modalOpen = ( state ) => {
	state.tempData.modalTestDrive = true
};
export const modalClose = ( state ) => {
	state.tempData.modalTestDrive = false
};

export const fetchJSON = ( state , payload ) => {
	state.content = payload;
};
