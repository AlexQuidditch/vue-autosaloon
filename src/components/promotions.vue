<template lang="html">
    <main id="main" class="main">
        <section id="promotions" class="promotions">
            <div class="container">
                <h2 class="promotions__title">Акции в автосалоне</h2>
                <ul class="promo-list">
                    <promo-card v-for="promosItem in Promos" :key="promosItem.title"
                        :Promo="promosItem">
                    </promo-card>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>

    import promoCard from './templates/promo-card.vue';

    export default {
        name: "promotions",
        components: { promoCard },
		computed: {
		    Promos() {
		        return this.$state.content.Promos
		    }
		}
    }

</script>

<style lang="scss">

	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";

    .promotions {
        min-height: calc( 100vh - 60px );
		padding: 40px 0;
        &__title {
            margin-top: 32px;
            text-align: center;
            font-size: 36px;
        }
        @include MQ(Pp) {
            &__title {
                margin-top: 0;
            }
        };
    }

</style>
