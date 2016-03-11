Template.posts.created = function(){
	 console.log('Created Posts template');

};

Template.posts.rendered = function(){
	 console.log('Rendered Posts template');

};

Template.posts.destroyed = function(){
	 console.log('Destroyed Posts template');
};

Template.posts.helpers({
	postsList: function(){
		 return Posts.find({}, {timeCreated: -1});
	},
});

Template.posts.events({
	"click button.lazyload": function(event, template){
		var currentLimit = Session.get("lazyloadLimit");
		Session.set("lazyloadLimit", currentLimit + 2);
	}
});
