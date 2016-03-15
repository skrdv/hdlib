
Tracker.autorun(function(){
	Meteor.subscribe('lazyload-posts', Session.get('lazyloadLimit'));
});

Meteor.subscribe('pages');

Meteor.subscribe("gates-all");
