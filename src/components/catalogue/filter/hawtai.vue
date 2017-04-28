<template lang="html">
	<div id="auto" class="tab-auto">
		<h3 class="tab-auto__title">Список авто Hawtai</h3>
		<transition name="fade" mode="out-in">
			<transition-group
				tag="ul"
				name="fade"
				class="tab-auto__list"
				>
				<li	v-for="hawtaiItem in Hawtai"
					class="tab-auto__list-item"
					:key="hawtaiItem">
					<h6	class="tab-auto__list-item-title">
						{{ hawtaiItem.model }}
					</h6>
					<img
						:src="hawtaiItem.image"
						alt=""
						class="tab-auto__list-item-image"
					/>
					<p class="tab-auto__list-item-description">
						{{ hawtaiItem.description }}
					</p>
					<div class="tab-auto__list-item-footer">
						<span class="tab-auto__list-item-price">
							{{ hawtaiItem.price }} руб.
						</span>
						<router-link
							:to="{ name: hawtaiItem.route}"
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
	name: 'hawtai',
	data() {
		return {
			Hawtai: []
		}
	},
	 beforeMount() {
		 this.Hawtai = this.$auto.hawtai;
	 }
}
</script>
