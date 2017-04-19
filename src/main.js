import Vue from 'vue';
import router from './router';
import { store, intro } from './store/store';

import App from './App';

import VueResource from 'vue-resource';
import ScrollTo from 'vue-scrollto';
import VueMask from 'v-mask';
import { ClientTable, Event } from 'vue-tables-2';
import VueSweetAlert from 'vue-sweetalert';

import VueQuillEditor from 'vue-quill-editor';

Vue.use(VueResource);
Vue.use(ScrollTo);
Vue.use(VueMask);
Vue.use(ClientTable);
Vue.use(VueSweetAlert);

Vue.use(VueQuillEditor);

Vue.http.options.root = 'https://autosaloon-293cd.firebaseio.com'
Vue.prototype.$auto = store.state.auto;
Vue.prototype.$intro = store.state.intro;

new Vue({
	el: '#wrapper',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})
