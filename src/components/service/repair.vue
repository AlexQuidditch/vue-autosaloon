<template lang="html">
	<section id="repair" class="repair">
		<h2 class="repair__title">{{ Info.title }}</h2>
		<div v-html="Info.subTitle" class="repair__sub-title container html ql-editor"></div>
		<div class="container _flex-row _j-between">
			<form @submit.stop.prevent = "send()"
				class="repair-form">
				<fieldset>
					<legend>Заполните форму ниже:</legend>
					<div class="container _flex-column">
						<div class="detail">
							<fieldset class="detail__fieldset">
								<legend class="detail__legend _contact-me">Ваш автомобиль:</legend>
								<div class="container _flex-row _j-between">
									<label for="manufactor" class="detail__input-row">
										<i class="detail__icon material-icons">home</i>
										<input v-model = "Form.manufactor"
											:placeholder="Placeholders.manufactor"
											class="detail__input _contact-me"
											type="text"
											id="manufactor"
											required
										/>
									</label>
									<label for="car" class="detail__input-row">
										<i class="detail__icon material-icons">directions_car</i>
										<input v-model = "Form.car"
											:placeholder="Placeholders.car"
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
									:placeholder="Placeholders.detail"
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
											:placeholder="Placeholders.name"
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
											:placeholder="Placeholders.phone"
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
				<div v-html="Info.content" class="repair-info__content html ql-editor"></div>
			</article>
		</div>
		<div class="offers container">
			<h2 class="offers__title">Популярные аксессуары:</h2>
			<ul class="offers-list">
				<offer-card v-for="offerItem in Offers" :key="offerItem.title"
					:Offer="offerItem"
					>
				</offer-card>
			</ul>
		</div>
	</section>
</template>

<script>
	import vSelect from "vue-select";
	import offerCard from '../templates/offer-card.vue';
	import telegram from '../main/telegram-token.js';

	export default {
  		name: "repair",
		components: { vSelect , offerCard },
      	data() {
			return {
				Form: {
					detail: '',
					name: '',
					phone: '',
					manufactor: '',
					car: ''
				},
				Placeholders: {
					detail: 'Название детали, которую Вы ищите...',
					name: 'Ваше имя',
					phone: '+7 (000) 000-00-00',
					manufactor: 'Производитель:',
					car: 'Модель авто:'
				},
				Offers: [
                    {
                        title: 'Крыша',
                        descriptions: '<p>Lorem ipsum dolor sit amet, Lorem consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                        slides: [
                            '../../../static/assets/img/offers/krysha.jpg'
                        ]
                    },
                    {
                        title: 'Фаркоп',
                        descriptions: '<p>Lorem ipsum dolor sit amet, Lorem consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
                        slides: [
                            '../../../static/assets/img/offers/farkop.jpg'
                        ]
                    }
                ]
			}
      	},
		computed: {
			Info() {
				return this.$state.content.Service.repair
			}
		},
		methods: {
			send() {
				const message =
`Новая заявка на деталь:

Имя: ${ this.Form.name }
Телефон: ${ this.Form.phone }
Производитель авто: ${ this.Form.manufactor }
Модель авто: ${ this.Form.car }
Деталь для авто: ${ this.Form.detail }
`;
				const request = {
					token: telegram.token,
					chat_id: telegram.repairID,
					text: message
				};
				this.$store.dispatch( 'telegramMessage' , request )
					.then( response => {
						this.$swal(
							'Заявка на деталь отправлена!',
							'С Вами свяжется менеджер, чтобы уточнить наличие.',
							'success'
						);
						this.Form = {
							detail: '',
							name: '',
							phone: '',
							manufactor: '',
							car: ''
						}
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
		&__sub-title {
			margin-top: 16px;
			color: $white;
			font-size: 18px;
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

	.offers {
		&__title {
			margin-top: 32px;
			text-align: center;
			font-size: 3rem;
			color: $white;
		}
	}

	.offers-list {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
	}

</style>
