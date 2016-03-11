/* Lending */
Meteor.publish("Categories", function() {
	return lists.find({owner:this.userId}, {fields: {Category:1}});
});

Meteor.publish("listdetails", function(category_id){
	return lists.find({_id:category_id});
});


/* Posts */
Meteor.publish("all-posts", function(){
	return Posts.find();
});
Meteor.publish("limited-posts", function(){
	return Posts.find({}, {
		limit: 2,
		sort: {timeCreated: -1}
	});
});
Meteor.publish("spec-posts", function(){
	return Posts.find({}, {
		fields: {
			title: 1
		}
	});
});
Meteor.publish("lazyload-posts", function(limit){
	return Posts.find({}, {
		limit: limit,
		fields: {
			text: 0
		},
		sort: {timeCreated: -1}
	});
});
Meteor.publish("single-post", function(slug){
	return Posts.find({slug: slug});
});

/* Posts */
Meteor.publish("Gates", function(){
	return Gates.find();
});
