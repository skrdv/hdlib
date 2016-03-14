Meteor.startup(function () {
	console.log('Server started');
});

function adminUser(userId) {
	var adminUser = Meteor.users.findOne({username:"skrdv"});
	return (userId && adminUser && userId === adminUser._id );
}

if(Centers.find().count() === 0) {
	console.log('Adding dummy centers');

	var dummyCenters = [
		{
			title: 'Head',
			tranclate: 'Теменной центр',
			description: '',
		},
		{
			title: 'Ajna',
			tranclate: 'Аджна',
			description: '',
		},
		{
			title: 'Throat',
			tranclate: 'Горловой центр',
			description: '',
		},
		{
			title: 'G',
			tranclate: 'Центр Джи',
			description: '',
		},
		{
			title: 'Ego',
			tranclate: 'Центр Эго',
			description: '',
		},
		{
			title: 'Солнечное сплетение',
			tranclate: '',
			description: '',
		},
		{
			title: 'Sacral',
			tranclate: 'Сакральный центр',
			description: '',
		},
		{
			title: 'Spleen',
			tranclate: 'Селезенка',
			description: '',
		},
		{
			title: 'Root',
			tranclate: 'Корневой центр',
			description: '',
		},
	];

	_.each(dummyCenters, function(center){
		Centers.insert(center);
	});
}

if(Gates.find().count() === 0) {
	console.log('Adding dummy gates');

	var dummyGates = [
		{
			number: '47',
			center: 'Ajna',
			title: 'Gate of Realizing',
			tranclateate: 'Ворота Реализации',
			description: 'Энергия этих ворот приводит куски абстрактного знания из противоположных 64-х ворот в завершённую идею, в моменты вроде “Ага!”. Это прозрение и создание целой концепции или процесса из абстракции, без использования логики. Ранее это были разбросанные куски, но теперь это целое.',
		},
		{
			number: '24',
			center: 'Ajna',
			title: 'Gate of Rationalizing',
			tranclateate: 'Ворота Рационализации',
			description: '',
		},
		{
			number: '4',
			center: 'Ajna',
			title: 'Gate of Formulization',
			tranclateate: 'Ворота Формулизации',
			description: '',
		},
		{
			number: '11',
			center: 'Ajna',
			title: 'Gate of Ideas',
			tranclateate: 'Ворота Идей',
			description: '',
		},
		{
			number: '43',
			center: 'Ajna',
			title: 'Gate of Insight',
			tranclateate: 'Ворота Прозрения',
			description: '',
		},
		{
			number: '17',
			center: 'Ajna',
			title: 'Gate of Opinions',
			tranclateate: 'Ворота Мнений',
			description: '',
		},
	];

	_.each(dummyGates, function(gate){
		Gates.insert(gate);
	});
}

if(Posts.find().count() === 0) {
	console.log('Adding dummy posts');

	var dummyPosts = [
		{
			title: 'My First entry',
			slug: 'my-first-entry',
			description: 'Lorem ipsum dolor sit amet.',
			text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			timeCreated: moment().subtract(7, 'days').unix(),
			author: 'John Doe'
		},
		{
			title: 'My Second entry',
			slug: 'my-second-entry',
			description: 'Borem ipsum dolor sit amet, consetetur sadipscing.',
			text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			timeCreated: moment().subtract(5, 'days').unix(),
			author: 'John Doe'
		},
		{
			title: 'My Third entry',
			slug: 'my-third-entry',
			description: 'Dorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
			text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			timeCreated: moment().subtract(3, 'days').unix(),
			author: 'John Doe'
		},
		{
			title: 'My Fourth entry',
			slug: 'my-fourth-entry',
			description: 'Sorem ipsum dolor sit amet, consetetur sadipscing.',
			text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			timeCreated: moment().subtract(2, 'days').unix(),
			author: 'John Doe'
		},
		{
			title: 'My Fifth entry',
			slug: 'my-fifth-entry',
			description: 'Korem ipsum dolor sit amet, consetetur sadipscing elitr.',
			text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
			timeCreated: moment().subtract(1, 'days').unix(),
			author: 'John Doe'
		}
	];

	// we add the dummyPosts to our database
	_.each(dummyPosts, function(post){
		Posts.insert(post);
	});
}
