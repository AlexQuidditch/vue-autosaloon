<template lang="html">
	<div id="marks" class="tab-marks">
		<h3 class="tab-marks__title">Марки</h3>
	</div>
</template>

<script>
export default {
	name: 'marks'
}
</script>

<style lang="scss">

@import "../../../scss/partials/_layout";
@import "../../../scss/partials/_mixins";
@import "../../../scss/partials/_variables";

	.tab-marks {
		display: flex;
		justify-content: center;
		align-items: center;
		size: 100% 400px;
		padding: 20px;
		margin: 30px 0;
		background-color: $white;
		@include MDShadow-2;
		&__title {
			font-size: 2rem;
			color: $black
		}
	}

</style>
