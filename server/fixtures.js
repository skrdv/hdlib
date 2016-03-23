Meteor.startup(function() {

});

function adminUser(userId) {
	var adminUser = Meteor.users.findOne({
		username: "skrdv"
	});
	return (userId && adminUser && userId === adminUser._id);
}

if (Pages.find().count() === 0) {
	Pages.insert({
		title: 'Introducing Telescope',
		slug: 'page-one',
		text: 'http://sachagreif.com/introducing-telescope/'
	});

	Pages.insert({
		title: 'Meteor',
		slug: 'page-two',
		text: 'http://meteor.com'
	});

	Pages.insert({
		title: 'The Meteor Book',
		slug: 'page-three',
		text: 'http://themeteorbook.com'
	});
}

if (Centers.find().count() === 0) {

	var dummyCenters = [{
		title: 'Head',
		translate: 'Теменной центр',
		description: '',
	}, {
		title: 'Throat',
		translate: 'Горловой центр',
		description: '',
	}, {
		title: 'Ajna',
		translate: 'Аджна',
		description: '',
	}, {
		title: 'G',
		translate: 'Центр Джи',
		description: '',
	}, {
		title: 'Ego',
		translate: 'Центр Эго',
		description: '',
	}, {
		title: 'Solar',
		translate: 'Солнечное сплетение',
		description: '',
	}, {
		title: 'Sacral',
		translate: 'Сакральный центр',
		description: '',
	}, {
		title: 'Spleen',
		translate: 'Селезенка',
		description: '',
	}, {
		title: 'Root',
		translate: 'Корневой центр',
		description: '',
	}, ];

	_.each(dummyCenters, function(center) {
		Centers.insert(center);
	});
}

if (Gates.find().count() === 0) {

	var dummyGates = [{
		number: '47',
		center: 'Ajna',
		title: 'Gate of Realizing',
		translate: 'Ворота Реализации',
		description: 'Энергия этих ворот приводит куски абстрактного знания из противоположных 64-х ворот в завершённую идею, в моменты вроде “Ага!”. Это прозрение и создание целой концепции или процесса из абстракции, без использования логики. Ранее это были разбросанные куски, но теперь это целое.',
	}, {
		number: '1',
		center: '',
		title: 'Ворота самовыражения. Gate of Self-Expression',
		translate: '',
		description: '',
	}, {
		number: '2',
		center: '',
		title: 'ВоротаВысшегоЗнания. Gate of Higher Knowledge',
		translate: '',
		description: '',
	}, {
		number: '3',
		center: '',
		title: 'Ворота Упорядочивания. Gate of Ordering',
		translate: '',
		description: '',
	}, {
		number: '4',
		center: 'Throat',
		title: 'Ворота Формулизации. Gate of Formulization',
		translate: '',
		description: '',
	}, {
		number: '5',
		center: '',
		title: 'Ворота Фиксированного Ритма. Gate of Fixed Rhythms',
		translate: '',
		description: '',
	}, {
		number: '6',
		center: '',
		title: 'Ворота Трения. Gate of Friction',
		translate: '',
		description: '',
	}, {
		number: '7',
		center: '',
		title: 'Ворота Собственной Роли. Gate of The Role of the Self',
		translate: '',
		description: '',
	}, {
		number: '8',
		center: '',
		title: 'Ворота Содействия. Gate of Contribution',
		translate: '',
		description: '',
	}, {
		number: '9',
		center: '',
		title: 'Ворота Фокуса. Gate of Focus',
		translate: '',
		description: '',
	}, {
		number: '10',
		center: '',
		title: 'Ворота Собственного Поведения. Gate of Behavior of the Self',
		translate: '',
		description: '',
	}, {
		number: '11',
		center: 'Throat',
		title: 'Ворота Идей. Gate of Ideas',
		translate: '',
		description: '',
	}, {
		number: '12',
		center: '',
		title: 'Ворота Осторожности. Gate of Caution',
		translate: '',
		description: '',
	}, {
		number: '13',
		center: '',
		title: 'Ворота Слушателя. Gate of Listener',
		translate: '',
		description: '',
	}, {
		number: '14',
		center: '',
		title: 'Ворота Силовых Навыков. Gate of Power Skills',
		translate: '',
		description: '',
	}, {
		number: '15',
		center: '',
		title: 'Ворота Экстремума. Gate of Extremes',
		translate: '',
		description: '',
	}, {
		number: '16',
		center: '',
		title: 'Ворота Умений. Gate of Skills',
		translate: '',
		description: '',
	}, {
		number: '17',
		center: 'Throat',
		title: 'Ворота Мнений. Gate of Opinions',
		translate: '',
		description: '',
	}, {
		number: '18',
		center: '',
		title: 'Ворота Корректировки. Gate of Correction',
		translate: '',
		description: '',
	}, {
		number: '19',
		center: '',
		title: 'Ворота Желаний. Gate of Wanting',
		translate: '',
		description: '',
	}, {
		number: '20',
		center: '',
		title: 'Ворота Сейчас. Gate of The Now',
		translate: '',
		description: '',
	}, {
		number: '21',
		center: '',
		title: 'Ворота Охотника. Gate of The Hunter/Huntress',
		translate: '',
		description: '',
	}, {
		number: '22',
		center: '',
		title: 'Ворота Открытости. Gate of Openness',
		translate: '',
		description: '',
	}, {
		number: '23',
		center: '',
		title: 'Ворота Асимиляции. Gate of Assimilation',
		translate: '',
		description: '',
	}, {
		number: '24',
		center: 'Throat',
		title: 'Ворота Рационализации. Gate of Rationalizing',
		translate: '',
		description: '',
	}, {
		number: '25',
		center: '',
		title: 'Ворота Духа Самости. Gate of The Spirit of the Self',
		translate: '',
		description: '',
	}, {
		number: '26',
		center: '',
		title: 'Ворота Эгоиста. Gate of The Egoist',
		translate: '',
		description: '',
	}, {
		number: '27',
		center: '',
		title: 'Ворота Заботы. Gate of Caring',
		translate: '',
		description: '',
	}, {
		number: '28',
		center: '',
		title: 'Ворота Игрока. Gate of The Game Player',
		translate: '',
		description: '',
	}, {
		number: '29',
		center: '',
		title: 'Ворота Согласия (ДА). Gate of Saying Yes',
		translate: '',
		description: '',
	}, {
		number: '30',
		center: '',
		title: 'Ворота Распознания Чувств. Gate of Recognition of Feelings',
		translate: '',
		description: '',
	}, {
		number: '31',
		center: '',
		title: 'Ворота Лидерства. Gate of Leading',
		translate: '',
		description: '',
	}, {
		number: '32',
		center: '',
		title: 'Ворота Непрерывности. Gate of Continuity',
		translate: '',
		description: '',
	}, {
		number: '33',
		center: '',
		title: 'Ворота Уединения. Gate of Privacy',
		translate: '',
		description: '',
	}, {
		number: '34',
		center: '',
		title: 'Ворота Силы. Gate of Power',
		translate: '',
		description: '',
	}, {
		number: '35',
		center: '',
		title: 'Ворота Перемен. Gate of Change',
		translate: '',
		description: '',
	}, {
		number: '36',
		center: '',
		title: 'Ворота Кризиса. Gate of Crisis',
		translate: '',
		description: '',
	}, {
		number: '37',
		center: '',
		title: 'Ворота Дружбы. Gate of Friendship',
		translate: '',
		description: '',
	}, {
		number: '38',
		center: '',
		title: 'Ворота Воина. Gate of The Fighter',
		translate: '',
		description: '',
	}, {
		number: '39',
		center: '',
		title: 'Ворота Провокатора. Gate of The Provocateur',
		translate: '',
		description: '',
	}, {
		number: '40',
		center: '',
		title: 'Ворота Одиночества. Gate of Aloneness',
		translate: '',
		description: '',
	}, {
		number: '41',
		center: '',
		title: 'Ворота Концентрации. Gate of Contraction',
		translate: '',
		description: '',
	}, {
		number: '42',
		center: '',
		title: 'Ворота Роста. Gate of Growth',
		translate: '',
		description: '',
	}, {
		number: '43',
		center: 'Throat',
		title: 'Ворота Прозрения. Gate of Insight',
		translate: '',
		description: '',
	}, {
		number: '44',
		center: '',
		title: 'Ворота бдительности. Gate of Alertness',
		translate: '',
		description: '',
	}, {
		number: '45',
		center: '',
		title: 'Ворота Владельца. Gate of Gatherer',
		translate: '',
		description: '',
	}, {
		number: '46',
		center: '',
		title: 'Ворота Собственной Решимости.',
		translate: '',
		description: '',
	}, {
		number: '47',
		center: 'Throat',
		title: 'Ворота Реализации. Gate of Realizing',
		translate: '',
		description: '',
	}, {
		number: '48',
		center: '',
		title: 'Ворота Глубины. Gate of Depth',
		translate: '',
		description: '',
	}, {
		number: '49',
		center: '',
		title: 'Ворота Принципов. Gate of Principles',
		translate: '',
		description: '',
	}, {
		number: '50',
		center: '',
		title: 'Ворота Ценностей. Gate of Values',
		translate: '',
		description: '',
	}, {
		number: '51',
		center: '',
		title: 'Ворота Шока. Gate of Shock',
		translate: '',
		description: '',
	}, {
		number: '52',
		center: '',
		title: 'Ворота Бездействия. Gate of Inaction',
		translate: '',
		description: '',
	}, {
		number: '53',
		center: '',
		title: 'Ворота Начал. Gate of Beginnings',
		translate: '',
		description: '',
	}, {
		number: '54',
		center: '',
		title: 'Ворота Амбиций. Gate of Ambition',
		translate: '',
		description: '',
	}, {
		number: '55',
		center: '',
		title: 'Ворота Духа. Gate of Spirit',
		translate: '',
		description: '',
	}, {
		number: '56',
		center: '',
		title: 'Ворота Стимуляции. Gate of Stimulation',
		translate: '',
		description: '',
	}, {
		number: '57',
		center: '',
		title: 'Ворота Интуитивного Прозрения. Gate of Intuitive Insight',
		translate: '',
		description: '',
	}, {
		number: '58',
		center: '',
		title: 'Ворота Живости. Gate of Aliveness',
		translate: '',
		description: '',
	}, {
		number: '59',
		center: '',
		title: 'Ворота Сексуальности. Gate of Sexuality',
		translate: '',
		description: '',
	}, {
		number: '60',
		center: '',
		title: 'Ворота Принятия (вызова?). Gate of Acceptance',
		translate: '',
		description: '',
	}, {
		number: '61',
		center: 'Head',
		title: 'Ворота Мистерии. Gate of Mystery',
		translate: '',
		description: '',
	}, {
		number: '62',
		center: '',
		title: 'Ворота Деталей. Gate of Detail',
		translate: '',
		description: '',
	}, {
		number: '63',
		center: 'Head',
		title: 'Ворота Сомнений. Gate of Doubt',
		translate: '',
		description: '',
	}, {
		number: '64',
		center: 'Head',
		title: 'Ворота Замешательства. Gate of Confusion',
		translate: '',
		description: '',
	} ];

	_.each(dummyGates, function(gate) {
		Gates.insert(gate);
	});
}

if (Posts.find().count() === 0) {

	var dummyPosts = [{
		title: 'My First entry',
		slug: 'my-first-entry',
		description: 'Lorem ipsum dolor sit amet.',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		timeCreated: moment().subtract(7, 'days').unix(),
		author: 'John Doe'
	}, {
		title: 'My Second entry',
		slug: 'my-second-entry',
		description: 'Borem ipsum dolor sit amet, consetetur sadipscing.',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		timeCreated: moment().subtract(5, 'days').unix(),
		author: 'John Doe'
	}, {
		title: 'My Third entry',
		slug: 'my-third-entry',
		description: 'Dorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		timeCreated: moment().subtract(3, 'days').unix(),
		author: 'John Doe'
	}, {
		title: 'My Fourth entry',
		slug: 'my-fourth-entry',
		description: 'Sorem ipsum dolor sit amet, consetetur sadipscing.',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		timeCreated: moment().subtract(2, 'days').unix(),
		author: 'John Doe'
	}, {
		title: 'My Fifth entry',
		slug: 'my-fifth-entry',
		description: 'Korem ipsum dolor sit amet, consetetur sadipscing elitr.',
		text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
		timeCreated: moment().subtract(1, 'days').unix(),
		author: 'John Doe'
	}];

	// we add the dummyPosts to our database
	_.each(dummyPosts, function(post) {
		Posts.insert(post);
	});
}
