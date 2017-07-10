<template lang="html">
	<header id="header" class="header">
		<nav class="container _wide _flex-row _a-center">
			<div class="header-logo">
				<router-link to="/" class="header-logo__link">
					<img :src="logoSrc"
						alt="логотип"
						class="header-logo__img"
					/>
				</router-link>
			</div>
			<ul class="header-menu">
				<li v-for="headerMenuItem in headerMenu"
					class="header-menu__item">
					<router-link :to = "headerMenuItem.route"
						class="header-menu__link"
						>{{ headerMenuItem.text }}</router-link>
					<ul class="header-menu__submenu">
						<li	v-for="headerSubMenuItem in headerMenuItem.headerSubMenu"
							:key="headerSubMenuItem.text"
							class="header-menu__submenu-item">
							<router-link :to = "headerSubMenuItem.route"
								class="header-menu__submenu-link"
								>{{ headerSubMenuItem.text }}</router-link>
						</li>
					</ul>
				</li>
			</ul>
			<div class="header-menu__mobile-button" :class="{ '_opened' : mobileIsOpened }">
				<div v-show="!mobileIsOpened"
					@click="openMobileMenu()"
					class="header-menu__mobile-copy"
					>МЕНЮ</div>
				<ul class="header-menu _mobile">
					<li v-for="headerMenuItem in headerMenu"
						@click="closeMobileMenu()"
						class="header-menu__item _mobile">
						<router-link :to = "headerMenuItem.route"
							class="header-menu__link _mobile"
							>{{ headerMenuItem.text }}</router-link>
					</li>
					<li class="header-menu__item _mobile _close">
						<button @click="closeMobileMenu()"
							class="header-menu__link _buttons _close"
							type="button">Закрыть</button>
					</li>
				</ul>
			</div>
			<img :src="YearSrc" alt="Car of the Year" class="header-menu__car-of-year" />
		</nav>
	</header>
</template>

<script>
	export default {
		name: 'header',
		data() {
			return {
				logoSrc: '../../static/assets/svg/logo.svg',
				YearSrc: '../../static/assets/img/car2017.png',
				mobileIsOpened: false,
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
						route: {
							path: '/service',
							query: { select: 'sRepair' }
						},
						text: 'Сервис',
						headerSubMenu: [
							{
								route: {
									path: '/service',
			                    	query: { select: 'sService' }
								},
								text: 'Запись на ТО и ремонт'
							},
							{
								route: {
									path: '/service',
									query: { select: 'sRepair' }
								},
								text: 'Запчасти и аксессуары'
							}
						]
					},
					{
						route: {
							path: '/services',
							query: { select: 'credit' }
						},
						text: 'Услуги',
						headerSubMenu: [
							{
								route: {
									path: '/services',
									query: { select: 'credit' }
								},
								text: 'Авто-кредит'
							}
						]
					},
					{
						route: '/promotions',
						text: 'Акции'
					},
					{
						route: '/news',
						text: 'Новости'
					}
				]
			}
		},
		methods: {
			openMobileMenu() {
				this.mobileIsOpened = true;
			},
			closeMobileMenu() {
				this.mobileIsOpened = false
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
		background-color: $white;
		@include MDShadow-4;
		@include MQ(Pp) {
			position: static;
			._flex-row {
				flex-flow: row wrap;
			}
		}
	}

	.header-logo {
		display: inline-block;
		vertical-align: middle;
		margin-right: 22px;
		@include MQ(Pp) {
			margin-right: 0;
		}
		&__link {
			display: block;
			height: $headerHeight * .7;
			@include MQ(Pp) {
				size: auto 37.5px;
			}
		}
		&__img {
			display: block;
			height: 100%;
		}
	}

	.header-menu {
		z-index: 900;
		display: flex;
		height: 100%;
		@include MQ(Pp) {
			display: none;
		}
		&._mobile {
			display: none;
			@include MQ(Pp) {
				display: block;
				overflow: hidden;
				opacity: 0;
				height: 0;
				background-color: $whited;
				transition: none;
			}
		}
		&__item {
			position: relative;
			height: 100%;
			&._mobile {
				display: none;
				@include MQ(Pp) {
					display: block;
					height: 65px;
					line-height: 65px;
				}
			}
			&._close {
				@include MQ(Pp) {
					height: 50px;
					line-height: 50px;
				}
			}
		}
		&__link {
			display: flex;
			justify-content: center;
			align-items: center;
			size: auto 100%;
			padding: 0 22px;
			font-size: 1.15rem;
			font-weight: 500;
			color: $black;
			cursor: pointer;
			transition: color .1s ease-in-out;
			&._active {
				color: $red
			}
			&._mobile {
				display: none;
				@include MQ(Pp) {
					display: block;
				}
			}
			&._close {
				size: 100% 50px;
				margin: 0;
			}
		}
		&__mobile-button {
			display: none;
			@include MQ(Pp) {
				overflow: hidden;
				display: block;
			    z-index: 900;
				position: absolute 10px 0 auto auto;
			    size: 135px 40px;
			    font-size: 1rem;
			    color: $whited $red;
			    border: none;
			    cursor: pointer;
				@include MDShadow-2;
			    will-change: transform, top, right;
			    transition: .5s ease-in-out;
				&._opened {
					top: 500%;
					right: 50%;
					size: 250px 375px;
					background-color: $white;
					border-radius: 5px;
					cursor: default;
					transform: translate( 50% , -50% );
					@include MDShadow-5;
					.header-menu._mobile {
						opacity: 1;
						transition: opacity 0.3s ease;
						transition-delay: 0.5s;
						height: 100%;
					}
				}
			}
		}
		&__mobile-copy {
			display: none;
			@include MQ(Pp) {
				display: block;
				text-align: center;
				line-height: 40px;
				font-weight: 300;
			}
		}
		&__submenu {
			z-index: 10;
			opacity: 0;
			visibility: hidden;
			position: absolute 60px 0 0 50%;
			width: 175px;
			transform: translateX( -75% );
			transition:
				opacity .3s ease-in-out,
				transform .3s ease-in-out,
				visibility .3s ease-in-out;
			.header-menu__link:hover + &,
			&:hover {
				opacity: 1;
				visibility: visible;
				transform: translateX( -50% );
			}
		}
		&__submenu-item {}
		&__submenu-link {
			display: block;
			size: 175px 100%;
			padding: 10px 20px;
			text-align: center;
			color: $black $white;
			cursor: pointer;
			transition: background-color .3s ease-in-out;
			&:focus , &:active , &:hover {
				background-color: mix($black , $white , 5%);
			}
		}
		&__car-of-year {
			position: absolute 10px 0 auto auto;
		}
	}

</style>
