<template lang="html">
	<section id="tabs" class="tabs">
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
				isSelected: 'news'
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
			@include MQ(Pp) {
				font-size: 2rem;
			}
		}
	}

	.tabs-container {
		display: flex;
		justify-content: flex-start;
		@include MQ(Pp) {
			justify-content: space-around;
		}
	    &__button {
	        @include MDButton($white, $red) {
	            size: 200px auto;
				margin-right: 2rem;
				padding: 0;
	            line-height: 3rem;
	        };
			@include MQ(Pp) {
				width: 45%;
				margin: 0;
			}
	    }
	}

</style>
