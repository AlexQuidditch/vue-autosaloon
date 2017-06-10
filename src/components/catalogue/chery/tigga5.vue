<template lang="html">
	<main id="main" class="main">
		<section class="product" role="product">
			<div class="container _flex-column _a-center">
				<h1 class="product__title">{{ product.title }}</h1>
				<img :src="product.img" :alt="product.title" class="product__image" />
				<h2 class="product__subtitle">{{ product.subTitle }}</h2>
				<flickity ref="slider"
					:options="flickityOptions"
					class="product-slider">
					<div v-for="( slideItem , index ) in Slides" :key="slideItem.key"
						class="product-slider__slide">
						<img @click = "openGallery(index)"
							:src=" slideItem.img + '.jpg' "
							:alt="slideItem.title"
							:title="slideItem.title"
							class="product-slider__slide-image"
						/>
						<p class="product-slider__slide-title">{{ slideItem.title }}</p>
					</div>
				</flickity>

				<colors :Colors = "product.Colors" ></colors>

				<table class="first-table _col-5" aria-label="Комплектация и цены">
					<tr>
						<th>Комплектация</th>
						<th v-for="priceItem in Prices" :key="priceItem.key">{{ priceItem.title }}</th>
					</tr>
					<tr>
						<td>Розничная цена, руб.</td>
						<th v-for="priceItem in Prices" :key="priceItem.key">{{ priceItem.price }}</th>
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
							<th>Технические характеристики Tiggo 5 NEW</th>
							<th v-for="priceItem in Prices" :key="priceItem.key">{{ priceItem.title }}</th>
						</tr>
						<tr>
							<td>Основные</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Кузов</td>
							<td colspan="4" data-colspan="4">Несущий кузов</td>
						</tr>
						<tr>
							<td>Привод</td>
							<td colspan="4" data-colspan="4">Передний</td>
						</tr>
						<tr>
							<td>Тип усилителя руля</td>
							<td colspan="3" data-colspan="3">Гидравлический</td>
							<td>Электрический</td>
						</tr>
						<tr>
							<td>Экологический класс</td>
							<td colspan="4" data-colspan="4">Euro 5</td>
						</tr>
						<tr>
							<td>Двигатель</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Модель</td>
							<td colspan="4" data-colspan="4">SQR484F</td>
						</tr>
						<tr>
							<td>Тип двигателя</td>
							<td colspan="4" data-colspan="4">Рядный четырёхцилиндровый, с распределенным впрыском топлива, системой изменения фаз газораспределения (DVVT)</td>
						</tr>
						<tr>
							<td>Объем двигателя (см. куб.)</td>
							<td colspan="4" data-colspan="4">1971</td>
						</tr>
						<tr>
							<td>Максимальная мощность (кВт/об.мин)</td>
							<td colspan="4" data-colspan="4">100/5750 (136 л.с.)</td>
						</tr>
						<tr>
							<td>Максимальный крутящий момент (Нм. /об.мин)</td>
							<td colspan="4" data-colspan="4">180/4300-4500</td>
						</tr>
						<tr>
							<td>Степень сжатия</td>
							<td colspan="4" data-colspan="4">10</td>
						</tr>
						<tr>
							<td>Объем топливного бака (л)</td>
							<td colspan="4" data-colspan="4">55 </td>
						</tr>
						<tr>
							<td>Тип трансмиссии</td>
							<td colspan="2" data-colspan="2">5MT</td>
							<td colspan="2" data-colspan="2">CVT</td>
						</tr>
						<tr>
							<td>Размеры и масса</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Длина х Ширина x Высота (мм)</td>
							<td colspan="4" data-colspan="4">4506x1841x1740</td>
						</tr>
						<tr>
							<td>Колесная база (мм)</td>
							<td colspan="4" data-colspan="4">2610</td>
						</tr>
						<tr>
							<td>Колея передних колес (мм)</td>
							<td colspan="4" data-colspan="4">1550</td>
						</tr>
						<tr>
							<td>Колея задних колес (мм)</td>
							<td colspan="4" data-colspan="4">1530</td>
						</tr>
						<tr>
							<td>Минимальный дорожный просвет (мм)</td>
							<td colspan="4" data-colspan="4">190</td>
						</tr>
						<tr>
							<td>Снаряженная масса (кг)</td>
							<td colspan="2" data-colspan="2">1495</td>
							<td colspan="2" data-colspan="2">1537</td>
						</tr>
						<tr>
							<td>Объем багажника (л)</td>
							<td colspan="4" data-colspan="4">370-1000</td>
						</tr>
						<tr>
							<td>Подвеска и тормозная система</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Тип передней подвески</td>
							<td colspan="4" data-colspan="4">Независимая, типа McPherson, со стабилизатором поперечной устойчивости</td>
						</tr>
						<tr>
							<td>Тип задней подвески</td>
							<td colspan="4" data-colspan="4">Независимая, на поперечных рычагах, с гидравлическими телескопическими амортизаторами и стабилизатором поперечной устойчивости</td>
						</tr>
						<tr>
							<td>Тормозные механизмы передних колес</td>
							<td colspan="4" data-colspan="4">Дисковые вентилируемые</td>
						</tr>
						<tr>
							<td>Тормозные механизмы задних колес</td>
							<td colspan="4" data-colspan="4">Дисковые невентилируемые</td>
						</tr>
						<tr>
							<td>Тип стояночного тормоза</td>
							<td colspan="4" data-colspan="4">Механический ручной тормоз</td>
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

				<table id="properties2" class="second-table _col-5" aria-label="Комплектация">
					<tbody>
						<tr style="visibility: hidden;">
							<th>Технические характеристики:</th>
							<th>Standart MT</th>
							<th>Comfort MT</th>
							<th>Comfort CVT</th>
							<th>Luxury CVT</th>
						</tr>
						<tr>
							<td>Литые диски (R17)</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Передние стеклоочистители с бескаркасными щетками</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Задний стеклоочиститель</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Люк с&nbsp;электроприводом</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Галогенные фары с фокусирующими элементами</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Светодиодные ходовые огни</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Электрическая регулировка угла светового потока фар</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Передние противотуманные фары</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Предупреждающий фонарь открытия передней двери</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Светодиодные комбинированные задние фонари</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Светодиодный дополнительный стоп-сигнал</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Наружные зеркала заднего вида с&nbsp;электрической регулировкой и&nbsp;обогревом <sup>(2)</sup></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Наружные зеркала заднего вида с электроприводом складывания</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Безопасность</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Сигнализация</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Иммобилайзер</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Напоминание о неизвлечённом ключе</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Звуковое предупреждение о превышении скорости</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Задние датчики парковки</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Камера заднего вида</td>
							<td></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Антиблокировочная система (ABS)</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Система распределения тормозных усилий (EBD)</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Система курсовой устойчивости (ESP)</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Противобуксовочная система (ASR)</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Система помощи при старте на&nbsp;подъеме (HHC)</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Электронная система экстренного торможения (EBA)</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Система динамического контроля тяги (DTC)</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Подушки безопасности водителя и переднего пассажира</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Передние боковые подушки безопасности</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Ремни безопасности передних пассажиров с преднатяжителем и ограничением усилия</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>3-точечные ремни безопасности задних сидений</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Напоминание о непристёгнутом ремне водителя </td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Напоминание о непристёгнутом ремне переднего пассажира</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Управление</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Круиз-контроль</td>
							<td></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Система бесключевого доступа</td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Ключ дистанционного открытия дверей</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Передние электростеклоподъемники</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Задние электростеклоподъемники</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Центральный замок</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Бесключевой запуск и остановка двигателя кнопкой старт/стоп</td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Функция подъема и опускания всех стеклоподъёмников одной кнопкой</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Электростеклоподъемники с функцией противозащемления</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Блокировка задних дверей от открывания детьми</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Комфорт</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Тёмный салон</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Тканевые сиденья</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td></td>
						</tr>
						<tr>
							<td>Кожаные сиденья</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Водительское сиденье с электрической регулировкой в 6 направлениях</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Подогрев передних сидений</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Пассажирское сиденье с ручной регулировкой в 4-х направлениях</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Сиденье заднего ряда, складывающееся в соотношении 60:40</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Подголовники задних сидений, регулируемые по высоте</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Заднее сиденье с функцией лёгкого складывания</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Крепления детского сиденья ISO-FIX</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Бортовой компьютер</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Дисплей внешней температуры </td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Кондиционер</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td></td>
						</tr>
						<tr>
							<td>Двухзонный климат-контроль</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Рулевое колесо с кожаной отделкой</td>
							<td></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Рулевая колонка с регулировкой по высоте</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Многофункциональное рулевое колесо</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Шторка багажника</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Солнцезащитный козырёк водителя</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Солнцезащитный козырёк переднего пассажира с косметическим зеркалом </td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Зеркало заднего вида с антибликовым покрытием</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Передний центральный подлокотник с ёмкостью для хранения</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Задний центральный подлокотник в сидении с подстаканниками</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Кожаная обивка двери</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Площадка для отдыха левой ноги водителя</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Декоративные накладки на порогах из нержавеющей стали, передние накладки со светодиодной подсветкой</td>
							<td></td>
							<td></td>
							<td></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Прикуриватель</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Розетка 12V</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Верхние пассажирские ручки с микролифтом</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Звукоизоляционная накладка запасного колеса</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Технологии и развлечения</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Технология Mirror link</td>
							<td></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Радио</td>
							<td><b>+</b></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>8-ми дюймовый сенсорный HD-экран</td>
							<td></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Bluetooth</td>
							<td></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>USB</td>
							<td><b>+</b></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Разъемы USB+iPod</td>
							<td></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>DVD-проигрыватель без использования диска</td>
							<td></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>4 динамика</td>
							<td><b>+</b></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>6 динамиков</td>
							<td></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Другое</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Знак аварийной остановки (Треугольник)</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Конфигурация для зарубежных рынков</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>Заводская табличка (номер сертификата транспортного средства и т.д.), расположенная в салоне автомобиля</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
						<tr>
							<td>Предупреждающие знаки на русском языке (двигатель, топливо, подушки безопасности внутри автомобиля)</td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
							<td><b>+</b></td>
						</tr>
					</tbody>
				</table>

				<mobile-notation></mobile-notation>

				<a :href="product.priceList" class="product__price-list waves-effect waves-light" target="_blank" >Скачать прайс-лист</a>

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

		<transition name="fade">
			<gallery-overlay v-if="galleryOverlayIsOpened"
				@galleryClose="closeGallery()"
				:Slides="Slides"
				:index="slideIndex"
				>
			</gallery-overlay>
		</transition>

	</main>
</template>

<script>

	import Flickity from 'vue-flickity';
	import colors from '../../templates/colors';
	import mobileNotation from '../../templates/mobile-notation';
	import galleryOverlay from '../../templates/gallery-overlay';

	export default {
		name: "tigga5",
		components: { Flickity , mobileNotation , galleryOverlay , colors },
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
					title: 'ВАШ CHERY TIGGO 5',
					subTitle: `ОН СЛОВНО ТИГР, ГОТОВЫЙ В ЛЮБУЮ СЕКУНДУ \n СОРВАТЬСЯ С МЕСТА ДЛЯ ПОКОРЕНИЯ ГОРОДСКИХ ДЖУНГЛЕЙ`,
					img: '../../../../static/assets/img/tigga5/tigga5_big.jpg',
					priceList: 'http://www.chery.ru/media/upload/tiggo5_new_price.pdf',
					Colors: [
						{
							title: 'Чёрный',
							image: '../../../../static/assets/img/tigga5/colors/color_black.jpg'
						},
						{
							title: 'Акввамарин',
							image: '../../../../static/assets/img/tigga5/colors/color_blue.jpg'
						},
						{
							title: 'Синий',
							image: '../../../../static/assets/img/tigga5/colors/color_blue2.jpg'
						},
						{
							title: 'Коричневый',
							image: '../../../../static/assets/img/tigga5/colors/color_brown.jpg'
						},
						{
							title: 'Тёмно--вишнёвый',
							image: '../../../../static/assets/img/tigga5/colors/color_darkcherry.jpg'
						},
						{
							title: 'Серый',
							image: '../../../../static/assets/img/tigga5/colors/color_grey.jpg'
						},
						{
							title: 'Оранжевый',
							image: '../../../../static/assets/img/tigga5/colors/color_orange.jpg'
						},
						{
							title: 'Белый',
							image: '../../../../static/assets/img/tigga5/colors/color_white.jpg'
						}
					]
				},
				Slides: [
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_01',
						title: 'Максимальный преодолеваемый уклон 48%'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_02',
						title: 'Дорожный просвет 190 мм позволяет преодолевать брод до 600 мм'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_03',
						title: 'Передняя подвеска McPherson, с универсальными настройками под различные дорожные условия'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_04',
						title: 'Динамика автомобиля с мощным двухлитровым двигателем (136 л.с.) позволит быстро и безопасно совершать любые маневры'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_05',
						title: 'Система стабилизации BOSCH ESP устанавливается, как стандартное оборудование'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_06',
						title: 'Две фронтальные и две боковые подушки безопасности максимально защищают пассажиров'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_07',
						title: 'Кузов имеет легкую, но прочную конструкцию, благодаря технологии компании Benteler по термоформовке высокопрочной стали'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_08',
						title: 'Приборная панель выдержана в спортивном стиле и единой, манящей вперед цветовой гамме'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_09',
						title: 'Мастерски проработанный и исполненный дизайн интерьера, с использованием декорати­вных формованных панелей плавных очертаний'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_10',
						title: 'Взгляд на автомобиль спереди замирает от уверенного спокойствия отдыхающего тигра'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_11',
						title: 'Стильные задние фонари со светодиодными элементами'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_12',
						title: 'Головной свет с противобликовым темным покрытием и светодиодными элементами'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_13',
						title: 'Дневные ходовые огни с высокой светоотдачей являются стандартным оборудованием'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_14',
						title: '17-дюймовые диски из высокопрочного алюминиевого сплава'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_15',
						title: 'LED освещение салона'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_16',
						title: 'Многофункциональное кожаное рулевое колесо, с возможностью регулировки по высоте'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_17',
						title: 'Сиденье водителя с электрорегулировками в шести направлениях'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_18',
						title: 'Эргономичные кожаные сиденья'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_19',
						title: 'Задние датчики парковки с широким углом обзора'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_20',
						title: 'Система Старт-Стоп двигателя'
					},
					{
						img: '../../../../static/assets/img/tigga5/slider/detail_21',
						title: 'Складывающиеся зеркала заднего вида с дистанционным управлением'
					}
				],
				galleryOverlayIsOpened: false,
				slideIndex: 0,
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
		computed: {
			Prices() {
				return this.$state.Cars.chery.tiggo5
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
			},
			openGallery(index) {
				this.slideIndex = index;
				this.galleryOverlayIsOpened = true;
			},
			closeGallery() {
				this.galleryOverlayIsOpened = false;
			}
		}
	}
</script>

<style lang="scss" src="../../../scss/layout/car-page.scss"></style>
