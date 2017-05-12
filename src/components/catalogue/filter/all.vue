<template lang="html">
	<section id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Модельный ряд всех производителей</h3>
		<transition name="fade" mode="out-in">
			<transition-group
				tag="ul"
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
				<catalogue-item	v-for = "hawtaiItem in Hawtai" :key = "hawtaiItem.model"
					:model = "hawtaiItem.model"
					:image = "hawtaiItem.image"
					:description = "hawtaiItem.description"
					:price = "hawtaiItem.price"
					:route = "hawtaiItem.route"
					>
				</catalogue-item>
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
		name: 'all',
		components: { catalogueItem },
		computed: {
			Chery() {
				return this.$store.state.Autolist.chery
			},
			Hawtai() {
				return this.$store.state.Autolist.hawtai
			},
			Changan() {
				return this.$store.state.Autolist.changan
			}
		}
	}
</script>
