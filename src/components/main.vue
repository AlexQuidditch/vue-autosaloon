<template lang="html">

	<main v-once id="main" class="main _margin-none">

		<Intro/>

		<Testdrive/>

		<Tabs/>

		<Quill-Editor/>

	</main>

</template>

<script>

	import Intro from './main/intro'
	import Tabs from './main/tabs'
	import Testdrive from './main/form-test-drive';
	import QuillEditor from './editor/editor';

	export default {
		name: 'main',
		components: {
			Intro , Testdrive , Tabs , QuillEditor
	  },
		mounted() {
			Waves.init();
			Waves.attach('[ripple-dark]', ['waves-dark']);
			Waves.attach('[ripple-light]', ['waves-light']);
		}
	}

</script>
