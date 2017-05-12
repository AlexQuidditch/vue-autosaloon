<template lang="html">
	<section id="tech-service" class="tech-service">
		<h2 class="tech-service__title">{{ title }}</h2>
		<div class="container _flex-row _j-between _a-start">
			<article class="service-info">
				<h3 class="service-info__title">{{ Info.title }}</h3>
				<p v-html="Info.content" class="service-info__content"></p>
			</article>
			<form @submit.stop.prevent="techService()"
				class="service-form">
				<div class="service-form__column">
					<fieldset>
						<legend class="service-form__legend">Заполните поля и выберите дату:</legend>
						<label class="service-form__input-row">
							<i class="service-form__icon material-icons">person</i>
							<input v-model="form.name"
								:placeholder="form.namePlaceholder"
								type="text"
								autocomplete="name"
								pattern="[A-Za-zА-Яа-яЁё]"
								id="service-name"
								class="service-form__input"
								required
							>
						</label>
						<label class="service-form__input-row">
							<i class="service-form__icon material-icons">phone</i>
							<input v-model="form.phone"
								:placeholder="form.phonePlaceholder"
								v-mask=" '+7 (###) ###-##-##' "
								type="phone"
								autocomplete="phone"
								id="service-phone"
								class="service-form__input"
								required
							>
						</label>
						<label class="service-form__input-row">
							<i class="service-form__icon material-icons">build</i>
							<textarea v-model="form.service.service"
								:placeholder="form.service.servicePlaceholder"
								type="text"
								autocomplete="name"
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
					<datepicker v-model="form.date"
						:format="form.dateFormat"
						:placeholder="form.datePlaceholder"
						:disabled="form.dateDisabled"
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

	export default {
  		name: "tech-service",
		components: { Datepicker },
      	data() {
			return {
				title: 'Запись на сервисное обслуживание',
				Info: {
					title: 'Ремонт и обслуживание любого авто.',
					content: 'Быстрая и качественная диагностика. Команда профессионалов, индивидуальный подход.<br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /><br /> Doloremque eveniet facere, optio ex qui hic impedit. Deserunt expedita, commodi repudiandae, cum asperiores dolor autem numquam sed nam, provident, esse ad?'
				},
				form: {
					name: '',
					phone: '',
					date: new Date(),
					dateFormat: 'D d MMM yyyy',
					dateDisabled: {	days: [ 0, 6 ] },
					service: {
						service: '',
						servicePlaceholder: 'Кратко опишите проблему'
					},
					namePlaceholder: 'Ваше имя',
					phonePlaceholder: '+7 (000) 000-00-00',
					datePlaceholder: 'Выберите желаемую дату'
				}
			}
      	},
		methods: {
			techService() {
				const dateOptions = {
					day: 'numeric',
					weekday: 'long',
					month: 'long',
					year: 'numeric'
				};
				const message = `
	Новая заявка на тест-драйв:

	Имя: ${ this.form.name }
	Дата: ${ this.form.date.toLocaleString('ru-RU', dateOptions) }
	Телефон: ${ this.form.phone }
	Причина обращения: ${ this.form.service.service }
	`;
				const request = {
					token: telegram.token,
					chat_id: '173161597',
					// chat_id: telegram.chat_id,
					text: message
				};
				this.$http.post(`https://api.telegram.org/bot${request.token}/sendMessage?chat_id=${request.chat_id}&text=${request.text}`)
					.then( response => {
						console.info(response);
						this.$swal(
							'Заявка на техобслуживание отправлена!',
							'С Вами свяжется менеджер, чтобы уточнить детали.',
							'success'
						);
						this.form.name = '';
						this.form.date = new Date();
						this.form.phone = '';
						this.form.service.service = ''
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
		padding: 10vh 0;
		padding-top: 40vh;
		background-image: url('../../../static/assets/img/service_intro.jpg');
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
		&__title {
			text-align: center;
			font-size: 3rem;
			color: $white;
		}
	}

	.service-info {
		width: 50%;
		margin-top: 100px;
		padding: 2rem;
		background-color: $white;
		@include MDShadow-2;
		&__title {
			font-size: 1.75rem;
		}
		&__content {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
	}

	.service-form {
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		size: 40% auto;
		margin-top: 10vh;
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
			font-size: 2.5rem;
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
