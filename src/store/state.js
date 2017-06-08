export default {
	Catalogue: {
		chery: [
			{
				image: "../../../../static/assets/img/tigga2/tigga2_big.jpg",
				model: "CHERY TIGGO 2",
				description: 'Стильный дизайн, уверенность на дороге и за пределами трассы. Tiggo 2 - это ответ на все вопросы повседневной изни.',
				price: "759 900",
				route: 'tigga2'
			},
			{
				image: "../../../../static/assets/img/tigga3/tigga3_big.jpg",
				model: "CHERY TIGGO 3",
				description: 'Современный городской кроссовер, оснащённый инновационной мультимедийной системой CHERY CLOUDRIVE.',
				price: "817 000",
				route: 'tigga3'
			},
			{
				image: "../../../../static/assets/img/tigga5/tigga5_big.jpg",
				model: "CHERY TIGGO 5",
				description: 'Он словно тигр, готовый в любую секунду сорваться с места для покорения городских джунглей.',
				price: "972 900",
				route: 'tigga5'
			}
		],
		hawtai: [
			{
				image: "../../../../static/assets/img/boliger/bolinger_big.png",
				model: "BOLIGER",
				description: 'Люксовый китайский внедорожник, способный удивлять.',
				price: "939 800",
				route: 'boliger'
			}
		],
		changan: [
			{
				image: "../../../../static/assets/img/cs35/cs35_big.png",
				model: "CS35",
				description: 'Компактный, стильный и экономичный кроссовер на все случаи жизни',
				price: "799 900",
				route: 'cs35'
			},
			{
				image: "../../../../static/assets/img/eado/eado_big.png",
				model: "EADO",
				description: 'Безопасный, вместительный, динамичный среднеразмерный седан.',
				price: "560 000",
				route: 'eado'
			},
			{
				image: "../../../../static/assets/img/raeton/raeton_big.png",
				model: "RAETON",
				description: 'Комфортабельный, бесшумный, мощный cедан бизнес-класса',
				price: "1 339 000",
				route: 'raeton'
			}
		]
	},
	Filter: {
		categories: [
			'Аксессуары',
			'Двигатель',
			'Кондиционер',
			'Кузов',
			'Салон',
			'Система ДВС',
			'Трансмиссия',
			'Ходовая часть',
			'Электрика',
			'Электрика ДВС'
		]
	},
	TestDrive: {
		isOpened: false,
		options: [
			'Chery Tiggo 2',
			'Chery Tiggo 3',
			'Chery Tiggo 5',
			'Changan CS35',
			'Changan EADO',
			'Changan RAETON',
		]
	},
	News: {
		news: [
			{
				title: 'Новая модель Chery',
				description: 'Короткое описание новости',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				route: ''
			},
			{
				title: 'Новая модель Chery',
				description: 'Короткое описание новости',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				route: ''
			},
			{
				title: 'Новая модель Chery',
				description: 'Короткое описание новости',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				route: ''
			},
			{
				title: 'Новая модель Chery',
				description: 'Короткое описание новости',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				route: ''
			}
		],
		actions: [
			{
				title: 'Скидка 10% на всё!',
				description: 'Короткое описание акции',
				text: 'Текст про скидку, и то-сё, детали',
				route: 'main'
			},
			{
				title: 'Скидка 10% на всё!',
				description: 'Короткое описание акции',
				text: 'Текст про скидку, и то-сё, детали',
				route: 'main'
			},
			{
				title: 'Скидка 10% на всё!',
				description: 'Короткое описание акции',
				text: 'Текст про скидку, и то-сё, детали',
				route: 'main'
			},
			{
				title: 'Скидка 10% на всё!',
				description: 'Короткое описание акции',
				text: 'Текст про скидку, и то-сё, детали',
				route: 'main'
			}
		]
	},
	Posts: [],
	PostsIsLoaded: false,
	Cars: {
		chery: {
			tiggo2: [
				{
					title: 'Comfort MT',
					price: '395 188'
				},
				{
					title: 'Luxury MT',
					price: '499 088'
				},
				{
					title: 'Luxury CVT',
					price: '599 088'
				}
			],
			tiggo3: [
				{
					title: 'Comfort MT',
					price: '395 188'
				},
				{
					title: 'Luxury MT',
					price: '499 088'
				},
				{
					title: 'Luxury CVT',
					price: '599 088'
				}
			],
			tiggo5: [
				{
					title: 'Standart MT',
					price: '972 900 **'
				},
				{
					title: 'Comfort MT',
					price: '1 049 900'
				},
				{
					title: 'Comfort CVT',
					price: '1 119 900'
				},
				{
					title: 'Luxury CVT',
					price: '1 179 000'
				}
			]
		},
		changan: {
			cs35: [
				{
					title: 'MТ COMFORT',
					price: '799 900'
				},
				{
					title: 'MТ LUXE',
					price: '835 900'
				},
				{
					title: 'АТ COMFORT',
					price: '885 900'
				},
				{
					title: 'АТ LUXE',
					price: '925 920'
				}
			],
			eado: [
				{
					title: 'MТ COMFORT',
					price: '560 000'
				},
				{
					title: 'MТ LUXE',
					price: '585 650'
				},
				{
					title: 'АТ LUXE',
					price: '628 000'
				}
			],
			raeton: [
				{
					title: 'АТ LUXE',
					price: '1 339 000'
				}
			]
		},
		hawtai: {
			boliger: [
				{
					title: 'Luxe MT',
					price: '939 800'
				},
				{
					title: 'Luxe AT',
					price: '989 800'
				}
			]
		}
	}
};
