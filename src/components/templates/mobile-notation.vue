<template lang="html">
	<div class="mobile-notation">
		<h5 class="mobile-notation__title">Важно!</h5>
		<p class="mobile-notation__text">Полное описание комплектации доступно на больших экранах, например, на компьютере. На маленьком экране всё не поместится :)<br />Вы можете связаться с менеджером, который ответит на Ваши вопросы по данному автомобилю.</p>
		<form @submit.stop.prevent="sendCallback()" class="callback-form">
			<label for="name" class="callback-form__input-row">
				<i class="callback-form__icon material-icons">person</i>
				<input v-model = "Form.name"
					:placeholder="Placeholders.name"
					class="callback-form__input _contact-me"
					type="text"
					id="name"
					autocomplete="name"
					required
				/>
			</label>
			<label for="phone" class="callback-form__input-row">
				<i class="callback-form__icon material-icons">phone</i>
				<input v-model = "Form.phone"
					:placeholder="Placeholders.phone"
					v-mask=" '\+7 (###) ###-##-##' "
					class="callback-form__input _contact-me"
					type="tel"
					id="phone"
					autocomplete="tel"
					required
				/>
			</label>
			<button class="callback-form__button waves-effect waves-light"
				type="submit"
				>Перезвоните мне!</button>
		</form>
	</div>
</template>

<script>

	import telegram from '../main/telegram-token.js';

	export default {
		name: "mobile-notation",
		data() {
			return {
				Form: {
					name: '',
					phone: '',
				},
				Placeholders: {
					name: 'Ваше имя',
					phone: '+7 (000) 000-00-00'
				}
			}
		},
		methods: {
			sendCallback() {
				const message =
`Новая просьба перезвонить:

Имя: ${ this.Form.name }
Телефон: ${ this.Form.phone }
Страница авто: ${ this.$root.$route.name.toUpperCase() }`;
				let request = {
					token: telegram.token,
					chat_id: telegram.receptionID,
					text: message
				};
				this.$store.dispatch( 'telegramMessage' , request )
					.then( response => {
						this.$swal(
							'Просьба перезвонить отправлена!',
							'С Вами свяжется менеджер.',
							'success'
						);
						this.Form = {
							name: '',
							phone: ''
						};
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

	.mobile-notation {
		display: none;
		@include MQ(Pp) {
			display: block;
			margin-top: 16px;
			padding: 16px;
			background-color: $white;
			@include MDShadow-2;
			&__title {
				text-align: center;
				font-size: 2rem;
			}
			&__text {
				line-height: 1.5;
			}
		}
	}

	.callback-form {
		&__input-row {
			display: flex;
			align-items: center;
			margin-bottom: 16px;
			background-color: $red;
			@include MDShadow-1;
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
		}
		&__button {
			@include MDButton( $white , $red ) {
				size: 100% 50px;
				line-height: 50px;
			}
		}
	}

</style>
