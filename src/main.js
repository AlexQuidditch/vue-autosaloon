import Vue from 'vue';
import router from './router';
import store from './store';

import App from './App';

import VueResource from 'vue-resource';
import ScrollTo from 'vue-scrollto';
import VueMask from 'v-mask';
// import { ClientTable , Event } from 'vue-tables-2';
import VueSweetAlert from 'vue-sweetalert';
import YouTubeEmbed from 'vue-youtube-embed';

import VueQuillEditor from 'vue-quill-editor';
import VueLazyload from 'vue-lazyload'

Vue.use(VueResource);
Vue.use(ScrollTo);
Vue.use(VueMask);
// Vue.use(ClientTable);
Vue.use(VueSweetAlert);
Vue.use(YouTubeEmbed);

Vue.use(VueQuillEditor);
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: 'dist/error.png',
	loading: 'dist/loading.gif',
	attempt: 1
});

import data from './data.json';
Vue.http.options.root = data.root;

new Vue({
	router , store,
	template: '<App/>',
	components: { App }
}).$mount('#wrapper')
