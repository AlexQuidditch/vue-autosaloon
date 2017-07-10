<template lang="html">
	<button @click="callTestDrive()"
		class="button-testdrive"
		>Тест-драйв
	</button>
</template>

<script>

    export default {
        name: "button-testdrive",
        methods: {
			callTestDrive() {
				this.$store.commit( 'modalOpen' )
			}
        }
    }

</script>

<style lang="scss">

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

    .button-testdrive {
		$size: 150px 50px;
		@include MDButton( $whited , $red ) {
			z-index: 900;
			position: fixed 50% -50px auto auto;
			size: $size;
			text-align: center;
			outline: none;
			transform: translateY( -50% ) rotate( 90deg );
		}
		transition: .3s ease-in-out;
		@include MQ(Pp) {
			display: none;
		};
    }

</style>
