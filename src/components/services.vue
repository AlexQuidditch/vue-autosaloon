<template lang="html">
	<main id="main" class="main _services">

		<div class="container _flex-column">
			<div class="tabs-container _start _services">
				<router-link v-for = "buttonItem in Buttons" :key = "buttonItem.name"
					tag = "button"
					:to = "{ query: { select: buttonItem.component } }"
					class="tabs-container__button _services waves-effect waves-light"
					type="button"
					>{{ buttonItem.name }}
				</router-link>
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

	import credit from './services/credit';

	export default {
		name: 'services',
		components: { credit },
		data() {
			return {
				Buttons: [
					{
						name: 'Автокредитование',
						component: 'credit'
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

	.main._services {
		background-image: url('../../static/assets/img/service_intro.jpg');
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
	}

	.tabs-container {
		&._services {
			margin-top: 32px;

		}
		&__button {
			&._services {
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
