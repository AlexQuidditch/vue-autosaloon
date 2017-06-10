import api from './modules/api.js';

export const getPosts = ( context , payload ) => {
	return api.getPosts( payload )
		.then( response => context.commit( 'setPosts' , response ) )
		.catch( error => console.error(error) );
};

export const modalOpen = ( context ) => {
	return context.commit( 'modalOpen' )
};
export const modalClose = ( context ) => {
	return context.commit( 'modalClose' )
};

export const fetchFromServer = ( context , payload ) => {
	return api.fetchFromServer( payload )
		.then( response => context.commit( 'fetchJSON', [ payload , response ] ))
		.catch( error => console.error( error ));
};

export const telegramMessage = ( context , payload ) => {
	return api.telegramMessage( payload )
};
