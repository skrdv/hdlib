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
	exampleHelper: function(){
		return new Spacebars.SafeString('This text came from a helper with some <b>HTML</b>');
	},
	dataContextHelper: function(){
		return {
			someText: 'This text was et using a helper of the parent template.',
			someNested: {
				text: 'That comes from "someNested.text"'
			}
		}
	},
	create: function(){

	},
	rendered: function(){

	},
	destroyed: function(){

	},
});

Template.home.events({
	"click #foo": function(event, template){

	}
});
