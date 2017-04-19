<template lang="html">
	<section id="tabs" class="tabs">
		<div class="container _flex-column">

			<div class="tabs-container">
				<button
					v-for = "buttonItem in Buttons"
					:key = "buttonItem.key"
					@click = "toggleComponent(buttonItem.component)"
					class="tabs-container__button"
					type="button"
					ripple-light
					>
					{{ buttonItem.name }}
				</button>
			</div>

			<div class="tabs-container">
				<transition name="fade" mode="out-in">
					<keep-alive>
						<component :is = "selectedComponent"></component>
					</keep-alive>
				</transition>
			</div>

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
		chery,
		changan,
		hawtai,
		all
	},
	data() {
		return {
			selectedComponent: this.$route.query.filter,
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
	},
	methods: {
		toggleComponent(component) {
			this.selectedComponent = component
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
        @include MDShadow-2;
		&._active {
			background-color: blue
		}
    }
}
</style>
