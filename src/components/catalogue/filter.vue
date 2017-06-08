<template lang="html">
	<section id="tabs" class="tabs">
		<div class="container _flex-column">

			<div class="tabs-container">
				<router-link v-for = "buttonItem in Buttons" :key = "buttonItem.name"
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
		components: { chery , changan , hawtai , all },
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
