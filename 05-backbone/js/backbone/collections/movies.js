 movies = Backbone.Collection.extend({
	model:movie,
	localStorage: new Backbone.LocalStorage("movies"), // Unique name within your app.
});


	
