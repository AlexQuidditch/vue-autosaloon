<template lang="html">
	<div id="overlay" :class = "{ '_visible' : isVisible }" class="overlay">
  	   	<modal-testdrive></modal-testdrive>
	</div>
</template>

<script>

	import modalTestdrive from './overlay/modal-testdrive.vue';

	export default {
  		name: "overlay",
		components: { modalTestdrive },
      	computed: {
      		isVisible() {
      			return this.$state.TestDrive.isOpened
      		}
      	},
		created() {
			window.addEventListener( 'keyup' , (e) => {
				e.preventDefault;
				if ( e.keyCode === 27 && this.$store.state.TestDrive.isOpened === true ) {
					this.$store.dispatch('modalClose');
				}
			})
		}
	}
</script>

<style lang="scss">

	@import "../scss/partials/_variables";

	.overlay {
		z-index: 999;
		opacity: 0;
		visibility: hidden;
		position: fixed 0 auto auto 0;
		size: 100%;
		background-color: rgba( $black , .65 );
		transition: opacity .3s ease-in-out .3s, visibility .3s ease-in-out .3s;
		will-change: opacity , visibility;
		&._visible {
			opacity: 1;
			visibility: visible;
		}
	}

</style>
