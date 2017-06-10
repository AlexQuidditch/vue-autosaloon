<template lang="html">
	<section v-once id="repair" class="repair">
		<h2 class="repair__title">{{ Info.title }}</h2>
		<div v-html="Info.subTitle" class="container ql-content"></div>
		<div class="container _flex-row _j-between">
			<form @submit.stop.prevent = "send()"
				class="repair-form"
				>
				<fieldset>
					<legend>Заполните форму ниже:</legend>
					<div class="container _flex-column">
						<div class="detail">
							<fieldset class="detail__fieldset">
								<legend class="detail__legend _contact-me">Ваш автомобиль:</legend>
								<div class="container _flex-row _j-between">
									<label for="manufactor" class="detail__input-row">
										<i class="detail__icon material-icons">home</i>
										<input v-model = "Form.manufactor.selected"
											:placeholder="Form.manufactor.placeholder"
											class="detail__input _contact-me"
											type="text"
											id="manufactor"
											required
										/>
									</label>
									<label for="car" class="detail__input-row">
										<i class="detail__icon material-icons">directions_car</i>
										<input v-model = "Form.car.selected"
											:placeholder="Form.car.placeholder"
											class="detail__input _contact-me"
											type="text"
											id="car"
											required
										/>
									</label>
								</div>
							</fieldset>
						</div>
						<label for="detail" class="detail">
							<fieldset class="detail__fieldset">
								<legend class="detail__legend">Введите искомую деталь:</legend>
								<input v-model = "Form.detail"
									:placeholder="Form.detailPlaceholder"
									class="detail__input"
									type="text"
									id="detail"
									required
								/>
							</fieldset>
						</label>
						<div class="detail">
							<fieldset class="detail__fieldset">
								<legend class="detail__legend _contact-me">Как с Вами связаться?</legend>
								<div class="container _flex-row _j-between">
									<label for="name" class="detail__input-row">
										<i class="detail__icon material-icons">person</i>
										<input v-model = "Form.name"
											:placeholder="Form.namePlaceholder"
											class="detail__input _contact-me"
											type="text"
											id="name"
											autocomplete="name"
											required
										/>
									</label>
									<label for="phone" class="detail__input-row">
										<i class="detail__icon material-icons">phone</i>
										<input v-model = "Form.phone"
											:placeholder="Form.phonePlaceholder"
											v-mask=" '\+7 (###) ###-##-##' "
											class="detail__input _contact-me"
											type="tel"
											id="phone"
											autocomplete="tel"
											required
										/>
									</label>
								</div>
							</fieldset>
						</div>
						<button class="repair-form__submit"
							type="submit"
							ripple-light
							>Узнать наличие детали</button>
					</div>
				</fieldset>
			</form>
			<article class="repair-info">
				<h3 class="repair-info__title">{{ Info.title }}</h3>
				<div v-html="Info.content" class="repair-info__content html ql-editor"></div>
			</article>
		</div>
	</section>
</template>

<script>
	import vSelect from "vue-select";
	import telegram from '../main/telegram-token.js';

	export default {
  		name: "repair",
		components: { vSelect },
      	data() {
			return {
				Form: {
					detail: '',
					detailPlaceholder: 'Название детали, которую Вы ищите...',
					name: '',
					namePlaceholder: 'Ваше имя',
					phone: '',
					phonePlaceholder: '+7 (000) 000-00-00',
					manufactor: {
						selected: '',
						placeholder: 'Производитель:'
					},
					car: {
						selected: '',
						placeholder: 'Модель авто:'
					}
				}
			}
      	},
		computed: {
			Info() {
				return this.$state.Service.repair
			}
		},
		methods: {
			send() {
				const dateOptions = {
					day: 'numeric',
					weekday: 'long',
					month: 'long',
					year: 'numeric'
				};
				const message =
`Новая заявка на техобслуживание:

Имя: ${ this.Form.name }
Дата: ${ this.Form.date.toLocaleString('ru-RU', dateOptions) }
Телефон: ${ this.Form.phone }
Модель авто: ${ this.Form.car.value }
`;
				const request = {
					token: telegram.token,
					chat_id: '173161597',
					// chat_id: telegram.chat_id,
					message
				};
				this.$http.post(`https://api.telegram.org/bot${request.token}/sendMessage?chat_id=${request.chat_id}&text=${request.message}`)
					.then( response => {
						this.$swal(
							'Заявка на тест-драйв отправлена!',
							'С Вами свяжется менеджер, чтобы уточнить детали.',
							'success'
						);
						this.Form.name = '';
						this.Form.date = new Date();
						this.Form.phone = '';
						this.Form.car.value = ''
					})
					.catch( error => {
						console.error(response);
						this.$swal(
							'Упс...',
							'Что-то пошло не так!',
							'error'
						);
					});
			}
		},
		mounted() {
			Waves.init();
			Waves.attach('[ripple-light]', ['waves-light']);
		}
	}
</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.repair {
		padding: 60px 0;
		&__title {
			text-align: center;
			font-size: 3rem;
			color: $white;
		}
		&__pre-message {
			margin-top: 2rem;
			font-size: 1.5rem;
			line-height: 1.5;
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
			&__pre-message {
				text-align: center;
			}
		}
	}
	.repair-text {
		width: 50%;
	}

	.repair-info {
		width: 37.5%;
		margin-top: 3rem;
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
			margin-top: 2rem
		}
	}

	.repair-form {
		size: 60% auto;
		padding: 1rem;
		margin-top: 3rem;
		background-color: $white;
		fieldset {
			display: flex;
			margin: 0;
			.container {
				width: auto;
			}
		}
		&__submit {
			@include MDButton($white, $red) {
				size: 100% 3.5rem;
				margin: 1rem 0px;
				margin-bottom: 0;
			}
			&:disabled {
				color: $whited $grey
			}
		}
		@include MQ(Pp) {
			size: 100% auto;
			padding: 8px;
		}
	}

	.detail {
		padding: .5rem 0;
		&__fieldset {
			margin: 0;
			.container {
				width: 100%;
			}
		}
		&__input-row {
			display: flex;
			align-items: center;
			width: 48%;
			background-color: $red;
			@include MDShadow-1;
			@include MQ(Pp) {
				width: 100%;
				margin: 4px 0;
			}
		}
		$iconWidth: 20%;
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
			@include MDShadow-1;
			transition:
				color .3s ease-in-out,
				background-color .3s ease-in-out;
			&::placeholder {
				color: rgba($black , .5)
			}
			&._contact-me {
				size: ( 100% - $iconWidth ) 3.5rem;
				box-shadow: none !important;
			}
		}
	}

</style>
