<template lang="html">
	<div id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Список авто Changan</h3>
		<transition name="fade" mode="out-in">
			<transition-group
				tag="ul"
				name="fade"
				class="tab-auto__list"
				>
				<li	v-for="changanItem in Changan"
					class="tab-auto__list-item"
					:key="changanItem">
					<h6 class="tab-auto__list-item-title">
						{{ changanItem.model }}
					</h6>
					<img
						:src="changanItem.image"
						alt=""
						class="tab-auto__list-item-image"
					/>
					<p class="tab-auto__list-item-description">
						{{ changanItem.description }}
					</p>
					<div class="tab-auto__list-item-footer">
						<span class="tab-auto__list-item-price">
							{{ changanItem.price }} руб.
						</span>
						<router-link
							:to="{ name: changanItem.route }"
							class="tab-auto__list-item-link"
							ripple-light
							>
							Подробнее
						</router-link>
					</div>
				</li>
			</transition-group>
		</transition>
	</div>

</template>

<script>
export default {
	name: 'changan',
	data() {
		return {
			Changan: []
		}
	},
	beforeMount() {
		this.Changan = this.$store.state.auto.changan;
	}
}
</script>

<style lang="scss"></style>
