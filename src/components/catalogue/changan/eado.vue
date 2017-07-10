<template lang="html" src="./eado.template.html"></template>

<script>

	import Flickity from 'vue-flickity';
	import galleryOverlay from '../../templates/gallery-overlay';
	import mobileNotation from '../../templates/mobile-notation';

	export default {
		name: "EADO",
		components: { Flickity , galleryOverlay , mobileNotation },
		data() {
			return {
				product: {
					title: 'ВАШ CHANGAN EADO',
					subTitle: 'Безопасный, вместительный, динамичный. Среднеразмерный седан.',
					img: '../../../../static/assets/img/eado/eado_big.png'
				},
				Slides: [
					{
						img: '../../../../static/assets/img/eado/slider/detail_01'
					},
					{
						img: '../../../../static/assets/img/eado/slider/detail_02'
					},
					{
						img: '../../../../static/assets/img/eado/slider/detail_03'
					},
					{
						img: '../../../../static/assets/img/eado/slider/detail_04'
					},
					{
						img: '../../../../static/assets/img/eado/slider/detail_05'
					},
					{
						img: '../../../../static/assets/img/eado/slider/detail_06'
					},
					{
						img: '../../../../static/assets/img/eado/slider/detail_07'
					},
					{
						img: '../../../../static/assets/img/eado/slider/detail_08'
					},
					{
						img: '../../../../static/assets/img/eado/slider/detail_09'
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
				}
			}
		},
		computed: {
			Prices() {
				return this.$state.content.Prices.changan.eado.prices
			},
			Videos() {
				return this.$state.content.Videos[3].video
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
