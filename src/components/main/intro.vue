<template lang="html">
	<section id="Intro" class="intro">
		<flickity ref="flickity"
			:options="flickityOptions"
			class="intro-slider"
			>
			<div class="intro-slider__slide"></div>
    		<!-- <div class="intro-slider__slide">2</div>
    		<div class="intro-slider__slide">3</div>
    		<div class="intro-slider__slide">4</div>
    		<div class="intro-slider__slide">5</div> -->
		</flickity>

		<div class="intro__overlay">
			<div class="container _flex-column _j-center _a-center">
				<div class="intro-text">
					<h1 class="intro-text__title">{{ title }}</h1>
					<h2 class="intro-text__sub-title">{{ subtitle }}</h2>
				</div>
				<div class="intro-buttons">
					<router-link tag = "button"
						class="intro-buttons__button"
						:to = "{ name: 'catalogue', query: { filter: 'all' } }"
						ripple-dark
						>
						Каталог автомобилей
					</router-link>
					<button
						class="intro-buttons__button _alert"
						v-scroll-to="{
							el: '#Testdrive',
							offset: -60,
							duration: 950
							}"
						ripple-light
						>
						Тест-драйв
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

	import Flickity from 'vue-flickity';

	export default {
		name: 'intro',
		components: { Flickity },
		data() {
			return {
				title: 'Автосалон Ангар',
				subtitle: 'Официальный дилер марок Chery, Changan, Hawtai.',
				flickityOptions: {
					selector: '.intro-slider__slide',
					autoplay: 2500,
                	prevNextButtons: 0,
                	pageDots: 1,
                	wrapAround: true
            	}
			}
		}
	}
</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.intro {
		height: 100vh;
		padding: 0;
		margin: 0;
		background-position: center center;
		.container_flex-column {
			box-shadow: none
		}
		&__overlay {
			position: absolute 0 auto auto 0;
			size: 100%;
	    	background-color: rgba( $blacked , .65 );
		}
	}

	.intro-text {
		text-align: center;
		&__title {
			font-size: 6rem;
			color: $white;
			text-shadow: 0 0 15px rgba($blacked, 0.75);
		}
		&__sub-title {
			margin-top: 3rem;
			font-size: 2.5rem;
			color: $white;
			text-shadow: 0 0 15px rgba($blacked, 0.75);
		}
	}

	.intro-buttons {
		margin-top: 4rem;
		&__button {
			size: 18rem 3.5rem;
			margin: 0 3rem;
			font-size: 1.35rem;
			color: $white transparent;
			border: solid 3px $white;
			cursor: pointer;
			transition:
				color .3s ease-in-out,
				background-color .3s ease-in-out;
			&:hover {
				color: $black $white;
			}
			&._alert {
				color: $red;
				border-color: $red;
				&:hover {
					color: $white $red;
				}
			}
		}
	}

	.intro-slider {
		size: 100%;
		background-color: $white;
		&__slide {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			size: 100%;
			padding: 20px;
			font-size: 3rem;
			background-image: url('../../../static/assets/img/main_intro.jpg');
			background-position: center center;
		}
		.flickity-page-dots {
			z-index: 100;
			width: auto;
			bottom: 0;
			padding: 20px;
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
