<template lang="html">
	<section id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Модельный ряд Chery</h3>
		<transition name="fade" mode="out-in">
			<transition-group
				tag="ul"
				name="fade"
				class="tab-auto__list"
				>
				<catalogue-item	v-for = "cheryItem in Chery" :key = "cheryItem.model"
					:model = "cheryItem.model"
					:image = "cheryItem.image"
					:description = "cheryItem.description"
					:price = "cheryItem.price"
					:route = "cheryItem.route"
					>
				</catalogue-item>
			</transition-group>
		</transition>
	</section>

</template>

<script>

	import catalogueItem from '../../templates/catalogue-item';

	export default {
		name: 'chery',
		components: { catalogueItem },
		computed: {
			Chery() {
				return this.$store.state.Catalogue.chery
			}
		}
	}
</script>
