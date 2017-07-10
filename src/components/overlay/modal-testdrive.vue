<template lang="html">
	<form @submit.stop.prevent="send()"
		:class = "{ '_opened' : isOpened }"
		class="modal-testdrive-form">
		<h3 class="modal-testdrive-form__title">{{ title }}</h3>
		<button @click = "close()"
			type="button"
			class="modal-testdrive-form__close"
			ripple-light >
			<i class="material-icons">close</i>
		</button>
		<div class="modal-testdrive-form__column">
			<fieldset class="modal-testdrive-form__fieldset">
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
		<div class="modal-testdrive-form__column _flex">
			<datepicker v-model="Form.date"
				:format="Datepicker.format"
				:disabled="Datepicker.disabled"
				:monday-first="true"
				:inline="true"
				language="ru"
				class="modal-testdrive-form__datepicker"
				required
				>
			</datepicker>
		</div>
	</form>
</template>

<script>

	import vSelect from "vue-select";
	import Datepicker from 'vuejs-datepicker';
	import telegram from '../main/telegram-token.js';
	import { dateOptions } from '../requestOptions.js';

	export default {
		name: 'modal-testdrive',
		components: { vSelect , Datepicker },
		data() {
			return {
				title: 'Запись на тест-драйв',
				Placeholders: {
					car: 'Желаемая модель авто',
					name: 'Ваше имя',
					phone: '+7 (000) 000-00-00'
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
				return this.$store.state.content.TestDrive
			},
			isOpened() {
      			return this.$store.state.tempData.modalTestDrive
			}
		},
		methods: {
			close() {
				this.$store.dispatch('modalClose')
			},
			send() {
				const message =
`Новая заявка на тест-драйв:

Имя: ${ this.Form.name }
Телефон: ${ this.Form.phone }
Модель авто: ${ this.Form.selectedCar }
Дата: ${ this.Form.date.toLocaleString('ru-RU', dateOptions) }`;
				let request = {
					token: telegram.token,
					chat_id: telegram.receptionID,
					text: message
				};
				this.$store.dispatch( 'telegramMessage' , request )
					.then( response => {
						this.$swal(
							'Заявка на тест-драйв отправлена!',
							'С Вами свяжется менеджер, чтобы уточнить детали.',
							'success'
						);
						this.Form = {
							selectedCar: null,
							name: '',
							phone: '',
							date: new Date()
						};
						this.$store.dispatch('modalClose')
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

	.modal-testdrive-form {
		opacity: 0;
		visibility: hidden;
		position: fixed 50% 0 0 50%;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		size: 800px auto;
		padding: 30px;
		padding-top: 0;
		background-color: $white;
		@include MDShadow-5;
		transform: translate( -50% , -50% ) scale(0.75);
		transition:
			transform .3s ease-in-out,
			opacity .3s ease-in-out,
			visibility .3s ease-in-out;
		&._opened {
			opacity: 1;
			visibility: visible;
			transform: translate( -50% , -50% ) scale(1);
		}
		&__title {
			width: 100%;
			text-align: center;
			font-size: 2rem;
			line-height: 2;
		}
		&__close {
			@include MDButton( $whited , $red ) {
				position: absolute 0 0 auto auto;
				size: 4rem;
			}
			.material-icons {
				font-size: 3rem;
				line-height: 4rem;
			}
		}
		&__column {
			width: 48%;
			flex-basis: 48%;
			&._flex {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		&__fieldset {
			padding: 0 20px 20px 20px;
			background-color: $whited
		}
		&__select {
			size: 100% 3.5rem;
			margin: 1rem 0px;
			font-size: 1rem;
			color: $red transparent;
			border: solid 3px $red;
			cursor: pointer;
			@include MDShadow-1;
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
		&__input {
			size: 100% 3.5rem;
			padding: 0 1rem;
			margin: 1rem 0px;
			font-size: 1rem;
			color: $red transparent;
			border: solid 3px $red;
			@include MDShadow-1;
			transition:
				color .3s ease-in-out,
				background-color .3s ease-in-out;
		}
		&__submit {
			@include MDButton($white, $red) {
				size: 100% 3.5rem;
				margin: 1rem 0px;
				margin-bottom: 0;
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
