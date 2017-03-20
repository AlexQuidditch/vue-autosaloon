<template>
	<div id="wrapper" class="wrapper">
		<Heads/>
		<transition name="fade-slow" mode="out-in" appear>
			<router-view></router-view>
		</transition>
		<Foots/>
	</div>
</template>

<script>

	import Heads from './components/header'
	import Foots from './components/footer'

	export default {
		name: 'app',
		components: {
			Heads,
			Foots
		},
		// beforeCreate() {
		// 	// this.$store.commit('hello'); // зовём мутацию
		// 	this.$store.dispatch('hello'); // зовём действие
		// }
	}
</script>

<style lang="scss">

	@import "./scss/partials/_layout";
	@import "./scss/partials/_mixins";
	@import "./scss/partials/_variables";

	@import "./scss/layout/resets";

	.wrapper {
		@include font-smoothing;
		color: $black;
	}

	.main {
		min-height: calc(100vh - 400px);
	}

	.container {
		width: 100%;
		max-width: $containersWidth;
		margin: auto;
	}

	.container_flex-row {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: $containersWidth;
		height: 100%;
		margin: 0 auto;
	}

	.container_flex-column {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: $containersWidth;
		height: 100%;
		margin: 0 auto;
	}

	button {
		cursor: pointer;
	}

	@include waves-light( $whited, $ripple-opacity);
	@include waves-dark( $red, $ripple-opacity);

	.fade-slow-enter-active,
	.fade-slow-leave-active {
		transition: opacity .85s ease
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .3s ease-in-out
	}

	.fade-slow-enter,
	.fade-slow-leave-to {
		opacity: 0
	}
</style>
