<template lang="html">
	<header id="header" class="header">
		<div class="container_flex-row">
			<ul class="header-menu">
				<div class="header-logo">
					<router-link to="/">
						<img src="../../static/assets/img/logo.png" alt="" class="header-logo__img">
					</router-link>
				</div>
				<li v-for="headerMenuItem in headerMenu" class="header-menu__item">
					<router-link
						:to="headerMenuItem.path"
						class="header-menu__link"
						exact
						>
						{{ headerMenuItem.name }}
					</router-link>
				</li>
			</ul>
			<ul class="header-menu _buttons">
				<li class="header-menu__item">
					<button @click="" class="header-menu__link _buttons">
						Записаться на тест-драйв
					</button>
				</li>
				<li class="header-menu__item">
					<button @click="" class="header-menu__link _buttons">
						Обратный звонок
					</button>
				</li>
			</ul>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'header',
		data() {
			return {
				headerMenu: [{
					path: '/',
					name: 'Главная'
				}, {
					path: '/catalogue',
					name: 'Каталог'
				}, {
					path: '/services',
					name: 'Услуги'
				}, {
					path: '/about',
					name: 'О нас'
				}]
			}
		}
	}
</script>

<style lang="scss">
	@import "../scss/partials/_layout";
	@import "../scss/partials/_mixins";
	@import "../scss/partials/_variables";
	.header {
		z-index: $header-zindex;
		position: fixed;
		top: 0;
		left: 0;
		size: 100% $headerHeight;
		background-color: $headerMain;
		@include MDShadow-4;
		.container_flex-row {
			justify-content: space-between;
		}
	}

	.header-logo {
		display: inline-block;
		vertical-align: middle;
		margin-right: 22px;
		&__image {}
	}

	.header-menu {
		display: flex;
		align-items: center;
		height: 100%;
		&__item {
			height: 100%;
		}
		&__link {
			display: flex;
			justify-content: center;
			align-items: center;
			size: 110px 100%;
			font-size: 1.1rem;
			color: $white;
			cursor: pointer;
			&._active {
				color: $red
			}
			&._buttons {
				width: auto;
				padding: 0 22px;
				background-color: transparent;
				border: none;
				cursor: pointer;
			}
		}
	}
</style>
