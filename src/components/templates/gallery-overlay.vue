<template lang="html">
	<div v-once id="gallery-overlay" class="gallery-overlay">
		<button @click="closeGallery()"
			class="gallery-overlay__close waves-effect waves-light"
			type="button"
			>Закрыть галерею</button>
		<flickity ref="gallery" :options="flickityOptions" class="gallery-slider" >
			<div v-for="slideItem in Slides" :key="slideItem.key"
				class="gallery-slider__slide">
				<img :src=" slideItem.img + '_big.jpg' "
					:alt="slideItem.title"
					:title="slideItem.title"
					class="gallery-slider__slide-image"
				/>
				<p class="gallery-slider__slide-title">{{ slideItem.title }}</p>
			</div>
		</flickity>
	</div>
</template>

<script>

  import Flickity from 'vue-flickity';

	export default {
		name: "gallery-overlay",
		components: { Flickity },
		props: {
			Slides: {
				type: Array,
				required: true
			},
			index: {
				type: Number,
				required: true
			}
		},
		data() {
			return {
				flickityOptions: {
                	wrapAround: true,
					pageDots: false
				}
			}
		},
		methods: {
			closeGallery() {
				this.$emit('galleryClose');
			}
		},
		mounted() {
			this.$refs.gallery.select( this.index )
			window.addEventListener( 'keyup' , (e) => {
				e.preventDefault;
				if ( e.keyCode === 27 ) {
					this.closeGallery()
				}
			});
		}
	}

</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.gallery-overlay {
		z-index: 999;
		position: fixed 0 auto auto 0;
		size: 100%;
		background-color: rgba( $black , .65 );
		&__close {
			@include MDButton( $whited , $red ) {
				z-index: 999;
				position: absolute 0 0 auto auto;
				margin-top: 3rem;
				margin-right: 3rem;
				padding: 16px;
			}
			.material-icons {
				font-size: 3rem;
				line-height: 3rem;
			}
			@include MQ(Pp) {
				position: absolute auto auto 10% 0;
				width: 90%;
				margin: 0 5%;
			}
		}
	}

	.gallery-slider {
		size: 100%;
		.flickity-viewport {
			min-height: 100%;
		}
		.flickity-slider {
			display: flex;
			align-items: center;
		}
		&__slide {
			size: 550px auto;
			margin: 0 20px;
			background-color: $whited;
			@include MDShadow-1;
		}
		&__slide-image {
			width: 100%;
			max-height: 600px;
			object-fit: contain;
		}
		&__slide-title {
			padding: 5px 16px 10px;
			margin: 0;
			font-size: 16px;
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
				transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
				&.is-selected {
					background: rgba($red, 1);
					@include MDShadow-2;
				}
			}
		}
		@include MQ(Pp) {
			&__slide {
				@include MQ(Pp) {
					width: 90%;
				}
			}
			.flickity-prev-next-button {
				display: none;
			}
		}
	}

</style>
