<template lang="html">
	<main id="main" class="main">
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
							<th>Технические характеристики</th>
							<th>Comfort MT</th>
							<th>Luxury MT</th>
							<th>Luxury CVT</th>
						</tr>
						<tr>
							<td colspan="4" data-colspan="4">Основные</td>
						</tr>
						<tr>
							<td>Кузов</td>
							<td colspan="3" data-colspan="3">Цельнометаллический несущий универсал/5</td>
						</tr>
						<tr>
							<td>Привод</td>
							<td colspan="3" data-colspan="3">Передний</td>
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
							<td colspan="4" data-colspan="4">Двигатель</td>
						</tr>
						<tr>
							<td>Модель </td>
							<td colspan="3" data-colspan="3">SQRE4G16</td>
						</tr>
						<tr>
							<td>Тип двигателя</td>
							<td colspan="3" data-colspan="3">Рядный четырёхцилиндровый, четырехтактный с искровым зажиганием, с распределенным впрыском топлива с электронным управлением </td>
						</tr>
						<tr>
							<td>Объем двигателя (см. куб.)</td>
							<td colspan="3" data-colspan="3">1598 </td>
						</tr>
						<tr>
							<td>Максимальная мощность (кВт/об.мин)</td>
							<td colspan="3" data-colspan="3">93/6150 (126 л.с.) </td>
						</tr>
						<tr>
							<td>Максимальный крутящий момент (Нм. /об.мин)</td>
							<td colspan="3" data-colspan="3">160/3900 </td>
						</tr>
						<tr>
							<td>Степень сжатия</td>
							<td colspan="3" data-colspan="3">11 </td>
						</tr>
						<tr>
							<td>Объем топливного бака (л)</td>
							<td colspan="3" data-colspan="3">55 </td>
						</tr>
						<tr>
							<td>Тип трансмиссии</td>
							<td colspan="2" data-colspan="2">Механическая</td>
							<td colspan="1" data-colspan="1">Вариатор (CVT)</td>
						</tr>
						<tr>
							<td colspan="4" data-colspan="4">Размеры и масса</td>
						</tr>
						<tr>
							<td>Длина х Ширина x Высота (мм)</td>
							<td colspan="3" data-colspan="3">4419x1765x1651 </td>
						</tr>
						<tr>
							<td>Колесная база (мм)</td>
							<td colspan="3" data-colspan="3">2510 </td>
						</tr>
						<tr>
							<td>Колея передних колес (мм)</td>
							<td colspan="3" data-colspan="3">1500</td>
						</tr>
						<tr>
							<td>Колея задних колес (мм)</td>
							<td colspan="3" data-colspan="3">1495</td>
						</tr>
						<tr>
							<td>Минимальный дорожный просвет (мм)</td>
							<td colspan="3" data-colspan="3">190 </td>
						</tr>
						<tr>
							<td>Снаряженная масса (кг)</td>
							<td colspan="2" data-colspan="2">1480</td>
							<td colspan="1" data-colspan="1">1487</td>
						</tr>
						<tr>
							<td>Объем багажника (л)</td>
							<td colspan="3" data-colspan="3">550-1800 </td>
						</tr>
						<tr>
							<td colspan="4" data-colspan="4">Подвеска и тормозная система</td>
						</tr>
						<tr>
							<td>Тип передней подвески</td>
							<td colspan="3" data-colspan="3"> Независимая, пружинная, типа McPherson, со стабилизатором поперечной устойчивости</td>
						</tr>
						<tr>
						<td>Тип задней подвески</td>
							<td colspan="3" data-colspan="3">Независимая, на поперечных рычагах, с гидравлическими телескопическими амортизаторами и стабилизатором поперечной устойчивости</td>
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
				<iframe class="gallery__video"
					src="https://www.youtube.com/embed/u902_BROjbI?rel=0"
					frameborder="0" allowfullscreen></iframe>
				<iframe class="gallery__video"
					src="https://www.youtube.com/embed/ooBTM8tWUco?rel=0"
					frameborder="0" allowfullscreen></iframe>
				<iframe class="gallery__video"
					src="https://www.youtube.com/embed/u902_BROjbI?rel=0"
					frameborder="0" allowfullscreen></iframe>
				<iframe class="gallery__video"
					src="https://www.youtube.com/embed/u902_BROjbI?rel=0"
					frameborder="0" allowfullscreen></iframe>
				<iframe class="gallery__video"
					src="https://www.youtube.com/embed/ooBTM8tWUco?rel=0"
					frameborder="0" allowfullscreen></iframe>
				<iframe class="gallery__video"
					src="https://www.youtube.com/embed/u902_BROjbI?rel=0"
					frameborder="0" allowfullscreen></iframe>
			</div>

		</section>

	</main>
</template>

<script>

	import Flickity from 'vue-flickity';

	export default {
		name: "tigga3",
		components: {
    	    Flickity
    	},
		data() {
			return {
				product: {
					title: 'ВАШ CHERY TIGGO 3',
					subTitle: `ЯРКАЯ, ВЫРАЗИТЕЛЬНАЯ, СМЕЛАЯ ИНТЕРПРЕТАЦИЯ КЛАССИКИ`,
					img: '../../../../static/assets/img/tigga3/tigga3_big.jpg'
				},
				Slides: [
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_01',
						title: 'Передние дневные светодиодные ходовые огни'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_02',
						title: '17-дюймовые диски из высокопрочного алюминиевого сплава'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_03',
						title: 'Окрашенные в цвет кузова дверные ручки c хромированной вставкой'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_04',
						title: 'Хромированные защитные молдинги боковых дверей'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_05',
						title: 'Стильная приборная панель со встроенным бортовым компьютером'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_06',
						title: 'Передний центральный подлокотник с ёмкостью для хранения'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_07',
						title: 'Сиденья выполнены из комбинированных материалов: экокожа и ткань'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_08',
						title: 'Многофункциональное кожаное рулевое колесо'
					},
					{
						img: '../../../../static/assets/img/tigga3/slider/detail_09',
						title: '8-ми дюймовый сенсорный HD-экран'
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
		}
	}
</script>

<style lang="scss">

	@import "../../../scss/partials/_layout";
	@import "../../../scss/partials/_mixins";
	@import "../../../scss/partials/_variables";

	.product {
		width: 100%;
		margin-top: 60px;
		&__title {
			margin-top: 2rem;
			text-align: center;
			font-size: 3rem
		}
		&__subtitle {
			text-align: center;
			white-space: pre;
			font-size: 1.5rem
		}
		&__image {
			margin: 3rem 0px;
		}
	}
	.first-table,
	.second-table {
		width: 100%;
		text-align: center;
		td, th {
			width: 22%;
			padding: 3px 0;
			font-size: 18px;
			line-height: 1.75;
			border-bottom: solid 1px $black;
			&:nth-child(1) {
				text-align:	 left;
				width: 35%;
			}
			&[colspan="2"] {
				border-right: solid 1px $black;
				border-left: solid 1px $black
			}
			&[colspan="4"] {
				font-size: 20px;
				line-height: 2;
				font-weight: 400;
			}
		}
	}
	.first-table {
		z-index: 200;
		position: sticky $headerHeight auto auto;
		padding-top: 1rem;
		background-color: $whited;
	}
	.second-table {
		margin-top: -2.5rem;
		margin-bottom: 2rem;
	}
	.search {
		width: 100%;
		margin-top: 1rem;
		&__fieldset {}
		&__legend {}
		&__input {
			z-index: 100;
			width: 100%;
			padding: 0 1rem;
			line-height: 3;
			color: $red transparent;
			border: solid 2px $red;
			outline: none;
			transition: box-shadow .3s ease-in-out;
			&:focus {
				@include MDShadow-1;
			}
		}
	}
	.product-slider {
		size: 100%;
		background-color: $whited;
		.flickity-viewport {
			min-height: 400px;
		}
		.flickity-slider {
			display: flex;
			align-items: center;
		}
		&__slide {
			size: 350px auto;
			margin: 0 20px;
			@include MDShadow-1;
		}
		&__slide-image {
			width: 100%;
		}
		&__slide-title {
			padding: 10px;
			padding-top: 5px;
			margin: 0;
			font-size: 14px;
			font-weight: 400;
			line-height: 1.5;
		}
		.flickity-page-dots {
			z-index: 100;
			width: auto;
			bottom: 0;
			padding: 10px;
			.dot {
				opacity: 1;
				size: 15px;
				background: rgba($red, .75);
				@include MDShadow-1;
				transition:
					background .3s ease-in-out,
					box-shadow .3s ease-in-out;
				&.is-selected {
					background: rgba($red, 1);
					@include MDShadow-2;
				}
			}
		}
		.flickity-prev-next-button {
			position: absolute;
			top: 50%;
			size: 50px;
			background-color: $whited;
			cursor: pointer;
			border: solid 1px rgba($black, .45);
			border-radius: 50%;
			& .arrow {
				fill: $black
			}
			&.previous {
				left: 0;
				transform: translate(-50%,-50%)
			}
			&.next {
				right: 0;
				transform: translate(50%,-50%)
			}
		}
	}
	.gallery {
		width: 100%;
		margin-top: 60px;
		&__title {
			width: 100%;
			margin-bottom: 3rem;
			text-align: center;
			font-size: 3rem
		}
		&__video {
			size: 40% 300px;
			margin-bottom: 2rem;
			@include MDShadow-2;
		}
	}

</style>
