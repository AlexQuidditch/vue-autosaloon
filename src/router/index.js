import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import services from '@/components/services'
import catalogue from '@/components/catalogue'
import all from '@/components/catalogue/filter/all'
import chery from '@/components/catalogue/filter/chery'
import changan from '@/components/catalogue/filter/changan'
import hawtai from '@/components/catalogue/filter/hawtai'
import about from '@/components/about';

import tigga3 from '@/components/catalogue/chery/tigga3';

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
	if (savedPosition) {
		return savedPosition
	} else {
		const position = {};
		if (to.hash) {
			position.selector = to.hash
		}
		if (to.matched.some(m => m.meta.scrollToTop)) {
 			position.x = 0
 			position.y = 0
		}
		return position
	}
};

export default new Router({
	mode: 'history',
	base: __dirname,
	scrollBehavior,
	linkActiveClass: '_active',
	routes: [
		{
			name: 'main',
			path: '/',
			component: main
		},
		{
			name: 'services',
			path: '/services',
			component: services
		},
		{
			name: 'catalogue',
			path: '/catalogue',
			component: catalogue,
		},
		{
			name: 'tigga3',
			path: '/catalogue/tigga3',
			component: tigga3
		},
		{
			name: 'all',
			path: '/all',
			components: {
				a: all
			}
		},
		{
			name: 'chery',
			path: '/chery',
			components: {
				c: chery
			}
		},
		{
			name: 'hawtai',
			path: '/hawtai',
			components: {
				h: hawtai
			}
		},
		{
			name: 'changan',
			path: '/changan',
			components: {
				ch: changan
			}
		},
		{
			name: 'about',
			path: '/about',
			component: about
		}
	]
});
