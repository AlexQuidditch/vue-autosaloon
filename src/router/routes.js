import main from '@/components/main.vue';

const service = () => import( '@/components/service.vue' );
const services = () => import( '@/components/services.vue' );
const catalogue = () => import( '@/components/catalogue.vue' );
const news = () => import( '@/components/news.vue' );
const promotions = () => import( '@/components/promotions.vue' );

const catalogueChery = () => import( '@/components/catalogue/filter/chery.vue' );
const Tigga2 = () => import( '@/components/catalogue/chery/tigga2.vue' );
const Tigga3 = () => import( '@/components/catalogue/chery/tigga3.vue' );
const Tigga5 = () => import( '@/components/catalogue/chery/tigga5.vue' );

const catalogueChangan = () => import( '@/components/catalogue/filter/changan.vue' );
const cs35 = () => import( '@/components/catalogue/changan/cs35.vue' );
const eado = () => import( '@/components/catalogue/changan/eado.vue' );
const raeton = () => import( '@/components/catalogue/changan/raeton.vue' );

const catalogueHawtai = () => import( '@/components/catalogue/filter/hawtai.vue' );
const boliger = () => import( '@/components/catalogue/hawtai/boliger.vue' );

export default [
	{
		name: 'main',
		path: '/',
		component: main,
		meta: { scrollToTop: true }
	},
	{
		name: 'service',
		path: '/service',
		component: service,
		meta: { scrollToTop: true }
	},
	{
		name: 'services',
		path: '/services',
		component: services,
		meta: { scrollToTop: true }
	},
	{
		name: 'catalogue',
		path: '/catalogue',
		component: catalogue,
		meta: { scrollToTop: true }
	},
	{
		name: 'chery',
		path: '/catalogue/chery',
		component: catalogueChery,
		meta: { scrollToTop: true }
	},
	{
		name: 'tigga2',
		path: '/catalogue/chery/tigga2',
		component: Tigga2,
		meta: { scrollToTop: true }
	},
	{
		name: 'tigga3',
		path: '/catalogue/chery/tigga3',
		component: Tigga3,
		meta: { scrollToTop: true }
	},
	{
		name: 'tigga5',
		path: '/catalogue/chery/tigga5',
		component: Tigga5,
		meta: { scrollToTop: true }
	},
	{
		name: 'changan',
		path: '/catalogue/changan',
		component: catalogueChangan,
		meta: { scrollToTop: true }
	},
	{
		name: 'cs35',
		path: '/catalogue/changan/cs35',
		component: cs35,
		meta: { scrollToTop: true }
	},
	{
		name: 'eado',
		path: '/catalogue/changan/eado',
		component: eado,
		meta: { scrollToTop: true }
	},
	{
		name: 'raeton',
		path: '/catalogue/changan/raeton',
		component: raeton,
		meta: { scrollToTop: true }
	},
	{
		name: 'hawtai',
		path: '/catalogue/hawtai',
		component: catalogueHawtai,
		meta: { scrollToTop: true }
	},
	{
		name: 'boliger',
		path: '/catalogue/hawtai/boliger',
		component: boliger,
		meta: { scrollToTop: true }
	},
	{
		name: 'promotions',
		path: '/promotions',
		component: promotions,
		meta: { scrollToTop: true }
	},
	{
		name: 'news',
		path: '/news',
		component: news,
		meta: { scrollToTop: true }
	},
	{
		path: '*',
		redirect: '/'
	}
];
