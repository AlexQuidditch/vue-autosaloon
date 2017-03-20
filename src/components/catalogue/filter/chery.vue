<template lang="html">
	<div id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Список авто Chery</h3>
		<transition name="fade" mode="out-in">
			<transition-group
				tag="ul"
				name="fade"
				class="tab-auto__list"
				>
				<li	v-for="cheryItem in Chery"
					class="tab-auto__list-item"
					:key="cheryItem"
					>
					<h6
						class="tab-auto__list-item-title"
						>{{ cheryItem.model }}
					</h6>
					<img
						:src="cheryItem.image"
						alt=""
						class="tab-auto__list-item-image">
					<p
						class="tab-auto__list-item-price"
						>{{ cheryItem.price }} руб.
					</p>
				</li>
			</transition-group>
		</transition>
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
	beforeMount() {
		this.Chery = this.$store.state.auto.chery;
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
			size: 350px auto;
			@include MDShadow-2;
		}
	}

</style>
