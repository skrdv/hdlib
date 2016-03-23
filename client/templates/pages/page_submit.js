
Template.pageSubmit.events({
	"submit form": function(e){
		e.preventDefault();

		var page = {
			title: $(e.target).find('[name=title]').val(),
			text: $(e.target).find('[name=text]').val()
		};

		page._id = Pages.insert(page);
		Router.go('Page', page);
	}
});
