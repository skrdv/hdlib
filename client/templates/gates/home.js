Template.home.created = function(){
	 console.log('Created Home template');

};

Template.home.rendered = function(){
	 console.log('Rendered Home template');

};

Template.home.destroyed = function(){
	 console.log('Destroyed Home template');
};

Template.home.helpers({
	gatesList: function(){
		 return Gates.find();
	},
	centersList: function(){
		 return Centers.find();
	},
});

Template.home.events({

});
