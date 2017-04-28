import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as actions from './actions.js';
import * as mutations from './mutations.js';
import * as getters from './getters.js';

import filter from './modules/filter.js';
import auto from './modules/autolist.js';
import intro from './modules/intro.js';
import testdrive from './modules/test-drive.js';
import news from './modules/news.js';

export const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	actions,
	mutations,
	getters,
	modules: {
		intro , auto , testdrive , news , filter
	}
});
