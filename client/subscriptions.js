
Tracker.autorun(function(){
	Meteor.subscribe('lazyload-posts', Session.get('lazyloadLimit'));
});

Meteor.subscribe("gates-center");
Meteor.subscribe("gates-all");
