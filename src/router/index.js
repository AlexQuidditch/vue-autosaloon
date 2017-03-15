import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Hello from '@/components/hello'
import Main from '@/components/main'
import Services from '@/components/services'
import Catalogue from '@/components/catalogue'
import About from '@/components/about'

Vue.use(Router)
Vue.use(Resource)

Vue.http.options.root = 'https://autosaloon-293cd.firebaseio.com/'

export default new Router({
	mode: 'history',
	linkActiveClass: '_active',
	routes: [
		{
			path: '/',
			name: 'Main',
			component: Main
		},
		{
			path: '/services',
			name: 'Services',
			component: Services
		},
		{
			path: '/catalogue',
			name: 'Catalogue',
			component: Catalogue
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/hello',
			name: 'Hello',
			component: Hello
		}
	]
});
