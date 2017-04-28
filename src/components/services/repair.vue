<template lang="html">
	<section id="repair" class="repair">
		<div class="container _flex-row">
			<h2 class="repair__title">{{ title }}</h2>
			<!-- <div class="repair-text">
				<h3 class="repair-text__heading">{{ Text.heading }}</h3>
				<p class="repair-text__paragraph">{{ Text.paragraph }}</p>
			</div> -->
			<form @submit.stop.prevent = "send()"
				class="repair-form"
				>
				<fieldset>
					<legend>Заявка на запчасть:</legend>
					<div class="container _flex-column">
						<label for="contact-me" class="detail">
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
						</label>
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
						<label for="contact-me" class="detail">
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
											v-mask=" '\+7(###)###-##-##' "
											class="detail__input _contact-me"
											type="text"
											id="phone"
											required
										/>
									</label>
								</div>
							</fieldset>
						</label>
						<button class="repair-form__submit"
							type="submit"
							name="button"
							ripple-light
							>Отправить</button>
					</div>
				</fieldset>
			</form>
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
				title: 'Repair',
				Text: {
					heading: 'поцажжыддьвьжйь',
					paragraph: 'ыджьвйадцйттайтца'
				},
				Form: {
					detail: '',
					detailPlaceholder: 'Название детали, которую Вы ищите...',
					name: '',
					namePlaceholder: 'Ваше имя',
					phone: '',
					phonePlaceholder: 'Ваш телефон',
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
		methods: {
			send() {
				let dateOptions = {
					day: 'numeric',
					weekday: 'long',
					month: 'long',
					year: 'numeric'
				};
				let message = `Новая заявка на тест-драйв:\n\nИмя: ${this.Form.name}\nДата: ${this.Form.date.toLocaleString('ru-RU', dateOptions)}\nТелефон: ${this.Form.phone}\nМодель авто: ${this.Form.car.value}`;
				let request = {
					token: telegram.token,
					chat_id: '173161597',
					// chat_id: telegram.chat_id,
					message
				};
				this.$http.post(`https://api.telegram.org/bot${request.token}/sendMessage?chat_id=${request.chat_id}&text=${request.message}`)
					.then( response => console.log(response) );
				this.$swal(
					'Заявка на тест-драйв отправлена!',
					'С Вами свяжется менеджер, чтобы уточнить детали.',
					'success'
				);
				this.Form.name = '';
				this.Form.date = new Date();
				this.Form.phone = '';
				this.Form.car.value = ''
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
			width: 100%;
			text-align: center;
			font-size: 2rem;
		}
	}

	.repair-text {
		width: 50%;
	}
	.repair-form {
		size: 60% auto;
		margin-top: 3rem;
		fieldset {
			display: flex;
			width: 98%;
			margin: 0;
			.container {
				width: auto;
			}
		}
		&__column {
			width: 45%;
			flex-basis: 45%;
		}
		&__input {
			size: (94% / 2) 3.5rem;
			margin: 1rem 0px;
			padding: 0 1rem;
			font-size: 1rem;
			color: $red transparent;
			border: solid 3px $red;
			@include MDShadow-1;
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
	}

	.detail {
		width: 100%;
		margin: .5rem;
		&__fieldset {
			margin: 0;
			.container {
				width: 100%;
			}
		}
		&__legend {}
		&__input-row {
			display: flex;
			align-items: center;
			width: 48%;
			background-color: $red;
			@include MDShadow-1;
		}
		$iconWidth: 20%;
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
