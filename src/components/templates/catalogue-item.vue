<template lang="html">
	<router-link :to="{ name: Car.route }" tag="li" v-once
		class="tab-auto__list-item">
		<h6	class="tab-auto__list-item-title">{{ Car.model }}</h6>
		<span v-if="Car.available" class="tab-auto__list-item-available">Наличие</span>
		<img :src="Car.image"
			:alt="Car.model"
			class="tab-auto__list-item-image"
		/>
		<p class="tab-auto__list-item-description">{{ Car.description }}</p>
		<div class="tab-auto__list-item-footer">
			<span class="tab-auto__list-item-price">от {{ Car.price }} руб.</span>
			<button	class="tab-auto__list-item-link waves-effect waves-light"
				>Подробнее
			</button>
		</div>
	</router-link>
</template>

<script>
	export default {
  		name: "catalogue-item",
		props: {
			Car: {
				type: Object,
				required: true
			}
		}
	}
</script>
