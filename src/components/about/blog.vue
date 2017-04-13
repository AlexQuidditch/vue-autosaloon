<template lang="html">
	<main id="main" class="main">
		<div class="container">
			<transition-group name="fade">
				<section
					v-for = "blogItem in Blogs" :key="blogItem"
					class="blog"
					>
					<h2 class="blog__title">{{ blogItem.title }}</h2>
					<h3>{{ blogItem.time }}</h3>
					<div v-html = "blogItem.content" class="blog__content html ql-editor"></div>
				</section>
			</transition-group>
		</div>
	</main>
</template>

<script>

	export default {
  		name: "blog",
      	data() {
			return {
				Blogs: []
			}
      	},
		created() {
			this.$http.get('posts.json')
				.then(response => {
					return response.json();
				})
				.then(data => {
					const getData = [];
					for (let key in data) {
						getData.push(data[key]);
					}
					this.Blogs = getData;
				});
		}
	}

</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.blog {
		margin-top: 80px;
	}

</style>
