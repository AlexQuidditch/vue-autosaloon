<template lang="html">
	<section id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Модельный ряд Changan</h3>
		<transition name="fade" mode="out-in">
			<transition-group
				tag="ul"
				name="fade"
				class="tab-auto__list"
				>
				<catalogue-item	v-for = "changanItem in Changan" :key = "changanItem.model"
					:model = "changanItem.model"
					:image = "changanItem.image"
					:description = "changanItem.description"
					:price = "changanItem.price"
					:route = "changanItem.route"
					>
				</catalogue-item>
			</transition-group>
		</transition>
	</section>

</template>

<script>

	import catalogueItem from '../../templates/catalogue-item';

	export default {
		name: 'changan',
		components: { catalogueItem },
		computed: {
			Changan() {
				return this.$store.state.Catalogue.changan
			}
		}
	}

</script>
