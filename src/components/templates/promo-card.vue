<template lang="html">
    <li class="promo-item">
        <div class="slider">
            <flickity ref="slider" :options="flickityOptions" class="promo-slider" >
                <div v-for="promoItem in Promo.slides"
                    class="promo-slider__slide">
                    <img :src="promoItem"
                        class="promo-slider__slide-image"
                    />
                </div>
            </flickity>
            <div class="controls">
                <button v-for="( promoItem , index ) in Promo.slides"
                    @click="selectSlide( index )"
                    class="promo-slider__control-button"
                    type="button"
                    >
                    <img :src="promoItem" class="promo-slider__control-image" />
                </button>
            </div>
            <a :href="Promo.route"
                class="route-button waves-effect waves-light"
                >Страница
            </a>
        </div>
        <div class="details">
            <h3 class="details__title">{{ Promo.title }}</h3>
            <div v-html="Promo.descriptions" class="details__description html ql-editor"></div>
            <div class="details-footer">
                <span class="details-footer__duration">Акция длится: {{ Promo.duration }}</span>
            </div>
        </div>
    </li>
</template>

<script>

    import flickity from 'vue-flickity';

    export default {
        name: "promo-item",
        components: { flickity },
		props: {
			Promo: {
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

    .promo-item {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        size: 100% auto;
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
        width: 55%;
        &__title {
            font-size: 26px;
        }
        &__description {
            margin-top: 16px;
            margin-bottom: 40px;
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

    .details-footer {
        position: absolute auto 0 0 auto;
        width: 100%;
        text-align: right;
        font-size: 18px;
        line-height: 48px;
        &__duration {}
        @include MQ(Pp) {
            flex-flow: column wrap;
            line-height: 2;
            &__date {
                text-align: right;
            }
        };
    }

    .controls {
        display: flex;
        justify-content: space-around;
    }

    .route-button {
        @include MDButton( $whited , $red ) {
            display: block;
            size: 80% 3rem;
            margin-top: 24px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            line-height: 3rem;
        };
        @include MQ(Pp) {
            width: 100%;
            margin: 16px 0;
        };
    }

    .slider {
        @include MQ(Pp) {
            width: 100%;
        };
    }

    $slideSize: 400px;

    .promo-slider {
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
            background-color: $whited;
            border: none;
        }
        &__control-image {
            size: 100%;
            @include MDShadow-1;
        }
		&__slide {
			size: $slideSize auto;
			margin: 0 25px;
		}
		&__slide-image {
			width: 100%;
			max-height: 600px;
			object-fit: contain;
            @include MDShadow-2;
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
