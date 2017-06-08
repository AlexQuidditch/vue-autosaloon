<template lang="html">
	<li class="mark">
		<img :src="picture" :alt="name" class="mark__picture" />
		<router-link :to="{ path: '/catalogue', query: { filter : route }}"
			class="mark__link"
			ripple-light
			>Каталог</router-link>
	</li>
</template>

<script>
	export default {
		name: "mark",
		props: ['name', 'picture', 'route']
	}
</script>

<style lang="scss">
	@import "../../scss/partials/_layout";
	@import "../../scss/partials/_mixins";
	@import "../../scss/partials/_variables";

	.mark {
	    display: flex;
	    flex-flow: column wrap;
		justify-content: space-between;
		align-items: center;
	    size: auto 200px;
	    margin: 1rem 0;
	    background-color: $whited;
		@include MQ(Pp) {
			width: 100%
		}
	    &__title {
	    	font-size: 2rem;
	        line-height: 3rem;
	    }
	    &__picture {
	    	size: auto 100px;
	        object-fit: contain;
			@include MQ(Pp) {
				max-width: 90%;
			}
	    }
	    &__link {
	        @include MDButton($white, $red) {
	            size: 150px 2.5rem;
	            text-align: center;
	            line-height: 2.5rem;
	        };
	    }
	}
</style>
