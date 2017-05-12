<template lang="html">
	<main v-once id="main" class="main">
		<s-service></s-service>
		<s-repair></s-repair>
	</main>
</template>

<script>

	import sRepair from './services/repair';
	import sService from './services/tech-service';

	export default {
		name: 'services',
		components: { sRepair , sService }
	}

</script>

<style lang="scss">

	.services {
		padding: 60px 0;
	}

</style>
