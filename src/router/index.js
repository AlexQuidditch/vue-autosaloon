import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import services from '@/components/services'

import catalogue from '@/components/catalogue'
import catalogueAll from '@/components/catalogue/filter/all'
import catalogueChery from '@/components/catalogue/filter/chery'
import catalogueChangan from '@/components/catalogue/filter/changan'
import catalogueHawtai from '@/components/catalogue/filter/hawtai'

import about from '@/components/about';
import blog from '@/components/about/blog';

import tigga3 from '@/components/catalogue/chery/tigga3';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
	const position = {};
	if (to.hash) {
		position.selector = to.hash
	} else {
		return { x: 0, y: 0 }
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
			component: catalogue
		},
		{
			name: 'chery',
			path: '/catalogue/chery',
			component: catalogueChery
		},
		{
			name: 'changan',
			path: '/catalogue/changan',
			component: catalogueChangan
		},
		{
			name: 'hawtai',
			path: '/catalogue/hawtai',
			component: catalogueHawtai
		},
		{
			name: 'tigga3',
			path: '/catalogue/chery/tigga3',
			component: tigga3
		},
		{
			name: 'about',
			path: '/about',
			component: blog
		}
	]
});
