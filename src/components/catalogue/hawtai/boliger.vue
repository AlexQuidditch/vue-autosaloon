<template lang="html">
	<main id="main" class="main">
		<section class="product" role="product">
			<div class="container _flex-column _a-center">
				<h1 class="product__title">{{ product.title }}</h1>
				<img :src="product.img" :alt="product.title" class="product__image">
				<h2 class="product__subtitle">{{ product.subTitle }}</h2>
				<table class="first-table _col-3" aria-label="Комплектация и цены">
					<tr>
						<td>Комплектация</td>
						<td v-for="priceItem in Prices" :key="priceItem.key">{{ priceItem.title }}</td>
					</tr>
					<tr>
						<td>Розничная цена, руб.</td>
						<td v-for="priceItem in Prices" :key="priceItem.key">{{ priceItem.price }}</td>
					</tr>
				</table>

				<label for="search" class="search">
					<fieldset class="search__fieldset">
						<legend class="search__legend">{{ Search.placeholder }}</legend>
						<input v-model="Search.content"
							:placeholder="Search.placeholder"
							class="search__input"
							type="text" id="search"
						/>
					</fieldset>
				</label>

				<table id="properties" class="second-table _col-3" aria-label="Технические характеристики">
					<tbody>
						<tr style="visibility: hidden;">
							<th>Комплектация</th>
							<th v-for="priceItem in Prices" :key="priceItem.key">{{ priceItem.title }}</th>
						</tr>
						<tr>
						    <td>Перечень опций</td>
						    <td colspan="2">Luxe AT / MT</td>
						</tr>
						<tr>
						    <td>Травмобезопасная рулевая колонка</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Функция блокировки задних стеклоподъемников</td>
						    <td colspan="2">+</td>
						</tr>

						<tr>
						    <td>Блокировка замков задних дверей от детей</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Крепление для детских сидений ISOFIX</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Противоугонная блокировка рулевого колеса</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Иммобилайзер</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Передние вентелируемые тормозные диски с датчиками износа колодок, задние дисковые</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Автоматическое запирание дверей при начале движения</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Фронтальные подушки безопасности водителя и переднего пассажира</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Датчики парковки задние</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Хромированная решетка радиатора</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Легкосплавные диски и шины 235/55R18</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Хромированная отделка окон</td>
						    <td colspan="2">+</td>
						</tr>

						<tr>
						    <td>Рейлинги на крыше</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Наружные зеркала заднего вида с электрорегулировкой и подогревом</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Электрокорректор фар</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Дополнительный стоп сигнал</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Передние противотуманные фары</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Задние противотуманный фонарь</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Подсветка багажного отделения</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Подсветка зоны посадки в передних и задних дверях</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Сигнализатор незакрытой двери</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Регулируемая по высоте рулевая колонка</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Центральный замок с дистанционным управлением</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Все электростеклоподъемники с функцией "Auto"</td>
						    <td colspan="2">+</td>
						</tr>

						<tr>
						    <td>Электрообогрев передних сидений</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Спинки задних сидений со ступенчатой регулировкой угла наклона</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Складывающиеся задние сиденья в пропорции 4:3</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Внешние аудио AUX / USB-разъем</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Пакет курильщика</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Индикатор непристегнутых ремней безопасности</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Накладки дверных проемов из нержавеющей стали</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Полноразмерное запасное колесо</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>ABS+EBD</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Круиз-контроль</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Камера заднего вида</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Интегрированный альтиметр, барометр, компас</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Бескаркасные щетки стеклоочистителей лобового стекла</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Люк с электроприводом</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Отделка рулевого колеса кожей</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Отделка рычага переключения передач кожей</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Ручное антибликовое внутрисалонное зеркало заднего вида</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Шторка багажника</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Обивка сидений эко-кожа</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Электрическая регулировка сиденья водителя в восьми направлениях</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Дополнительная розетка 12V в багажнике</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Одназонный климат-контроль</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>DVD - проигрыватель на 1 диск</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Цветной большой экран центральной консоли</td>
						    <td colspan="2">+</td>
						</tr>
						<tr>
						    <td>Широкополосная аудиосистема с 6 динамиками</td>
						    <td colspan="2">+</td>
						</tr>
					</tbody>
				</table>

			</div>
		</section>
		<section class="gallery" aria-label="Галерея">
			<div class="container _flex-row _j-around _a-center">
				<h2 class="gallery__title">Галерея</h2>

				<youtube v-for="videoItem in Videos" :key="videoItem.id"
					:video-id="videoItem.id"
					@playing = "playing()"
					@paused = "paused()"
					class = "gallery__video"
					>
				</youtube>

			</div>

		</section>
	</main>
</template>

<script>

	import Flickity from 'vue-flickity';
	import galleryOverlay from '../../templates/gallery-overlay';

	export default {
		name: "CS35",
		components: { Flickity , galleryOverlay },
		data() {
			return {
				Videos: [
					{
						id: 'u902_BROjbI',
					},
					{
						id: 'ooBTM8tWUco',
					}
				],
				product: {
					title: 'ВАШ BOLIGER',
					subTitle: `Люксовый китайский внедорожник, способный удивлять.`,
					img: '../../../../static/assets/img/boliger/bolinger_big.png'
				},
				Search: {
					placeholder: 'Поиск по характеристикам...',
					content: ''
				}
			}
		},
		computed: {
			Prices() {
				return this.$state.Cars.hawtai.boliger
			}
		},
		watch: {
			'Search.content': function() {
				let filter, table, tr, td, i;
				filter = this.Search.content.toUpperCase();
				table = document.getElementById("properties");
				tr = table.getElementsByTagName("tr");
				for (i = 0; i < tr.length; i++) {
					td = tr[i].getElementsByTagName("td")[0];
					if (td) {
						if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
							tr[i].style.display = "";
						} else {
							tr[i].style.display = "none";
						}
					}
				}
			}
		},
		methods: {
			paused(player) {
				console.log('Paused');
			},
			playing(player) {
				console.log('Playing');
			}
		}
	}
</script>

<style lang="scss" src="../../../scss/layout/car-page.scss"></style>
