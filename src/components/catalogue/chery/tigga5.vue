<template lang="html" src="./tigga5.template.html"></template>

<script>

	import Flickity from 'vue-flickity';
	import colors from '../../templates/colors';
	import mobileNotation from '../../templates/mobile-notation';
	import galleryOverlay from '../../templates/gallery-overlay';

	export default {
		name: "tigga5",
		components: { Flickity , mobileNotation , galleryOverlay , colors },
		data() {
			return {
				product: {
					title: 'ВАШ CHERY TIGGO 5',
					subTitle: `ОН СЛОВНО ТИГР, ГОТОВЫЙ В ЛЮБУЮ СЕКУНДУ \n СОРВАТЬСЯ С МЕСТА ДЛЯ ПОКОРЕНИЯ ГОРОДСКИХ ДЖУНГЛЕЙ`,
					img: '../../../../static/assets/img/tigga5/tigga5_big.jpg',
					priceList: 'http://www.chery.ru/media/upload/tiggo5_new_price.pdf',
					Colors: [
						{
							title: 'Чёрный',
							image: '../../../../static/assets/img/tigga5/colors/color_black.jpg'
						},
						{
							title: 'Акввамарин',
							image: '../../../../static/assets/img/tigga5/colors/color_blue.jpg'
						},
						{
							title: 'Синий',
							image: '../../../../static/assets/img/tigga5/colors/color_blue2.jpg'
						},
						{
							title: 'Коричневый',
							image: '../../../../static/assets/img/tigga5/colors/color_brown.jpg'
						},
						{
							title: 'Тёмно--вишнёвый',
							image: '../../../../static/assets/img/tigga5/colors/color_darkcherry.jpg'
						},
						{
							title: 'Серый',
							image: '../../../../static/assets/img/tigga5/colors/color_grey.jpg'
						},
						{
							title: 'Оранжевый',
							image: '../../../../static/assets/img/tigga5/colors/color_orange.jpg'
						},
						{
							title: 'Белый',
							image: '../../../../static/assets/img/tigga5/colors/color_white.jpg'
						}
					]
				},
				Slides: [
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_01',
						title: 'Максимальный преодолеваемый уклон 48%'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_02',
						title: 'Дорожный просвет 190 мм позволяет преодолевать брод до 600 мм'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_03',
						title: 'Передняя подвеска McPherson, с универсальными настройками под различные дорожные условия'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_04',
						title: 'Динамика автомобиля с мощным двухлитровым двигателем (136 л.с.) позволит быстро и безопасно совершать любые маневры'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_05',
						title: 'Система стабилизации BOSCH ESP устанавливается, как стандартное оборудование'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_06',
						title: 'Две фронтальные и две боковые подушки безопасности максимально защищают пассажиров'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_07',
						title: 'Кузов имеет легкую, но прочную конструкцию, благодаря технологии компании Benteler по термоформовке высокопрочной стали'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_08',
						title: 'Приборная панель выдержана в спортивном стиле и единой, манящей вперед цветовой гамме'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_09',
						title: 'Мастерски проработанный и исполненный дизайн интерьера, с использованием декорати­вных формованных панелей плавных очертаний'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_10',
						title: 'Взгляд на автомобиль спереди замирает от уверенного спокойствия отдыхающего тигра'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_11',
						title: 'Стильные задние фонари со светодиодными элементами'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_12',
						title: 'Головной свет с противобликовым темным покрытием и светодиодными элементами'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_13',
						title: 'Дневные ходовые огни с высокой светоотдачей являются стандартным оборудованием'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_14',
						title: '17-дюймовые диски из высокопрочного алюминиевого сплава'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_15',
						title: 'LED освещение салона'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_16',
						title: 'Многофункциональное кожаное рулевое колесо, с возможностью регулировки по высоте'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_17',
						title: 'Сиденье водителя с электрорегулировками в шести направлениях'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_18',
						title: 'Эргономичные кожаные сиденья'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_19',
						title: 'Задние датчики парковки с широким углом обзора'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_20',
						title: 'Система Старт-Стоп двигателя'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_21',
						title: 'Складывающиеся зеркала заднего вида с дистанционным управлением'
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
				return this.$state.content.Prices.chery.tiggo5.prices
			},
			Videos() {
				return this.$state.content.Videos[2].video
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
