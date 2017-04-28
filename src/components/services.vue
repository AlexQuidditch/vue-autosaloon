<template lang="html">
	<main id="main" class="main">
		<section class="services">
			<h2 class="services__title">{{ title }}</h2>
		</section>
		<s-repair></s-repair>
		<s-service></s-service>
	</main>
</template>

<script>

	import sRepair from './services/repair';
	import sService from './services/tech-service';

	export default {
		name: 'services',
		components: {
			sRepair , sService
		},
		data() {
			return {
				title: 'Услуги'
			}
		}
	}
</script>

<style lang="scss">
	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	.services {
		padding: 60px 0;
		&__title {
			width: 100%;
			text-align: center;
			font-size: 3rem;
		}
	}
</style>
