<template lang="html">
	<div id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Список авто Hawtai</h3>
		<transition name="fade" mode="out-in">
			<transition-group
				tag="ul"
				name="fade"
				class="tab-auto__list"
				>
				<li	v-for="hawtaiItem in Hawtai"
					class="tab-auto__list-item"
					:key="hawtaiItem"
					>
					<h6
						class="tab-auto__list-item-title"
						>{{ hawtaiItem.model }}
					</h6>
					<img
						:src="hawtaiItem.image"
						alt=""
						class="tab-auto__list-item-image">
					<p
						class="tab-auto__list-item-price"
						>{{ hawtaiItem.price }} руб.
					</p>
				</li>
			</transition-group>
		</transition>
	</div>

</template>

<script>
export default {
	name: 'hawtai',
	data() {
		return {
			Hawtai: []
		}
	},
	 beforeMount() {
		 this.Hawtai = this.$store.state.auto.toyota;
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
