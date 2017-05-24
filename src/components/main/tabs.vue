<template lang="html">
	<section class="tabs">
		<div class="container _flex-column _j-between">
			<h2 class="tabs__title">Новое в автосалоне</h2>
			<nav class="tabs-container">
				<button v-for = "buttonItem in Buttons"
					@click = "toggleComponent(buttonItem)"
					class="tabs-container__button"
					ripple-light
					>{{ buttonItem.name }}</button>
			</nav>

			<transition name="fade" mode="out-in">
				<keep-alive>
					<component :is = "isSelected"></component>
				</keep-alive>
			</transition>

		</div>
	</section>
</template>

<script>

	import Auto from './news/auto'
	import Marks from './news/marks'
	import News from './news/news'
	import Promo from './news/promo'

	export default {
		name: 'tabs',
		components: { Auto , Marks , News , Promo },
		data() {
			return {
				Buttons: [
					{
						name: 'Новости',
						component: 'news'
					},
					{
						name: 'Акции',
						component: 'promo'
					}
				],
				isSelected: 'promo'
			}
		},
		methods: {
			toggleComponent(buttonItem) {
				this.isSelected = buttonItem.component;
			}
		}
	}
</script>

<style lang="scss" scoped>

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.tabs {
		padding: 50px 0;
		&__title {
			margin-bottom: 2rem;
			text-align: center;
			font-size: 3rem;
			line-height: 1.5;
		}
	}

	.tabs-container {
		display: flex;
		justify-content: flex-start;
	    &__button {
	        @include MDButton($white, $red) {
	            size: 200px auto;
				margin-right: 2rem;
				padding: 0;
	            line-height: 3rem;
	        };
	    }
	}

</style>
