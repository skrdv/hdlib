Template.home.created = function(){
	 console.log('Created home template');
};

Template.home.rendered = function(){
	 console.log('Rendered home template');
};

Template.home.destroyed = function(){
	 console.log('Destroyed home template');
};

Template.home.helpers({
	postsList: function(){
		 return Posts.find({}, {timeCreated: -1});
	},
});

Template.home.events({
	"click #foo": function(event, template){

	}
});
