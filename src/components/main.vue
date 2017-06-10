<template lang="html">
	<main v-once id="main" class="main">

		<intro></intro>

		<marks></marks>

		<test-drive></test-drive>

		<about></about>

	</main>
</template>

<script>

	import Intro from './main/intro';
	import Marks from './main/marks.vue';
	import TestDrive from './main/form-test-drive';
	import About from './main/about';

	export default {
		name: 'main',
		components: { Intro , Marks , TestDrive , About },
		mounted() {
			Waves.init();
			Waves.attach('[ripple-dark]', ['waves-dark']);
			Waves.attach('[ripple-light]', ['waves-light']);
		}
	}

</script>
