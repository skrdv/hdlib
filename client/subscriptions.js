//Meteor.subscribe("all-posts");
//Meteor.subscribe("limited-posts");
//Meteor.subscribe("spec-posts");
Session.setDefault('lazyloadLimit', 2);
Tracker.autorun(function(){
	Meteor.subscribe('lazyload-posts', Session.get('lazyloadLimit'));
});


Meteor.subscribe("Gates");
