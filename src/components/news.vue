<template lang="html">
	<main id="main" class="main _news">
		<transition name="fade" mode="out-in">
			<div v-if="!PostsIsLoaded" key = "loading" class="loader">
				<div class="loader__spinner"></div>
				<h2 class="loader__title">Загружаем посты...</h2>
			</div>
			<transition-group v-else
				name="fade-fast"
				tag = "div"
				class="blog container"
				>
				<h2 class="blog__title" key="title" >Новости автосалона</h2>
				<blog-post v-for = "blogItem in Blogs" :key="blogItem.time"
					:title = "blogItem.title"
					:time = "blogItem.time"
					:content = "blogItem.content"
					>
				</blog-post>
			</transition-group>
		</transition>
	</main>
</template>

<script>

	import blogPost from './templates/blog-post';

	export default {
  		name: "news",
		components: { blogPost },
		created() {
			this.$store.dispatch( 'getPosts' , 'Posts.json' );
		},
		computed: {
			Blogs() {
				return this.$state.Posts
			},
			PostsIsLoaded() {
				return this.$state.PostsIsLoaded
			}
		}
	}

</script>

<style lang="scss">

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

	@import "../scss/SpinThatShit/loaders.scss";

	.main._news {
		padding: 40px 0;
	}

	.blog {
		&__title {
			text-align: center;
			font-size: 2.5rem;
			color: $black;
			@include MQ(Pp) {
				font-size: 2rem;
			}
		}
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
