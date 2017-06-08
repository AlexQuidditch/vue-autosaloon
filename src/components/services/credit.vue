<template lang="html">
	<section id="credit" class="credit">
		<h1 class="credit__title">{{ Content.headTitle }}</h1>
		<div class="container _flex-row _j-between">
			<article class="credit-info">
				<h3 class="credit-info__title">{{ Content.infoTitle }}</h3>
				<p v-html="Content.infoContent" class="credit-info__content"></p>
			</article>
			<form @submit.stop.prevent="testdrive()"
				class="credit-form">
				<fieldset class="credit-form__fieldset">
					<legend class="credit-form__legend">Заполните поля ниже:</legend>
					<label for="select" class="credit-form__input-row">
						<i class="credit-form__icon material-icons">directions_car</i>
						<v-select v-model="Form.selectedCar"
							:options="Options"
							:placeholder="Placeholders.car"
							class="credit-form__input"
							required
							>
						</v-select>
					</label>
					<label for="name" class="credit-form__input-row">
						<i class="credit-form__icon material-icons">person</i>
						<input v-model="Form.name"
							:placeholder="Placeholders.name"
							class="credit-form__input"
							type="text"
							id="name"
							autocomplete="name"
							required
						/>
					</label>
					<label for="phone" class="credit-form__input-row">
						<i class="credit-form__icon material-icons">phone</i>
						<input v-model="Form.phone"
							:placeholder="Placeholders.phone"
							v-mask=" '\+7 (###) ###-##-##' "
							class="credit-form__input"
							type="tel"
							id="phone"
							autocomplete="tel"
							required
						/>
					</label>
					<label for="select" class="credit-form__input-row">
						<i class="credit-form__icon material-icons">access_time</i>
						<range-slider v-model="Form.time"
							class="credit-form__time-slider slider"
							min="10"
							max="18"
							step="1"
							>
						</range-slider>
						<span class="credit-form__time-indicator">{{ Form.time }}:00</span>
					</label>
					<button	type="submit"
						name="button"
						class="credit-form__submit"
						ripple-light
						>Отправить заявку</button>
				</fieldset>

			</form>
		</div>
	</section>
</template>

<script>

	import vSelect from "vue-select";
	import RangeSlider from 'vue-range-slider';
	import 'vue-range-slider/dist/vue-range-slider.scss';

	export default {
		name: 'credit',
		components: { vSelect , RangeSlider },
		data() {
			return {
				Content: {
					headTitle: 'Кредит на автомобиль из нашего салона',
					infoTitle: 'Получите консультацию кредитного специалиста.',
					infoContent: 'Наш специалист поможет Вам подобрать подходящий кредит на оптимальных для Вас условиях. <br /><br /> Мы сотрудничаем со следующими банками: Русфинанс Банк, ЮниКредитБанк, Альфа-Банк, Совкомбанк.'
				},
				Placeholders: {
					car: 'Желаемая модель авто',
					name: 'Ваше имя',
					phone: '+7 (000) 000-00-00',
					time: 'время с 10:00 до 18:30'
				},
				Form: {
					selectedCar: null,
					name: '',
					phone: '',
					time: new Date().getHours()
				}
			}
		},
		computed: {
			Options() {
				return this.$state.TestDrive.options
			}
		},
		methods: {
			testdrive() {
				console.log(this.Form);
			}
		}
	}
</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.credit {
		padding: 60px 0;
		&__title {
			text-align: center;
			font-size: 3rem;
			color: $white;
		}
		@include MQ(Pp) {
			padding: 30px 0;
			&__title {
				text-align: center;
				font-size: 2.5rem;
				@include MQ(Pp) {
					font-size: 2rem;
				}
			}
		}
	}

	.credit-info {
		width: 50%;
		margin-top: 100px;
		padding: 2rem;
		background-color: $white;
		@include MDShadow-2;
		&__title {
			font-size: 1.5rem;
		}
		&__content {
			font-size: 1rem;
			line-height: 1.5rem;
		}
		@include MQ(Pp) {
			width: auto;
		};
	}

	.credit-form {
		position: relative;
		size: 40% auto;
		margin-top: 60px;
		@include MQ(Pp) {
			width: auto;
		};
		&__legend {
			color: $white;
		}
		&__input-row {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin: 1rem 0;
			background-color: $red;
			@include MDShadow-1
		}
		$iconWidth: 15%;
		@include MQ(Pp) {
			$iconWidth: 20%;
		}
		&__icon {
			width: $iconWidth;
			text-align: center;
			font-size: 2rem;
			line-height: 3rem;
			color: $whited;
			text-shadow:
					0 4px 5px rgba($blacked, 0.14),
					0 1px 10px rgba($blacked, 0.12),
					0 2px 4px rgba($blacked, 0.3);
			cursor: pointer;
		}
		&__input {
			size: 100% 3.5rem;
			padding: 0 1rem;
			margin: 0;
			font-size: 1rem;
			color: $red $whited;
			border: solid 3px $red;
			transition:
				color .3s ease-in-out,
				background-color .3s ease-in-out;
			&::placeholder {
				color: rgba($black , .5)
			}
			.dropdown-toggle {
				size: 100%;
				border: none !important
			}
			.form-control {
				position: absolute !important;
				left: 0 !important;
				size: 100% !important;
				padding: 0.8rem !important;
				font-size: 1rem !important;
				color: $red !important;
				border: none !important
			}
			.open-indicator {
				display: none !important
			}
			.selected-tag {
				size: 100% !important;
				margin: 0 !important;
				padding: 0.8rem !important;
				font-size: 1rem !important;
				color: $red transparent !important;
				border: none !important
			}
		}
		&__time-slider {
			 size: 70% 3.5rem;
			 padding: 0 10px;
			 margin: 0;
			 .range-slider-knob {
			 	cursor: grab;
				&:focus {
					cursor: grabbing;
				}
			 }
		}
		&__time-indicator {
			width: 20%;
			text-align: center;
			color: $white;
		}
		&__submit {
			@include MDButton($white, $red) {
				size: 100% 3.5rem;
				margin: 0;
			}
		}
	}

</style>
