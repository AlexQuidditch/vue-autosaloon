import Vue from 'vue';
import router from './router';
import store from './store';

import App from './App';

import VueResource from 'vue-resource';
import ScrollTo from 'vue-scrollto';
import VueMask from 'v-mask';
import VueSweetAlert from 'vue-sweetalert';
import YouTubeEmbed from 'vue-youtube-embed';

Vue.use(VueResource);
Vue.use(ScrollTo);
Vue.use(VueMask);
Vue.use(VueSweetAlert);
Vue.use(YouTubeEmbed);

import data from './data.json';
Vue.http.options.root = data.root;
Vue.prototype.$state = store.state;

new Vue({ router , store , ...App }).$mount('#wrapper');
