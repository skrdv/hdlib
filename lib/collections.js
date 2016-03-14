lists = new Meteor.Collection("lists");
Posts = new Mongo.Collection("posts");
Gates = new Mongo.Collection("gates");
Centers = new Mongo.Collection("centers");


// #Security with allow and deny rules -> Restricting database updates
if(Meteor.isServer) {

	Posts.allow({
		insert: function (userId, doc) {
			// The user must be logged in, and the document must be owned by the user
			return userId && doc.owner === userId && Meteor.user().roles.admin;
		},
		update: function (userId, doc, fields, modifier) {
			// User must be an admin
			return Meteor.user().roles.admin;
		},
		// make sure we only get this field from the documents
		fetch: ['owner']
	});

	Posts.deny({
		update: function (userId, docs, fields, modifier) {
			// Can't change owners, timeCreated and slug
			return _.contains(fields, 'owner') || _.contains(fields, 'timeCreated') || _.contains(fields, 'slug');
		}
	});

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


// if(Meteor.isClient) {
//     Meteor.subscribe("userRoles");
// }
// if(Meteor.isClient) {
//     Meteor.subscribe("userRoles");
// }
