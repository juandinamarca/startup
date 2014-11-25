var listTweets = Backbone.Collection.extend({
	model: tweet,
	url:  'http://localhost:3000/timeline'
});

var listTweets = new listTweets();

listTweets.fetch({async: false});
//listTweets.fetch({ data: $.param({count: '100'}) });

