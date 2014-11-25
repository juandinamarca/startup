var listTrends = Backbone.Collection.extend({
	model: trend,
	url:  'http://localhost:3000/trends?id=23424747'

});

var listTrends = new listTrends();

listTrends.fetch();
//listTweets.fetch({ data: $.param({count: '100'}) });

//var Tweets = Backbone.Collection.extend({
  // The Twitter Search API returns tweets under "results".
//  parse: function(response) {
//    return response.results;
//  }
// });


/*
var Tweets = Backbone.Collection.extend({
  model : Tweet,
  initialize : function(models, options) {
    this.query = options.query;
  },
  url : function() {
    return "http://search.twitter.com/search.json?q=" + this.query + "&callback=?";
  },
  parse : function(data) {
 
    // note that the original result contains tweets inside of a 'results' array, not at 
    // the root of the response.
    return data.results;
  }
});

/*
var Tweets = Backbone.Collection.extend({
  // The Twitter Search API returns tweets under "results".
  parse: function(response) {
    return response.results;
  }
});
*/
