<template lang="html">
	<section id="Testdrive" class="testdrive">
		<h2 class="testdrive__title">{{ title }}</h2>
		<div class="container _flex-column _j-start _a-center">
			<p v-html="description" class="testdrive__description"></p>
			<form @submit.stop.prevent="testdrive()"
				class="testdrive-form">
				<div class="testdrive-form__column">
					<fieldset class="testdrive-form__fieldset">
						<legend>Заполните поля и выберите дату:</legend>
						<label class="testdrive-form__input-row">
							<i class="testdrive-form__icon material-icons">directions_car</i>
							<v-select v-model="Form.selectedCar"
								:options="Options"
								:placeholder="Placeholders.car"
								class="testdrive-form__input"
								required
								>
							</v-select>
						</label>
						<label for="name" class="testdrive-form__input-row">
							<i class="testdrive-form__icon material-icons">person</i>
							<input v-model="Form.name"
								:placeholder="Placeholders.name"
								class="testdrive-form__input"
								type="text"
								id="name"
								autocomplete="name"
								required
							/>
						</label>
						<label for="phone" class="testdrive-form__input-row">
							<i class="testdrive-form__icon material-icons">phone</i>
							<input v-model="Form.phone"
								:placeholder="Placeholders.phone"
								v-mask=" '\+7 (###) ###-##-##' "
								class="testdrive-form__input"
								type="tel"
								id="phone"
								autocomplete="tel"
								required
							/>
						</label>
						<button	type="submit"
							name="button"
							class="testdrive-form__submit"
							ripple-light
							>
							Отправить заявку
						</button>
					</fieldset>
				</div>
				<div class="testdrive-form__column _flex">
					<datepicker v-model="Form.date"
						:format="Datepicker.format"
						:disabled="Datepicker.disabled"
						:monday-first="true"
						:inline="true"
						language="ru"
						class="testdrive-form__datepicker"
						required
						>
					</datepicker>
				</div>
			</form>
		</div>
	</section>
</template>

<script>

	import vSelect from "vue-select";
	import Datepicker from 'vuejs-datepicker';
	import telegram from './telegram-token.js';

	export default {
		name: 'testdrive',
		components: { vSelect , Datepicker },
		data() {
			return {
				sliderValue: 12,
				title: 'Запишитесь на тест-драйв!',
				description: 'Отличная возможность испытать желаемую машину в действии! <br /> Оставьте заявку, и мы свяжемся с Вами.',
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
					date: new Date()
				},
				Datepicker: {
					format: 'D d MMM yyyy',
					disabled: { days: [ 0, 6 ] }
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
				const dateOptions = {
					day: 'numeric',
					weekday: 'long',
					month: 'long',
					year: 'numeric'
				};
				const message =
`Новая заявка на тест-драйв:

Имя: ${ this.form.name }
Дата: ${ this.form.date.toLocaleString('ru-RU', dateOptions) }
Телефон: ${ this.form.phone }
Модель авто: ${ this.form.car.selected }`;
				let request = {
					token: telegram.token,
					chat_id: '173161597',
					// chat_id: telegram.chat_id,
					text: message
				};
				this.$http.post(`https://api.telegram.org/bot${request.token}/sendMessage?chat_id=${request.chat_id}&text=${request.text}`)
					.then( response => {
						this.$swal(
							'Заявка на тест-драйв отправлена!',
							'С Вами свяжется менеджер, чтобы уточнить детали.',
							'success'
						);
						this.form.name = '';
						this.form.date = new Date();
						this.form.phone = '';
						this.form.car.value = ''
					})
					.catch( error => {
						console.error(error);
						this.$swal(
							'Упс...',
							'Что-то пошло не так!',
							'error'
						)
					});
			}
		}
	}
</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.testdrive {
		height: calc( 100vh - 60px );
		padding: 40px 0;
		background-image: url('../../../static/assets/img/test-drive.jpg');
		background-position: center;
		background-size: cover;
		@include MQ(Pp) {
			height: auto;
		}
		&__title {
			color: $white;
			text-align: center;
			font-size: 2.5rem;
		}
		&__description {
			color: $white;
			text-align: center;
			font-size: 1.25rem;
			line-height: 1.5;
		}
	}

	.testdrive-form {
		display: flex;
		justify-content: space-between;
		size: 80% auto;
		margin-top: 36px;
		@include MQ(Pp) {
			flex-flow: column wrap;
			width: 100%;
			margin-top: 0;
		};
		&__column {
			width: 45%;
			flex-basis: 45%;
			@include MQ(Pp) {
				width: 100%;
				margin-top: 16px;
			};
			&._flex {
				display: flex;
				justify-content: center;
				align-items: flex-start;
			}
		}
		&__input-row {
			display: flex;
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
		&__submit {
			@include MDButton($white, $red) {
				size: 100% 3.5rem;
				margin: 0;
			}
		}
		&__datepicker {
			@include MDShadow-1;
			.vdp-datepicker__calendar {
				size: 100%;
			}
			.vdp-datepicker__calendar .cell.selected {
				transition:
					color .2s ease-in-out,
					background-color .2s ease-in-out;
			}
			.vdp-datepicker__calendar .cell.selected,
			.vdp-datepicker__calendar .cell.selected.highlighted,
			.vdp-datepicker__calendar .cell.selected:hover {
				color: $white $red
			}
			.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
			.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
			.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
				border-color: $red;
			}
		}
	}
</style>
