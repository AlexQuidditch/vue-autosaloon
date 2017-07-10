<template lang="html">

	<div :class="{ '_opened' : isOpened }" class="button-call">
		<div v-show="!isOpened"
			 @click="openForm()"
			 class="button-call__button"
			 >
			 <i class="button-call__icon material-icons">phone</i>
		 </div>
		<div class="button-call__content">
			<form @submit.stop.prevent="sendCall()"
				class="call-form">
				<label class="call-form__input-row">
					<i class="call-form__icon material-icons">person</i>
					<input v-model="Form.name"
						:placeholder="Placeholders.name"
						type="text"
						autocomplete="name"
						id="call-name"
						class="call-form__input"
						required
					>
				</label>
				<label class="call-form__input-row">
					<i class="call-form__icon material-icons">phone</i>
					<input v-model="Form.phone"
						:placeholder="Placeholders.phone"
						v-mask=" '+7 (###) ###-##-##' "
						type="phone"
						id="call-phone"
						class="call-form__input"
						autocomplete="tel"
						required
					>
				</label>
				<button	type="submit"
					name="button"
					class="call-form__submit"
					ripple-light
					>Перезвоните мне
				</button>
			</form>
			<button @click="closeForm()"
				class="button-call__close"
				type="button"
				ripple-light
				>Закрыть
			</button>
		</div>
	</div>

</template>

<script>

	import telegram from './main/telegram-token.js';

	export default {
  		name: "button-call",
      	data() {
			return {
				isOpened: false,
				Form: {
					name: '',
					phone: ''
				},
				Placeholders: {
					name: 'Ваше имя',
					phone: '+7 (000) 000-00-00'
				}
			}
      	},
		created() {
			window.addEventListener( 'keyup' , (e) => {
				e.preventDefault;
				if ( e.keyCode == 27 ) {
					this.closeForm()
				}
			});
		},
		methods: {
			openForm() {
				this.isOpened = true
			},
		    closeForm() {
				this.isOpened = false;
			},
			sendCall() {
				const message =
`Новая просьба перезвонить:

Имя: ${ this.Form.name }
Телефон: ${ this.Form.phone }`;
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
						this.closeForm();
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

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	.button-call {
		display: flex;
		$size: 50px 150px;
		@include MDButton( $whited , $red ) {
			z-index: 900;
			position: fixed 50% auto auto 0;
			size: $size;
			outline: none;
			transform: translateY( -50% );
		}
		will-change: transform, top, left;
		transition: .5s ease-in-out;
		@include MQ(Pp) {
			display: none;
		};
		&._opened {
			overflow: hidden;
			left: 15%;
			size: 300px 290px;
			padding: 9px 16px 0 16px;
			background-color: $white;
			border-radius: 5px;
			cursor: default;
			@include MDShadow-5;
			.button-call__content {
				opacity: 1;
				size: 100%;
				color: $black;
				transition: opacity 0.3s ease;
				transition-delay: 0.5s;
			}
			@include MQ(Pp) {
				top: 50%;
				left: 50%;
				transform: translate( -50% , -50% );
			}
		}
		@include MDShadow-3;
		&:active {
			transform: translateY( -49% );
			@include MDShadow-4;
		}
		&__button {
			display: flex;
			justify-content: center;
			align-items: center;
			size: 100%;
		}
		&__icon {
			font-size: 32px;
		}
		&__content {
			overflow: hidden;
			opacity: 0;
			size: 0;
			font-size: 14px;
			transition: none;
		}
		&__close {
			@include MDButton($white, $red) {
				size: 100% 3.5rem;
				margin-top: 16px;
			}
		}
	}

	.call-form {
		&__input-row {
			display: flex;
			align-items: center;
			margin: 1rem 0;
			background-color: $red;
			@include MDShadow-1;
			&:nth-child(1) {
				margin-top: 0;
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
		&__submit {
			@include MDButton($white, $red) {
				size: 100% 3.5rem;
			}
		}
	}

</style>
