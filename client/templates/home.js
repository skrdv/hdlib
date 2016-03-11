Template.home.created = function(){
	 console.log('Created home template');

	 this.autorun(function(){
		console.log(Session.get("mySessionExample"));
	 });
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
	sessionExample: function () {
		return Session.get('mySessionExample');
	}
});

Template.home.events({
	"click button.lazyload": function(event, template){
		var currentLimit = Session.get("lazyloadLimit");
		Session.set("lazyloadLimit", currentLimit + 2);
	}
});
