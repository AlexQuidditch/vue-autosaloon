<template lang="html">
	<section id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Модельный ряд всех производителей</h3>
		<transition name="fade" mode="out-in">
			<transition-group tag="ul"
				class="tab-auto__list"
				>
				<catalogue-item	v-for = "cheryItem in Chery"
					:key = "cheryItem.model"
					:Car = "cheryItem"
					>
				</catalogue-item>
				<catalogue-item	v-for = "hawtaiItem in Hawtai"
					:key = "hawtaiItem.model"
					:Car = "hawtaiItem"
					>
				</catalogue-item>
				<catalogue-item	v-for = "changanItem in Changan"
					:key = "changanItem.model"
					:Car = "changanItem"
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
				return this.$store.state.content.Catalogue.chery
			},
			Hawtai() {
				return this.$store.state.content.Catalogue.hawtai
			},
			Changan() {
				return this.$store.state.content.Catalogue.changan
			}
		}
	}
</script>
