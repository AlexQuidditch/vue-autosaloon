<template lang="html">
	<section class="tabs">
		<div class="container _flex-row _j-between">

			<div class="tabs-container">
				<a v-for = "buttonItem in Buttons"
					@click = "toggleComponent(buttonItem)"
					class="tabs-container__button"
					ripple-light
					>{{ buttonItem.name }}</a>
			</div>

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
		components: {
			Auto,
			Marks,
			News,
			Promo
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
	.container_flex-row {
		align-items: flex-start;
	}
}

.tabs-container {
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-start;
	width: 20%;
	padding: 25px 0;
    &__button {
        width: 100%;
        padding: 10px 0;
		margin: 5px 0;
        text-align: center;
        font-size: 1.3rem;
        color: $white $red;
		border: none;
        @include MDShadow-2;
		&._active {
			background-color: blue
		}
    }
}

</style>
