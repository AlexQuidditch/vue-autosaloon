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
		return Vue.http.get( `${ JSONname }.json` )
			.then( response => response.json() )
			.then( data => data )
	},
	telegramMessage( payload ) {
		Vue.http.post(`https://api.telegram.org/bot${ payload.token }/sendMessage?chat_id=${ payload.chat_id }&text=${ payload.text }`);
		$.ajax({
                  url: 'https://angar-auto.ru/static/send_mail.php',
                  method: 'POST',
                  data: {
					  to_email: 'krupenin1986@mail.ru',
					  tema: 'Новое событие на сайте',
					  data: payload.text
                  },
                  success(data) {
                      data = JSON.parse( data );
					  console.log( data.message );
				  }
			  });
	}
};
