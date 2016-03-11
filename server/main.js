Meteor.startup(function () {
	Meteor.publish("Categories", function() {
		return lists.find({owner:this.userId}, {fields: {Category:1}});
	});
	Meteor.publish("listdetails", function(category_id){
		return lists.find({_id:category_id});
	});

	console.log('Server started');

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
});

function adminUser(userId) {
	var adminUser = Meteor.users.findOne({username:"skrdv"});
	return (userId && adminUser && userId === adminUser._id );
}

lists.allow({
	insert: function(userId, doc){
		return adminUser(userId) || (userId && doc.owner === userId);
	},
	update: function(userId, doc, fields, modifer){
		return adminUser(userId) || (userId && doc.owner === userId);
	},
	remove: function(userId, doc){
		return adminUser(userId) || (userId && doc.owner === userId);
	}
});
