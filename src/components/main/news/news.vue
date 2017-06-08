<template lang="html">
	<div class="tab-content">
		<ul class="tab-content__list">
			<li	v-for="newsItem in News" :key="newsItem.key"
				class="tab-content__item"
				>
				<h6 class="tab-content__item-title">{{ newsItem.title }}</h6>
				<p class="tab-content__item-description">{{ newsItem.description }}</p>
				<router-link :to=" { name: newsItem.route } "
					class="tab-content__item-link"
					>Подробнее</router-link>
			</li>
		</ul>
	</div>
</template>

<script>

	export default {
		name: 'tab-news',
		computed: {
			News() {
				return this.$state.News.news
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
