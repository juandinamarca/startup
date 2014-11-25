var tweetView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		var el = $(this.el);
		var template= _.template($("#stweet").html());
		var html = template(this.model.toJSON());
		el.append(html);
		//});
		
	}

});