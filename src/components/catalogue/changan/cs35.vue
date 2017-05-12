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
				<table class="first-table _col-5" aria-label="Комплектация и цены">
					<tr>
						<th>Комплектация</th>
						<td>1,6 MТ COMFORT</td>
						<td>1,6 MТ LUXE</td>
						<td>1,6 АТ COMFORT</td>
						<td>1,6 АТ LUXE</td>
					</tr>
					<tr>
						<td>Розничная цена, руб.</td>
						<td>799 900</td>
						<td>835 900</td>
						<td>885 900</td>
						<td>925 920</td>
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

				<table id="properties" class="second-table _col-5" aria-label="Технические характеристики">
					<tbody>
						<tr style="visibility: hidden;">
							<td>Комплектация</td>
							<td>1,6 MТ COMFORT</td>
							<td>1,6 MТ LUXE</td>
							<td>1,6 АТ COMFORT</td>
							<td>1,6 АТ LUXE</td>
						</tr>
						<tr>
							<td>Двигатель</td>
							<td colspan="4">BlueCore 1598ml DVVT</td>
						</tr>
						<tr>
							<td>Трансмиссия</td>
							<td>5 MT</td>
							<td>5 MT</td>
							<td>4 AT</td>
							<td>4 AT</td>
						</tr>
						<tr>
							<td>Габаритные размеры и объемы</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Длина/Ширина/Высота (мм)</td>
							<td colspan="4">4 160 / 1 820 / 1 670</td>
						</tr>
						<tr>
							<td>Колесная база (мм)</td>
							<td colspan="4">2 560</td>
						</tr>
						<tr>
							<td>Минимальный дорожный просвет без нагрузки (мм)</td>
							<td colspan="4">180</td>
						</tr>
						<tr>
							<td>Размерность шин</td>
							<td>205 / 60 R16</td>
							<td>215 / 50 R17</td>
							<td>205 / 60 R16</td>
							<td>215 / 50 R17</td>
						</tr>
						<tr>
							<td>Объем багажного отделения (л)</td>
							<td colspan="4">348 / 1 058（со сложенными сидениями）</td>
						</tr>
						<tr>
							<td>Отсек багажника для запасного колеса (л)</td>
							<td colspan="4">43</td>
						</tr>
						<tr>
							<td>Объем топливного бака (л)</td>
							<td colspan="4">52</td>
						</tr>
						<tr>
							<td>Снаряженная масса (кг)</td>
							<td colspan="2">1 270</td>
							<td colspan="2">1 290</td>
						</tr>
						<tr>
							<td colspan="5"></td>
						</tr>
						<tr>
							<td>Технические характеристики</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Количество и расположение цилиндров ДВС</td>
							<td colspan="4">4 цилиндровый, рядный</td>
						</tr>
						<tr>
							<td>Экологический класс</td>
							<td colspan="4">Euro V</td>
						</tr>
						<tr>
							<td>Передаточное число</td>
							<td colspan="2">3.462 / 1.955 / 1.310 / 1.030 / 0.838 / R:3.231</td>
							<td colspan="2">2.875 / 1.568 / 1 / 0.697 / R2：3</td>
						</tr>
						<tr>
							<td>Максимальная мощность (л.с. (кВт) при об/мин)</td>
							<td colspan="4">83</td>
						</tr>
						<tr>
							<td>Максимальный крутящий момент (Нм при об/мин)</td>
							<td colspan="4">152</td>
						</tr>
						<tr>
							<td>Расход топлива в смешанном цикле (л/100км)*</td>
							<td colspan="2">6,6</td>
							<td colspan="2">7,0</td>
						</tr>
						<tr>
							<td>Топливо</td>
							<td colspan="4">Бензин, с октановым числом не ниже 92</td>
						</tr>
						<tr>
							<td>Передняя подвеска</td>
							<td colspan="4">МакФерсон, независимая со стабилизатором поперечной устойчивости</td>
						</tr>
						<tr>
							<td>Задняя подвеска</td>
							<td colspan="4">Полузависимая, торсионная</td>
						</tr>
						<tr>
							<td>Привод</td>
							<td colspan="4">Передний</td>
						</tr>
						<tr>
							<td>Передние тормоза</td>
							<td colspan="4">Дисковые</td>
						</tr>
						<tr>
							<td>Задние тормоза</td>
							<td colspan="4">Дисковые</td>
						</tr>
						<tr>
							<td colspan="5"></td>
						</tr>
						<tr>
							<td>Отсек для хранения мобильного телефона</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Передний центральный подлокотник с боксом </td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Отсеки для хранения в четырех дверях</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Пепельница</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Подстаканник</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Очечник</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Органайзер багажного отсека</td>
							<td></td>
							<td>+</td>
							<td></td>
							<td>+</td>
						</tr>
						<tr>
							<td>Полка в багажном отделении</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Внешняя антенна (Акулий плавник)</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Ручка двери, окрашенная в цвет кузова</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td></td>
						</tr>
						<tr>
							<td>Хромированные ручки двери</td>
							<td></td>
							<td></td>
							<td></td>
							<td>+</td>
						</tr>
						<tr>
							<td>Сетка для крепления груза в багажном отсеке</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Декоративные боковые вставки, окрашенные в цвет кузова</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Дверные хромированные вставки</td>
							<td></td>
							<td></td>
							<td></td>
							<td>+</td>
						</tr>
						<tr>
							<td>ЖК-дисплей панели приборов</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Информационный дисплей</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Бортовой компьютер</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Индикатор положения КПП</td>
							<td></td>
							<td></td>
							<td></td>
							<td>+</td>
						</tr>
						<tr>
							<td>Сигнализация о незакрытых дверях (включая дверь багажника) </td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Сигнализация о непристегнутом ремне безопасности водителя</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Подсветка дверных ручек</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Прикуриватель</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Индикатор открытия/закрытия пяти дверей</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Розетка 12V в багажном отсеке</td>
							<td></td>
							<td>+</td>
							<td></td>
							<td>+</td>
						</tr>
						<tr>
							<td>Дневные ходовые огни</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td colspan="5"></td>
						</tr>
						<tr>
							<td>Технологичность</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>6 стереодинамиков</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>CD / Radio</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Разъем AUX IN, USB</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Электростеклоподъемники (4-х) всех дверей с функцией опускания «одним нажатием» на двери водителя </td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Омыватель переднего стекла</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Многорежимные очистители лобового стекла</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Обогрев заднего стекла</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Стеклоочиститель заднего стекла</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Управление аудиосистемой на руле</td>
							<td></td>
							<td>+</td>
							<td></td>
							<td>+</td>
						</tr>
						<tr>
							<td>Отделка руля кожей</td>
							<td></td>
							<td>+</td>
							<td></td>
							<td>+</td>
						</tr>
						<tr>
							<td>Круиз-контроль</td>
							<td></td>
							<td></td>
							<td></td>
							<td>+</td>
						</tr>
						<tr>
							<td colspan="5"></td>
						</tr>
						<tr>
							<td>Безопасность</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Передние подушки безопасности</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Боковые подушки безопасности для водителя и переднего пассажира</td>
							<td></td>
							<td>+</td>
							<td></td>
							<td>+</td>
						</tr>
						<tr>
							<td>Ремни безопасности на передних сиденьях с преднатяжителем и ограничителями усилий</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Ремни безопасности на передних сиденьях регулируемые по высоте</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Трехточечные ремни безопасности на задних сиденьях</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>«Детский замок» в задних дверях</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Центральный замок с Дистанционным Управлением</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Автоматическая блокировка дверей </td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Энергопоглощающая рулевая колонка</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Блокировка рулевого колеса</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>ABS/EBD</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>ESP</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Регулировка руля по высоте</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Комфорт</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Материал сидений</td>
							<td>Текстиль</td>
							<td>Кожа</td>
							<td>Текстиль</td>
							<td>Кожа</td>
						</tr>
						<tr>
							<td>Передние и задние подголовники, регулируемые по высоте</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Крюк для буксировочного троса спереди</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Вешалки (например, для одежды)</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Складывающаяся по частям спинка заднего сиденья 60:40</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Регулировка водительского сиденья в 6 положениях</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Регулировка сиденья переднего пассажира в 4 положениях</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Ящик для хранения в передней консоли переднего пассажирского сидения</td>
							<td></td>
							<td>+</td>
							<td></td>
							<td>+</td>
						</tr>
						<tr>
							<td>Подогрев передних сидений</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Крепление ISOFIX</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Подсветка багажника</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Регулировка света фар</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Галогенные фары</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Передние противотуманные фары</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Задние противотуманные фары</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Дублирующий фонарь стоп-сигнала</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Подсветка заднего номерного знака</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Задержка выключения света фар — функция «Coming / Leaving Home»</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Повторители сигналов поворота в наружных зеркалах заднего вида</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Световой сигнал функции «Поиск автомобиля»</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Кондиционер</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Солнцезащитный козырек с косметическим зеркалом на водительском и переднем пассажирском сидении</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Электрические боковые зеркала</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Цвет зеркал и плавника на крыше</td>
							<td colspan="4">Черный металлик</td>
						</tr>
						<tr>
							<td>Наружные зеркала заднего вида с электрообогревом</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Внутреннее зеркало заднего вида с антибликовым покрытием</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td>Электростеклоподъемники передних и задних пассажирских дверей</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
							<td>+</td>
						</tr>
						<tr>
							<td colspan="5"></td>
						</tr>
						<tr>
							<td colspan="5">Changan Automobile оставляет за собой право развивать (изменять) и менять конфигурацию модели Changan CS 35</td>
						</tr>
						<tr>
							<td><small>* Данные завода изготовителя</small></td>
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
					title: 'ВАШ CHANGAN CS35',
					subTitle: `Компактный, стильный и экономичный. Кроссовер на все случаи жизни`,
					img: '../../../../static/assets/img/cs35/cs35_big.png'
				},
				Slides: [
					{
						img: '../../../../static/assets/img/cs35/slider/detail_01'
					},
					{
						img: '../../../../static/assets/img/cs35/slider/detail_02'
					},
					{
						img: '../../../../static/assets/img/cs35/slider/detail_03'
					},
					{
						img: '../../../../static/assets/img/cs35/slider/detail_04'
					},
					{
						img: '../../../../static/assets/img/cs35/slider/detail_05'
					},
					{
						img: '../../../../static/assets/img/cs35/slider/detail_06'
					},
					{
						img: '../../../../static/assets/img/cs35/slider/detail_07'
					},
					{
						img: '../../../../static/assets/img/cs35/slider/detail_08'
					},
					{
						img: '../../../../static/assets/img/cs35/slider/detail_09'
					},
					{
						img: '../../../../static/assets/img/cs35/slider/detail_10'
					},
					{
						img: '../../../../static/assets/img/cs35/slider/detail_11'
					},
					{
						img: '../../../../static/assets/img/cs35/slider/detail_12'
					},
					{
						img: '../../../../static/assets/img/cs35/slider/detail_13'
					},
					{
						img: '../../../../static/assets/img/cs35/slider/detail_14'
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
