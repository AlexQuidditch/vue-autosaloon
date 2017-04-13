<template lang="html">
	<header id="header" class="header">
		<div class="container _flex-row _j-between _a-center">
			<ul class="header-menu">
				<div class="header-logo">
					<router-link to="/">
						<img
							src="../../static/assets/img/logo.png"
							alt=""
							class="header-logo__img"
						/>
					</router-link>
				</div>
				<li v-for="headerMenuItem in headerMenu"
					class="header-menu__item">
					<router-link
						:to="{ name: headerMenuItem.route }"
						class="header-menu__link"
						>
						{{ headerMenuItem.name }}
					</router-link>
					<ul class="header-menu__submenu">
						<li
							v-for="headerSubMenuItem in headerMenuItem.headerSubMenu"
							:key="headerSubMenuItem.key"
							class="header-menu__submenu-item"
							>
							<router-link
								:to="{ name: headerSubMenuItem.route }"
								class="header-menu__submenu-link"
								>
								{{ headerSubMenuItem.name }}
							</router-link>
						</li>
					</ul>
				</li>
			</ul>
			<ul class="header-menu _buttons">
				<li class="header-menu__item">
					<button @click="" class="header-menu__link _buttons">
						Запись на тест-драйв
					</button>
				</li>
				<li class="header-menu__item">
					<button @click="" class="header-menu__link _buttons">
						Контакты
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
					route: 'catalogue',
					name: 'Автомобили',
					headerSubMenu: [
						{
							route: 'tigga3',
							name: 'Chery'
						},
						{
							route: 'catalogue',
							name: 'Changan'
						},
						{
							route: 'catalogue',
							name: 'Hawtai'
						}
					]
				}, {
					route: 'services',
					name: 'Сервис',
					headerSubMenu: [
						{
							route: 'main',
							name: 'ТО и ремонт'
						},
						{
							route: 'main',
							name: 'Запчасти'
						}
					]
				}, {
					route: 'services',
					name: 'Услуги',
					headerSubMenu: [
						{
							route: 'main',
							name: 'Кредит'
						},
						{
							route: 'services',
							name: 'Кредит'
						}
					]
				}, {
					route: 'about',
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
		z-index: 900;
		position: fixed;
		top: 0;
		left: 0;
		size: 100% $headerHeight;
		background-color: $headerMain;
		@include MDShadow-4;
	}

	.header-logo {
		display: inline-block;
		vertical-align: middle;
		margin-right: 22px;
		&__img {
			height: $headerHeight * .7
		}
	}

	.header-menu {
		z-index: 900;
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
			size: auto 100%;
			padding: 0 22px;
			font-size: 1.25rem;
			color: $white;
			cursor: pointer;
			transition: color .1s ease-in-out;
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
		&__submenu {
			z-index: -10;
			opacity: 0;
			visibility: hidden;
			@include MDShadow-4;
			transform: translateX(-25%);
			transition:
				opacity .3s ease-in-out,
				transform .3s ease-in-out,
				visibility .3s ease-in-out;
			.header-menu__link:hover + &,
			&:hover {
				opacity: 1;
				visibility: visible;
				transform: translateX(0);
			}
		}
		&__submenu-item {}
		&__submenu-link {
			display: inline-block;
			size: 100%;
			padding: 10px 20px;
			color: $white $black;
			cursor: pointer;
			transition: background-color .3s ease-in-out;
			&:hover {
				background-color: mix($white, $black, 5%);
			}
		}
	}
</style>
