<template lang="html">
	<div id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Список авто Toyota</h3>
		<transition name="fade" mode="out-in">
			<div v-if="loaded" class="tab-auto__loader"></div>
			<transition-group
				tag="ul"
				name="fade"
				v-else="!loaded"
				class="tab-auto__list"
				>
				<li	v-for="toyotaItem in Toyota"
					class="tab-auto__list-item"
					:key="toyotaItem"
					>
					<h6
						class="tab-auto__list-item-title"
						>{{ toyotaItem.model }}
					</h6>
					<img
						:src="toyotaItem.image"
						alt=""
						class="tab-auto__list-item-image">
					<p
						class="tab-auto__list-item-price"
						>{{ toyotaItem.price }} руб.
					</p>
				</li>
			</transition-group>
		</transition>
	</div>

</template>

<script>
export default {
	name: 'toyota',
	data() {
		return {
			Toyota: [],
			loaded: !0
		}
	},
	 beforeCreate() {
	 	this.$http.get('toyota.json')
			.then(response => {
				return response.json();
			})
			.then(data => {
				 const ToyotaData = [];
				 for (let key in data) {
				 	ToyotaData.push(data[key]);
					console.log(`Proceed ${key}`);
				 }
				 this.Toyota = ToyotaData;
				 this.loaded = 0;
				 console.log('is fine');
			});
   	}
}
</script>

<style lang="scss">

@import "../../../scss/partials/_layout";
@import "../../../scss/partials/_mixins";
@import "../../../scss/partials/_variables";
@import "../../../scss/SpinThatShit/loaders";

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
		&__loader {
			@include loader12;
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
