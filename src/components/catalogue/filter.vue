<template lang="html">
	<section id="tabs" class="tabs">
		<div class="container _flex-column">

			<div class="tabs-container">
				<router-link v-for = "buttonItem in Buttons" :key = "buttonItem.key"
					tag = "button"
					:to = "{ name: 'catalogue' , query: { filter: buttonItem.component } }"
					class="tabs-container__button"
					type="button"
					ripple-light
					>{{ buttonItem.name }}</router-link>
			</div>

			<transition name="fade" mode="out-in">
				<keep-alive>
					<component :is = "$route.query.filter"></component>
				</keep-alive>
			</transition>

		</div>
	</section>
</template>

<script>

	import chery from './filter/chery'
	import changan from './filter/changan'
	import hawtai from './filter/hawtai'
	import all from './filter/all'

	export default {
		name: 'filters',
		components: {
			chery ,	changan , hawtai , all
		},
		data() {
			return {
				Buttons: [
					{
						name: 'Все',
						component: 'all'
					},
					{
						name: 'Chery',
						component: 'chery'
					},
					{
						name: 'Hawtai',
						component: 'hawtai'
					},
					{
						name: 'Changan',
						component: 'changan'
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

	.tabs {
		padding: 50px 0;
	}

	.tabs-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
	    &__button {
	        width: 200px;
	        padding: 10px 0;
	        text-align: center;
	        font-size: 1.3rem;
	        color: $white $red;
			border: none;
	        @include MDShadow-2
	    }
	}

</style>
