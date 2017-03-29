// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import { store, intro } from './store/store';

import App from './App';

import VueResource from 'vue-resource';
import ScrollTo from 'vue-scrollto';
import VueMask from 'v-mask';
import { ClientTable, Event } from 'vue-tables-2';

Vue.use(VueResource);
Vue.use(ScrollTo);
Vue.use(VueMask);
Vue.use(ClientTable)

Vue.http.options.root = 'https://autosaloon-293cd.firebaseio.com/'

/* eslint-disable no-new */
new Vue({
	el: '#wrapper',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})
