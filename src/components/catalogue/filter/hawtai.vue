<template lang="html">
	<section id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Модельный ряд Hawtai</h3>
		<transition name="fade" mode="out-in">
			<transition-group
				tag="ul"
				name="fade"
				class="tab-auto__list"
				>
				<catalogue-item	v-for = "hawtaiItem in Hawtai" :key = "hawtaiItem.model"
					:model = "hawtaiItem.model"
					:image = "hawtaiItem.image"
					:description = "hawtaiItem.description"
					:price = "hawtaiItem.price"
					:route = "hawtaiItem.route"
					>
				</catalogue-item>
			</transition-group>
		</transition>
	</section>

</template>

<script>

	import catalogueItem from '../../templates/catalogue-item';

	export default {
		name: 'hawtai',
		components: { catalogueItem },
		computed: {
			Hawtai() {
				return this.$store.state.Catalogue.hawtai
			}
		}
	}

</script>
