<template lang="html">
	<section id="tabs" class="tabs">
		<div class="container_flex-column">
			
			<div class="tabs-container">
				<button
					v-for="buttonItem in Buttons"
					@click="toggleComponent(buttonItem)"
					class="tabs-container__button"
					ripple-light
					>
					{{ buttonItem.name }}
				</button>
			</div>

			<div class="tabs-container">
				<transition name="fade" mode="out-in">
					<keep-alive>
						<component :is="isSelected"></component>
					</keep-alive>
				</transition>
			</div>

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
			Buttons: [{
					name: 'Автомобили',
					component: 'auto',
					isActive: 0
				},
				{
					name: 'Марки',
					component: 'marks',
					isActive: 0
				},
				{
					name: 'Новости',
					component: 'news',
					isActive: 0
				},
				{
					name: 'Акции',
					component: 'promo',
					isActive: 0
				}
			],
			isSelected: 'Auto'
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
	width: 80%;
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
