<template lang="html">
	<section id="Testdrive" class="testdrive">
		<h2 class="testdrive__title">{{ title }}</h2>
		<div class="container _flex-column _j-c _a-center">
			<form
				@submit.stop.prevent="testdrive()"
				class="testdrive-form">
				<div class="testdrive-form__column">
					<v-select
						v-model="form.car.value"
						:value.sync="form.car.selected"
						:options="form.car.options"
						:placeholder="form.car.placeholder"
						class="testdrive-form__select"
						required
					>
					</v-select>
					<input
						v-model="form.name"
						:placeholder="form.namePlaceholder"
						type="text"
						class="testdrive-form__input"
						autocomplete="name"
						required
					>
					<input
						v-model="form.phone"
						:placeholder="form.phonePlaceholder"
						v-mask=" '+7 (###) ###-##-##' "
						type="phone"
						class="testdrive-form__input"
						autocomplete="phone"
						required
					>
					<button
						type="submit"
						name="button"
						class="testdrive-form__submit"
						ripple-light
						>
						Отправить заявку
					</button>
				</div>
				<div class="testdrive-form__column _flex">
					<datepicker
						v-model="form.date"
						:format="form.dateFormat"
						:placeholder="form.datePlaceholder"
						:disabled="form.dateDisabled"
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

export default {
	name: 'testdrive',
	data() {
		return {
			title: 'Запись на тест-драйв',
			form: {
				name: '',
				phone: '',
				date: new Date(),
				dateFormat: 'D d MMM yyyy',
				dateDisabled: {
					days: [ 0, 6 ]
				},
				car: {
					value: 'Chery Tiggo 3',
					options: [],
					selected: 'Chery Tiggo 3',
					placeholder: 'Желаемая модель авто'
				},
				namePlaceholder: 'Ваше имя',
				phonePlaceholder: '+7 (000) 000-00-00',
				datePlaceholder: 'Выберите желаемую дату'
			}
		}
	},
	components: {
		vSelect,
		Datepicker
	},
	beforeMount() {
		this.form.car.options = this.$store.state.testdrive.options;
	},
	methods: {
		testdrive() {
			const dateOptions = {
				day: 'numeric',
				weekday: 'long',
				month: 'long',
				year: 'numeric'
			};
			this.$swal(
				'Заявка на тест-драйв отправлена!',
				'С Вами свяжется менеджер, чтобы уточнить детали.',
				'success'
			);
			console.log(
`
Имя: ${this.form.name}
Дата: ${this.form.date.toLocaleString('ru-RU', dateOptions)}
Телефон: ${this.form.phone}
Модель авто: ${this.form.car.value}
`);
			this.form.name = '';
			this.form.date = new Date();
			this.form.phone = '';
			this.form.car.value = ''
		}
	}
}
</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

.testdrive {
	padding: 50px 0;
	&__title {
		text-align: center;
		font-size: 2.75rem
	}
}

.testdrive-form {
	display: flex;
	justify-content: space-between;
	size: 80% auto;
	margin-top: 3rem;
	&__column {
		width: 45%;
		flex-basis: 45%;
		&._flex {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			padding-top: 15px;
		}
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
