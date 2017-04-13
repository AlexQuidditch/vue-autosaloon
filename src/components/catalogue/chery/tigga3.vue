<template lang="html">
	<main id="main" class="main">
		<section class="product">
			<div class="container _flex-column _a-center">
				<h1 class="product__title">{{ product.title }}</h1>
				<img :src="product.img" :alt="product.title" class="product__image">
				<h2 class="product__subtitle">{{ product.subTitle }}</h2>
				<flickity ref="flickity" :options="flickityOptions" class = "product-slider">
				    <div v-for="slideItem in Slides" :key="slideItem.key" class="product-slider__slide">
				    	<img
							:src = " slideItem.img + '.jpg' "
							:alt = "slideItem.title"
							:title = "slideItem.title"
							class = "product-slider__slide-image"
						/>
						<p class = "product-slider__slide-title">{{ slideItem.title }}</p>
				    </div>
				</flickity>
				<v-client-table
					:data="general.tableData"
					:columns="general.cols"
					:options="options"
					class="first-table">
				</v-client-table>
				<v-client-table
					:data="complectations.tableData"
					:columns="complectations.cols"
					:options="options"
					class="second-table"
					style="height: 2000px"
					>
				</v-client-table>
			</div>
		</section>
	</main>
</template>

<script>

	import Flickity from 'vue-flickity';

	export default {
		name: "tigga3",
		components: {
    	    Flickity
    	},
		data() {
			return {
				product: {
					title: 'ВАШ CHERY TIGGO 3',
					subTitle: `ЯРКАЯ, ВЫРАЗИТЕЛЬНАЯ, СМЕЛАЯ ИНТЕРПРЕТАЦИЯ КЛАССИКИ`,
					img: '../../../../static/assets/img/tigga3/tigga3_big.jpg'
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
				general: {
					cols: ['Комплектация', 'COMFORT MT', 'LUXURY MT', 'LUXURY CVT'],
					tableData: [{
						'Комплектация': 'Розничная цена, руб.',
						'COMFORT MT': '395 188',
						'LUXURY MT': '499 088',
						'LUXURY CVT': '599 088'
					}]
				},
				complectations: {
					cols: ['Комплектация', 'COMFORT MT', 'LUXURY MT', 'LUXURY CVT'],
					tableData: [{
							'Комплектация': 'Двигатель',
							'COMFORT MT': 'Jane',
							'LUXURY MT': '24',
							'LUXURY CVT': '18219823'
						},
						{
							'Комплектация': 'Кузов',
							'COMFORT MT': 'Цельнометаллический',
							'LUXURY MT': 'несущий универсал/5',
							'LUXURY CVT': ''
						},
						{
							'Комплектация': 'Трансмиссия',
							'COMFORT MT': 'Susan',
							'LUXURY MT': '16',
							'LUXURY CVT': '18219823'
						},
						{
							'Комплектация': 'Трансмиссия',
							'COMFORT MT': 'Susan',
							'LUXURY MT': '16',
							'LUXURY CVT': '18219823'
						},
						{
							'Комплектация': 'Трансмиссия',
							'COMFORT MT': 'Susan',
							'LUXURY MT': '16',
							'LUXURY CVT': '18219823'
						},
						{
							'Комплектация': 'Трансмиссия',
							'COMFORT MT': 'Susan',
							'LUXURY MT': '16',
							'LUXURY CVT': '18219823'
						},
						{
							'Комплектация': 'Трансмиссия',
							'COMFORT MT': 'Susan',
							'LUXURY MT': '16',
							'LUXURY CVT': '18219823'
						},
						{
							'Комплектация': 'Трансмиссия',
							'COMFORT MT': 'Susan',
							'LUXURY MT': '16',
							'LUXURY CVT': '18219823'
						},
						{
							'Комплектация': 'Трансмиссия',
							'COMFORT MT': 'Susan',
							'LUXURY MT': '16',
							'LUXURY CVT': '18219823'
						},
						{
							'Комплектация': 'Трансмиссия',
							'COMFORT MT': 'Susan',
							'LUXURY MT': '16',
							'LUXURY CVT': '18219823'
						},
						{
							'Комплектация': 'Трансмиссия',
							'COMFORT MT': 'Susan',
							'LUXURY MT': '16',
							'LUXURY CVT': '18219823'
						},
						{
							'Комплектация': 'Трансмиссия',
							'COMFORT MT': 'Susan',
							'LUXURY MT': '16',
							'LUXURY CVT': '18219823'
						}
					]
				},
				options: {
					texts: {
						count: "Showing {from} to {to} of {count} records|{count} records|One record",
						defaultOption: "Выбрать {column}",
						filter: "Искать по характеристикам:",
						filterBy: "Фильтр по {column}",
						filterPlaceholder: "Искать по характеристикам",
						limit: "Записей:",
						loading: "Загрузка...",
						noResults: "Совпадения не найдны"
					}
				},
				flickityOptions: {
					groupCells: 3,
                	wrapAround: true,
					autoPlay: 7500
				}
			}
		}
	}
</script>

<style lang="scss">

	@import "../../../scss/partials/_layout";
	@import "../../../scss/partials/_mixins";
	@import "../../../scss/partials/_variables";

	.VuePagination {
		display: none;
	}

	.VueTables__sortable {
		font-size: 20px;
		line-height: 2;
	}

	.product {
		width: 100%;
		margin-top: 60px;
		&__title {
			margin-top: 2rem;
			text-align: center;
			font-size: 3rem
		}
		&__subtitle {
			text-align: center;
			white-space: pre;
			font-size: 1.5rem
		}
		&__image {
			margin: 3rem 0px;
		}
	}

	.first-table,
	.second-table {
		width: 100%;
		table {
			width: 100%;
			text-align: center;
			th {
				width: 25%;
			}
			td {
				padding: 3px 0;
				font-size: 18px;
				line-height: 1.75;
				border-bottom: solid 1px $black;
				&:nth-child(1) {
					text-align: left;
				}
			}
		}
	}

	.first-table {
		position: sticky $headerHeight auto auto;
		padding-top: 1rem;
		background-color: $whited;
		.row {
			display: none;
		}
	}

	.second-table {
		.VueTables__sortable {
			height: 0 !important;
			font-size: 0;
		}
		.row {
			display: flex;
			.col-md-6 {
				width: 100%;
				&:nth-child(2) {
					display: none;
				}
			}
			.VueTables__search {
				label {
					display: none;
				}
				input {
					width: 100%;
					margin-top: 1rem;
					margin-bottom: 0.5rem;
					padding: 0 1rem;
					line-height: 3;
					color: $red transparent;
					border: solid 2px $red;
					outline: none;
					transition: box-shadow .3s ease-in-out;
					&:focus {
						@include MDShadow-1;
					}
				}
			}
		}
	}

	.product-slider {
		size: 100%;
		background-color: $whited;
		.flickity-viewport {
			min-height: 400px;
		}
		.flickity-slider {
			display: flex;
			align-items: center;
		}
		&__slide {
			size: 350px auto;
			margin: 0 20px;
			@include MDShadow-1;
			transition: box-shadow .3s ease-in-out;
			&.is-selected {
				@include MDShadow-2
			}
		}
		&__slide-image {
			width: 100%;
		}
		&__slide-title {
			padding: 10px;
			padding-top: 5px;
			margin: 0;
			font-size: 14px;
			font-weight: 400;
			line-height: 1.5;
		}
		.flickity-page-dots {
			z-index: 100;
			width: auto;
			bottom: 0;
			padding: 10px;
			.dot {
				opacity: 1;
				size: 15px;
				background: rgba($red, .75);
				@include MDShadow-1;
				transition:
					background .3s ease-in-out,
					box-shadow .3s ease-in-out;
				&.is-selected {
					background: rgba($red, 1);
					@include MDShadow-2;
				}
			}
		}
		.flickity-prev-next-button {
			position: absolute;
			top: 50%;
			size: 50px;
			background-color: $whited;
			cursor: pointer;
			border: solid 1px rgba($black, .45);
			border-radius: 50%;
			& .arrow {
				fill: $black
			}
			&.previous {
				left: 0;
				transform: translate(-50%,-50%)
			}
			&.next {
				right: 0;
				transform: translate(50%,-50%)
			}
		}
	}

</style>
