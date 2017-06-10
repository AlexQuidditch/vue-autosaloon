<template lang="html">
	<section id="Intro" class="intro">
		<flickity ref="flickity"
			:options="flickityOptions"
			class="intro-slider">
			<img v-for="slideItem in Slides" class="intro-slider__slide" :src="slideItem" />
		</flickity>

		<div class="intro__overlay">
			<div class="container _flex-row _j-start">
				<div class="intro-text">
					<h1 class="intro-text__title">{{ title }}</h1>
					<h2 class="intro-text__sub-title">{{ subtitle }}</h2>
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
				subtitle: 'Официальный дилер марок Chery, Changan, Hawtai в г. Ачинске',
				Slides: [ '../../../static/assets/img/slider/slide_1.jpg' , '../../../static/assets/img/slider/slide_2.jpg' , '../../../static/assets/img/slider/slide_3.jpg' , '../../../static/assets/img/slider/slide_4.png' ] ,
				flickityOptions: {
					selector: '.intro-slider__slide',
					autoplay: 7500,
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
		height: calc( 100vh - 60px );
		padding: 0;
		margin: 0;
		background-position: center center;
		&__overlay {
			position: absolute $headerHeight auto auto 0;
			size: 100% calc( 100% - 60px );
			background-color: rgba( $blacked , 0.45 );
			.container {
				position: relative;
				padding-bottom: 9vh;
				@include MQ(Pp) {
					&._j-end {
						justify-content: center;
					}
				}
			}
		}
	}

	.intro-text {
		display: flex;
		flex-flow: row wrap;
		width: 50%;
		margin-top: 2vh;
		&__title {
			font-size: 4rem;
			color: $white;
			text-shadow: 0 0 15px rgba($blacked, 0.75);
		}
		&__sub-title {
			align-self: flex-end;
			margin-top: 1rem;
			font-size: 2rem;
			line-height: 1.5;
			color: $white;
			text-shadow: 0 0 15px rgba($blacked, 0.75);
		}
		@include MQ(Pp) {
			size: 100%;
			text-align: center;
			&__title {
				font-size: 3rem
			}
			&__sub-title {
				margin: 0;
				font-size: 1.35rem
			}
		};
	}

	.intro-image {
		opacity: .9;
		position: absolute;
		top: 50%;
		right: 0;
		width: 350px;
		padding: 20px;
		background-color: $white;
		border-radius: 50%;
		@include MDShadow-4($white);
		transform: translateY(-25%);
		@include MQ(Pp) {
			display: none;
		}
	}

	.intro-buttons {
		width: 100%;
		margin-top: 3rem;
		&__button {
			size: 16rem 3rem;
			margin: 0;
			margin-right: 3rem;
			font-size: 1.2rem;
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
				color: $white $red;
				border-color: $red;
			}
			@include MQ(Pp) {
				display: block;
				margin: 0 auto 1rem auto;
			}
		}
	}

	.intro-slider {
		size: 100%;
		background-color: $white;
		&__slide {
			size: 100%;
			object-fit: contain;
			object-position: center;
			@include MQ(Pp) {
				object-fit: none;
			};
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
