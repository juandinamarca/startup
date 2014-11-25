var listTweetsTrend = Backbone.Collection.extend({
	model: tweet,
	url: '',
	parse: function(response) {
    return response.statuses;
	}
	
});

//var listTrend = new listTweetsTrend();
//listTrend.fetch();
//listTweets.fetch({ data: $.param({count: '100'}) });


//PASARLE UNA URL PARA DESPUES HACER UN FETCH DE LOS DATOS DE LA URL
//var AdventureBooks = new listTweetsTrend([], { url: 'http://localhost:3000/search?q=%23TanBionica' })
//AdventureBooks.fetch();
//AdventureBooks.toJSON();}



//URL DINAMICA???
//var Book = Backbone.Model.extend({
//  "url": function() {
//    return '/books/' + this.get("category");
//  }
//});