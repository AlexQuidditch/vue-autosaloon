<template lang="html">
	<section id="marks" class="marks">
		<h2 class="marks__title">{{ title }}</h2>
		<ul class="container _flex-row _j-between _a-center">
			<mark-item v-for="markItem in Marks" :key="markItem.name"
				:name = "markItem.name"
				:picture = "markItem.picture"
				:route = "markItem.route"
				>
			</mark-item>
		</ul>
	</section>
</template>

<script>

	import markItem from '../templates/mark-item';

	export default {
		name: "marks",
		components: { markItem },
		data() {
			return {
				title: 'Мы предлагаем авто следующих производителей:',
				Marks: [
					{
						name: 'Chery',
						picture: '../../../static/assets/img/marks/chery-logo.png',
						route: 'chery'
					},
					{
						name: 'Changan',
						picture: '../../../static/assets/img/marks/changan-logo.svg',
						route: 'changan'
					},
					{
						name: 'Hawtai',
						picture: '../../../static/assets/img/marks/hawtai-logo.png',
						route: 'hawtai'
					}
				]
			}
		}
	}

</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.marks {
		padding: 50px 0;
		&__title {
			margin-bottom: 2rem;
			text-align: center;
			font-size: 2rem;
		}
		.container {
			min-height: 50vh;
		}
	}

</style>
