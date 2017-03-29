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
					<h6	class="tab-auto__list-item-title">
						{{ cheryItem.model }}
					</h6>
					<img
						:src="cheryItem.image"
						alt=""
						class="tab-auto__list-item-image"
					/>
					<p class="tab-auto__list-item-description">
						{{ cheryItem.description }}
					</p>
					<div class="tab-auto__list-item-footer">
						<span class="tab-auto__list-item-price">
							{{ cheryItem.price }} руб.
						</span>
						<router-link
							:to="{ name: cheryItem.route }"
							class="tab-auto__list-item-link"
							ripple-light
							>
							Подробнее
						</router-link>
					</div>
				</li>
				<li	v-for="hawtaiItem in Hawtai"
					class="tab-auto__list-item"
					:key="hawtaiItem">
					<h6	class="tab-auto__list-item-title">
						{{ hawtaiItem.model }}
					</h6>
					<img
						:src="hawtaiItem.image"
						alt=""
						class="tab-auto__list-item-image"
					/>
					<p class="tab-auto__list-item-description">
						{{ hawtaiItem.description }}
					</p>
					<div class="tab-auto__list-item-footer">
						<span class="tab-auto__list-item-price">
							{{ hawtaiItem.price }} руб.
						</span>
						<router-link
							:to="{ name: hawtaiItem.route}"
							class="tab-auto__list-item-link"
							ripple-light
							>
							Подробнее
						</router-link>
					</div>
				</li>
				<li	v-for="changanItem in Changan"
					class="tab-auto__list-item"
					:key="changanItem">
					<h6 class="tab-auto__list-item-title">
						{{ changanItem.model }}
					</h6>
					<img
						:src="changanItem.image"
						alt=""
						class="tab-auto__list-item-image"
					/>
					<p class="tab-auto__list-item-description">
						{{ changanItem.description }}
					</p>
					<div class="tab-auto__list-item-footer">
						<span class="tab-auto__list-item-price">
							{{ changanItem.price }} руб.
						</span>
						<router-link
							:to="{ name: changanItem.route }"
							class="tab-auto__list-item-link"
							ripple-light
							>
							Подробнее
						</router-link>
					</div>
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
			Hawtai: [],
			Changan: []
		}
	},
	beforeMount() {
		this.Chery = this.$store.state.auto.chery;
		this.Hawtai = this.$store.state.auto.hawtai;
		this.Changan = this.$store.state.auto.changan;
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
		@include MDShadow-1;
		&__title {
			font-size: 2.5rem;
			color: $black
		}
		&__list {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			align-items: center;
			width: 100%;
			margin-top: 1rem;
		}
		&__list-item {
			display: flex;
			flex-flow: column wrap;
			size: 365px auto;
			margin: 1rem 0;
			transition: box-shadow .3s ease-in-out;
			@include MDShadow-1;
			&:hover {
				@include MDShadow-2;
			}
		}
		&__list-item-title {
			line-height: 3rem;
		}
		&__list-item-image {}
		&__list-item-description {
			padding: 0 1rem;
		}
		&__list-item-footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 3rem;
		}
		&__list-item-title,
		&__list-item-price {
			font-size: 1.25rem;
			padding-left: 1rem;
		}
		&__list-item-link {
			@include MDButton($white, $red) {
				size: 35% auto;
				text-align: center;
				line-height: 3rem;
				box-shadow: none !important;
			};
		}
	}

</style>
