if(Meteor.isClient) {
        Session.setDefault('lazyloadLimit', 2);
}

Router.configure({
        layoutTemplate: 'layout',
        notFoundTemplate: 'notFound',
        loadingTemplate: 'loading',
		waitOn: function() { return Meteor.subscribe('pages'); }
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
            template: 'home'
        });

		this.route('Pages', {
            path: '/pages',
            template: 'pagesList'
        });

		this.route('Page', {
    		path: '/pages/:_id',
			template: 'page',
			// data: function() { return Pages.findOne(this.params._id); }
			waitOn: function() {
					return Meteor.subscribe('pages', this.params.slug);
			},
			data: function() {
					return Pages.findOne({slug: this.params.slug});
			}
  		});

        this.route('Lists', {
                path: '/lists',
                template: 'lists'
        });

		this.route('Posts', {
                path: '/posts',
                template: 'posts',
                subscriptions: function(){
                        return Meteor.subscribe("lazyload-posts", Session.get('lazyloadLimit'));
                }
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

Router.onBeforeAction('loading');
