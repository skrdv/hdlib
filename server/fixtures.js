Meteor.startup(function () {
	console.log('Server started');
});

if(Meteor.users.find().count() === 0) {

	console.log('Create Admin user');

	var userId = Accounts.createUser({
		username: 'admin',
		email: 'admin@skrdv.com',
		password: '1234',
		profile: {
			name: 'Admin'
		}
	});

	Meteor.users.update(userId, {$set: {
		roles: {admin: true},
	}});
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

if(Gates.find().count() === 0) {

	console.log('Adding dummy gates');

	var dummyGates = [
		{
			title: 'Ворота Реализации. Gate of Realizing',
			number: '47',
			center: 'Ajna',
			description: 'Энергия этих ворот приводит куски абстрактного знания из противоположных 64-х ворот в завершённую идею, в моменты вроде “Ага!”. Это прозрение и создание целой концепции или процесса из абстракции, без использования логики. Ранее это были разбросанные куски, но теперь это целое.',
		},
		{
			title: 'Ворота Рационализации. Gate of Rationalizing',
			number: '24',
			center: 'Ajna',
			description: '',
		},
		{
			title: 'Ворота Формулизации. Gate of Formulization',
			number: '4',
			center: 'Ajna',
			description: '',
		},
		{
			title: 'Ворота Идей. Gate of Ideas',
			number: '11',
			center: 'Ajna',
			description: '',
		},
		{
			title: 'Ворота Прозрения. Gate of Insight',
			number: '43',
			center: 'Ajna',
			description: '',
		},
		{
			title: 'Ворота Мнений. Gate of Opinions',
			number: '17',
			center: 'Ajna',
			description: '',
		},
	];

	// we add the dummyPosts to our database
	_.each(dummyGates, function(gate){
		Gates.insert(gate);
	});
}

function adminUser(userId) {
	var adminUser = Meteor.users.findOne({username:"skrdv"});
	return (userId && adminUser && userId === adminUser._id );
}
