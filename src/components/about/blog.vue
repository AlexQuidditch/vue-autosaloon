<template lang="html">
	<main id="main" class="main">
		<transition name="fade" mode="out-in">
			<div v-if="!isLoaded" key = "loading" class="loader">
				<div class="loader__spinner"></div>
				<h2 class="loader__title">Загружаем посты...</h2>
			</div>
			<transition-group
				v-else
				name="fade-fast"
				mode="out-in"
				tag = "div"
				class="container"
				>
				<article
					v-for = "blogItem in Blogs" :key="blogItem"
					class="blog"
					>
					<h2 class="blog__title">{{ blogItem.title }}</h2>
					<h3>{{ blogItem.time }}</h3>
					<div v-html = "blogItem.content" class="blog__content html ql-editor"></div>
				</article>
			</transition-group>
		</transition>
	</main>
</template>

<script>

	export default {
  		name: "blog",
      	data() {
			return {
				isLoaded: false,
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
					this.isLoaded = true
				});
		}
	}

</script>

<style lang="scss">

	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	@import "../../scss/SpinThatShit/loaders.scss";

	.blog {
		margin-top: 80px;
	}
	.loader {
		display: flex;
		flex-flow: column wrap;
		justify-content: center;
		align-items: center;
		height: 100vh;
		&__spinner {
			@include loader07($size: 15px, $duration: 1s);
		}
		&__title {
			margin-top: 40px;
		}
	}

</style>
