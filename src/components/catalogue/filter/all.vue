<template lang="html">
	<div id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Список авто всех производителей</h3>
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
				<li	v-for="toyotaItem in Toyota"
					class="tab-auto__list-item"
					:key="toyotaItem">
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
				<li	v-for="nissanItem in Nissan"
					class="tab-auto__list-item"
					:key="nissanItem">
					<h6
						class="tab-auto__list-item-title"
						>{{ nissanItem.model }}
					</h6>
					<img
						:src="nissanItem.image"
						alt=""
						class="tab-auto__list-item-image">
						<p
						class="tab-auto__list-item-price"
						>{{ nissanItem.price }} руб.
					</p>
				</li>
			</transition-group>
		</transition>
	</div>

</template>

<script>
export default {
	name: 'all',
	data() {
		return {
			Chery: [],
			Toyota: [],
			Nissan: []
		}
	},
	beforeMount() {
		this.Chery = this.$store.state.auto.chery;
		this.Toyota = this.$store.state.auto.toyota;
		this.Nissan = this.$store.state.auto.nissan;
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
			margin: 1rem 0;
			@include MDShadow-2;
		}
	}

</style>
