<template lang="html">
	<div class="tab-content">
		<ul class="tab-content__list">
			<li	v-for="promoItem in Promo" :key="promoItem.key"
				class="tab-content__item"
				>
				<h6 class="tab-content__item-title">{{ promoItem.title }}</h6>
				<p class="tab-content__item-description">{{ promoItem.description }}</p>
				<router-link :to=" { name: promoItem.route } "
					class="tab-content__item-link"
					ripple-light
					>Подробнее</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'tab-promo',
		computed: {
			Promo() {
				return this.$store.state.News.actions
			}
		}
	}
</script>

<style lang="scss">

	@import "../../../scss/partials/_layout";
	@import "../../../scss/partials/_mixins";
	@import "../../../scss/partials/_variables";

	.tab-content {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		padding: 20px;
		margin: 20px 0;
		background-color: $white;
		@include MDShadow-1;
		&__list {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			align-items: center;
			width: 100%;
		}
		&__item {
			display: flex;
			flex-flow: column wrap;
			size: 325px auto;
			margin: 1rem 0;
			background-color: $whited;
			transition: box-shadow .3s ease-in-out;
			@include MDShadow-1;
			&:hover {
				@include MDShadow-2;
			}
		}
		&__item-title {
			padding: 1rem;
			padding-bottom: 0;
			font-size: 1.25rem;
		}
		&__item-description {
			padding: 0 1rem;
		}
		&__item-link {
			@include MDButton($white, $red) {
				align-self: flex-end;
				size: 35% auto;
				text-align: center;
				line-height: 3rem;
				box-shadow: none !important;
			};
		}
	}

</style>
