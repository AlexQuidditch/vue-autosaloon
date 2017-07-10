<template lang="html" src="./tigga2.template.html"></template>

<script>

	import Flickity from 'vue-flickity';
	import colors from '../../templates/colors';
	import mobileNotation from '../../templates/mobile-notation';
	import galleryOverlay from '../../templates/gallery-overlay';

	export default {
		name: "tigga2",
		components: { Flickity , mobileNotation , galleryOverlay , colors },
		data() {
			return {
				product: {
					title: 'ВАШ CHERY TIGGO 2',
					subTitle: 'СТИЛЬНЫЙ, КОМФОРТНЫЙ, ДИНАМИЧНЫЙ.',
					img: '../../../../static/assets/img/tigga2/tigga2_big.jpg',
					priceList: 'http://www.chery.ru/media/upload/tiggo3_price.pdf',
					Colors: [
						{
							title: 'Бежевый',
							image: '../../../../static/assets/img/tigga2/colors/color_beige.jpg',
						},
						{
							title: 'Синий',
							image: '../../../../static/assets/img/tigga2/colors/color_blue.jpg'
						},
						{
							title: 'Оранжевый',
							image: '../../../../static/assets/img/tigga2/colors/color_orange.jpg'
						},
						{
							title: 'Красный',
							image: '../../../../static/assets/img/tigga2/colors/color_red.jpg'
						},
						{
							title: 'Белый',
							image: '../../../../static/assets/img/tigga2/colors/color_white.jpg'
						},
						{
							title: 'Чёрный',
							image: 	'../../../../static/assets/img/tigga2/colors/color_black.jpg'
						}
					]
				},
				Slides: [
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_01',
						title: 'Решетка радиатора в форме брилианта'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_02',
						title: 'Контуры отражателей фар выполнены в форме буквы С, что означает CHERY и что делает взгляд Tiggo 2 стремительным и независимым'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_03',
						title: 'Наружные зеркала заднего вида с повторителями поворотов, обогревом и электрической регулировкой'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_04',
						title: 'Продольные рейлинги на крыше'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_05',
						title: 'Окрашенные в цвет кузова дверные ручки'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_06',
						title: 'Спойлер задний'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_07',
						title: 'Современная комбинация приборов'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_08',
						title: 'Стильный дизайн салона'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_09',
						title: 'Многофункциональное кожаное рулевое колесо'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_10',
						title: '8-ми дюймовый сенсорный HD-экран'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_11',
						title: 'Cистема Cloudrive 2.0'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_12',
						title: 'Парковочный радар'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_13',
						title: 'Камера заднего вида'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_14',
						title: 'TPMS – система контроля давления в шинах'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_15',
						title: 'Подушки безопасности водителя и переднего пассажира'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_16',
						title: 'Круиз-контроль'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_17',
						title: 'Передняя подвеска McPherson, с универсальными настройками под различные дорожные условия. Задняя подвеска независимая на поперечных рычагах'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_18',
						title: 'Приеместый двигатель (106 л.с.) позволит быстро и безопасно совершать любые маневры'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_19',
						title: 'Современный автомат делает автомобиль очень динамичным как в городском потоке, так и в загородной поездке'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_20',
						title: 'Дорожный просвет 186 мм позволяет комфортно чуствовать себя на проселочной дороге'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_21',
						title: 'LED дневные ходовые огни'
					}
				],
				galleryOverlayIsOpened: false,
				slideIndex: 0,
				flickityOptions: {
					groupCells: 3,
                	wrapAround: true,
					autoPlay: 7500
				},
				Search: {
					placeholder: 'Поиск по характеристикам...',
					content: ''
				},
				Search2: {
					placeholder: 'Поиск по комплектации...',
					content: ''
				}
			}
		},
		computed: {
			Prices() {
				return this.$state.content.Prices.chery.tiggo2.prices
			},
			Videos() {
				return this.$state.content.Videos[0].video
			}
		},
		watch: {
			'Search.content': function() {
				let filter, table, tr, td, i;
				filter = this.Search.content.toUpperCase();
				table = document.getElementById("properties");
				tr = table.getElementsByTagName("tr");
				for (i = 0; i < tr.length; i++) {
					td = tr[i].getElementsByTagName("td")[0];
					if (td) {
						if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
							tr[i].style.display = "";
						} else {
							tr[i].style.display = "none";
						}
					}
				}
			},
			'Search2.content': function() {
				let filter, table, tr, td, i;
				filter = this.Search2.content.toUpperCase();
				table = document.getElementById("properties2");
				tr = table.getElementsByTagName("tr");
				for (i = 0; i < tr.length; i++) {
					td = tr[i].getElementsByTagName("td")[0];
					if (td) {
						if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
							tr[i].style.display = "";
						} else {
							tr[i].style.display = "none";
						}
					}
				}
			}
		},
		methods: {
			paused(player) {
				console.log('Paused');
			},
			playing(player) {
				console.log('Playing');
			},
			openGallery(index) {
				this.slideIndex = index;
				this.galleryOverlayIsOpened = true;
			},
			closeGallery() {
				this.galleryOverlayIsOpened = false;
			}
		}
	}
</script>

<style lang="scss" src="@/scss/layout/car-page.scss"></style>
