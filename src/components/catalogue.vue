<template lang="html">
	<main id="main" class="main">
		<!-- <Intro/> -->
		<Filters/>
	</main>
</template>

<script>

import Intro from './catalogue//intro'
import Filters from './catalogue//filter'

export default {
	name: 'catalogue',
	components: {
		Intro,
		Filters
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
