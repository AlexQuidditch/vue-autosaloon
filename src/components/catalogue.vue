<template lang="html">
	<main id="main" class="main _margin">
		<Filters/>
	</main>
</template>

<script>

import Filters from './catalogue//filter'

export default {
	name: 'catalogue',
	components: {
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
