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
				return this.$state.News.actions
			}
		}
	}
</script>
