<template lang="html">
	<div class="tab-content">
		<h3 class="tab-content__title">{{ title }}</h3>
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
		data() {
			return {
				title: 'Новости'
			}
		},
		computed: {
			News() {
				return this.$store.state.News.news
			}
		}
	}

</script>
