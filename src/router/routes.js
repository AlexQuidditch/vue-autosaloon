import main from '@/components/main'
import services from '@/components/services'

import catalogue from '@/components/catalogue'

import about from '@/components/about';
import blog from '@/components/about/blog';

const catalogueChery = resolve => {
	require.ensure(['@/components/catalogue/filter/chery'], () => {
		resolve(require('@/components/catalogue/filter/chery'));
	});
};

const Tigga2 = resolve => {
	require.ensure(['@/components/catalogue/chery/tigga2'], () => {
		resolve(require('@/components/catalogue/chery/tigga2'));
	});
};

const Tigga3 = resolve => {
	require.ensure(['@/components/catalogue/chery/tigga3'], () => {
		resolve(require('@/components/catalogue/chery/tigga3'));
	});
};

const Tigga5 = resolve => {
	require.ensure(['@/components/catalogue/chery/tigga5'], () => {
		resolve(require('@/components/catalogue/chery/tigga5'));
	});
};

const catalogueChangan = resolve => {
	require.ensure(['@/components/catalogue/filter/changan'], () => {
		resolve(require('@/components/catalogue/filter/changan'));
	});
};

const cs35 = resolve => {
	require.ensure(['@/components/catalogue/changan/cs35'], () => {
		resolve(require('@/components/catalogue/changan/cs35'));
	});
};

const eado = resolve => {
	require.ensure(['@/components/catalogue/changan/eado'], () => {
		resolve(require('@/components/catalogue/changan/eado'));
	});
};

const raeton = resolve => {
	require.ensure(['@/components/catalogue/changan/raeton'], () => {
		resolve(require('@/components/catalogue/changan/raeton'));
	});
};

const catalogueHawtai = resolve => {
	require.ensure(['@/components/catalogue/filter/hawtai'], () => {
		resolve(require('@/components/catalogue/filter/hawtai'));
	});
};


export default [
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
		name: 'tigga2',
		path: '/catalogue/chery/tigga2',
		component: Tigga2
	},
	{
		name: 'tigga3',
		path: '/catalogue/chery/tigga3',
		component: Tigga3
	},
	{
		name: 'tigga5',
		path: '/catalogue/chery/tigga5',
		component: Tigga5
	},
	{
		name: 'changan',
		path: '/catalogue/changan',
		component: catalogueChangan
	},
	{
		name: 'cs35',
		path: '/catalogue/changan/cs35',
		component: cs35
	},
	{
		name: 'eado',
		path: '/catalogue/changan/eado',
		component: eado
	},
	{
		name: 'raeton',
		path: '/catalogue/changan/raeton',
		component: raeton
	},
	{
		name: 'hawtai',
		path: '/catalogue/hawtai',
		component: catalogueHawtai
	},
	{
		name: 'about',
		path: '/about',
		component: blog
	}
];
