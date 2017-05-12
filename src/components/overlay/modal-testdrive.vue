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
				<v-select v-model="form.car.selected"
					:options="Options"
					:placeholder="form.car.placeholder"
					class="modal-testdrive-form__select"
					required
				>
				</v-select>
				<input v-model="form.name"
					:placeholder="form.namePlaceholder"
					type="text"
					autocomplete="name"
					class="modal-testdrive-form__input"
					required
				/>
				<input v-model="form.phone"
					:placeholder="form.phonePlaceholder"
					v-mask=" '\+7 (###) ###-##-##' "
					type="phone"
					autocomplete="phone"
					class="modal-testdrive-form__input"
					required
				/>
				<button	type="submit"
					name="button"
					class="modal-testdrive-form__submit"
					ripple-light
					>
					Отправить заявку
				</button>
			</fieldset>
		</div>
		<div class="modal-testdrive-form__column _flex">
			<datepicker v-model="form.date"
				:format="form.dateFormat"
				:placeholder="form.datePlaceholder"
				:disabled="form.dateDisabled"
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

	export default {
		name: 'modal-testdrive',
		components: { vSelect , Datepicker },
		data() {
			return {
				title: 'Запись на тест-драйв',
				form: {
					name: '',
					phone: '',
					date: new Date(),
					dateFormat: 'D d MMM yyyy',
					dateDisabled: { days: [ 0, 6 ] },
					car: {
						selected: null,
						placeholder: 'Желаемая модель авто'
					},
					namePlaceholder: 'Ваше имя',
					phonePlaceholder: '+7 (000) 000-00-00',
					datePlaceholder: 'Выберите желаемую дату'
				}
			}
		},
		computed: {
			Options() {
				return this.$store.state.TestDrive.options
			},
			isOpened() {
				return this.$store.state.TestDrive.isOpened
			}
		},
		methods: {
			close() {
				this.$store.dispatch('modalClose')
			},
			send() {
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
						this.form.car.value = '';
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
		position: fixed;
		@include center(xy);
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		size: 60% auto;
		margin-top: 3rem;
		padding: 30px;
		padding-top: 10px;
		background-color: $white;
		@include MDShadow-5;
		transition: opacity .3s ease-in-out, visibility .3s ease-in-out;
		&._opened {
			opacity: 1;
			visibility: visible;
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
