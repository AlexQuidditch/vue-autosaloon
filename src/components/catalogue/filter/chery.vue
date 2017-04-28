<template lang="html">
	<div id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Список авто Chery</h3>
		<transition name="fade" mode="out-in">
			<transition-group
				tag="ul"
				name="fade"
				class="tab-auto__list"
				>
				<li	v-for="cheryItem in Chery"
					class="tab-auto__list-item"
					:key="cheryItem"
					>
					<h6	class="tab-auto__list-item-title">
						{{ cheryItem.model }}
					</h6>
					<img
						:src="cheryItem.image"
						alt=""
						class="tab-auto__list-item-image"
					/>
					<p class="tab-auto__list-item-description">
						{{ cheryItem.description }}
					</p>
					<div class="tab-auto__list-item-footer">
						<span class="tab-auto__list-item-price">
							{{ cheryItem.price }} руб.
						</span>
						<router-link
							:to="{ name: cheryItem.route }"
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
	name: 'chery',
	data() {
		return {
			Chery: []
		}
	},
	beforeMount() {
		this.Chery = this.$auto.chery;
	}
}
</script>
