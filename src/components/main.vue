<template lang="html">
	
	<main id="main" class="main">
		
		<intro/>
	
		<Tabs/>
		
	</main>

</template>

<script>
import Intro from './main/intro'
import Tabs from './main/tabs'

export default {
	name: 'main',
	components: {
		Intro,
		Tabs
  },
	mounted() {
		Waves.init();
		Waves.attach('[ripple-dark]', ['waves-dark']);
		Waves.attach('[ripple-light]', ['waves-light']);
	}
}
</script>

<style lang="scss">

@import "../scss/partials/_layout";
@import "../scss/partials/_mixins";
@import "../scss/partials/_variables";

</style>
