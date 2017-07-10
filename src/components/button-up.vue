<template lang="html">
	<nav id="bottom-nav" class="bottom-nav">
		<button @click="stepBack()" class="button-up _back" type="button" ripple-light >
			<i class="button-up__icon material-icons">arrow_back</i>
		</button>
		<button	v-scroll-to="{
				el: 'body',
				offset: 0,
				duration: 950
			}"
			class="button-up" type="button" ripple-light >
	  	   	<i class="button-up__icon material-icons">arrow_upward</i>
		</button>
	</nav>
</template>

<script>
	export default {
  		name: "button-up",
      	data() {
			return { isVisible: false }
      	},
		created() {
			window.onscroll = () => {
				const bottomNav = document.getElementById('bottom-nav');
				let scrolled = window.pageYOffset || document.documentElement.scrollTop;
				if (scrolled > 350) {
					bottomNav.classList.add('_visible')
				} else {
					bottomNav.classList.remove('_visible')
				}
			};
		},
		methods: {
			stepBack() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="scss">

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	.bottom-nav {
		position: fixed auto 0 0 auto;
		display: flex;
		justify-content: space-between;
		transform: translateY( 100% );
		transition: transform .6s ease-in-out;
		&._visible {
			transform: translateY(0);
		}
		@include MQ(Pp) {
			width: 100%;
		};
	}

	.button-up {
		$size: 75px;
		@include MDButton( $whited , $red ) {
			z-index: 900;
			size: $size;
			margin: 2vh;
		}
		@include MDShadow-3;
		&:active {
			@include MDShadow-4;
		}
		&__icon {
			font-size: $size / 1.25;
		}
		&._back {
			opacity: 0;
			visibility: hidden;
			@include MQ(Pp) {
				opacity: 1;
				visibility: visible;
			};
		}
		@include MQ(Pp) {
			margin: 18px;
		}
	}

</style>
