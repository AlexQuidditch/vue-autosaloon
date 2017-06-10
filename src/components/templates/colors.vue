<template lang="html">
	<section id="colors" class="colors">
		<div class="container">
			<h2 class="colors__title">Расцветки:</h2>
			<ul class="color-list">
				<li v-for="colorItem in Colors" :key="colorItem.title"
					class="color-item">
					<img :src="colorItem.image" alt="" class="color-item__image" />
					<p class="color-item__title">{{ colorItem.title }}</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>

	export default {
		name: "colors",
		props: {
			Colors: {
				type: Array,
				required: true
			}
		}
	};

</script>

<style lang="scss">

	.colors {
		margin: 16px 0;
		&__title {
			text-align: center;
			font-size: 2rem;
		}
	}

	.color-list	{
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		align-content: center;
		margin: 16px 0;
	}

	.color-item {
		size: 180px auto;
		margin: 16px 32px;
		&__image {
			width: 100%;
		}
		&__title {
			margin: 0;
			text-align: center;
			font-size: 18px;
			line-height: 2.5;
		}
	}

</style>
