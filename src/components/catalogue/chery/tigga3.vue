<template lang="html" src="./tigga3.template.html"></template>

<script>

	import Flickity from 'vue-flickity';
	import colors from '../../templates/colors';
	import mobileNotation from '../../templates/mobile-notation';
	import galleryOverlay from '../../templates/gallery-overlay';

	export default {
		name: "tigga3",
		components: { Flickity , mobileNotation , galleryOverlay , colors },
		data() {
			return {
				product: {
					title: 'ВАШ CHERY TIGGO 3',
					subTitle: `ЯРКАЯ, ВЫРАЗИТЕЛЬНАЯ, СМЕЛАЯ ИНТЕРПРЕТАЦИЯ КЛАССИКИ`,
					img: '../../../../static/assets/img/tigga3/tigga3_big.jpg',
					priceList: 'http://www.chery.ru/media/upload/tiggo3_price.pdf',
					Colors: [
						{
							title: 'Синий',
							image: '../../../../static/assets/img/tigga3/colors/color_blue2.jpg'
						},
						{
							title: 'Аквамарин',
							image: '../../../../static/assets/img/tigga3/colors/color_blue.jpg'
						},
						{
							title: 'Коричневый',
							image: '../../../../static/assets/img/tigga3/colors/color_brown.jpg'
						},
						{
							title: 'Тёмно-вишнёвый',
							image: '../../../../static/assets/img/tigga3/colors/color_darkcherry.jpg'
						},
						{
							title: 'Оранжевый',
							image: '../../../../static/assets/img/tigga3/colors/color_orange.jpg'
						},
						{
							title: 'Серый',
							image: '../../../../static/assets/img/tigga3/colors/color_grey.jpg'
						},
						{
							title: 'Белый',
							image: '../../../../static/assets/img/tigga3/colors/color_white.jpg'
						},
						{
							title: 'Чёрный',
							image: 	'../../../../static/assets/img/tigga3/colors/color_black.jpg'
						}
					]
				},
				Slides: [
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_01',
						title: 'Передние дневные светодиодные ходовые огни'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_02',
						title: '17-дюймовые диски из высокопрочного алюминиевого сплава'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_03',
						title: 'Окрашенные в цвет кузова дверные ручки c хромированной вставкой'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_04',
						title: 'Хромированные защитные молдинги боковых дверей'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_05',
						title: 'Стильная приборная панель со встроенным бортовым компьютером'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_06',
						title: 'Передний центральный подлокотник с ёмкостью для хранения'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_07',
						title: 'Сиденья выполнены из комбинированных материалов: экокожа и ткань'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_08',
						title: 'Многофункциональное кожаное рулевое колесо'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_09',
						title: '8-ми дюймовый сенсорный HD-экран'
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
				return this.$state.content.Prices.chery.tiggo3.prices
			},
			Videos() {
				return this.$state.content.Videos[1].video
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
