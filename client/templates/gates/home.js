

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
