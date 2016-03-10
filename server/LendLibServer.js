Meteor.startup(function () {
	Meteor.publish("Categories", function() {
		return lists.find({owner:this.userId}, {fields: {Category:1}});
	});
	Meteor.publish("listdetails", function(category_id){
		return lists.find({_id:category_id});
	});
});

function adminUser(userId) {
	var adminUser = Meteor.users.findOne({username:"skrdv"});
	return (userId && adminUser && userId === adminUser._id );
}

lists.allow({
	insert: function(userId, doc){
		return adminUser(userId) || (userId && doc.owner === userId);
	},
	update: function(userId, doc, fields, modifer){
		return adminUser(userId) || (userId && doc.owner === userId);
	},
	remove: function(userId, doc){
		return adminUser(userId) || (userId && doc.owner === userId);
	}
});
