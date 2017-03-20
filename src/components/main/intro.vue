<template lang="html">
	<section id="Intro" class="intro">
		<div class="container_flex-column">
			<div class="intro-text">
				<h1 class="intro-text__title">
					{{ title }}
				</h1>
				<h2 class="intro-text__sub-title">
					{{ subtitle }}
				</h2>
			</div>
			<div class="intro-buttons">
				<button
					class="intro-buttons__button"
					v-scroll-to="{
						el: '#tabs',
						offset: -60,
						duration: 950
						}"
					>
					Каталог
				</button>
				<button
					class="intro-buttons__button _alert"
					v-scroll-to="{
						el: '#Testdrive',
						offset: -60,
						duration: 950
						}"
					>
					Тест-драйв
				</button>
			</div>
		</div>
	</section>
</template>

<script>

	export default {
		name: 'intro',
		data() {
			return {
				title: '',
				subtitle: '',
			}
		},
		beforeMount() {
			this.title = this.$store.state.intro.title
			this.subtitle = this.$store.state.intro.subtitle
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.intro {
		height: 100vh;
		padding: 0;
		margin: 0;
		background-image: url('../../../static/assets/img/main_intro.jpg');
		background-position: center center;
    	background-color: rgba($blacked, .35);
		background-blend-mode: color;
		.container_flex-column {
			box-shadow: none
		}
	}

	.intro-text {
		text-align: center;
		&__title {
			font-size: 6rem;
			color: $white;
			text-shadow: 0 0 15px rgba($blacked, 0.75);
		}
		&__sub-title {
			margin-top: 3rem;
			font-size: 2.5rem;
			color: $white;
			text-shadow: 0 0 15px rgba($blacked, 0.75);
		}
	}

	.intro-buttons {
		margin-top: 4rem;
		&__button {
			size: 18rem 3.5rem;
			margin: 0 3rem;
			font-size: 1.35rem;
			color: $white transparent;
			border: solid 3px $white;
			cursor: pointer;
			transition:
				color .3s ease-in-out,
				background-color .3s ease-in-out;
			&:hover {
				color: $black $white;
			}
			&._alert {
				color: $red;
				border-color: $red;
				&:hover {
					color: $white $red;
				}
			}
		}
	}

</style>
