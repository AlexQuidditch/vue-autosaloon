<template lang="html">
	<div id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Автомобили</h3>
	</div>

</template>

<script>
export default {
	name: 'auto'
}
</script>

<style lang="scss">

@import "../../../scss/partials/_layout";
@import "../../../scss/partials/_mixins";
@import "../../../scss/partials/_variables";

	.tab-auto {
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
