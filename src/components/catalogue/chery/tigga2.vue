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
						<img :src=" slideItem.img + '.jpg' "
							:alt="slideItem.title"
							:title="slideItem.title"
							class="product-slider__slide-image"
						/>
						<p class="product-slider__slide-title">{{ slideItem.title }}</p>
					</div>
				</flickity>
				<table class="first-table" aria-label="Комплектация и цены">
					<tr>
						<th>Комплектация</th>
						<th>Comfort MT</th>
						<th>Luxury MT</th>
						<th>Luxury CVT</th>
					</tr>
					<tr>
						<td>Розничная цена, руб.</td>
						<td>395 188</td>
						<td>499 088</td>
						<td>599 088</td>
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
							<th>Технические характеристики Tiggo 2</th>
							<th>Comfort MT</th>
							<th>Luxury MT</th>
							<th>Luxury AT</th>
						</tr>
						<tr>
							<td>Основные</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Кузов</td>
							<td colspan="3" data-colspan="3">Цельнометаллический, несущий, хэтчбек/5</td>
						</tr>
						<tr>
							<td>Привод</td>
							<td colspan="3" data-colspan="3">Передний </td>
						</tr>
						<tr>
							<td>Тип усилителя руля</td>
							<td colspan="3" data-colspan="3">С гидроусилителем, "шестерня-рейка"</td>
						</tr>
						<tr>
							<td>Экологический класс</td>
							<td colspan="3" data-colspan="3">Euro 5 </td>
						</tr>
						<tr>
							<td>Двигатель</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Модель </td>
							<td colspan="3" data-colspan="3">SQRD4G15B</td>
						</tr>
						<tr>
							<td>Тип двигателя</td>
							<td colspan="3" data-colspan="3">Бензиновый, рядный, четырехцилиндровый, четырехтактный с искровым зажиганием. </td>
						</tr>
						<tr>
							<td>Объем двигателя (см. куб.)</td>
							<td colspan="3" data-colspan="3">1497</td>
						</tr>
						<tr>
							<td>Максимальная мощность (кВт/об.мин)</td>
							<td colspan="3" data-colspan="3">78/6000 (106)</td>
						</tr>
						<tr>
							<td>Максимальный крутящий момент (Нм. /об.мин)</td>
							<td colspan="3" data-colspan="3">135/2750 </td>
						</tr>
						<tr>
							<td>Степень сжатия</td>
							<td colspan="3" data-colspan="3">11,4</td>
						</tr>
						<tr>
							<td>Объем топливного бака (л)</td>
							<td colspan="3" data-colspan="3">50</td>
						</tr>
						<tr>
							<td>Тип трансмиссии</td>
							<td colspan="2" data-colspan="2">Механическая</td>
							<td colspan="1" data-colspan="1">Гидромеханическая</td>
						</tr>
						<tr>
							<td>Размеры и масса</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Длина х Ширина x Высота (мм)</td>
							<td colspan="3" data-colspan="3">4200х1760х1570</td>
						</tr>
						<tr>
							<td>Колесная база (мм)</td>
							<td colspan="3" data-colspan="3">2555</td>
						</tr>
						<tr>
							<td>Колея передних колес (мм)</td>
							<td colspan="3" data-colspan="3">1495</td>
						</tr>
						<tr>
							<td>Колея задних колес (мм)</td>
							<td colspan="3" data-colspan="3">1484</td>
						</tr>
						<tr>
							<td>Минимальный дорожный просвет (мм)</td>
							<td colspan="3" data-colspan="3">186 </td>
						</tr>
						<tr>
							<td>Снаряженная масса (кг)</td>
							<td colspan="2" data-colspan="2">1290</td>
							<td colspan="1" data-colspan="1">1320</td>
						</tr>
						<tr>
							<td>Объем багажника (л)</td>
							<td colspan="3" data-colspan="3">420</td>
						</tr>
						<tr>
							<td>Подвеска и тормозная система</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Тип передней подвески</td>
							<td colspan="3" data-colspan="3">Передняя: независимая, пружинная, типа McPherson, со стабилизатором поперечной устойчивости.</td>
						</tr>
						<tr>
							<td>Тип задней подвески</td>
							<td colspan="3" data-colspan="3">Задняя: полузависимая, пружинная, с амортизаторами</td>
						</tr>
						<tr>
							<td>Тормозные механизмы передних колес</td>
							<td colspan="3" data-colspan="3">Дисковые вентилируемые</td>
						</tr>
						<tr>
							<td>Тормозные механизмы задних колес</td>
							<td colspan="3" data-colspan="3">Дисковые не вентилируемые</td>
						</tr>
						<tr>
							<td>Тип стояночного тормоза</td>
							<td colspan="3" data-colspan="3">Механический ручной тормоз</td>
						</tr>
					</tbody>
				</table>

				<label for="search2" class="search">
					<fieldset class="search__fieldset">
						<legend class="search__legend">{{ Search2.placeholder }}</legend>
						<input v-model="Search2.content"
							:placeholder="Search2.placeholder"
							class="search__input"
							type="text" id="search2"
						/>
					</fieldset>
				</label>

				<table id="properties2" class="second-table" aria-label="Комплектация">
					<tbody>
						<tr style="visibility: hidden;">
							<th>Комплектации и цены Tiggo 3</th>
							<th>Comfort MT</th>
							<th>Luxury MT</th>
							<th>Luxury CVT</th>
						</tr>
						<tr>
							<td>Литые диски (215/60 R17)</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Окрашенные литые диски</td>
							<td><b>+</b></td><td></td><td></td>
						</tr>
						<tr>
							<td>Хромированные литые диски</td>
							<td></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Система помощи при трогании (Start Assist)</td>
							<td><b>+</b></td><td><b>+</b></td><td></td>
						</tr>
						<tr>
							<td>Задний стеклоочиститель</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Противотуманные фары с функцией освещения поворота</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Передние галогеновые фары</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Передние дневные светодиодные ходовые огни</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Электрическая регулировка угла светового потока передних фар</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Передние противотуманные фары</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Предупреждающий фонарь открытия передней двери</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Наружные зеркала заднего вида с электрической регулировкой</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Наружные зеркала заднего вида с обогревом</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Наружные зеркала заднего вида с повторителями поворотов</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Закаленное стекло задней двери зеленого оттенка с функцией обогрева</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Рейлинги на крыше</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Окрашенные в цвет кузова дверные ручки c хромированной вставкой</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Защитные молдинги боковых дверей</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Спойлер</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Верхняя защитная панель двигателя</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Серебристая решетка радиатора с черной окантовкой</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td colspan="4" data-colspan="4">Безопасность</td>
							<td></td><td></td><td></td>
						</tr>
						<tr>
							<td>Звуковая противоугонная сигнализация</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Иммобилайзер</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Задние датчики парковки</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Антиблокировочная система (ABS)</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Система распределения тормозных усилий (EBD)</td>
							 <td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Подушки безопасности водителя и переднего пассажира</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Передние ремни безопасности с регулировкой по высоте</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Передние ремни безопасности с преднатяжителем и ограничением усилия</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>3-х точечные ремни безопасности задних сидений с преднатяжителями</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Блокировка задних дверей от открывания детьми</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Напоминание о непристёгнутом ремне переднего пассажира</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td colspan="4" data-colspan="4">Управление</td>
							<td></td><td></td><td></td>
						</tr>
						<tr>
							<td>Круиз-контроль</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Ключ дистанционного открытия дверей (2 шт.)</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Передние электростеклоподъемники</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Задние электростеклоподъемники</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Центральный замок с дистанционным управлением</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Подсветка замка зажигания</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Электронная педаль акселератора</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td colspan="4" data-colspan="4">Комфорт</td>
							<td></td><td></td><td></td>
						</tr>
						<tr>
							<td>Тёмный салон - комбинированный черный и серебристый</td>
							<td><b>+</b></td><td></td><td></td>
						</tr>
						<tr>
							<td>Тёмный салон - черный</td>
							<td></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Тканевые сиденья</td>
							<td><b>+</b></td><td></td><td></td>
						</tr>
						<tr>
							<td>Комбинированные сиденья - кожа/ткань</td>
							<td></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Водительское сиденье с механической регулировкой в 6 направлениях</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Обогрев передних сидений</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Пассажирское сиденье с механической регулировкой в 4-х направлениях</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Сидение заднего ряда, складывающееся в соотношении 60:40</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Подголовники задних сидений, регулируемые по высоте</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Задний центральный подлокотник</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Крепления детского сидения ISOFIX</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Бортовой компьютер</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Световой сигнализатор необходимости прохождения периодического технического обслуживания</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Кондиционер с ручным управлением</td>
							<td><b>+</b></td><td></td><td></td>
						</tr>
						<tr>
							<td>Автоматический кондиционер</td>
							<td></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Рулевое колесо обтянутое кожей</td>
							<td></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Рулевая колонка с регулировкой по высоте (2 положения)</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Многофункциональное рулевое колесо</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Полка багажника</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Солнцезащитный козырёк переднего пассажира с косметическим зеркалом </td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Зеркало заднего вида с антибликовым покрытием</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Передний центральный подлокотник с ёмкостью для хранения</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Задний центральный подлокотник с подстаканником</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Площадка для отдыха левой ноги водителя</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Подлокотники для пассажиров</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Прикуриватель</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Розетка 12V</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Съемная пепельница</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Очечник</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td colspan="4" data-colspan="4">Технологии и развлечения</td>
							<td></td><td></td><td></td>
						</tr>
						<tr>
							<td>Радио с MP3</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>8-ми дюймовый сенсорный HD-экран</td>
							<td></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Bluetooth</td>
							<td></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Mirror Link</td>
							<td></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Разъем присоединения USB</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Проигрыватель видео</td>
							<td></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>4 динамика</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Внешний аудио-интерфейс</td>
							<td></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Акустическая система</td>
							<td></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td colspan="4" data-colspan="4">Другое</td>
							<td></td><td></td><td></td>
						</tr>
						<tr>
							<td>Автомобильные инструменты</td>
							<td></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Знак аварийной остановки (Треугольник)</td>
							<td></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Инструмент, знак аварийной остановки</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td colspan="4" data-colspan="4">Конфигурация для зарубежных рынков</td>
							<td></td><td></td><td></td>
						</tr>
						<tr>
							<td>Заводская табличка (номер сертификата транспортного средства и т.д.), расположенная в салоне автомобиля</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
						</tr>
						<tr>
							<td>Предупреждающие знаки на русском языке (двигатель, топливо, подушки безопасности внутри автомобиля)</td>
							<td><b>+</b></td><td><b>+</b></td><td><b>+</b></td>
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
				></youtube>

			</div>

		</section>

	</main>
</template>

<script>

	import Flickity from 'vue-flickity';

	export default {
		name: "tigga3",
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
					title: 'ВАШ CHERY TIGGO 2',
					subTitle: ``,
					img: '../../../../static/assets/img/tigga2/tigga2_big.jpg'
				},
				Slides: [
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_01',
						title: 'Решетка радиатора в форме брилианта'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_02',
						title: 'Контуры отражателей фар выполнены в форме буквы С, что означает CHERY и что делает взгляд Tiggo 2 стремительным и независимым'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_03',
						title: 'Наружные зеркала заднего вида с повторителями поворотов, обогревом и электрической регулировкой'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_04',
						title: 'Продольные рейлинги на крыше'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_05',
						title: 'Окрашенные в цвет кузова дверные ручки'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_06',
						title: 'Спойлер задний'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_07',
						title: 'Современная комбинация приборов'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_08',
						title: 'Стильный дизайн салона'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_09',
						title: 'Многофункциональное кожаное рулевое колесо'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_10',
						title: '8-ми дюймовый сенсорный HD-экран'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_11',
						title: 'Cистема Cloudrive 2.0'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_12',
						title: 'Парковочный радар'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_13',
						title: 'Камера заднего вида'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_14',
						title: 'TPMS – система контроля давления в шинах'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_15',
						title: 'Подушки безопасности водителя и переднего пассажира'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_16',
						title: 'Круиз-контроль'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_17',
						title: 'Передняя подвеска McPherson, с универсальными настройками под различные дорожные условия. Задняя подвеска независимая на поперечных рычагах'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_18',
						title: 'Приеместый двигатель (106 л.с.) позволит быстро и безопасно совершать любые маневры'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_19',
						title: 'Современный автомат делает автомобиль очень динамичным как в городском потоке, так и в загородной поездке'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_20',
						title: 'Дорожный просвет 186 мм позволяет комфортно чуствовать себя на проселочной дороге'
					},
					{
						img: '../../../../static/assets/img/tigga2/slider/detail_21',
						title: 'LED дневные ходовые огни'
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
				},
				Search2: {
					placeholder: 'Поиск по комплектации...',
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
			},
			'Search2.content': function() {
				let filter, table, tr, td, i;
				filter = this.Search2.content.toUpperCase();
				table = document.getElementById("properties2");
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
