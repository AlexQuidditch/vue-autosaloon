<template lang="html">
    <li class="offers-item">
        <div class="slider">
            <flickity ref="slider" :options="flickityOptions"
				class="offers-slider" >
                <div v-for="offersItem in Offer.slides"
                    class="offers-slider__slide">
                    <img :src="offersItem"
                        class="offers-slider__slide-image" />
                </div>
            </flickity>
            <div class="controls">
                <button v-for="( offersItem , index ) in Offer.slides"
                    @click="selectSlide( index )"
                    class="offers-slider__control-button"
                    type="button">
                    <img :src="offersItem" class="offers-slider__control-image" />
                </button>
            </div>
        </div>
        <div class="details _offers-item">
            <h3 class="details__title _offers-item">{{ Offer.title }}</h3>
            <div v-html="Offer.descriptions"
					class="details__description _offers-item html ql-editor">
			</div>
        </div>
    </li>
</template>

<script>

    import flickity from 'vue-flickity';

    export default {
        name: "offers-item",
        components: { flickity },
		props: {
			Offer: {
                type: Object,
                required: true
			}
		},
        data() {
            return {
				flickityOptions: {
                    prevNextButtons: false,
					pageDots: false
				}
            }
        },
        methods: {
            selectSlide( index ) {
                this.$refs.slider.select( index )
            }
        }
    };

</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

    .offers-item {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        size: 45% auto;
        margin: 40px 0;
        padding: 32px 28px;
        background-color: $whited;
        @include MDShadow-1;
        @include MQ(Pp) {
            flex-flow: column wrap;
            margin: 20px 0;
            padding: 16px;
        };
    }

    .details {
        position: relative;
        &._offers-item {
            width: auto;
        }
        &__title {
            font-size: 26px;
        }
        &__description {
            margin-top: 16px;
            margin-bottom: 40px;
            &._offers-item {
                margin-bottom: 0;
            }
        }
        @include MQ(Pp) {
            width: auto;
            &__title {
                text-align: center;
            }
            &__description {
                margin-bottom: 75px;
            }
        };
    }

    .controls {
        display: flex;
        justify-content: space-around;
    }

    .slider {
        @include MQ(Pp) {
            width: 100%;
        };
    }

    $slideSize: 400px;

    .offers-slider {
		size: $slideSize + 50 300px;
        @include MQ(Pp) {
            size: auto 200px;
        };
		.flickity-viewport {
		    size: 100%;
			min-height: 100%;
		}
		.flickity-slider {
			display: flex;
			align-items: flex-start;
            @include MQ(Pp) {
                align-items: center;
            };
		}
        &__control-button {
            width: 100px;
            padding: 0;
            margin: 0 5px;
            margin-bottom: 16px;
            background-color: $whited;
            border: none;
        }
        &__control-image {
            size: 100%;
        }
		&__slide {
			size: $slideSize auto;
			margin: 0 25px;
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
