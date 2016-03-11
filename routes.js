if(Meteor.isClient) {
    Session.setDefault('lazyloadLimit', 2);
}

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',

    onAfterAction: function() {
        var data = Posts.findOne({slug: this.params.slug});

        if(_.isObject(data) && !_.isArray(data))
            document.title = 'HDLib- '+ data.title;
        else
            document.title = 'HDLib - '+ this.route.getName();
    }
});

PostController = RouteController.extend({
    waitOn: function() {
        return Meteor.subscribe('single-post', this.params.slug);
    },
    data: function() {
        return Posts.findOne({slug: this.params.slug});
    }
});

Router.map(function() {

    this.route('Home', {
        path: '/',
        template: 'home',

        subscriptions: function(){
            return Meteor.subscribe("lazyload-posts", Session.get('lazyloadLimit'));
        }
    });

    this.route('About', {
        path: '/about',
        template: 'about'
    });

    this.route('Post', {
        path: '/posts/:slug',
        template: 'post',
		controller: 'PostController',

        waitOn: function() {
            return Meteor.subscribe('single-post', this.params.slug);
        },
        data: function() {
            return Posts.findOne({slug: this.params.slug});
        }
    });

	this.route('Edit Post', {
        path: '/edit-post/:slug',
        template: 'editPost',
        controller: 'PostController'
    });

	this.route('Create Post', {
		path: '/create-post',
        template: 'editPost'
	});

});

// #Users and permissions -> Creating routes for the admin
var requiresLogin = function(){
    if (!Meteor.user() || !Meteor.user().roles || !Meteor.user().roles.admin) {
        this.render('notFound');

    } else {
        this.next();
    }
};

Router.onBeforeAction(requiresLogin, {only: ['Create Post','Edit Post']});
