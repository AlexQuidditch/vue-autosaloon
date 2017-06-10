<template lang="html">
	<section id="tech-service" class="tech-service">
		<h2 class="tech-service__title">{{ Info.title }}</h2>
		<h3 class="service-info__subTitle">{{ Info.subTitle }}</h3>
		<div class="container _flex-row _j-between _a-start">
			<article class="service-info">
				<div v-html="Info.content" class="service-info__content html ql-editor"></div>
			</article>
			<form @submit.stop.prevent="techService()"
				class="service-form">
				<div class="service-form__column">
					<fieldset>
						<legend class="service-form__legend">Заполните поля и выберите дату:</legend>
						<label class="service-form__input-row">
							<i class="service-form__icon material-icons">person</i>
							<input v-model="Form.name"
								:placeholder="Placeholders.name"
								type="text"
								autocomplete="name"
								id="service-name"
								class="service-form__input"
								required
							>
						</label>
						<label class="service-form__input-row">
							<i class="service-form__icon material-icons">phone</i>
							<input v-model="Form.phone"
								:placeholder="Placeholders.phone"
								v-mask=" '\+7 (###) ###-##-##' "
								class="service-form__input"
								type="tel"
								id="phone"
								autocomplete="tel"
								required
							/>
						</label>
						<label for="service-build" class="service-form__input-row">
							<i class="service-form__icon material-icons">build</i>
							<textarea v-model="Form.description"
								:placeholder="Placeholders.description"
								type="text"
								id="service-build"
								class="service-form__textarea"
								required
								>
							</textarea>
						</label>
						<button	type="submit"
							name="button"
							class="service-form__submit"
							ripple-light
							>Отправить заявку
						</button>
					</fieldset>
				</div>
				<div class="service-form__column _flex">
					<datepicker v-model="Form.date"
						:format="Datepicker.format"
						:disabled="Datepicker.disabled"
						:monday-first="true"
						:inline="true"
						language="ru"
						class="service-form__datepicker"
						required
						>
					</datepicker>
				</div>
			</form>
		</div>
	</section>
</template>

<script>

	import Datepicker from 'vuejs-datepicker';
	import telegram from '../main/telegram-token.js';
	import { dateOptions } from '../requestOptions.js';

	export default {
  		name: "tech-service",
		components: { Datepicker },
      	data() {
			return {
				Placeholders: {
					name: 'Ваше имя',
					phone: '+7 (000) 000-00-00',
					description: 'Кратко опишите проблему'
				},
				Form: {
					name: '',
					phone: '',
					date: new Date(),
					description: ''
				},
				Datepicker: {
					format: 'D d MMM yyyy',
					disabled: { days: [ 0, 6 ] }
				}
			}
      	},
		computed: {
			Info() {
				return this.$state.Service.techService
			}
		},
		methods: {
			techService() {
				const message = `
	Новая заявка на тест-драйв:

	Имя: ${ this.Form.name }
	Дата: ${ this.Form.date.toLocaleString('ru-RU', dateOptions) }
	Телефон: ${ this.Form.phone }
	Причина обращения: ${ this.form.service.service }
	`;
				const request = {
					token: telegram.token,
					chat_id: '173161597',
					// chat_id: telegram.chat_id,
					text: message
				};
				this.$store.dispatch( 'telegramMessage' , request )
					.then( response => {
						this.$swal(
							'Заявка на техобслуживание отправлена!',
							'С Вами свяжется менеджер, чтобы уточнить детали.',
							'success'
						);
						this.Form = {
							name: '',
							phone: '',
							date: new Date(),
							description: ''
						}
					})
					.catch( error => {
						console.error(error);
						this.$swal(
							'Упс...',
							'Что-то пошло не так!',
							'error'
						);
					});
			}
		}
	}
</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.tech-service {
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

	.service-info {
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

	.service-form {
		size: 40% auto;
		margin-top: 60px;
		@include MQ(Pp) {
			width: auto;
		};
		&__column {
			width: 100%;
			flex-basis: 45%;
			&._flex {
				display: flex;
				justify-content: center;
				align-items: flex-start;
				padding-top: 15px;
			}
		}
		&__input-row {
			display: flex;
			align-items: center;
			margin: 1rem 0;
			background-color: $red;
			@include MDShadow-1;
			&:nth-child(2) {
				margin-top: 0;
			}
		}
		&__legend {
			color: $white
		}
		$iconWidth: 15%;
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
		&__textarea,
		&__input {
			size: ( 100% - $iconWidth ) 3.5rem;
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
		}
		&__textarea {
			height: 6rem;
			padding: 1rem;
			resize: none;
		}
		&__submit {
			@include MDButton($white, $red) {
				size: 100% 3.5rem;
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
