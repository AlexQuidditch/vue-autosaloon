<template lang="html">
	<div class="tab-content">
		<h3 class="tab-content__title">{{ title }}</h3>
		<ul class="tab-content__list">
			<li
				v-for="promoItem in Promo"
				:key="promoItem.key"
				class="tab-content__item"
				>
				<h6 class="tab-content__item-title">
					{{ promoItem.title }}
				</h6>
				<p class="tab-content__item-description">
					{{ promoItem.description }}
				</p>
				<router-link
					:to=" { name: promoItem.route } "
					class="tab-content__item-link"
					>
					Подробнее
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'tab-promo',
	data() {
		return {
			title: 'Промо и акции',
			Promo: []
		}
	},
	beforeMount() {
		this.Promo = this.$store.state.news.actions
	}
}
</script>

<style lang="scss">

@import "../../../scss/partials/_layout";
@import "../../../scss/partials/_mixins";
@import "../../../scss/partials/_variables";

</style>
