<template lang="html">
	<section id="Intro" class="intro">
		<div class="container_flex-column">
			<flickity ref="introSlider" :options="flickityOptions" class="intro-slider">
				<div v-for="sliderItem in SliderIems" class="intro-slider__slide">
					{{ sliderItem.title }}
					<router-link :to="sliderItem.route" class="intro-slider__link" ripple-light>Перейти</router-link>
				</div>
			</flickity>
		</div>
	</section>
</template>

<script>
	import Flickity from 'vue-flickity'

	export default {
		name: 'intro',
		data() {
			return {
				flickityOptions: {
					cellSelector: '.intro-slider__slide',
					wrapAround: true
				},
				SliderIems: [
					{
						title: 'Chery',
						route: '/services'
					},
					{
						title: 'Toyota',
						route: '/catalogue'
					},
					{
						title: 'Nissan',
						route: '/about'
					},
					{
						title: 'Mercedes-Benz',
						route: '/hello'
					},
				]
			}
		},
		components: {
			Flickity
		},
		methods: {
			previous() {
				this.$refs.introSlider.previous();
			},
			next() {
				this.$refs.introSlider.next();
			}
		}
	}
</script>

<style lang="scss">
	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";
	.intro {
		padding: 50px 0;
		.container_flex-column {
			@include MDShadow-3;
		}
	}

	.intro-slider {
		size: 100% 55vh;
		background-color: $white;
		&__slide {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			size: 100%;
			padding: 20px;
			font-size: 3rem
		}
		&__link {
			position: absolute;
			right: 0;
			bottom: 0;
			width: 300px;
			padding: 20px 0;
			text-align: center;
			font-size: 1.5rem;
			color: $white $red;
			@include MDShadow-1;
		}
		.flickity-page-dots {
			width: auto;
			bottom: 0;
			padding: 20px;
			.dot {
				opacity: 1;
				size: 15px;
				background: rgba($black, .35);
				@include MDShadow-1;
				transition:
					background .3s ease-in-out,
					box-shadow .3s ease-in-out;
				&.is-selected {
					background: rgba($black, .85);
					@include MDShadow-2;
				}
			}
		}
		.flickity-prev-next-button {
			position: absolute;
			top: 50%;
			size: 70px;
			background-color: $white;
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
