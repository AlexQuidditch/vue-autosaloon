<template lang="html">
	<div id="wrapper" class="wrapper">
		<s-header></s-header>
		<transition name="fade-slow" mode="out-in" appear class="main">
			<router-view></router-view>
		</transition>
		<s-footer></s-footer>
		<button-up></button-up>
		<overlay></overlay>
	</div>
</template>

<script>

	import sHeader from './components/header';
	import sFooter from './components/footer';
	import buttonUp from './components/button-up';
	import overlay from './components/overlay';

	export default {
		name: 'app',
		components: { sHeader , sFooter , buttonUp , overlay }
	}

</script>

<style lang="scss">

	@import "./scss/partials/_layout";
	@import "./scss/partials/_mixins";
	@import "./scss/partials/_variables";

	@import "./scss/layout/resets";

	html , body {
		size: 100%;
		background-color: $whited;
		touch-action: manipulation;
		-webkit-tap-highlight-color: transparent;
	}
	.wrapper {
		@include font-smoothing;
		color: $black;
	}
	.main {
		min-height: calc(100vh - 400px);
		margin-top: $headerHeight;
		&._margin-none {
			margin-top: 0;
		}
	}
	.container {
		width: $containersWidth;
		height: 100%;
		margin: 0 auto;
		&._wide {
			width: $containersWidth + 100px
		}
		&._flex-row {
			display: flex;
			flex-flow: row wrap;
		}
		&._flex-column {
			display: flex;
			flex-flow: column wrap;
		}
		&._flex-row,
		&._flex-column {
			&._j-start {
				justify-content: flex-start;
			}
			&._j-center {
				justify-content: center;
			}
			&._j-end {
				justify-content: flex-end;
			}
			&._j-around {
				justify-content: space-around;
			}
			&._j-between {
				justify-content: space-between;
			}
			&._a-start {
				align-items: flex-start;
			}
			&._a-center {
				align-items: center;
			}
			&._a-end {
				align-items: flex-end;
			}
		}
	}

	button {
		cursor: pointer;
	}

	@include waves-light( $whited, $ripple-opacity);
	@include waves-dark( $red, $ripple-opacity);

	.fade-enter,
	.fade-leave-to {
		opacity: 0
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .3s ease-in-out
	}

	.fade-slow-enter-active,
	.fade-slow-leave-active {
		transition: opacity .85s ease
	}
	.fade-slow-enter,
	.fade-slow-leave-to {
		opacity: 0
	}

	.fade-fast-enter,
	.fade-fast-leave-to {
		opacity: 0
	}
	.fade-fast-enter-active,
	.fade-fast-leave-active {
		transition: opacity .15s ease-in-out
	}

</style>
