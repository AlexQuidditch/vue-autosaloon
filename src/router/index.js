import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import main from '@/components/main'
import services from '@/components/services'
import catalogue from '@/components/catalogue'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
	mode: 'history',
	linkActiveClass: '_active',
	routes: [
		{
			path: '/',
			name: 'Main',
			component: main
		},
		{
			path: '/services',
			name: 'Services',
			component: services
		},
		{
			path: '/catalogue',
			name: 'Catalogue',
			component: catalogue
		},
		{
			path: '/about',
			name: 'About',
			component: about
		},
		{
			path: '/hello',
			name: 'Hello',
			component: hello
		}
	]
});
