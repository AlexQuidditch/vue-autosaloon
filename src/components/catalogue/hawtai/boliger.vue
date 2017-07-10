<template lang="html" src="./boliger.template.html"></template>

<script>

	import Flickity from 'vue-flickity';
	import colors from '../../templates/colors';
	import mobileNotation from '../../templates/mobile-notation';

	export default {
		name: "CS35",
		components: { Flickity , colors , mobileNotation },
		data() {
			return {
				product: {
					title: 'ВАШ BOLIGER',
					subTitle: `Люксовый китайский внедорожник, способный удивлять.`,
					img: '../../../../static/assets/img/boliger/bolinger_big.png',
					Colors : [
						{
							title: 'Серый',
							image: '../../../../static/assets/img/boliger/boliger_grey.png'
						},
						{
							title: 'Красный',
							image: '../../../../static/assets/img/boliger/boliger_red.png'
						},
						{
							title: 'Белый',
							image: '../../../../static/assets/img/boliger/boliger_white.png'
						},
						{
							title: 'Черный',
							image: '../../../../static/assets/img/boliger/bolinger_big.png'
						}
					]
				},
				Search: {
					placeholder: 'Поиск по характеристикам...',
					content: ''
				}
			}
		},
		computed: {
			Prices() {
				return this.$state.content.Prices.hawtai.boliger.prices
			},
			Videos() {
				return this.$state.content.Videos[6].video
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
			}
		}
	}
</script>

<style lang="scss" src="@/scss/layout/car-page.scss"></style>
