<template lang="html">
	<div id="news" class="tab-news">
		<h3 class="tab-news__title">Новости</h3>
	</div>
</template>

<script>
export default {
	name: 'tab-news'
}
</script>

<style lang="scss">

@import "../../../scss/partials/_layout";
@import "../../../scss/partials/_mixins";
@import "../../../scss/partials/_variables";

	.tab-news {
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
