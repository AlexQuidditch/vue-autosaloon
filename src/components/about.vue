<template lang="html">
	<main id="main" class="main">
		<section>
			<h2>About</h2>
		</section>
	</main>
</template>

<script>
	export default {
		name: 'about',
		mounted() {
			Waves.init();
			Waves.attach('[ripple-dark]', ['waves-dark']);
			Waves.attach('[ripple-light]', ['waves-light']);
		}
	}
</script>

<style lang="scss">

</style>