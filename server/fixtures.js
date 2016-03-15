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
		title: 'Ajna',
		translate: 'Аджна',
		description: '',
	}, {
		title: 'Throat',
		translate: 'Горловой центр',
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
		translateate: 'Ворота Реализации',
		description: 'Энергия этих ворот приводит куски абстрактного знания из противоположных 64-х ворот в завершённую идею, в моменты вроде “Ага!”. Это прозрение и создание целой концепции или процесса из абстракции, без использования логики. Ранее это были разбросанные куски, но теперь это целое.',
	}, {
		number: '24',
		center: 'Ajna',
		title: 'Gate of Rationalizing',
		translateate: 'Ворота Рационализации',
		description: '',
	}, {
		number: '4',
		center: 'Ajna',
		title: 'Gate of Formulization',
		translateate: 'Ворота Формулизации',
		description: '',
	}, {
		number: '11',
		center: 'Ajna',
		title: 'Gate of Ideas',
		translateate: 'Ворота Идей',
		description: '',
	}, {
		number: '43',
		center: 'Ajna',
		title: 'Gate of Insight',
		translateate: 'Ворота Прозрения',
		description: '',
	}, {
		number: '17',
		center: 'Ajna',
		title: 'Gate of Opinions',
		translateate: 'Ворота Мнений',
		description: '',
	}, ];

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
