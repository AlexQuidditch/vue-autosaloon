<template lang="html">
	<div id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Список авто Chery</h3>
	</div>

</template>

<script>
export default {
	name: 'chery',
	data() {
		return {
			Chery: []
		}
	},
	 beforeCreate() {
	 	this.$http.get('chery.json')
			.then(response => {
				return response.json();
			})
			.then(data => {
				 const cheryData = [];
				 for (let key in data) {
				 	cheryData.push(data[key]);
				 }
				 this.Chery = cheryData;
			});
   	}
}
</script>

<style lang="scss">

@import "../../../scss/partials/_layout";
@import "../../../scss/partials/_mixins";
@import "../../../scss/partials/_variables";

	.tab-auto {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		size: 100% auto;
		padding: 20px;
		margin: 30px 0;
		background-color: $white;
		@include MDShadow-2;
		&__title {
			font-size: 2rem;
			color: $black
		}
		&__list {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			align-items: center;
			width: 100%;
		}
		&__list-item {
			size: 300px 200px;
			@include MDShadow-2;
		}
	}

</style>
