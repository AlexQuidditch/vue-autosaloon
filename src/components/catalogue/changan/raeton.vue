<template lang="html">
	<main v-once id="main" class="main">
		<section class="product" role="product">
			<div class="container _flex-column _a-center">
				<h1 class="product__title">{{ product.title }}</h1>
				<img :src="product.img" :alt="product.title" class="product__image">
				<h2 class="product__subtitle">{{ product.subTitle }}</h2>
				<flickity ref="slider"
					:options="flickityOptions"
					class="product-slider">
					<div v-for="slideItem in Slides" :key="slideItem.key"
						class="product-slider__slide">
						<img :src=" slideItem.img + '.png' "
							class="product-slider__slide-image"
						/>
					</div>
				</flickity>
				<table class="first-table" aria-label="Комплектация и цены">
					<tr>
						<th>Комплектация</th>
						<td>1,8T АТ LUXE</td>
					</tr>
					<tr>
						<td>Розничная цена</td>
						<td>1 339 000</td>
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

				<table id="properties" class="second-table" aria-label="Технические характеристики">
					<tbody>
						<tr style="visibility: hidden;">
							<td>Комплектация</td>
							<td>1,8T АТ LUXE</td>
						</tr>
						<tr>
							<td>Двигатель</td>
							<td>BlueCore 1.8T Turbo Engine</td>
						</tr>
						<tr>
							<td>Трансмиссия</td>
							<td>6 AT</td>
						</tr>
						<tr>
							<td>4 датчика парковки</td>
							<td></td>
						</tr>
						<tr>
							<td>Ксеноновые фары</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Круиз-контроль</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Кожаная обивка сидений</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Люк с электроприводом</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Габаритные размеры и объемы</td>
							<td></td>
						</tr>
						<tr>
							<td>Длина/Ширина/Высота (мм)</td>
							<td>4 900 / 1 860 / 1 500</td>
						</tr>
						<tr>
							<td>Колесная база (мм)</td>
							<td>2 810</td>
						</tr>
						<tr>
							<td>Колея передняя/задняя (мм)</td>
							<td>1 580 / 1 565</td>
						</tr>
						<tr>
							<td>Размерность шин</td>
							<td>215 / 55 R17</td>
						</tr>
						<tr>
							<td>Объем топливного бака (л)</td>
							<td>65</td>
						</tr>
						<tr>
							<td>Снаряженная масса (кг)</td>
							<td>1 595</td>
						<tr>
							<td>Технические характеристики</td>
							<td></td>
						</tr>
						<tr>
							<td>Максимальная мощность (л.с. (кВт) при об/мин)</td>
							<td>163 (120) / 5 000–5 500</td>
						</tr>
						<tr>
							<td>Максимальный крутящий момент (Нм при об/мин)</td>
							<td>230 / 1 700–5 000</td>
						</tr>
						<tr>
							<td>Расход топлива в смешанном цикле (л/100км)</td>
							<td>8,9</td>
						</tr>
						<tr>
							<td>Экологический класс</td>
							<td>Euro IV / Euro V</td>
						</tr>
						<tr>
							<td>Рулевое управление</td>
							<td>HPS</td>
						</tr>
						<tr>
							<td>Система подвески</td>
							<td>McPherson<br> Передняя — МакФерсон, независимая со стабилизатором поперечной устойчивости<br>Задняя — независимая, двурычажная</td>
						</tr>
						<tr>
							<td>Тормозная система</td>
							<td>F/R discs (vacuum booster)<br>Передние тормоза: дисковые. Задние тормоза: дисковые с вакуумным усилителем.</td>
						</tr>
						<tr>
							<td>Безопасность</td>
							<td></td>
						</tr>
						<tr>
							<td>ABS+EBD+EBA</td>
							<td>+</td>
						</tr>
						<tr>
							<td>ESP</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Система доступа без ключа</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Кнопка запуска и остановки двигателя</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Фронтальные подушки безопасности для водителя и переднего пассажира</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Боковые подушки безопасности для водителя и переднего пассажира</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Шторки безопасности</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Ремни безопасности на передних сиденьях с преднатяжителем и ограничителями усилий</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Трехточечные ремни безопасности на задних сиденьях</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Регулируемые по высоте ремни безопасности</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Сигнализация о непристегнутом ремне безопасности водителя</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Сигнализация о непристегнутом ремне безопасности переднего пассажира</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Ремни безопасности с ограничителями на задних сидениях</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Центральный замок</td>
							<td>+</td>
						</tr>
						<tr>
							<td>«Детский замок» в задних дверях</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Крепления для детского сиденья ISOFIX</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Иммобилайзер</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Внутреннее зеркало заднего вида с антибликовым покрытием</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Электронная система парковки</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Сигнализация о незакрытых дверях</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Комфорт</td>
							<td></td>
						</tr>
						<tr>
							<td>Автоматический климат-контроль</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Регулировка руля по высоте</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Замок рулевого колеса</td>
							<td>Электронный</td>
						</tr>
						<tr>
							<td>Водительское сиденье с поясничной поддержкой</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Регулировка водительского сиденья</td>
							<td>Электронная регулировка в 8 направлениях</td>
						</tr>
						<tr>
							<td>Подголовники водительского сиденья, регулируемые по высоте</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Карман в спинке кресла водителя</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Регулировка сиденья переднего пассажира</td>
							<td>Механическая регулировка в 4 направлениях</td>
						</tr>
						<tr>
							<td>Подголовники сиденья переднего пассажира, регулируемые по высоте</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Карман в спинке кресла переднего пассажира</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Задний центральный подлокотник</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Электростеклоподъемники всех дверей</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Функция опускания стекол однократным нажатием на двери водителя</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Обогрев заднего стекла</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Аудиосистема</td>
							<td></td>
						</tr>
						<tr>
							<td>Бортовой компьютер</td>
							<td>+</td>
						</tr>
						<tr>
							<td>6 динамиков</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Радио FM/AM</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Разъем USB</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Дополнительная розетка</td>
							<td>+</td>
						</tr>
						<tr>
							<td>DVD</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Интерьер</td>
							<td></td>
						</tr>
						<tr>
							<td>Интерьер в темных тонах</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Многофункциональное рулевое колесо с отделкой кожей</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Воздуховоды для заднего ряда</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Экстерьер</td>
							<td></td>
						</tr>
						<tr>
							<td>Легкосплавные колесные диски</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Запаское колесо</td>
							<td>Полноразмерные лекгосплавные 17-дюймовые диски колес</td>
						</tr>
						<tr>
							<td>Авторегулировка фар по высоте</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Передние и задние противотуманные фары</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Регулировка наружных зеркал</td>
							<td>Электронная</td>
						</tr>
						<tr>
							<td>Складывающиеся наружные зеркала заднего вида</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Автоматическое складывание и открытие наружных зеркал заднего вида</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Электрообогрев зеркал заднего вида</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Зеленые зеркала</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Защита картера двигателя</td>
							<td>+</td>
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

	export default {
		name: "CS35",
		components: { Flickity },
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
					title: 'ВАШ CHANGAN RAETON',
					subTitle: 'Комфортабельный, бесшумный, мощный cедан бизнес-класса',
					img: '../../../../static/assets/img/raeton/raeton_big.png'
				},
				Slides: [
					{
						img: '../../../../static/assets/img/raeton/slider/detail_01'
					},
					{
						img: '../../../../static/assets/img/raeton/slider/detail_02'
					},
					{
						img: '../../../../static/assets/img/raeton/slider/detail_03'
					},
					{
						img: '../../../../static/assets/img/raeton/slider/detail_04'
					},
					{
						img: '../../../../static/assets/img/raeton/slider/detail_05'
					},
					{
						img: '../../../../static/assets/img/raeton/slider/detail_06'
					},
					{
						img: '../../../../static/assets/img/raeton/slider/detail_07'
					}
				],
				flickityOptions: {
					groupCells: 3,
                	wrapAround: true,
					autoPlay: 7500
				},
				Search: {
					placeholder: 'Поиск по характеристикам...',
					content: ''
				}
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
