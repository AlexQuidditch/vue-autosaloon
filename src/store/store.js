import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

import auto from './modules/autolist';
import intro from './modules/intro';

export const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	actions,
	mutations,
	getters,
	modules: {
		intro,
		auto,
		intro
	}
});
