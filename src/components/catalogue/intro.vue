<template lang="html">
	<section id="Intro" class="intro">
		<div class="container_flex-column">
			<flickity ref="introSlider" :options="flickityOptions" class="intro-slider">
				<div v-for="sliderItem in SliderIems" class="intro-slider__slide">
					{{ sliderItem.title }}
					<router-link
						:to="sliderItem.route"
						class="intro-slider__link"
						ripple-light
						>
						Перейти
					</router-link>
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
						title: 'Changan',
						route: '/catalogue'
					},
					{
						title: 'Hawtai',
						route: '/about'
					}
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
</style>
