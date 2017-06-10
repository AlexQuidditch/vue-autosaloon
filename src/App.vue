<template lang="html">
	<div id="wrapper" class="wrapper">
		<s-header></s-header>
		<transition name="fade-slow" mode="out-in" appear class="main">
			<router-view></router-view>
		</transition>
		<s-footer></s-footer>
		<button-up></button-up>
		<button-call></button-call>
		<overlay></overlay>
	</div>
</template>

<script>

	import sHeader from './components/header';
	import sFooter from './components/footer';
	import buttonUp from './components/button-up';
	import buttonCall from './components/button-call';
	import overlay from './components/overlay';

	export default {
		name: 'app',
		components: { sHeader , sFooter , buttonUp , buttonCall , overlay },
		created() {
			this.$store.dispatch( 'fetchFromServer' , 'Cars' );
			this.$store.dispatch( 'fetchFromServer' , 'Catalogue' );
			this.$store.dispatch( 'fetchFromServer' , 'Filter' );
			this.$store.dispatch( 'fetchFromServer' , 'Service' );
			this.$store.dispatch( 'fetchFromServer' , 'Services' );
			this.$store.dispatch( 'fetchFromServer' , 'TestDrive' );
		}
	}

</script>

<style lang="scss">

	@import "./scss/partials/_layout";
	@import "./scss/partials/_mixins";
	@import "./scss/partials/_variables";

	@import "./scss/layout/resets";

	html {
		font-family: 'Roboto', sans-serif;
	}
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
		@include MQ(Pp) {
			min-height: 100vh;
			margin: 0;
		}
	}
	.container {
		position: relative;
		max-width: $containersWidth;
		size: 100%;
		margin: 0 auto;
		@include MQ(Pp) {
			width: 90%;
		}
		&._wide {
			max-width: $containersWidth + 100px;
			width: 100%;
			@include MQ(Pp) {
				width: 95%;
			}
		}
		&._flex-row {
			display: flex;
			flex-flow: row wrap;
			@include MQ(Pp) {
				flex-flow: column wrap;
			}
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

	// Filters

	.tabs {
		min-height: 100vh;
		padding: 50px 0;
	}

	.tabs-container {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		width: 100%;
		&._start {
			justify-content: flex-start;
		}
	    &__button {
	    	@include MDButton($white , $red) {
				size: 200px 40px;
				line-height: 40px;
	    	};
			@include MQ(Pp) {
				size: 49% 40px;
				margin: 1% 0;
			}
		}
	}

	.ql-editor {
		height: auto !important;
		padding: 0 !important;
	}

</style>
