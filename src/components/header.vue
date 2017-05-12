<template lang="html">
	<header v-once id="header" class="header">
		<div class="container _flex-row _j-between _a-center">
			<ul class="header-menu">
				<div class="header-logo">
					<router-link to="/">
						<img src="../../static/assets/img/logo.png"
							alt=""
							class="header-logo__img"
						/>
					</router-link>
				</div>
				<li v-for="headerMenuItem in headerMenu"
					class="header-menu__item">
					<router-link :to = "headerMenuItem.route"
						class="header-menu__link"
						>{{ headerMenuItem.text }}</router-link>
					<ul class="header-menu__submenu">
						<li	v-for="( headerSubMenuItem , index ) in headerMenuItem.headerSubMenu"
							:key="index"
							class="header-menu__submenu-item"
							:tabindex="index + 1"
							>
							<router-link :to = "headerSubMenuItem.route"
								class="header-menu__submenu-link"
								>{{ headerSubMenuItem.text }}</router-link>
						</li>
					</ul>
				</li>
			</ul>
			<ul class="header-menu _buttons">
				<li class="header-menu__item">
					<button @click="callTestDrive()"
						class="header-menu__link _buttons"
						ripple-light
						>Запись на тест-драйв</button>
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
				headerMenu: [
					{
						route: {
							path: '/catalogue',
        	            	query: { filter: 'all' }
						},
						text: 'Автомобили',
						headerSubMenu: [
							{
								route: {
									path: '/catalogue',
			                    	query: { filter: 'chery' }
								},
								text: 'Chery'
							},
							{
								route: {
									path: '/catalogue',
			                    	query: { filter: 'changan' }
								},
								text: 'Changan'
							},
							{
								route: {
									path: '/catalogue',
			                    	query: { filter: 'hawtai' }
								},
								text: 'Hawtai'
							}
						]
					},
					{
						route: '/services',
						text: 'Сервис',
						headerSubMenu: [
							{
								route: '/',
								text: 'ТО и ремонт'
							},
							{
								route: '/',
								text: 'Запчасти'
							}
						]
					},
					{
						route: '/services',
						text: 'Услуги',
						headerSubMenu: [
							{
								route: '/',
								text: 'Кредит'
							},
							{
								route: '/services',
								text: 'Кредит'
							}
						]
					},
					{
						route: '/about',
						text: 'О нас'
					}
				]
			}
		},
		methods: {
			callTestDrive() {
				this.$store.commit('modalOpen')
			},
			callContacts() {
				this.$swal(
					'Тут будет вызвана модалка с тест-драйвом',
					'И прочее бла-бла-бла...',
					'question'
				)
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
		position: fixed 0 auto auto 0;
		size: 100% $headerHeight;
		@include gradient( 125deg , $black );
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
			font-size: 1.15rem;
			color: $white;
			cursor: pointer;
			transition: color .1s ease-in-out;
			&._active {
				color: $red
			}
			&._buttons {
				@include MDButton($white , $red) {
					height: 40px;
					margin: 10px 0;
					margin-left: 1rem
				}
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
			&:focus , &:active , &:hover {
				background-color: mix($white, $black, 5%);
			}
		}
	}
</style>
