import Vue from 'vue';

export default {
	getPosts( url ) {
		return Vue.http.get( url )
			.then( response => { return response.json() })
			.then( data => {
				const getData = [];
				for ( let key in data ) {
					getData.unshift(data[key])
				};
				return getData;
			})
	},
	fetchFromServer( JSONname ) {
		return Vue.http.get( `${ JSONname }.json`)
			.then( response => { return response.json() } )
			.then( data => { return data } )
	},
	telegramMessage( payload ) {
		return Vue.http.post(`https://api.telegram.org/bot${ payload.token }/sendMessage?chat_id=${ payload.chat_id }&text=${ payload.text }`)
	}
};
