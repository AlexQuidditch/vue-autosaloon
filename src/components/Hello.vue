<template lang="html">
	<main id="main" class="main">
		<div class="hello">
			<div class="container_flex-column">
				<h1>{{ msg }}</h1>
				<h2>Essential Links</h2>
				<ul>
					<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
					<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
					<li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
					<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
					<br>
					<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
				</ul>
				<ul>
					<li>
						<router-link to="Main">Main</router-link>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted() {
			Waves.init();
			Waves.attach('[ripple-dark]', ['waves-dark']);
			Waves.attach('[ripple-light]', ['waves-light']);
		}
	}
</script>

<style>

</style>