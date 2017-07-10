<template lang="html">
	<section id="about" class="about">
		<div class="container">
			<h2 class="about__title">{{ About.title }}</h2>
			<div v-html="content" class="about__content html ql-editor"></div>
		</div>
	</section>
</template>

<script>

	export default {
		name: "about",
		data() {
			return {
				About: {
					title: 'Об автосалоне:'
				}
			}
		},
		computed: {
			content() {
				return this.$store.state.content.MainPage.description
			}
		},
	};

</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.about {
		padding: 50px 0;
		&__title {
			margin-bottom: 2rem;
			text-align: center;
			font-size: 2rem;
		}
	}

</style>
