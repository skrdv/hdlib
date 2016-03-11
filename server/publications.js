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

Meteor.publish("current-user", function(){
	this.userId;
});

Meteor.publish("userRoles", function(){
	if(this.uiserId) {
		return Meteor.users.find({_id: this.userId}, {fields: {roles: 1}});
	} else {
		this.ready();
	}
});


/* Posts */
Meteor.publish("gates-all", function(){
	return Gates.find();
});

Meteor.publish("gates-center", function(){
	return Gates.find({}, {
		fields: {
			center: 1
		},
	});
});
