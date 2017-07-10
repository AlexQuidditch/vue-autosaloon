<template lang="html" src="./raeton.template.html"></template>

<script>

	import Flickity from 'vue-flickity';
	import mobileNotation from '../../templates/mobile-notation';
	import galleryOverlay from '../../templates/gallery-overlay';

	export default {
		name: 'RAETON',
		components: { Flickity , galleryOverlay , mobileNotation },
		data() {
			return {
				product: {
					title: 'ВАШ CHANGAN RAETON',
					subTitle: 'Комфортабельный, бесшумный, мощный cедан бизнес-класса',
					img: '../../../../static/assets/img/raeton/raeton_big.png'
				},
				Slides: [
					{
						img: '../../../../static/assets/img/raeton/slider/detail_01'
					},
					{
						img: '../../../../static/assets/img/raeton/slider/detail_02'
					},
					{
						img: '../../../../static/assets/img/raeton/slider/detail_03'
					},
					{
						img: '../../../../static/assets/img/raeton/slider/detail_04'
					},
					{
						img: '../../../../static/assets/img/raeton/slider/detail_05'
					},
					{
						img: '../../../../static/assets/img/raeton/slider/detail_06'
					},
					{
						img: '../../../../static/assets/img/raeton/slider/detail_07'
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
				return this.$state.content.Prices.changan.raeton.prices
			},
			Videos() {
				return this.$state.content.Videos[5].video
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
