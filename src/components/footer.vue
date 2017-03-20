<template lang="html">
	<footer id="footer" class="footer">
		<div class="container_flex-row">
			<div class="footer-information">
				<p v-for="requisitesItem in Requisites" :key="requisitesItem.key" class="footer-information__requisites">
					{{ requisitesItem }}
				</p>
			</div>
			<div class="footer-contacts">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, rem iure earum, voluptate, cum voluptates quaerat dicta culpa, beatae harum in sed saepe. Rerum ipsam, eveniet autem odio quia ratione?
			</div>
			<div class="footer-map">
				<a href="https://yandex.ru/maps/?um=constructor%3AL7L4aUo4vl-3nhDfoZ9G005s57jf096v&amp;source=constructorStatic" target="_blank"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3AL7L4aUo4vl-3nhDfoZ9G005s57jf096v&amp;width=320&amp;height=300&amp;lang=ru_RU" alt="" style="border: 0;" /></a>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'footer',
		data() {
			return {
				Requisites: [
					'ИНН/ОГРН', '12912093/9102109',
					'Адрес:', 'г. Ачинск, ул. Дзержинского, стр. 23',
					'График работы:', 'Пн-Сб, 10:00 - 19:00'

				]
			}
		}
	}
</script>

<style lang="scss">
	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";
	.footer {
		height: 400px;
		padding: 40px 0;
		background-color: $black;
		.container_flex-row {
			justify-content: space-between;
			align-items: flex-start;
		}
	}

	.footer-information {
		flex-basis: 30%;
		&__requisites {
			color: $white
		}
	}
	.footer-contacts {
		flex-basis: 30%;
			color: $white
	}
	.footer-map {
		flex-basis: 30%;
			color: $white
	}

</style>
