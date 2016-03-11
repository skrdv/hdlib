if(Meteor.isClient) {
	Session.setDefault("mySessionExample", "Default");

	Tracker.autorun(function(c){
		var example = Session.get("mySessionExample");

		if(!c.firstRun) {
			if(Session.equals("mySessionExample", 'stop')) {
				console.log('We stopped reactive Functions');
				c.stop;
			} else {
				console.log(example);
			}
		}
	});
}
