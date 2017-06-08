<template lang="html">
	<main id="main" class="main _service">

		<div class="container _flex-column">
			<div class="tabs-container _start _service">
				<router-link v-for = "buttonItem in Buttons" :key = "buttonItem.name"
					tag = "button"
					:to = "{ query: { select: buttonItem.component } }"
					class="tabs-container__button _service"
					type="button"
					ripple-light
					>{{ buttonItem.name }}</router-link>
			</div>
		</div>

		<transition name="fade" mode="out-in">
			<keep-alive>
				<component :is = "$route.query.select"></component>
			</keep-alive>
		</transition>

	</main>
</template>

<script>

	import sRepair from './service/repair';
	import sService from './service/tech-service';

	export default {
		name: 'service',
		components: { sRepair , sService },
		data() {
			return {
				Buttons: [
					{
						name: 'Запчасти и комплектующие',
						component: 'sRepair'
					},
					{
						name: 'Ремонт и техобслуживание',
						component: 'sService'
					}
				]
			}
		},
		mounted() {
			Waves.init();
			Waves.attach('[ripple-dark]', ['waves-dark']);
			Waves.attach('[ripple-light]', ['waves-light']);
		}
	}

</script>

<style lang="scss">

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	.main._service {
		background-image: url('../../static/assets/img/service_intro.jpg');
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
	}

	.tabs-container {
		&._service {
			margin-top: 32px;
		}
		&__button {
			&._service {
				width: auto;
				padding-left: 32px;
				padding-right: 32px;
				margin-right: 32px;
				@include MQ(Pp) {
					width: 80%;
					margin: 0 auto 16px auto;
					padding: 0;
				};
			}
		}
	}

</style>
