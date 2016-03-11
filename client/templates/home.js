Template.home.rendered = function(){
	 console.log('Rendered home template helper');
};


Template.home.helpers({
	postsList: function(){
		 return [
			{
				 title: 'My second entry',
				 description: 'Borem sodum color sit amet...',
				 author: 'Fabian',
				 timeCreated: moment().subtract(3, 'days').unix()
			},
			{
				 title: 'My first entry',
				 description: 'Lorem ipsum dolor sit amet...',
				 author: 'Fabian',
				 timeCreated: moment().subtract(7, 'days').unix()
			},
		];
	},
});

Template.home.events({
	"click #foo": function(event, template){

	}
});
