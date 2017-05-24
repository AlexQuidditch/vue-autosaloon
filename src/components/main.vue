<template lang="html">
	<main v-once id="main" class="main">

		<Intro></Intro>

		<Marks></Marks>

		<Testdrive></Testdrive>

		<Tabs></Tabs>

		<Quill-Editor></Quill-Editor>

	</main>
</template>

<script>

	import Intro from './main/intro';
	import Marks from './main/marks.vue';
	import Tabs from './main/tabs';
	import Testdrive from './main/form-test-drive';
	import QuillEditor from './editor/editor';

	export default {
		name: 'main',
		components: { Intro , Marks , Testdrive , Tabs , QuillEditor },
		mounted() {
			Waves.init();
			Waves.attach('[ripple-dark]', ['waves-dark']);
			Waves.attach('[ripple-light]', ['waves-light']);
		}
	}

</script>
